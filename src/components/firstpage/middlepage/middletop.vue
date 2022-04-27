<template>
  <div id="center">
    <div class="item">
      <div class="number">93</div>
      <div class="text">主机总数</div>
    </div>
    <div class="item">
      <div class="number">168</div>
      <div class="text">CPU总核数</div>
    </div>
    <div class="item">
      <div class="number">986.7G</div>
      <div class="text">内存总和</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#center {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 80%;
  height: 80%;
  /* background: #777; */
  display: flex;
  flex-wrap: wrap;
  /*文本超出后换行*/
}

.item {
  width: 33%;
}
.number {
  height: 60%;
  /* width: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  color: gold;
  font-size: 45px;
  font-weight: bold;
  /* background-color: red; */
}
.text {
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
  font-weight: bold;
  /* background-color: red;
  margin-left: 10%;
  margin-top: 10%; */
}
</style>