<template>
  <!-- 点击展开关闭左侧导航栏 -->
  <el-icon class="icon" @click="onFold">
    <!-- 动态切换折叠图标 -->
    <component :is="menuStore.isFold ? 'Expand' : 'Fold'"></component>
  </el-icon>
  <!-- 面包屑 -->
  <el-breadcrumb separator-icon="ArrowRight" class="bread">
    <template v-for="item in $route.matched">
      <el-breadcrumb-item v-if="item.meta.title" :to="item.path">
        {{ item.meta.title }}
      </el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { useMenuStore } from '@/store/module/menu'
import { useRoute } from 'vue-router'
//从pinia中获取菜单是否折叠的状态
const menuStore = useMenuStore()
const $route = useRoute()

//点击折叠图标
const onFold = () => {
  menuStore.isFold = !menuStore.isFold
}
</script>
<script lang="ts">
export default {
  name: 'BreadCrumb',
}
</script>
<style scoped>
.icon {
  cursor: pointer;
  margin: 0 10px;
}
</style>
