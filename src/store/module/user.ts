import { defineStore } from 'pinia'
//导入登录接口
import { login } from '@/api/user'
import { GET_TOKEN, SET_TOKEN } from '@/utils/getLocalData'
//引入类型
import type { reqLoginData, resLoginData } from '@/api/user/type'
//引入路由对象
import { constantRouter } from '@/router/routes'
// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useUserStore = defineStore('user', {
  state: () => {
    return {
      token: GET_TOKEN(),
      routes: constantRouter, //将路由对象存储到pinia中
    }
  },
  actions: {
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
  },
  getters: {},
})
