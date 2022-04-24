<template>
  <div class="screen-body">
    <section class="screen-left">
      <div id="left-top">
        <One />
      </div>
      <div id="left-bottom">
        <Two />
      </div>
    </section>
    <section class="screen-middle">
      <div id="middle-top">
        <Three />
      </div>
      <div id="middle-bottom">
        <Four />
      </div>
    </section>
    <section class="screen-right">
      <div id="right-top">
        <Five />
      </div>
      <div id="right-bottom">
        <Sixx />
      </div>
    </section>
  </div>
</template>
<script>
import One from "@/components/firstpage/One.vue";
import Two from "@/components/firstpage/Two.vue";
import Three from "@/components/firstpage/Three.vue";
import Four from "@/components/firstpage/Four.vue";
import Five from "@/components/firstpage/Five.vue";
import Sixx from "@/components/firstpage/Sixx.vue";

export default {
  name: "AboutView",
  components: {
    One,
    Two,
    Three,
    Four,
    Five,
    Sixx,
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
      height: 53%;
      position: relative;
      // background-color: #fff;
    }
    #left-bottom {
      height: 42%;
      margin-top: 25px;
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
      height: 56%;
      position: relative;
      // background-color: #fff;
    }
    #middle-bottom {
      margin-top: 25px;
      width: 100%;
      height: 39%;
      position: relative;
      // background-color: #fff;
    }
  }
  .screen-right {
    height: 100%;
    width: 27.6%;
    #right-top {
      height: 46%;
      position: relative;
      // background-color: red;
    }
    #right-bottom {
      height: 49%;
      margin-top: 25px;
      position: relative;
      // background-color: #fff;
    }
  }
}
</style>