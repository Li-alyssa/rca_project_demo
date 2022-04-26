<template>
  <div class="screen-body">
    <section class="screen-left">
      <div id="left-top">
        <Lefttop />
      </div>
      <div id="left-bottom">
        <Leftbottomleft />
      </div>
      <div id="left-bottom">
        <Leftbottomright />
      </div>
    </section>
    <section class="screen-right">
      <div id="right-top">
        <Righttop />
      </div>
      <div id="right-bottom">
        <Rightbottom />
      </div>
    </section>
  </div>
</template>
<script>
import Lefttop from "@/components/fourpage/leftpage/lefttop.vue";
import Leftbottomleft from "@/components/fourpage/leftpage/leftbottomleft.vue";
import Leftbottomright from "@/components/fourpage/leftpage/leftbottomright.vue";
import Righttop from "@/components/fourpage/rightpage/righttop.vue";
import Rightbottom from "@/components/fourpage/rightpage/rightbottom.vue";

export default {
  name: "ForthView",
  components: {
    Lefttop,
    Righttop,
    Leftbottomleft,
    Leftbottomright,
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
    width: 65%;
    #left-top {
      height: 53%;
      position: relative;
      // background-color: #fff;
    }
    #left-bottom {
      height: 42%;
      width: 50%;
      position: relative;
      float: left;
      // background-color: #fff;
    }
  }

  .screen-right {
    height: 100%;
    width: 35%;
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