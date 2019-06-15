<template>
  <div class="wuye-basic-area-chart-wrapper">
    <chart :data="basicAreaChartData"></chart>
  </div>
</template>

<script>
import chart from "../../components/common/chart";

export default {
  name: "wuyeBasicAreaChart",
  data() {
    return {};
  },
  props: {
    chartData: {
      type: Array
    }
  },
  computed: {
    basicAreaChartData() {
      return {
        title: {
          text: "区域图",
          show: false
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          show: false
        },
        color: ["#B5BCFF"],
        grid: {
          top: "8%",
          bottom: "16%",
          left: "16%",
          right: "5%"
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: [
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12"
            ],
            axisLabel: {
              show: true,
              textStyle: {
                color: "#10A4D2",
                fontSize: 12
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "#007DDB"
              }
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            splitLine: { show: false },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#10A4D2",
                fontSize: 12
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "#007DDB"
              }
            }
          }
        ],
        series: [
          {
            name: "",
            type: "line",
            stack: "总量",
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#8e98fc" },
                  { offset: 1, color: "#4b4f82" }
                ])
              }
            },
            data: this.chartData
          }
        ]
      };
    }
  },
  components: {
    chart
  }
};
</script>

<style lang="scss" scoped>
.wuye-basic-area-chart-wrapper {
  width: 100%;
  height: 100%;
  position: relative;

  .chart-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
}
</style>
