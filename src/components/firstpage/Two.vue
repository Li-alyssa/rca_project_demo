<template>
  <div id="Two" style="width: 100%; height: 100%"></div>
</template>

<script>
export default {
  name: "Two",
  data() {
    return {};
  },
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts() {
      // 初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("Two"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "▎ 这里是表二",
          textStyle: {
            color: "#ffffff", //字体颜色
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          left: "center",
          top: "bottom",
          textStyle: {
            fontSize: 18, //字体大小
            color: "#ffffff", //字体颜色
          },
          // data: ["afn=0", "afn=2", "afn=4"],
        },
        xAxis: [
          {
            type: "category",
            axisTick: {
              alignWithLabel: true, //柱状图中心是否对齐刻度位置
              show: false,
            },
            axisLabel: {
              fontSize: 12, //字体大小
              color: "#ffffff", //字体颜色
              interval: 0,
              formatter: function (value) {
                var ret = ""; //拼接加\n返回的类目项
                var maxLength = 10; //每项显示文字个数
                var valLength = value.length; //X轴类目项的文字个数
                var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
                if (rowN > 1) {
                  //如果类目项的文字大于5,
                  for (var i = 0; i < rowN; i++) {
                    var temp = ""; //每次截取的字符串
                    var start = i * maxLength; //开始截取的位置
                    var end = start + maxLength; //结束截取的位置
                    //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                    temp = value.substring(start, end) + "\n";
                    ret += temp; //凭借最终的字符串
                  }
                  return ret;
                } else {
                  return value;
                }
              },
            },
            splitLine: {
              show: false,
            },
            data: [
              // "14:00-15:00", "15:00-16:00", "16:00-17:00", "17:00-18:00"
            ],
          },
        ],

        yAxis: [
          {
            type: "value",
            axisLabel: {
              fontSize: 18, //字体大小
              color: "#ffffff", //字体颜色
            },
            splitLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "afn=0",
            type: "bar",
            emphasis: {
              focus: "series",
            },
            data: [1.3, 2.7, 4.5, 4],
          },
          {
            name: "afn=1",
            type: "bar",
            emphasis: {
              focus: "series",
            },
            data: [5, 7, 8, 1],
          },
          {
            name: "afn=2",
            type: "bar",
            emphasis: {
              focus: "series",
            },
            data: [12, 4.7, 9.5, 6],
          },
          {
            name: "afn=4",
            type: "bar",
            emphasis: {
              focus: "series",
            },
            data: [4, 12, 3, 4],
          },
        ],
      });
    },
  },
};
</script>

<style scoped>
</style>
