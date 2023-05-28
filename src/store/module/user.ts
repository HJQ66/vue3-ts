import { defineStore } from 'pinia'
//导入登录接口
import { login, reqLoginUserInfo,reqLoginOut } from '@/api/user'
import {
  GET_TOKEN,
  SET_TOKEN,
  REMOVE_TOKEN,
  
} from '@/utils/getLocalData'
//引入类型
import type { loginFormData, resLoginData,resUserData } from '@/api/user/type'
import type {userState} from '../type/userType'
//引入路由对象
import { constantRouter } from '@/router/routes'
// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useUserStore = defineStore('user', {
  state: ():userState => {
    return {
      token: GET_TOKEN() || '', //token持久化，因为token存储到pinia中，刷新页面，pinia中的数据就会丢失，所以将token存储到localStorage中持久化存储
      routes: constantRouter, //将路由对象存储到pinia中
      userName:'',
      userAvatar:'',
      buttons:[]
    }
  },
  actions: {
    //用户登录的action
    async userLogin(data: loginFormData) {
      let result: resLoginData = await login(data)
      if (result.code === 200) {
        //如果登录成功，将token存储到state里面
        this.token = result.data
        //并且将token存储到localStorage里面，保证数据存储持久化
        SET_TOKEN(result.data) 
        // this.getUserInfo()
      } else {
        //登录失败返回失败的Promise
        return Promise.reject(new Error(result.data))
      }
    },
    //获取用户信息的action
    async getUserInfo() {
      let result: resUserData = await reqLoginUserInfo()
      console.log(result);
      if (result.code === 200) {
        this.userAvatar = result.data.avatar 
        this.userName= result.data.name
        //存储按钮权限数据
        this.buttons = result.data.buttons
      } else {
        return Promise.reject(new Error())
      }
    },
    //退出登录
    async loginOut() {
      let result = await reqLoginOut()
      console.log(result);
      if(result.code===200){
        this.token = ""
        this.userAvatar = ""
        this.userName = ""
        //清除token
        REMOVE_TOKEN()
      }
    },
  },
  getters: {},
})
