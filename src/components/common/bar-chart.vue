<template>
  <div class="bar-chart-wrapper">
    <chart :data="barChartData"></chart>
  </div>
</template>

<script>
import chart from "./chart";

export default {
  name: "barChart",
  data() {
    return {};
  },
  props: {
    barData: {
      type: Array,
      required: true
    }
  },
  components: {
    chart
  },
  computed: {
    barChartData() {
      return {
        title: {
          text: "柱状图",
          show: false
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["产值"],
          show: false
        },
        grid: {
          top: "8%",
          bottom: "16%",
          left: "20%",
          right: "5%"
        },
        color: ["#00C3FF"],
        xAxis: {
          name: "月",
          type: "category",
          data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
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
        },
        yAxis: {
          splitLine: { show: false },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#10A4D2",
              fontSize: 12
            }
          },
          axisLine: {
            lineStyle: {
              color: "#007DDB"
            }
          },
          axisTick: {
            show: false
          }
        },
        series: [
          {
            name: "",
            type: "bar",
            barWidth: 10,
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#83bff6" },
                  { offset: 1, color: "#1968FF" }
                ]),
                barBorderRadius: [5, 5, 0, 0]
              }
            },
            emphasis: {
              itemStyle: {
                color: "#4BD519"
              }
            },
            data: this.barData
          }
        ]
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.bar-chart-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  color: rgb(126, 220, 255);
}

.chart-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
</style>
