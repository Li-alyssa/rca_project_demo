<template>
  <div id="One" style="width: 100%; height: 100%"></div>
</template>

<script>
export default {
  name: "One",
  data() {
    return {};
  },
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts() {
      // 初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("One"));
      // 绘制图表
      let value = 55.33;
      myChart.setOption({
        backgroundColor: "#061740",
        title: {
          text: "{a|" + value + "}{c|%}",
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
        },
        series: [
          {
            name: "频率",
            type: "pie",
            radius: ["58%", "45%"],
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
            name: "",
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
                color: "#061740",
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
