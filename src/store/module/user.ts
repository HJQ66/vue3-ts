import { defineStore } from 'pinia'
//导入登录接口
import { login, reqLoginUserInfo } from '@/api/user'
import {
  GET_TOKEN,
  SET_TOKEN,
  SET_USERINFO,
  GET_USERINFO,
  REMOVE_TOKEN,
  REMOVE_USERINFO,
} from '@/utils/getLocalData'
//引入类型
import type { reqLoginData, resLoginData } from '@/api/user/type'
//引入路由对象
import { constantRouter } from '@/router/routes'
// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useUserStore = defineStore('user', {
  state: () => {
    return {
      token: GET_TOKEN() || '', //token持久化，因为token存储到pinia中，刷新页面，pinia中的数据就会丢失，所以将token存储到localStorage中持久化存储
      routes: constantRouter, //将路由对象存储到pinia中
      userInfo: GET_USERINFO() || {},
    }
  },
  actions: {
    //用户登录的action
    async userLogin(data: reqLoginData) {
      let result: resLoginData = await login(data)
      if (result.code === 200) {
        //如果登录成功，将token存储到state里面
        this.token = result.data.token as string
        //并且将token存储到localStorage里面，保证数据存储持久化
        SET_TOKEN(result.data.token as string) //result.data.token as string 类型断言
      } else {
        //登录失败返回失败的Promise
        return Promise.reject(new Error(result.data.message as string))
      }
    },
    //获取用户信息的action
    async getUserInfo() {
      let result = await reqLoginUserInfo()
      if (result.code === 200) {
        let userAvatar = result.data.checkUser.avatar as string //类型断言
        let username = result.data.checkUser.username as string
        //整合用户信息
        const userInfo: any = { userAvatar, username }
        this.userInfo = userInfo
        //存储到localStorage数据持久化
        SET_USERINFO({ userAvatar, username })
      } else {
        return Promise.reject(new Error())
      }
    },
    //退出登录
    loginOut() {
      //清除token
      REMOVE_TOKEN()
      //清除用户信息
      REMOVE_USERINFO()
    },
  },
  getters: {},
})
