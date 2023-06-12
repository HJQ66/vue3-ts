<template>
  <div class="age_box">
    <div class="top_title">
      <p>年龄比例</p>
      <img src="../../images/dataScreen-title.png" alt="" />
    </div>
    <div class="my_echarts" ref="charts"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'
const charts = ref()
onMounted(() => {
  const myEcharts = echarts.init(charts.value)
  myEcharts.setOption({
    tooltip: {
      trigger: 'item',
    },
    legend: {
      top: '15%',
      left: 'right', //一整个容器对其方式
      align: 'left', //文字对齐方式
      orient: 'vertical', //垂直排列
      itemGap: 20,
      textStyle: {
        color: 'white',
      },
    },
    series: [
      {
        name: '本周预约量',
        type: 'pie',
        radius: ['40%', '70%'],
        itemStyle: {
          borderRadius: 10,
        },
        label: {
          show: true,
          formatter: '{a}',
          position: 'center',
          color: '#eee',
        },
        data: [
          { value: 20, name: '10岁以下' },
          { value: 10, name: '10-18岁' },
          { value: 30, name: '18-30岁' },
          { value: 10, name: '30-40岁' },
          { value: 15, name: '40-60岁' },
          { value: 15, name: '60岁以上' },
        ],
      },
    ],
  })
})
</script>

<style scoped lang="scss">
.age_box {
  background: url(../../images/dataScreen-main-lc.png) no-repeat 100% 100% /
    cover;
  margin: 0 8px 15px 8px;
  .top_title {
    font-size: 20px;
    color: white;
  }
  .my_echarts {
    width: 100%;
    height: 85%;
  }
}
</style>
