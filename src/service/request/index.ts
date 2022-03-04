import axios, { AxiosInstance } from 'axios'
import type { YHRequestConfig, YHRequestInterceptors } from './type'
import { ElLoading } from 'element-plus'
// import ILoadingInstace  from 'element-plus'
const isLoading = true
class YHRequest {
  // 每个调用者可以创建不同的实例
  instance: AxiosInstance

  interceptors?: YHRequestInterceptors
  showLoading: boolean
  loading?: any
  constructor(config: YHRequestConfig) {
    // 创建不同的实例
    this.instance = axios.create(config)
    // 保存基本信息
    this.showLoading = config.showLoading ?? isLoading
    this.interceptors = config.interceptors
    // 开始使用拦截器
    // 从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    // 添加所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            background: 'rgba(0,0,0,0.5)',
            text: '正在请求数据'
          })
        }

        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        if (this.showLoading === true) {
          this.loading.close()
        }
        const data = res.data
        if (data.returnCode === '1001') {
          console.log('请求失败')
        } else {
          return data
        }
      },
      (err) => {
        this.loading.close()
        if (err.response.status === 404) {
          console.log('404的错误')
        }
        return err
      }
    )
  }
  request<T>(config: YHRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 单个请求对请求config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      // 判断showloading的处理
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          this.showLoading = isLoading
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = isLoading
          reject(err)
          return err
        })
    })
  }
  get<T>(config: YHRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: YHRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T>(config: YHRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T>(config: YHRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default YHRequest
