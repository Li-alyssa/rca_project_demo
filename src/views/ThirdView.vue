<template>
  <div class="screen-body">
    <section class="screen-DataPage">
      <DataPage />
    </section>
    <section class="screen-right">
      <div id="right-rank">
        <RightRank />
      </div>
    </section>
  </div>
</template>
<script>
import DataPage from "@/components/thirdpage/DataPage.vue";
import RightRank from "@/components/thirdpage/RightRank.vue";

export default {
  name: "AboutView",
  components: {
    DataPage,
    RightRank,
  },
};
</script>

<style lang="less" scoped>
.screen-body {
  height: 100%;
  width: 100%;
  // background-color: red;
  display: flex;
  .screen-DataPage {
    height: 100%;
    width: 70%;
  }
  .screen-right {
    height: 100%;
    width: 29%;
    margin-left: 1%;
    #right-rank {
      height: 100%;
      position: relative;
      // background-color: #fff;
    }
  }
}
</style>