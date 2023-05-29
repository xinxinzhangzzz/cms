import hyRequest from "../../http";
import type { ILogin, ILoginResult, IUserInfoResult, IUserMenuTreeByRoleIdResult } from "../../type/login"

export const loginAPI = (account: ILogin) => hyRequest.post<ILoginResult>({
	url: "/login",
	data: account
})

export const getUserInfoByIdAPI = (id: number) => hyRequest.get<IUserInfoResult>({
	url: `/users/${id}`
})

export const getMenuTreeByRoleId = (roleId: number) => hyRequest.get<IUserMenuTreeByRoleIdResult>({
	url: `/role/${roleId}/menu`
})