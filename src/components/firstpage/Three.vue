<template>
  <div id="Three" style="width: 100%; height: 100%"></div>
</template>

<script>
export default {
  name: "Three",
  data() {
    return {};
  },
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts() {
      // 初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("Three"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "▎ 这里是表三",
          textStyle: {
            color: "#ffffff", //字体颜色
          },
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          bottom: "5%",
          left: "center",
          textStyle: {
            color: "#ffffff", //字体颜色
          },
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "40",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "Search Engine" },
              { value: 735, name: "Direct" },
              { value: 580, name: "Email" },
              { value: 484, name: "Union Ads" },
              { value: 300, name: "Video Ads" },
            ],
          },
        ],
      });
    },
  },
};
</script>

<style scoped>
</style>
