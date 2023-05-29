import { defineStore } from "pinia"
import router from "@/router"
import { loginAPI, getUserInfoByIdAPI, getMenuTreeByRoleId } from "@/service/modules"
import { local } from "@/utils/cache"
import  { cacheKeys } from "@/type/cacheKeys"
import type { ILogin } from "@/service/type/login"
import type { IState } from "./loginType"
import { message } from "ant-design-vue" 


const useLoginStore = defineStore("login", {
	state: (): IState => {
		return {
			id: null ,
			name: "",
			token: local.getCache(cacheKeys.TOKEN),
			userInfo: local.getCache(cacheKeys.USERINFO)
		}
	},

	getters: {},

	actions: {
		async userLoginAction(account: ILogin) {
			const res = await loginAPI(account)
			this.id = res.id
			this.name = res.name
			local.setCache(cacheKeys.TOKEN, res.token)

			await this.getUserInfoAction()

			router.replace("/main")
		},

		async getUserInfoAction() {
			const res = await getUserInfoByIdAPI(this.id)
			local.setCache(cacheKeys.USERINFO, res)

			// bug: 经过测试,手动退出登录后,会发现有时state中的userInfo为undefined
			// 原因: 在37行将接口返回的数据保存到了本地,但是state中数据根本更新不到,当前获取不到数据,所以为空
			// 解决: 添加41,42行,将用户信息保存到本地时,同时获取一下本地的用户信息,并更新state,完美解决
			const userInfo = local.getCache(cacheKeys.USERINFO)
			this.userInfo = userInfo

			this.getUserMenuTreeAction()
		},

		async getUserMenuTreeAction() {
			console.log(this.userInfo)
			const res = await getMenuTreeByRoleId(this.userInfo?.role.id)
			local.setCache(cacheKeys.USER_ROLE_MENU_LIST, res)
		},

		logout() {
		 local.clearCache()
			router.replace("/login")
			message.success({
				content: "已成功退出登录!"
			})
		}
	}
})

export default useLoginStore