<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { useSettingStore } from './store/module/setting'
import useTitle from '@/hooks/useTitle'
import { onMounted } from 'vue'
const settingStore = useSettingStore()
onMounted(() => {
  //主题颜色持久化
  settingStore.setTheamColor(settingStore.theamColor)
  //暗黑模式持久化
  settingStore.setIsDark(Boolean(settingStore.isDark))
})
//自定义hooks-- 监听路由变化改变标题
useTitle()
</script>

<style scoped lang="scss"></style>
