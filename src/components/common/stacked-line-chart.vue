<template>
  <div class="stacked-line-chart-wrapper">
    <chart :data="stackedLineChartData"></chart>
  </div>
</template>

<script>
import chart from "@/components/common/chart";

export default {
  name: "StackedLineChart",
  data() {
    return {};
  },
  props: {
    chartData: {
      type: Array,
      required: true,
    },
    colors: {
      type: Array
    }
  },
  computed: {
    stackedLineChartData() {
      return {
        title: {
          text: "折线图堆叠",
          textStyle: {
            color: "#10A4D2",
            fontSize: 12
          },
          show: false
        },
        tooltip: {
          trigger: "axis",
          // show: false
        },
        color: this.colors,
        grid: {
          top: "7%",
          bottom: "16%",
          left: "15%",
          right: "5%"
        },
        legend: {
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
            name: "用水",
            type: "line",
            // data: [120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90]
            data: this.chartData[0]
          },
          {
            name: "用电",
            type: "line",
            // data: [220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290]
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
.stacked-line-chart-wrapper {
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
