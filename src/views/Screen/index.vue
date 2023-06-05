<template>
  <div class="container">
    <div class="inner_container" ref="inner_container">
      <Title />
      <div class="content">
        <div class="left">
          <Tourist class="tourist" />
          <Sex class="sex" />
          <Age class="age" />
        </div>
        <div class="center">123</div>
        <div class="right">123123</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Title from './components/Title/index.vue'
import Tourist from './components/Tourist/index.vue'
import Age from './components/Age/index.vue'
import Sex from './components/Sex/index.vue'
//获取数据大屏dom元素
let inner_container = ref()

//设备稿以1920*1080为例 计算缩放的比例
function getScale(w = 1920, h = 1080) {
  let ww = window.innerWidth / w
  let hh = window.innerHeight / h
  return hh < ww ? hh : ww
}

onMounted(() => {
  //控制数据大屏放大和缩小
  inner_container.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`
})
//当屏幕变化的时候
window.onresize = () => {
  inner_container.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`
}
</script>

<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  background: url(./images/bg.png) no-repeat 100% 100% / cover;
  .inner_container {
    position: fixed;
    left: 50%;
    top: 50%;
    width: 1920px;
    height: 1080px;
    transform: translate(-50%, -50%);
    //以左上角为中心点缩放
    transform-origin: left top;
    .content {
      display: flex;

      .left {
        flex: 1;
        height: 1040px;
        display: flex;
        flex-direction: column;

        .tourist {
          flex: 1.2;
        }
        .age {
          flex: 1;
        }
        .sex {
          flex: 1;
        }
      }
      .center {
        flex: 2;
      }
      .right {
        flex: 1;
      }
    }
  }
}
</style>
