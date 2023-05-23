<script setup lang="ts">
import { onMounted } from 'vue'
// 导入axios
import { login } from '@/api/user'

onMounted(() => {
  // console.log(import.meta.env.VITE_APP_BASE_API)
  login({ username: 'admin', password: '111111' }).then((res) => {
    console.log(res)
  })
})
</script>

<template>
  <div>
    <h1>我是app组件</h1>
    <ul>
      <li>1</li>
      <li>1</li>
      <li>3</li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
h1 {
  color: $theam;
}
</style>
