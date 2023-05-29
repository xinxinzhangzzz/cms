import hyRequest from "../../http";
import type { ILogin, ILoginResult } from "../../type/login"

export const loginAPI = (account: ILogin) => hyRequest.post<ILoginResult>({
	url: "/login",
	data: account
})