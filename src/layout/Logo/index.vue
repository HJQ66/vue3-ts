<template>
  <div class="logo_container" v-if="titleInfo.isShow">
    <img :src="titleInfo.logo" alt="" />
    <p>{{ titleInfo.title }}</p>
  </div>
</template>

<script setup lang="ts">
import titleInfo from '../../../setting'
</script>

<style scoped lang="scss">
.logo_container {
  height: $base_menu_title_height;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 15px;
  box-sizing: border-box;
  img {
    width: $base_logo_width;
    height: $base_logo_height;
    border-radius: 50%;
  }
  p {
    color: white;
    font-weight: bold;
    font-size: 16px;
    margin-left: 5px;
  }
}
</style>
