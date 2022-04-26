<template>
  <div id="Sixx" style="width: 100%; height: 100%"></div>
</template>

<script>
export default {
  name: "Sixx",
  data() {
    return {};
  },
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts() {
      // 初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("Sixx"));
      // 绘制图表
      let value = 12.66;
      myChart.setOption({
        backgroundColor: "#161522",
        title: {
          text: "{a|" + value + "}{c|%}",
          subtext: "XX系统故障率", //副标题文本，'\n'指定换行
          itemGap: 50, //主副标题间距
          x: "center",
          y: "center",
          textStyle: {
            rich: {
              a: {
                fontSize: 14,
                color: "#29EEF3",
              },
              c: {
                fontSize: 14,
                color: "#ffffff",
              },
            },
          },
          subtextStyle: {
            //副标题文本样式{"color": "#aaa"}
            // fontFamily: "Arial, Verdana, sans...",
            fontSize: 20,
            fontStyle: "normal",
            fontWeight: "700",
            color: "#29EEF3",
          },
        },
        series: [
          {
            name: "仪表构建",
            type: "pie",
            radius: ["70%", "55%"],
            silent: true,
            clockwise: true,
            startAngle: (360 * 0.6) / 2 + 90,
            z: 0,
            zlevel: 0,
            label: {
              normal: {
                position: "center",
              },
            },
            data: [
              {
                value: value,
                name: "",
                itemStyle: {
                  normal: {
                    color: {
                      // 完成的圆环的颜色
                      colorStops: [
                        {
                          offset: 0,
                          color: "#4FADFD", // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: "#28E8FA", // 100% 处的颜色
                        },
                      ],
                    },
                  },
                },
              },
              {
                value: 100 / 0.6 - (100 / 0.6) * 0.4 - value,
                name: "",
                label: {
                  normal: {
                    show: false,
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#173164",
                  },
                },
              },
              {
                value: (100 / 0.6) * 0.4,
                name: "",
                label: {
                  normal: {
                    show: false,
                  },
                },
                itemStyle: {
                  normal: {
                    color: "rgba(0,0,0,0)",
                  },
                },
              },
            ],
          },
          {
            name: "轨距样式",
            type: "gauge",
            radius: "100%",
            center: ["50%", "50%"],
            startAngle: 0,
            endAngle: 180,
            splitNumber: 5,
            hoverAnimation: true,
            axisTick: {
              show: false,
            },
            splitLine: {
              length: 64,
              lineStyle: {
                width: 5,
                color: "#161522",
              },
            },
            axisLabel: {
              show: false,
            },
            pointer: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                opacity: 0,
              },
            },
            detail: {
              show: false,
            },
            data: [{ value: 0, name: "" }],
          },
        ],
      });
    },
  },
};
</script>

<style scoped>
</style>
