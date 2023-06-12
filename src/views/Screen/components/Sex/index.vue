<template>
  <div class="sex_box">
    <div class="top_title">
      <p>男女比例</p>
      <img src="../../images/dataScreen-title.png" alt="" />
    </div>
    <div class="sex_img">
      <div class="man">
        <span>男士</span>
        <img src="../../images/man.png" alt="" />
      </div>
      <div class="woman">
        <span>女士</span>
        <img src="../../images/woman.png" alt="" />
      </div>
    </div>
    <div class="my_echarts" ref="charts"></div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'
const charts = ref()
onMounted(() => {
  //初始化echarts
  const myEcharts = echarts.init(charts.value)
  myEcharts.setOption({
    xAxis: {
      show: false,
      min: 0,
      max: 100,
    },
    yAxis: {
      show: false,
      type: 'category', //让柱子横向
    },
    series: [
      {
        type: 'bar',
        data: [58], //柱子的数据
        barWidth: 20, //设置柱子的宽度
        z: 3, //设置柱子的层级，默认是2，设高一点不被下面的柱子覆盖
        name: '男士',
        label: {
          show: true, //设置是否显示文字
          formatter: '{a}{c}%', //设置文字，官网可查
          fontSize: 20,
          color: 'white',
          position: [0, -20], //设置文字的位置
        },
        itemStyle: {
          color: '#0075ff',
          borderRadius: 20, //设置柱条圆角
        },
      },
      {
        type: 'bar',
        data: [100], //柱子的数据
        barWidth: 20, //设置柱子的宽度
        barGap: '-100%', //将两个柱子重叠
        name: '女士',
        label: {
          show: true, //设置是否显示文字
          formatter: '{a}42%', //设置文字，官网可查
          fontSize: 20,
          position: ['75%', -20], //设置文字的位置
          color: 'white',
        },
        itemStyle: {
          color: '#ff5f79',
          borderRadius: 20, //设置柱条圆角
        },
      },
    ],
    // grid: {
    //   left: 0,
    //   top: 0,
    //   right: 0,
    //   bottom: 0,
    // },
  })
})
</script>

<style scoped lang="scss">
.sex_box {
  background: url(../../images/dataScreen-main-lc.png) no-repeat 100% 100% /
    cover;
  margin: 0 8px 15px 8px;
  .top_title {
    color: white;
    font-size: 20px;
  }
  .sex_img {
    display: flex;
    justify-content: center;
    div {
      margin: 30px 40px;
    }
    .man {
      background: url(../../images/man-bg.png) no-repeat 100% 100% / cover;
    }
    .woman {
      background: url(../../images/woman-bg.png) no-repeat 100% 100% / cover;
    }
    .man,
    .woman {
      padding: 30px 20px 15px 20px;
      position: relative;
      img {
        width: 60px;
        height: 62px;
      }
      span {
        position: absolute;
        color: white;
        font-size: 18px;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
  .my_echarts {
    margin: 0 auto;
    width: 88%;
    height: 100px;
  }
}
</style>
