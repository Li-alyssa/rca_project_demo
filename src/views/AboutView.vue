<template>
  <div class="screen-body">
    <section class="screen-left">
      <div id="left-top">
        <Lefttop />
      </div>
      <div id="left-middle">
        <Leftmiddle />
      </div>
      <div id="left-bottom">
        <Leftbottom />
      </div>
    </section>
    <section class="screen-middle">
      <div id="middle-top">
        <Middletop />
      </div>
      <div id="middle-bottom">
        <Middlebottom />
      </div>
    </section>
    <section class="screen-right">
      <div id="right-top">
        <Righttop />
      </div>
      <div id="right-middle">
        <Rightmiddle />
      </div>
      <div id="right-bottom">
        <Rightbottom />
      </div>
    </section>
  </div>
</template>
<script>
import Middletop from "@/components/firstpage/middlepage/middletop.vue";
import Middlebottom from "@/components/firstpage/middlepage/middlebottom.vue";
import Lefttop from "@/components/firstpage/leftpage/lefttop.vue";
import Leftmiddle from "@/components/firstpage/leftpage/leftmiddle.vue";
import Leftbottom from "@/components/firstpage/leftpage/leftbottom.vue";
import Righttop from "@/components/firstpage/rightpage/righttop.vue";
import Rightmiddle from "@/components/firstpage/rightpage/rightmiddle.vue";
import Rightbottom from "@/components/firstpage/rightpage/rightbottom.vue";

export default {
  name: "AboutView",
  components: {
    Middletop,
    Middlebottom,
    Lefttop,
    Leftmiddle,
    Leftbottom,
    Righttop,
    Rightmiddle,
    Rightbottom,
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
    width: 27.6%;
    #left-top {
      height: 33%;
      margin-top: 0.5%;
      position: relative;
      // background-color: #fff;
    }
    #left-middle {
      height: 33%;
      margin-top: 0.5%;
      position: relative;
      // background-color: #fff;
    }
    #left-bottom {
      height: 33%;
      margin-top: 0.5%;
      position: relative;
      // background-color: #fff;
    }
  }
  .screen-middle {
    height: 100%;
    width: 41.5%;
    margin-left: 1.6%;
    margin-right: 1.6%;
    #middle-top {
      width: 100%;
      height: 35%;
      position: relative;
      // background-color: #fff;
    }
    #middle-bottom {
      margin-top: 1%;
      width: 100%;
      height: 64%;
      position: relative;
      // background-color: #fff;
    }
  }
  .screen-right {
    height: 100%;
    width: 27.6%;
    #right-top {
      height: 30%;
      margin-top: 0.5%;
      position: relative;
      // background-color: #fff;
    }
    #right-middle {
      height: 36%;
      margin-top: 0.5%;
      position: relative;
      // background-color: #fff;
    }
    #right-bottom {
      height: 33%;
      margin-top: 0.5%;
      position: relative;
      // background-color: #fff;
    }
  }
}
</style>