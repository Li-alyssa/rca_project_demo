<template>
  <div class="screen-body">
    <section class="screen-DataPage">
      <div id="top-title">▎ 节点关系图例</div>
      <DataPage />
    </section>
  </div>
</template>
<script>
import DataPage from "@/components/thirdpage/DataPage.vue";
export default {
  name: "AboutView",
  components: {
    DataPage,
  },
};
</script>

<style lang="less" scoped>
.screen-body {
  height: 100%;
  width: 100%;
  // background-color: red;
  .screen-DataPage {
    height: 95%;
    width: 80%;
  }
}
#top-title {
  margin-bottom: 0.5%;
  // background-color: green;
  color: aliceblue;
}
</style>