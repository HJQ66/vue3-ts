// 登录接口需要携带的参数，ts类型
export interface loginFormData {
  username: String
  password: String
}

//定义所有接口都需要返回的数据类型
export interface responseData {
  code: number
  message: string
  ok: boolean
}

//定义登录接口返回的数据
export interface resLoginData extends responseData {
  data: string
}
//定义获取用户信息接口返回的数据
export interface resUserData extends responseData {
  data: {
    routes: string[]
    buttons: string[]
    roles: string[]
    name: string
    avatar: string
  }
}
