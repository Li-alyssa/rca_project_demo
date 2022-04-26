<template>
  <div>
    <el-carousel
      :interval="4000"
      type="card"
      :height="bannerH + 'px'"
      style="margin-top: 30px"
    >
      <el-carousel-item v-for="item in imgData" :key="imgData.value">
        <!--走马灯中也可以添加一些文字信息-->
        <!-- <p align="center" style="font-size: x-large;font-family: 华文新魏;color: #f56c6c">{{item.txt}}</p>-->
        <img
          ref="imgHeight"
          :src="item.src"
          width="100%"
          height="100%"
          object-fit="cover"
        />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data() {
    bannerH: 300;
    return {
      imgData: [
        { src: require("../assets/img/pic1.jpg") },
        { src: require("../assets/img/pic2.jpg") },
        { src: require("../assets/img/pic3.jpg") },
        { src: require("../assets/img/pic4.jpg") },
        { src: require("../assets/img/pic5.jpg") },
        { src: require("../assets/img/pic6.jpg") },
      ],
    };
  },
  mounted() {
    this.setBannerH();
    window.addEventListener(
      "resize",
      () => {
        this.setBannerH();
      },
      false
    );
  },
  methods: {
    //设置走马灯高度
    setBannerH() {
      this.bannerH = document.body.clientWidth / 4;
    },
  },
};
</script>
<style>
</style>
