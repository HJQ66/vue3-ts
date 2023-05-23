<!-- 自定义全局svg组件 -->
<template>
  <svg style="{width,height}">
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts">
defineProps({
  //设置svg图标的前缀 默认值是#icon-
  prefix: {
    type: String,
    default: '#icon-',
  },
  //设置svg的名称
  name: {
    type: String,
    default: '',
  },
  //设置svg的颜色
  color: {
    type: String,
    default: '',
  },
  //svg的宽度
  width: {
    type: String,
    default: '20px',
  },
  //svg的高度
  height: {
    type: String,
    default: '20px',
  },
})
</script>

<style lang="scss" scoped></style>
