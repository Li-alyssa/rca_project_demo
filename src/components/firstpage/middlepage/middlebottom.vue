<template>
  <div id="middlebottom" style="width: 100%; height: 100%"></div>
</template>

<script>
export default {
  name: "middlebottom",
  data() {
    return {};
  },
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts() {
      // 初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("middlebottom"));
      // 绘制图表
      var data = [90, 60, 34, 67, 45, 30, 89, 67, 42];
      var className = [
        "CPU%最高",
        "CPU%平均",
        "CPU%最低",
        "内存%最高",
        "内存%平均",
        "内存%最低",
        "存储%最高",
        "存储%平均",
        "存储%最低",
      ];
      var colorArray = [
        {
          top: "#f2f59e",
          bottom: "#f4b979",
        },
        {
          top: "#56c8ff",
          bottom: "#08c1f8",
        },
        {
          top: "#96f4d5",
          bottom: "#5ff1a7",
        },
        {
          top: "#9592ff",
          bottom: "#625ff1",
        },
        {
          top: "#fe9699",
          bottom: "#eb5155",
        },
      ];
      myChart.setOption({
        title: {
          text: "▎ 监控主机实时状态",
          left: "left",
          textStyle: {
            color: "#fff",
          },
        },
        grid: {
          left: "3%",
          right: "2%",
          bottom: "0%",
          top: "6%",
          containLabel: true,
        },
        tooltip: {
          show: true,
          formatter: "{b}:{c}%",
        },
        // backgroundColor: "rgb(20,28,52)",
        xAxis: {
          show: false,
          type: "value",
        },
        yAxis: [
          {
            type: "category",
            inverse: true,
            axisLabel: {
              show: true,
              textStyle: {
                color: "#d9e7fa",
                fontSize: "14",
                fontWeight: "bolder",
              },
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            data: className,
          },
          {
            type: "category",
            inverse: true,
            axisTick: "none",
            axisLine: "none",
            show: true,
            axisLabel: {
              textStyle: {
                color: "#ffffff",
                fontSize: "14",
              },
              formatter: function (value) {
                return value + " %";
              },
            },
            data: data,
          },
        ],
        series: [
          {
            name: "",
            type: "bar",
            zlevel: 1,
            itemStyle: {
              normal: {
                barBorderRadius: 100,
                color: function (params) {
                  let num = colorArray.length;
                  return {
                    type: "linear",
                    colorStops: [
                      {
                        offset: 0,
                        color: colorArray[params.dataIndex % num].bottom,
                      },
                      {
                        offset: 1,
                        color: colorArray[params.dataIndex % num].top,
                      },
                    ],
                  };
                },
              },
            },
            barWidth: 12,
            data: data,
          },
        ],
      });
    },
  },
};
</script>

<style scoped>
</style>
