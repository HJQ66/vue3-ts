<template>
  <el-button size="small" icon="Refresh" @click="onRefresh" circle></el-button>
  <el-button
    size="small"
    icon="FullScreen"
    @click="fullScreen"
    circle
  ></el-button>
  <el-button size="small" icon="Setting" @click="onDrawer" circle></el-button>
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
  <!-- 点击设置按钮 抽屉 -->
  <el-drawer v-model="drawer" title="主题设置" :with-header="true" size="300">
    <el-form>
      <el-form-item label="主题色设置:">
        <el-color-picker
          v-model="settingStore.theamColor"
          @change="setThemeColor"
        />
      </el-form-item>
      <el-form-item label="暗黑模式:">
        <el-switch
          v-model="settingStore.isDark"
          class="mt-2"
          style="margin-left: 24px"
          inline-prompt
          active-icon="Moon"
          inactive-icon="Sunny"
          @change="changeIsDark"
        />
      </el-form-item>
    </el-form>
  </el-drawer>
</template>

<script setup lang="ts">
import { useMenuStore } from '@/store/module/menu'
import { useUserStore } from '@/store/module/user'
import { useSettingStore } from '@/store/module/setting'
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'
const menuStore = useMenuStore()
const userStore = useUserStore()
const settingStore = useSettingStore()
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
const onLoginOut = async () => {
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

//控制抽屉显示与隐藏
const drawer = ref(false)
const onDrawer = () => {
  drawer.value = !drawer.value
}

//像这种主题颜色的配置，暗黑模式的开启官方文档都有说明
//主题色
//主题颜色设置
const setThemeColor = (val: string) => {
  settingStore.setTheamColor(val)
}
//是否开启暗黑模式
const changeIsDark = (val: boolean) => {
  settingStore.setIsDark(val)
}
</script>
<script lang="ts">
export default {
  name: 'RightTabar',
}
</script>

<style scoped lang="scss">
img {
  margin: 0 10px;
}
.dropdown {
  margin-right: 10px;
  cursor: pointer;
}
</style>
