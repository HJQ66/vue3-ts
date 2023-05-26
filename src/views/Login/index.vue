<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :offset="0"></el-col>
      <el-col :span="12" :offset="0">
        <el-form
          ref="loginFormRef"
          class="login_form"
          :model="loginForm"
          :rules="rules"
        >
          <h1>Hello</h1>
          <h2>欢迎来到后台管理</h2>
          <el-form-item prop="username">
            <el-input
              v-model="loginForm.username"
              :prefix-icon="User"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <!-- :prefix-icon 自定义前缀图标 -->
            <!-- show-password 是否显示切换密码图标 -->
            <el-input
              v-model="loginForm.password"
              type="password"
              :prefix-icon="Lock"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <!-- loading 是否为加载中状态 -->
            <el-button
              class="login_btn"
              type="primary"
              @click="login(loginFormRef)"
              :loading="isLoading"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
//引入用户相关的小仓库
import { useUserStore } from '@/store/module/user'
import { useRouter, useRoute } from 'vue-router'

//导入获取时间函数
import getTime from '@/utils/time'

let userStore = useUserStore()
//获取路由器
const $router = useRouter()
const $route = useRoute()

//登录相关信息表单
const loginForm = reactive({ username: '', password: '' })
//是否加载
let isLoading = ref(false)

const rules = reactive({
  username: {
    required: true,
    min: 5,
    max: 10,
    message: '输入的用户名在5-10位！',
    trigger: 'change',
  },
  password: {
    required: true,
    min: 6,
    max: 10,
    message: '输入的密码在6-10位！',
    trigger: 'change',
  },
})
const loginFormRef = ref()
//登录按钮
const login = (loginFormRef: any) => {
  if (!loginFormRef) return
  loginFormRef.validate(async (valid: boolean) => {
    if (valid) {
      //开启登录按钮加载
      isLoading.value = true
      try {
        //返回的是一个promise
        await userStore.userLogin(loginForm)
        //调用获取用户信息接口
        await userStore.getUserInfo()
        //登录成功跳转到首页  (当前路由有参数，就跳转到该参数路由，没有参数就跳转到首页)
        const { redirect } = $route.query
        $router.push(`${redirect}` || '/')

        // 登录成功提示框
        ElNotification({
          type: 'success',
          title: `Hi，${getTime()}好`,
          message: '欢迎回来',
        })
        //结束登录按钮加载
        isLoading.value = false
      } catch (error) {
        //登录失败提示框
        ElNotification({
          type: 'error',
          message: error,
        })
        //结束登录按钮加载
        isLoading.value = false
      }
    }
  })
}
</script>

<style scoped lang="scss">
.login_container {
  width: 100vw;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat 100% 100% / cover;
  .login_form {
    position: relative;
    top: 30vh;
    width: 70%;
    background: url('@/assets/images/login_form.png');
    padding: 20px;
    box-sizing: border-box;
    h1 {
      color: white;
      font-size: 40px;
    }
    h2 {
      color: white;
      font-size: 20px;
      margin: 20px 0;
    }
    .login_btn {
      width: 100%;
    }
  }
}
</style>
