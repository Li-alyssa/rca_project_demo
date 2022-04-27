<template>
  <div>
    <el-carousel :height="bannerHeight + 'px'">
      <el-carousel-item v-for="item in imgwrap" :key="item.url">
        <img :src="item.url" class="bannerimg" />
      </el-carousel-item>
    </el-carousel>
    <el-footer class="me-area">
      <div class="me-footer">Designed by Alyssa</div>
    </el-footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bannerHeight: 200,
      imgwrap: [
        { url: require("../assets/img/pic1.jpg") },
        { url: require("../assets/img/pic2.jpg") },
        { url: require("../assets/img/pic3.jpg") },
        { url: require("../assets/img/pic4.jpg") },
        { url: require("../assets/img/pic5.jpg") },
      ],
    };
  },
  mounted() {
    this.setSize();
    window.addEventListener(
      "resize",
      () => {
        this.setSize();
      },
      false
    );
  },
  methods: {
    setSize() {
      this.bannerHeight = 650;
    },
  },
};
</script>
<style>
.bannerimg {
  width: 100%;
  height: inherit;
}

.el-footer {
  min-width: 100%;
  box-shadow: 0 -2px 3px hsla(0, 0%, 7%, 0.1), 0 0 0 1px hsla(0, 0%, 7%, 0.1);
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1024;
  /* background-color: #fff; */
  background-image: linear-gradient(
    to right top,
    #161522,
    #242230,
    #32313e,
    #41404d,
    #504f5c
  );
}

.me-footer {
  text-align: center;
  height: 60px;
  line-height: 60px;
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
}
</style>
