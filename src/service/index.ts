import YHRequest from './request'
import { TIME_OUT, BASE_URL } from './request/config'
const yhRequest = new YHRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 拦截请求并且加入请求头信息
      // const token = ''
      // if (token) {
      //   config.headers.Authorization = `Bearer ${token}`
      // }
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

// export const yhRequest2 = new YHRequest()
// 导出第二个
export default yhRequest
