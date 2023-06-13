import hyRequest from '../../../http'
import type { IUserListResult } from '@/service/type/user'

export const getUserListAPI = () =>
  hyRequest.post<IUserListResult>({
    url: '/users/list',
    data: {
      offset: 0,
      size: 10
      // name: 'coderwhy',
      // cellphone: 4
    }
  })
