<template>
  <div id="leftmiddle" style="width: 100%; height: 100%"></div>
</template>

<script>
export default {
  name: "leftmiddle",
  data() {
    return {};
  },
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts() {
      // 初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("leftmiddle"));
      // 绘制图表
      let xData = [
        "00时",
        "02时",
        "04时",
        "06时",
        "08时",
        "10时",
        "12时",
        "14时",
        "16时",
        "18时",
        "20时",
        "22时",
      ];
      let legendData = ["上行速率", "下行速率"]; //图例
      let firstIndustry = [4, 15, 20, 10, 9, 13, 27, 37, 72, 75, 65, 60]; //第一产业
      let thirdIndustry = [8, 15, 30, 34, 26, 25, 45, 56, 70, 70, 78, 64]; //第三产业
      myChart.setOption({
        title: {
          text: "▎ 上下行速率最新(KB/s)",
          left: "left",
          textStyle: {
            color: "#fff",
          },
        },
        // backgroundColor: "#061740",
        grid: {
          x: 0,
          y: 0,
          x2: 0,
          y2: 0,
          top: "20%",
          left: "3%",
          right: "3%",
          bottom: "10%",
          containLabel: true,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        legend: {
          orient: "vertical",
          left: "center",
          bottom: "bottom",
          padding: [10, 0, 0, 0],
          data: legendData,
          //图例滚动
          // type: 'scroll',
          //图例文字样式
          textStyle: {
            color: "rgba(36, 173, 254, 1)",
            // fontSize: "1rem",
          },
        },
        xAxis: [
          {
            type: "category",
            axisTick: {
              show: false,
            },
            interval: 1,
            axisLabel: {
              color: "rgba(36, 173, 254, 1)",
              // fontSize: "1rem",
            },
            axisLine: {
              show: false,
            },
            data: xData,
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "",
            min: 0,
            max: 100,
            interval: 20,
            axisLabel: {
              formatter: "{value} ",
            },
            axisLabel: {
              textStyle: {
                //坐标轴颜色
                color: "rgba(36, 173, 254, 1)",
                // fontSize: "1rem",
              },
            },
            //坐标轴线样式
            splitLine: {
              show: true,
              lineStyle: {
                type: "dashed", //solid实线;dashed虚线
                color: "rgba(36, 173, 254, 0.2)",
              },
            },
          },
        ],
        series: [
          {
            name: "上行速率",
            data: firstIndustry,
            type: "line",
            smooth: true, //true曲线; false折线
            showSymbol: false,
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#ffc600", //改变折线颜色
                  type: "solid",
                },
              },
            },
            areaStyle: {
              //折线图颜色半透明
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(255,198,0, 0.5)", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(255,198,0, 0.1)", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
          },
          {
            name: "下行速率",
            data: thirdIndustry,
            type: "line",
            smooth: true, //true曲线; false折线
            showSymbol: false,
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#24adfe", //改变折线颜色
                  type: "solid",
                },
              },
            },
            areaStyle: {
              //折线图颜色半透明
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(36,173,254, 0.5)", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(52,112,252, 0.1)", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
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
