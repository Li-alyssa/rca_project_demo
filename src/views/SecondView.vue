<template>
  <div class="screen-body">
    <section class="screen-left">
      <div id="left-one">
        <one />
      </div>
      <div id="left-one">这里存放六个表盘图</div>
      <div id="left-one">这里存放六个表盘图</div>
      <div id="left-one">这里存放六个表盘图</div>
      <div id="left-one">这里存放六个表盘图</div>
      <div id="left-one">这里存放六个表盘图</div>
    </section>
    <section class="screen-right">
      <div id="right-top"></div>
      <div id="right-bottom"></div>
    </section>
  </div>
</template>
<script>
import One from "@/components/secondpage/leftpage/one.vue";

export default {
  name: "AboutView",
  components: {
    One,
  },
};
</script>

<style lang="less" scoped>
.screen-body {
  // background-color: red;
  width: 100%;
  height: 100%;
  display: flex;
  .screen-left {
    height: 100%;
    width: 35%;
    background-color: red;

    #left-one {
      height: 33.3%;
      width: 50%;

      background-color: green;
      float: left;
    }
  }

  .screen-right {
    height: 100%;
    width: 64%;
    margin-left: 1%;
    #right-top {
      height: 49%;
      position: relative;
      background-color: skyblue;
    }
    #right-bottom {
      height: 49%;
      margin-top: 2%;
      position: relative;
      background-color: #fff;
    }
  }
}
</style>