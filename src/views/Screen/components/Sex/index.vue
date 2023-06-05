<template>
  <div class="sex_box">
    <div class="top_title">
      <p>男女比例</p>
      <img src="../../images/dataScreen-title.png" alt="" />
    </div>
    <div class="sex_img">
      <div class="man">
        <img src="../../images/man.png" alt="" />
      </div>
      <div class="woman">
        <img src="../../images/woman.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
      margin: 30px;
    }
  }
}
</style>
