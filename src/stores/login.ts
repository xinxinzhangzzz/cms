import { defineStore } from "pinia"
import { loginAPI  } from "@/service/modules"
import type { ILogin } from "@/service/type/login"
import type { IState } from "./loginType"

const useLoginStore = defineStore("login", {
	state: (): IState => {
		return {
			id: null ,
			name: "",
			token: ""
		}
	},

	getters: {},

	actions: {
		async userLoginAction(account: ILogin) {
			const res = await loginAPI(account)
			this.id = res.id
			this.name = res.name
			this.token = res.token
		}
	}
})

export default useLoginStore