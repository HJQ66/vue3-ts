<template>
  <!-- 路由组件出口位置 -->
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" v-if="flag" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import { useMenuStore } from '@/store/module/menu'
const menuStore = useMenuStore()
const flag = ref(true)
watch(
  () => menuStore.refresh,
  () => {
    //点击刷新按钮，组件销毁
    flag.value = false
    //dom更新完成后再执行里面的函数
    nextTick(() => {
      flag.value = true
    })
  },
)
</script>
<script lang="ts">
export default {
  name: 'Main',
}
</script>

<style scoped lang="scss">
.fade-enter-from {
  opacity: 0;
  transform: scale(0deg);
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  opacity: 1;
  transform: scale(360deg);
}
</style>
