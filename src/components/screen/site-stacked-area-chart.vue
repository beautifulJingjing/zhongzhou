<template>
  <div class="site-stacked-area-chart-wrapper">
    <chart :data="stackedAreaChartData"></chart>
  </div>
</template>

<script>
import chart from "../../components/common/chart";

export default {
  name: "siteStackedAreaChart",
  data() {
    return {};
  },
  props: {
    chartData: {
      type: Array,
      required: true
    }
  },
  computed: {
    stackedAreaChartData() {
      return {
        title: {
          text: "堆叠区域图",
          textStyle: {
            color: "#10A4D2",
            fontSize: 12
          },
          show: false
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
          // show: false
        },
        color: ["#1DE7D6", "#00FF00"],
        grid: {
          top: "8%",
          bottom: "14%",
          left: "16%",
          right: "5%"
        },
        legend: {
          data: ["在建", "竣工"],
          show: false
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
                fontSize: 12,
                fontWeight: 400
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
            splitLine: { show: false },
            type: "value",
            axisLabel: {
              show: true,
              textStyle: {
                color: "#10A4D2",
                fontSize: 12,
                fontWeight: 400
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
            name: "在建",
            type: "line",
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#00c3ff" },
                  { offset: 1, color: "#006482" }
                ])
              }
            },
            // data: [220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290]
            data: this.chartData[0]
          },
          {
            name: "竣工",
            type: "line",
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#1ec9e3" },
                  { offset: 1, color: "#1e858a" }
                ])
              }
            },
            // data: [120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90]
            data: this.chartData[1]
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
.site-stacked-area-chart-wrapper {
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
