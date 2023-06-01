import { defineStore } from "pinia"
import router from "@/router"
import { loginAPI, getUserInfoByIdAPI, getMenuTreeByRoleId } from "@/service/modules"
import { local } from "@/utils/cache"
import  { cacheKeys } from "@/type/cacheKeys"
import type { ILogin } from "@/service/type/login"
import type { IState } from "./loginType"
import { message } from "ant-design-vue" 
import type { RouteRecordRaw } from "vue-router"

const USER_NAME = "USER_NAME"
const PASS_WORD = "PASS_WORD"

const useLoginStore = defineStore("login", {
	state: (): IState => {
		return {
			id: null ,
			name: "",
			token: local.getCache(cacheKeys.TOKEN) ?? '',
			userInfo: local.getCache(cacheKeys.USERINFO) ?? '',
			userMenusList: local.getCache(cacheKeys.USER_ROLE_MENU_LIST) ?? '' 
		}
	},

	getters: {},

	actions: {
		async userLoginAction(account: ILogin) {
			const res = await loginAPI(account)
			this.id = res.id
			this.name = res.name
			local.setCache(cacheKeys.TOKEN, res.token)

			const isRemmberPwd = local.getCache("isRemmberPwd")
			if(isRemmberPwd) {
				local.setCache(USER_NAME, account.name)
				local.setCache(PASS_WORD, account.password)
			}else {
				local.removeCache(USER_NAME)
				local.removeCache(PASS_WORD)
			}

			await this.getUserInfoAction()

			// 1.动态获取所有的路由对象,放到数组中
			// 路由对象都在独立的文件中
			// 从文件中将所有路由对象先读取到数组中
			const localRoutes: RouteRecordRaw[] = []

			// 1.1 读取router/main文件夹下中所有的ts文件
			const files: Record<string, any> = import.meta.glob("@/router/main/**/*.ts", {
				eager: true
			})

			// 1.2 将加载到的路由路径放到localRoutes
			for(const key in files) {
				const menusPath = files[key]
				localRoutes.push(menusPath.default)
			}

			for(const menus of this.userMenusList) {
				for(const subMenu of menus.children) {
					const route: any = localRoutes.find(item => item.path === subMenu.url)
					router.addRoute("main", route)
				}
			}

			// 2. 根据返回的菜单去匹配并确定要添加的路由表
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

			await this.getUserMenuTreeAction()
		},

		async getUserMenuTreeAction() {
			const res = await getMenuTreeByRoleId(this.userInfo?.role.id)
			local.setCache(cacheKeys.USER_ROLE_MENU_LIST, res)
			this.userMenusList = local.getCache(cacheKeys.USER_ROLE_MENU_LIST)
		},

		logout() {
		 local.removeCache(cacheKeys.TOKEN)
		 local.removeCache(cacheKeys.USERINFO)
		 local.removeCache(cacheKeys.USER_ROLE_MENU_LIST)
			router.replace("/login")
			message.success({
				content: "已成功退出登录!"
			})
		}
	}
})

export default useLoginStore