import { defineStore } from "pinia"
import { loginAPI  } from "@/service/modules"
import { local } from "@/utils/cache"
import  { cacheKeys } from "@/type/cacheKeys"
import type { ILogin } from "@/service/type/login"
import type { IState } from "./loginType"

const useLoginStore = defineStore("login", {
	state: (): IState => {
		return {
			id: null ,
			name: "",
			token: local.getCache(cacheKeys.TOKEN)
		}
	},

	getters: {},

	actions: {
		async userLoginAction(account: ILogin) {
			const res = await loginAPI(account)
			this.id = res.id
			this.name = res.name
			local.setCache(cacheKeys.TOKEN, res.token)

		}
	}
})

export default useLoginStore