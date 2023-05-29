import request from '@/utils/request'
import { loginFormData, resLoginData, resUserData } from './type'
//利用枚举 统一管理API接口
enum API {
  LOGIN_URL = '/admin/acl/index/login',
  USERINFO_URL = '/admin/acl/index/info',
  LOGIN_OUT = '/admin/acl/index/logout',
}

//登录接口
export const login = (data: loginFormData) => {
  return request.post<any, resLoginData>(API.LOGIN_URL, data)
}

//获取用户信息接口
export const reqLoginUserInfo = () => {
  return request.get<any, resUserData>(API.USERINFO_URL)
}

//退出登录
export const reqLoginOut = () => {
  return request.post<any, any>(API.LOGIN_OUT)
}
