<template>
  <div class="tourist_box">
    <div class="top_title">
      <p>实时游客统计</p>
      <img src="../../images/dataScreen-title.png" alt="" />
      <p class="number">
        可预约总量
        <span>99999</span>
        人
      </p>
    </div>
    <div class="current_person">
      <span v-for="(item, index) in number" :key="index">{{ item }}</span>
    </div>
    <div class="echarts" ref="charts"></div>
  </div>
</template>

<script setup lang="ts">
//导入echart
import * as echarts from 'echarts'
// 导入echarts扩展水球图
import 'echarts-liquidfill'
import { onMounted, ref } from 'vue'
let number = ref('216908人')
//获取图形容器的dom节点
const charts = ref()
onMounted(() => {
  //初始化echarts实例
  const myEcharts = echarts.init(charts.value)
  //设置配置项
  myEcharts.setOption({
    series: [
      {
        type: 'liquidFill',
        data: [0.6, 0.5, 0.4],
        color: ['#1dcabb'],
        radius: '85%',
        outline: {
          itemStyle: {
            borderWidth: 6,
            borderColor: '#1dcabb',
          },
        },
        backgroundStyle: {
          borderColor: '#1dcabb',
          borderWidth: 1,
          color: 'none',
          itemStyle: {
            shadowColor: 'rgba(0, 0, 0, 0.4)',
            shadowBlur: 50,
          },
        },

        label: {
          position: ['50%', '25%'],
          color: 'white',
          fontSize: 18,
          formatter: '预约量',
        },
      },
    ],
  })
})
</script>

<style scoped lang="scss">
.tourist_box {
  margin: 15px 8px;
  background: url(../../images/dataScreen-main-lc.png) no-repeat 100% 100% /
    cover;
  .top_title {
    font-size: 20px;
    color: white;
    img {
      margin: 15px 0;
    }
    .number {
      float: right;
      margin-right: 15px;
      span {
        color: #ffc328;
      }
    }
  }
  .current_person {
    color: #29fcff;
    display: flex;
    justify-content: center;
    margin-top: 30px;
    span {
      width: 55px;
      height: 55px;
      text-align: center;
      line-height: 55px;
      font-size: 30px;
      font-weight: bold;
      background: url(../../images/total.png) no-repeat 100% 100% / cover;
    }
  }
  .echarts {
    width: 100%;
    height: 60%;
  }
}
</style>
