<template>
  <div id="RightRank" style="width: 100%; height: 100%"></div>
</template>

<script>
export default {
  name: "RightRank",
  data() {
    return {};
  },
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts() {
      // 初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("RightRank"));
      // 绘制图表
      var option = {
        title: {
          text: "▎ 节点访问排行榜",
          left: "left",
          textStyle: {
            color: "#fff",
          },
        },
        tooltip: {
          show: false,
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          containLabel: true,
          left: 40,
          right: 60,
          bottom: 0,
          top: 40,
        },
        xAxis: {
          type: "value",
          name: "访问量",
        },
        yAxis: {
          type: "category",
          inverse: true,
          axisLine: {
            show: false,
          },
        },
        series: [
          {
            type: "bar",
            barWidth: 36,
            cursor: "default",
            label: {
              normal: {
                show: true,
                position: "insideLeft",
                color: "#fff",
                fontSize: 14,
                textBorderColor: "#333",
                textBorderWidth: 0,
                formatter: (data) => {
                  return `${data.name}:${data.value}`;
                },
              },
            },
            itemStyle: {
              barBorderRadius: [0, 50, 50, 0],
              color: {
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                type: "linear",
                global: false,
                colorStops: [
                  {
                    offset: 0,
                    color: "#7bcfa6",
                  },
                  {
                    offset: 1,
                    color: "#FE8463",
                  },
                ],
              },
            },
            data: [
              {
                name: "heartbeat",
                value: 29,
              },
              {
                name: "节点1-5-6",
                value: 19,
              },
              {
                name: "节点1-6-7",
                value: 12,
              },
              {
                name: "节点1-9-5",
                value: 11,
              },
              {
                name: "节点1-4-5",
                value: 6,
              },
              {
                name: "节点1-2-8",
                value: 4,
              },
              {
                name: "节点1-2-7",
                value: 4,
              },
              {
                name: "节点1-6-2",
                value: 2,
              },
              {
                name: "节点1-8-8",
                value: 2,
              },
              {
                name: "节点1-3-2",
                value: 2,
              },
            ],
          },
        ],
      };

      setInterval(() => {
        for (var i = 0; i < 10; i++) {
          option.series[0].data[i].value = parseInt(Math.random() * 50);
        }

        option.series[0].data.sort((a, b) => {
          return a.value > b.value ? -1 : 1;
        });

        myChart.setOption(option);
      }, 3000);
    },
  },
};
</script>

<style scoped>
</style>
