<template>
  <el-button size="small" icon="Refresh" @click="onRefresh" circle></el-button>
  <el-button
    size="small"
    icon="FullScreen"
    @click="fullScreen"
    circle
  ></el-button>
  <el-button size="small" icon="Setting" @click="" circle></el-button>
  <img
    :src="userStore.userAvatar"
    style="width: 24px; height: 24px; border-radius: 50%"
    alt=""
  />
  <el-dropdown trigger="click" class="dropdown">
    <span class="el-dropdown-link">
      {{ userStore.userName }}
      <el-icon class="el-icon--right"><arrow-down /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="onLoginOut">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { useMenuStore } from '@/store/module/menu'
import { useUserStore } from '@/store/module/user'
import { useRouter, useRoute } from 'vue-router'
const menuStore = useMenuStore()
const userStore = useUserStore()
const $router = useRouter()
const $route = useRoute()

//点击刷新按钮
const onRefresh = () => {
  menuStore.refresh = !menuStore.refresh
}
//点击全屏按钮的回调
const fullScreen = () => {
  //判断当前屏幕是否为全屏
  let isFull = document.fullscreenElement
  if (!isFull) {
    //如果不是全屏设置为全屏
    document.documentElement.requestFullscreen()
  } else {
    //退出全屏
    document.exitFullscreen()
  }
}

//退出登录
const  onLoginOut = async () => {
  //调用store里面的方法退出登录
  await userStore.loginOut()

  //路由跳转
  $router.push({
    path: '/login',
    query: {
      redirect: $route.path,
    },
  })
}
</script>
<script lang="ts">
export default {
  name: 'RightTabar',
}
</script>

<style scoped>
img {
  margin: 0 10px;
}
.dropdown {
  margin-right: 10px;
  cursor: pointer;
}
</style>
