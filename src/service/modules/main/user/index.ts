import hyRequest from '../../../http'
import type { IUserListResult } from '@/service/type/user'

export const getUserListAPI = (queryParams: any) =>
  hyRequest.post<IUserListResult>({
    url: '/users/list',
    data: queryParams
  })
