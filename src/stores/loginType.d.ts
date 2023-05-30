import { IUserInfoResult, IUserMenuTreeByRoleIdResult } from "@/service/type/login"

export interface IState {
	id: number | any
	name: string
	token: string
	userInfo: IUserInfoResult
	userMenusList: IUserMenuTreeByRoleIdResult
}