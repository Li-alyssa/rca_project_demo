<template>
  <div id="leftbottom" style="width: 100%; height: 100%"></div>
</template>

<script>
export default {
  name: "leftbottom",
  data() {
    return {};
  },
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts() {
      // 初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("leftbottom"));
      // 绘制图表

      var data = {
        dataAge: [
          {
            name: "主机下线告警",
            value: "272",
          },
          {
            name: "CPU告警",
            value: "292",
          },
          {
            name: "内存告警",
            value: "120",
          },
          {
            name: "磁盘告警",
            value: "42",
          },
          {
            name: "上下行速率告警",
            value: "88",
          },
          {
            name: "系统负载告警",
            value: "92",
          },
        ],
      };
      myChart.setOption({
        title: {
          text: "▎ 告警信息统计",
          left: "left",
          textStyle: {
            color: "#fff",
          },
        },
        // backgroundColor: "#05274C",
        tooltip: {
          show: true,
          formatter: "{b}:{c}",
        },
        legend: {
          show: true,
          color: "#fff",
          orient: "vertical",
          left: "left",
          bottom: "top",
          textStyle: {
            color: "#fff",
          },
          animation: true,
        },
        color: [
          "#2AC9FD",
          "#76FBC0",
          "#35C96E",
          "#FCC708",
          "#48B188",
          "#5957C2",
          "#4A5D73",
        ],
        series: [
          {
            color: [
              "#39D1FA",
              "#06B3FF",
              "#0072FF",
              "#0643FF",
              "#5158FA",
              "#5957C2",
            ],
            type: "pie",
            radius: ["35", "60"],
            data: data.dataAge,
            label: {
              show: false,
            },
          },
          {
            type: "pie",
            radius: ["60", "70"],
            data: ["100"],
            color: ["#5071AE3D"],
            label: {
              show: false,
            },
            tooltip: {
              show: false,
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
