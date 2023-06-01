<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { useSettingStore } from './store/module/setting'
import { onMounted } from 'vue'
const settingStore = useSettingStore()
onMounted(() => {
  //主题颜色持久化
  settingStore.setTheamColor(settingStore.theamColor)
  //暗黑模式持久化
  settingStore.setIsDark(Boolean(settingStore.isDark))
})
</script>

<style scoped lang="scss"></style>
