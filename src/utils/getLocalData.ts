//获取token
export const GET_TOKEN = () => {
  return localStorage.getItem('TOKEN')
}
//存储token
export const SET_TOKEN = (token: string) => {
  localStorage.setItem('TOKEN', token)
}
//清除token
export const REMOVE_TOKEN = () => {
  localStorage.removeItem('TOKEN')
}

//存储用户信息
interface userInfoType {
  userAvatar: string
  username: string
}
export const SET_USERINFO = (userInfo: userInfoType) => {
  localStorage.setItem('USERINFO', JSON.stringify(userInfo))
}
//获取用户信息
export const GET_USERINFO = () => {
  return JSON.parse(localStorage.getItem('USERINFO') as string)
}
//清除用户信息
export const REMOVE_USERINFO = () => {
  localStorage.removeItem('USERINFO')
}
