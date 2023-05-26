//配置axios
import axios from 'axios'
import { GET_TOKEN } from './getLocalData'

//创建axios服务对象
const request = axios.create({
  // import.meta.env.VITE_APP_BASE_API -- 读取环境变量
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000, //设置请求超时时间
})

//设置请求拦截器
request.interceptors.request.use((config) => {
  //需要返回配置对象
  //请求拦截器中给请求头携带token,每次请求携带
  config.headers.token = GET_TOKEN()
  return config
})

//设置响应拦截器
request.interceptors.response.use(
  (response) => {
    // response  服务器返回的参数
    //成功的回调 返回服务器携带的参数，一般在response.data里面
    return response.data
  },
  (error) => {
    let message = ''
    //获取请求状态码
    const status = error.response.status
    switch (status) {
      case 401:
        message = 'token过期'
        break
      case 403:
        message = '无权访问'
        break
      case 404:
        message = '你访问的页面不存在'
        break
      case 500:
        message = '服务器内部错误'
        break
      default:
        message = '网络出现问题'
    }
    //返回失败的回调
    return Promise.reject(error)
  },
)

export default request
