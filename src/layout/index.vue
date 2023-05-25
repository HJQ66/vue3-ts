<template>
  <div class="layout_container">
    <!-- 左侧导航栏 -->
    <div class="layout_slider">
      <Logo />
      <el-scrollbar class="scrollbar">
        <el-menu
          class="el-menu-vertical-demo menu"
          @open="handleOpen"
          @close="handleClose"
          background-color="$base_menu_color"
          text-color="#fff"
          default-active=""
        >
          <Menu :constantRouter="userStore.routes" />
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 上方导航栏 -->
    <div class="layout_tabbar">
      <div class="left_tabbar">
        <!-- 点击展开关闭左侧导航栏 -->
        <el-icon class="icon">
          <Expand />
        </el-icon>
        <!-- 面包屑 -->
        <el-breadcrumb separator-icon="ArrowRight" class="bread">
          <el-breadcrumb-item>商品管理</el-breadcrumb-item>
          <el-breadcrumb-item>菜单管理</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="right_tabbar">
        <el-button size="small" icon="Refresh" @click="" circle></el-button>
        <el-button size="small" icon="FullScreen" @click="" circle></el-button>
        <img
          src="../../public/logo.png"
          style="width: 24px; height: 24px"
          alt=""
        />
      </div>
    </div>
    <!-- 页面内容区域 -->
    <div class="layout_main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './Logo/index.vue'
import Menu from './Menu/index.vue'
import { useRouter } from 'vue-router'
//从pinia中获取路由表，动态生成菜单栏
import { useUserStore } from '@/store/module/user'
const userStore = useUserStore()

const $router = useRouter()

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
  $router.push(key)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.layout_container {
  width: 100%;
  height: 100vh;
  // background-color: red;
  .layout_slider {
    width: $base_menu_width;
    height: 100vh;
    background-color: $base_menu_color;

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
    .left_tabbar {
      display: flex;
      align-items: center;
    }
    .right_tabbar {
      display: flex;
      align-items: center;
    }
    .icon {
      margin: 0 10px;
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
  }
}
</style>
