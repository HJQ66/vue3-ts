<template>
  <div class="layout_container">
    <!-- 左侧导航栏 -->
    <div class="layout_slider" :class="menuStore.isFold ? 'isFold' : ''">
      <Logo />
      <el-scrollbar class="scrollbar">
        <el-menu
          class="el-menu-vertical-demo"
          background-color="#001529"
          text-color="#fff"
          :collapse="menuStore.isFold"
        >
          <Menu :constantRouter="userStore.routes" />
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 上方导航栏 -->
    <div class="layout_tabbar" :class="menuStore.isFold ? 'isFold' : ''">
      <div class="left_tabbar">
        <BreadCrumb />
      </div>
      <div class="right_tabbar">
        <RightTabbar />
      </div>
    </div>
    <!-- 页面内容区域 -->
    <div class="layout_main" :class="menuStore.isFold ? 'isFold' : ''">
      <Main />
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './Logo/index.vue'
import Menu from './Menu/index.vue'
import BreadCrumb from './Tabbar/BreadCrumb/index.vue'
import RightTabbar from './Tabbar/RightTabbar/index.vue'
import Main from './Main/index.vue'
//从pinia中获取路由表，动态生成菜单栏
import { useUserStore } from '@/store/module/user'
import { useMenuStore } from '@/store/module/menu'
const userStore = useUserStore()
const menuStore = useMenuStore()
</script>
<script lang="ts">
export default {
  name: 'Layout',
}
</script>

<style lang="scss" scoped>
.layout_container {
  width: 100%;
  height: 100vh;
  .layout_slider {
    width: $base_menu_width;
    height: 100vh;
    background-color: $base_menu_color;
    transition: all 0.3s;
    &.isFold {
      width: $base_menu_min_width;
    }

    .scrollbar {
      height: calc(100% - $base_menu_title_height);

      .el-menu {
        border-right: none;
      }
    }
  }
  .layout_tabbar {
    position: absolute;
    left: $base_menu_width;
    top: 0;
    height: $base_tabbar_height;
    width: calc(100% - $base_menu_width);
    display: flex;
    justify-content: space-between;
    transition: all 0.3s;
    &.isFold {
      width: calc(100% - $base_menu_min_width);
      left: $base_menu_min_width;
    }
    .left_tabbar {
      display: flex;
      align-items: center;
    }
    .right_tabbar {
      display: flex;
      align-items: center;
    }
    .bread {
      color: black;
    }
  }
  .layout_main {
    width: calc(100% - $base_menu_width);
    height: calc(100% - $base_tabbar_height);
    background-color: greenyellow;
    position: absolute;
    left: $base_menu_width;
    top: $base_tabbar_height;
    overflow: auto;
    transition: all 0.3s;
    &.isFold {
      width: calc(100% - $base_menu_min_width);
      left: $base_menu_min_width;
    }
  }
}
</style>
