<template>
  <div id="Four" style="width: 100%; height: 100%"></div>
</template>

<script>
export default {
  name: "Four",
  data() {
    return {};
  },
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts() {
      // 初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("Four"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "▎ 这里是表四",
          textStyle: {
            color: "#ffffff", //字体颜色
          },
        },
        legend: {
          bottom: "5%",
          left: "center",
          data: ["Allocated Budget", "Actual Spending"],
        },
        radar: {
          // shape: 'circle',
          indicator: [
            { name: "Sales", max: 6500 },
            { name: "Administration", max: 16000 },
            { name: "Information Technology", max: 30000 },
            { name: "Customer Support", max: 38000 },
            { name: "Development", max: 52000 },
            { name: "Marketing", max: 25000 },
          ],
          radius: 70,
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
              {
                value: [5000, 14000, 28000, 26000, 42000, 21000],
                name: "Actual Spending",
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
