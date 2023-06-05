<template>
  <div class="title">
    <div class="t_left">
      <div class="left_btn" @click="goHome">首页</div>
    </div>
    <div class="t_center">
      <span class="lbl_title">智慧旅游可视化大数据展示平台</span>
    </div>
    <div class="t_right">
      <div class="right_btn">统计报告</div>
      <span class="time">当前时间：{{ time }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import dayjs from 'dayjs'
let $route = useRouter()
let time = ref()

onMounted(() => {
  time.value = dayjs().format('YYYY年MM月DD日 HH:mm:ss')
})
function goHome() {
  $route.push('/')
}
</script>
<script lang="ts">
export default {
  name: 'Title',
}
</script>

<style scoped lang="scss">
.title {
  height: 40px;
  width: 100%;
  display: flex;
  .t_left {
    flex: 1.5;
    background: url(../../images/dataScreen-header-left-bg.png) no-repeat 100%
      100% / cover;
    height: 40px;
    .left_btn {
      cursor: pointer;
      float: right;
      text-align: center;
      line-height: 40px;
      width: 135px;
      height: 42px;
      color: #29fcff;
      font-size: 16px;
      background: url(../../images/dataScreen-header-btn-bg-l.png) no-repeat
        100% 100% / cover;
    }
  }
  .t_center {
    flex: 2;
    height: 80px;
    background: url(../../images/dataScreen-header-center-bg.png) no-repeat left
      top/100% 100%;
    text-align: center;
    .lbl_title {
      font-size: 25px;
      color: #29fcff;
      line-height: 75px;
      letter-spacing: 0.2em;
    }
  }
  .t_right {
    flex: 1.5;
    background: url(../../images/dataScreen-header-right-bg.png) no-repeat 100%
      100% / cover;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .right_btn {
      text-align: center;
      line-height: 40px;
      width: 135px;
      height: 42px;
      color: #29fcff;
      font-size: 16px;
      background: url(../../images/dataScreen-header-btn-bg-r.png) no-repeat
        100% 100% / cover;
    }
    .time {
      line-height: 40px;
      color: #29fcff;
      font-size: 16px;
      margin-right: 20px;
    }
  }
}
</style>
