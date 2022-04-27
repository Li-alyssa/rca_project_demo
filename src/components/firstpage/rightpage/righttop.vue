<template>
  <div id="righttop" style="width: 100%; height: 100%"></div>
</template>

<script>
export default {
  name: "righttop",
  data() {
    return {};
  },
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts() {
      // 初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("righttop"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "▎ 主机状态",
          left: "left",
          textStyle: {
            color: "#fff",
          },
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "50%",
            data: [
              { value: 1048, name: "正常" },
              { value: 735, name: "下线" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      });
    },
  },
};
</script>

<style scoped>
</style>
