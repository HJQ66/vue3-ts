// 登录接口需要携带的参数，ts类型
export interface reqLoginData {
  username: String
  password: String
}

// 登录接口返回的数据类型
interface dataType {
  token?: String
  message?: String
}
export interface resLoginData {
  code: number
  data: dataType
}

//获取用户信息返回的数据类型
interface userInfo {
  userId: Number
  avatar: String
  username: String
  password: String
  desc: String
  roles: String[]
  buttons: String[]
  routes: String[]
  token: String
}
interface userObj {
  checkUser: userInfo
}
export interface resUserInfoData {
  code: Number
  data: userObj
}
