import HYRequest from './request'
import { BASE_URL1, TIME_OUT1 } from './config'

const hyRequest = new HYRequest({
  baseURL: BASE_URL1,
  timeout: TIME_OUT1,
  interceptors: {
    requestInterceptor: (config) => {
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res.data
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export default hyRequest