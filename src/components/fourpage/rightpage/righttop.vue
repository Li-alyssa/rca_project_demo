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
          text: "▎ 各资源告警比例",
          left: "left",
          textStyle: {
            color: "#fff",
          },
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "right",
          top: "center",
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
              { value: 1048, name: "进程下线告警次数" },
              { value: 735, name: "端口下线告警次数" },
              { value: 580, name: "日志监控告警次数" },
              { value: 34, name: "Docker下线告警次数" },
              { value: 543, name: "数通设备告警次数" },
              { value: 224, name: "数据源告警次数" },
              { value: 300, name: "服务接口告警次数" },
              { value: 111, name: "主机及其资源告警次数" },
            ],
            label: {
              normal: {
                show: false,
              },
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
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
