<template>
  <div id="leftbottomright" style="width: 100%; height: 100%"></div>
</template>

<script>
export default {
  name: "leftbottomright",
  data() {
    return {};
  },
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts() {
      // 初始化echarts实例
      var myChart = this.$echarts.init(
        document.getElementById("leftbottomright")
      );
      // 绘制图表
      myChart.setOption({
        title: {
          text: "▎ 服务接口下线次数TOP5",
          left: "left",
          textStyle: {
            color: "#fff",
          },
        },
        dataset: [
          {
            dimensions: ["name", "score"],
            source: [
              ["GitHub", 13],
              ["内存接口", 34],
              ["硬盘接口", 55],
              ["gitee", 66],
              ["主机列表接口", 23],
            ],
          },
          {
            transform: {
              type: "sort",
              config: { dimension: "score", order: "desc" },
            },
          },
        ],
        xAxis: {
          type: "category",
          axisLabel: { interval: 0, rotate: 30 },
        },
        yAxis: {},
        series: {
          type: "bar",
          encode: { x: "name", y: "score" },
          datasetIndex: 1,
        },
      });
    },
  },
};
</script>

<style scoped>
</style>
