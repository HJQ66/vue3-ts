//获取token
export const GET_TOKEN = () => {
  return localStorage.getItem('TOKEN')
}
//存储token
export const SET_TOKEN = (token: string) => {
  localStorage.setItem('TOKEN', token)
}
