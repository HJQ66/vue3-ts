import request from '@/utils/request'
import { reqLoginData, resLoginData } from './type'
//利用枚举 统一管理API接口
enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
}

//登录接口
export const login = (data: reqLoginData) => {
  return request.post<resLoginData>(API.LOGIN_URL, data)
}

//获取用户信息接口
export const reqLoginUserInfo = () => {
  return request.get(API.USERINFO_URL)
}
