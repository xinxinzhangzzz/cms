export interface IUserListType {
  cellphone: number
  createAt: string
  departmentId: number
  enable: number
  id: number
  name: string
  realname: string
  roleId: number
  updateAt: string
}

export interface IUserState {
  userList: IUserListType[]
  userListTotalCount: number
}
