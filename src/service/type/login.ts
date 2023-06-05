export interface ILogin {
  name: string
  password: string
}

export interface ILoginResult {
  id: number
  name: string
  token: string
}

export interface IUserInfoResult {
  cellphone: number
  department: Idepartment
  enable: number
  id: number
  name: string
  realname: string
  role: IRole
}

interface Idepartment {
  id: number
  leader: string
  name: string
}

interface IRole {
  id: number
  intro: string
  name: string
}

export interface IUserMenuTreeByRoleIdResult {
  data: IMenuTree
}

export interface IMenuTree {
  children: IMenuChildrenParams
  icon: string
  id: number
  name: string
  sort: number
  type: number
  url: string
}

export interface IMenuChildrenParams {
  id: number
  name: string
  parentId: number
  sort: number
  type: number
  url: string
}
