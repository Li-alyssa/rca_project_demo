<template>
  <div class="screen-body">
    <section class="screen-left">
      <div id="left-one"><One /></div>
      <div id="left-one"><Two /></div>
      <div id="left-one"><Three /></div>
      <div id="left-one"><Four /></div>
      <div id="left-one"><Five /></div>
      <div id="left-one"><Sixx /></div>
    </section>
    <section class="screen-right">
      <div id="right-top">
        <div id="right-top-title">▎ 嵌套纬度下钻分析</div>
        <TopTable />
      </div>
      <div id="right-bottom">
        <div id="right-bottom-title">▎ 机房模块多维度关联分析</div>
        <HeatMap />
      </div>
    </section>
  </div>
</template>
<script>
import One from "@/components/secondpage/leftpage/one.vue";
import Two from "@/components/secondpage/leftpage/two.vue";
import Three from "@/components/secondpage/leftpage/three.vue";
import Four from "@/components/secondpage/leftpage/four.vue";
import Five from "@/components/secondpage/leftpage/five.vue";
import Sixx from "@/components/secondpage/leftpage/sixx.vue";
import HeatMap from "@/components/secondpage/rightpage/HeatMap.vue";
import TopTable from "@/components/secondpage/rightpage/TopTable.vue";

export default {
  name: "AboutView",
  components: {
    One,
    Two,
    Three,
    Four,
    Five,
    Sixx,
    HeatMap,
    TopTable,
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
    // background-color: red;

    #left-one {
      height: 33.4%;
      width: 50%;
      // background-color: green;
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
    }
    #right-top-title {
      height: 5%;
      margin-bottom: 0.5%;
      color: aliceblue;
    }
    #right-bottom {
      height: 47%;
      margin-top: 2%;
      position: relative;
      // background-color: #fff;
    }
    #right-bottom-title {
      height: 5%;
      color: aliceblue;
    }
  }
}
</style>