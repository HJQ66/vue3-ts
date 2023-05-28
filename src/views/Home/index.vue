<template>
  <div>
    <el-icon :size="20">
      <Edit />
    </el-icon>
    <el-button v-has="'btn.User.update'">按钮权限</el-button>
  </div>
</template>

<script setup lang="ts">
import { Edit } from '@element-plus/icons-vue'
</script>

<style scoped></style>
