<template>
  <div id="lefttop" style="width: 100%; height: 100%"></div>
</template>

<script>
export default {
  name: "lefttop",
  data() {
    return {};
  },
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts() {
      // 初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("lefttop"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "▎ 报警总次数",
          left: "left",
          textStyle: {
            color: "#fff",
          },
        },
        xAxis: {
          type: "category",
          data: [
            "00时",
            "01时",
            "02时",
            "03时",
            "04时",
            "05时",
            "06时",
            "07时",
            "08时",
            "09时",
            "10时",
            "11时",
            "12时",
            "13时",
            "14时",
            "15时",
            "16时",
            "17时",
            "18时",
            "19时",
            "20时",
            "21时",
            "22时",
            "23时",
          ],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [
              120, 200, 150, 80, 70, 110, 130, 120, 200, 150, 80, 70, 110, 130,
              120, 200, 150, 80, 70, 110, 130, 120, 200, 150,
            ],
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)",
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
