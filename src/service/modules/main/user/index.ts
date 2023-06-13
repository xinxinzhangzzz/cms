import hyRequest from '../../../http'

export const getUserListAPI = () =>
  hyRequest.post({
    url: '/users/list',
    data: {
      offset: 0,
      size: 10
      // name: 'coderwhy',
      // cellphone: 4
    }
  })
