<template>
  <div id="One" style="width: 100%; height: 100%"></div>
</template>

<script>
export default {
  name: "One",
  data() {
    return {};
  },
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts() {
      // 初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("One"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "▎ 这里是表一",
          textStyle: {
            color: "#29527e", //字体颜色
            backgroundColor: "#29527e",
          },
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });
    },
  },
};
</script>

<style scoped>
</style>
