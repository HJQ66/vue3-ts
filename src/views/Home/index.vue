<template>
  <div>
    <el-card>
      <div class="card_container">
        <img :src="userStore.userAvatar" alt="" />
        <div class="title">
          <h1>Hi，{{ time() }}好{{ userStore.userName }}</h1>
          <p>{{ setting.title }}</p>
        </div>
      </div>
    </el-card>
    <SvgIcon class="wel_icon" name="welcome"></SvgIcon>
  </div>
</template>

<script setup lang="ts">
import setting from '../../../setting'
import { useUserStore } from '@/store/module/user'
import time from '@/utils/time'
const userStore = useUserStore()
</script>
<script lang="ts">
export default {
  name: 'Home',
}
</script>

<style scoped lang="scss">
.card_container {
  display: flex;
  align-items: center;
  height: 100%;
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .title {
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 50px;
    h1 {
      font-weight: bold;
      font-size: 25px;
    }
  }
}
.wel_icon {
  width: 100%;
  height: 100%;
  margin: 100px auto;
}
</style>
