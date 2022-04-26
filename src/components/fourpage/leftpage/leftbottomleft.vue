<template>
  <div id="leftbottomleft" style="width: 100%; height: 100%"></div>
</template>

<script>
export default {
  name: "leftbottomleft",
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
        document.getElementById("leftbottomleft")
      );
      // 绘制图表
      myChart.setOption({
        title: {
          text: "▎ 主机及其资源下线次数TOP10",
          left: "left",
          textStyle: {
            color: "#fff",
          },
        },
        dataset: [
          {
            dimensions: ["name", "score"],
            source: [
              ["192.168.31.1", 98],
              ["102.168.132.12", 76],
              ["102.168.234.65", 55],
              ["102.168.13.2", 45],
              ["102.168.88.88", 66],
              ["172.17.0.14", 29],
              ["192.168.1.2", 53],
              ["192.168.1.10", 66],
              ["155.138.212.211", 77],
              ["192.168.3.21", 50],
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
