<template>
  <div class="home">
    <el-container class="home-container">
      <el-header class="home-header">
        <div class="topTitle">
          <div class="left nav">
            <ul style="margin-right: 2%; margin-left: 1%">
              <li :class="{ nav_active: show == '/about' }">
                <router-link to="/about"
                  ><i class="iconfont icon-a-dakai1x"></i>页面1</router-link
                >
              </li>
              <li :class="{ nav_active: show == '/second' }">
                <router-link to="/second"
                  ><i class="iconfont icon-a-chuangyi1x"></i>页面2</router-link
                >
              </li>
            </ul>
          </div>
          <div class="center-topTitle">
            <h1>名称待定系统平台</h1>
          </div>
          <div class="right nav">
            <ul style="margin-left: 2%">
              <li :class="{ nav_active: show == '/third' }">
                <router-link to="/third"
                  ><i class="iconfont icon-a-guanli1x"></i>页面3</router-link
                >
              </li>
              <li :class="{ nav_active: show == '/forth' }">
                <router-link to="/forth"
                  ><i class="iconfont icon-a-gengduo1x"></i>页面4</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </el-header>
      <el-main class="home-main">
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    // HelloWorld,
  },
  data() {
    return {
      show: 0,
    };
  },
  watch: {
    $route() {
      this.show = this.$route.path;
    },
  },
};
</script>
<style lang="less" scoped>
.home {
  position: absolute;
  width: 100%;
  height: 100%;
}
.home-container {
  height: 100%;
}

.home-header {
  background-color: #161522;
  height: 20%;
  width: 100%;
}

.home-main {
  background-color: #161522;
  height: 80%;
  width: 100%;
}
.topTitle {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  outline: none;
}
.nav {
  width: 35%;
}

.nav > ul {
  position: absolute;
  top: 0;
  width: 20%;
  // height:83%;
  // background-color: #fff;
}
.nav > ul > li {
  display: inline-block;
  width: 37%;
  height: 50px;
  text-align: center;
  position: relative;
  vertical-align: middle;
  line-height: 40px;
  box-sizing: border-box;
  margin-right: 8px;
  margin-left: 8px;
  border-radius: 6px;
  box-shadow: 0px 2px 0px 0px #004e92;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #000430;
}
.nav > ul > li:hover {
  background: linear-gradient(to bottom, #000428 5%, #004e92 100%);
  background-color: #000428;
}
.nav > ul > li:active {
  position: relative;
  top: 1px;
}
.nav_active {
  background: linear-gradient(to bottom, #000428 5%, #004e92 100%);
  background-color: #000428;
}
.nav > ul > li i {
  width: 16px;
  height: 16px;
  display: inline-block;
  position: relative;
  margin-right: 5px;
}
.nav > ul > li > a {
  color: #ffffff;
  opacity: 0.9;
  /*display: inline-block;*/
  /*padding: 0 15px 0 5px;*/
  font-family: "黑体";
  font-size: 16px;
  position: absolute;
  top: 4px;
  bottom: 4px;
  right: 4px;
  left: 4px;
  text-decoration: none;
}
.left {
  float: left;
}
.right {
  float: right;
}
.center-topTitle {
  width: 50%;
  height: auto;
  position: relative;
  top: 0;
  left: 0;
  background: url(../assets/img/header_border_dark.png) bottom center no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}
.center-topTitle > h1 {
  color: #cdddf7;
  font-size: 24px;
  font-weight: 900;
  letter-spacing: 5px;
}

.iconfont {
  font-size: 22px;
  position: absolute;
  top: 2px;
  right: 2px;
}
</style>