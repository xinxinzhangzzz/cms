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

			this.getUserMenuTreeAction()
		},

		async getUserMenuTreeAction() {
			const res = await getMenuTreeByRoleId(this.userInfo.role.id)
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