<template>
  <template v-for="item in constantRouter" :key="item.path">
    <!-- 当没有子路由的情况下 , 此时就不需要折叠菜单 -->
    <template v-if="!item.children">
      <el-menu-item
        :index="item.path"
        v-if="!item.meta.hidden"
        @click="goRoute"
      >
        <!-- 菜单栏前面的图标 -->
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </el-menu-item>
    </template>
    <!-- 当没有子路由只有一个的情况下 , 此时也不需要折叠菜单 -->
    <template v-if="item.children && item.children.length <= 1">
      <el-menu-item
        :index="item.children[0].path"
        v-if="!item.children[0].meta.hidden"
        @click="goRoute"
      >
        <el-icon>
          <component :is="item.children[0].meta.icon"></component>
        </el-icon>
        <span>{{ item.children[0].meta.title }}</span>
      </el-menu-item>
    </template>
    <!-- 当有子路由的情况下，此时需要折叠菜单 -->
    <template v-if="item.children && item.children.length > 1">
      <el-sub-menu :index="item.path" v-if="!item.meta.hidden">
        <template #title>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <Menu :constantRouter="item.children" />
      </el-sub-menu>
    </template>
  </template>
</template>
<!-- 使用递归组件，组件必须要有name -->
<script lang="ts">
export default {
  name: 'Menu',
}
</script>
<script setup lang="ts">
import { useRouter } from 'vue-router'
defineProps(['constantRouter'])

const $router = useRouter()
//点击进行路由跳转
const goRoute = (pathObj: any) => {
  $router.push(pathObj.index)
}
</script>

<style lang="scss" scoped></style>
