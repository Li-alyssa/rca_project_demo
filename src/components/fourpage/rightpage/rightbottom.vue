<template>
  <div id="rightbottom" style="width: 100%; height: 100%"></div>
</template>

<script>
export default {
  name: "rightbottom",
  data() {
    return {};
  },
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts() {
      // 初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("rightbottom"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "▎ 告警类型分布",
          left: "left",
          textStyle: {
            color: "#fff",
          },
        },
        radar: {
          // shape: 'circle',
          indicator: [
            { name: "操作系统", max: 6500 },
            { name: "服务器", max: 16000 },
            { name: "应用服务器", max: 30000 },
            { name: "数据库", max: 38000 },
            { name: "网络设备", max: 52000 },
            { name: "安全设备", max: 25000 },
            { name: "其他", max: 46000 },
          ],
        },
        series: [
          {
            name: "Budget vs spending",
            type: "radar",
            data: [
              {
                value: [4200, 3000, 20000, 35000, 50000, 18000],
                name: "Allocated Budget",
              },
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
