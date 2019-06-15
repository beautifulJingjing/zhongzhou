<template>
  <div class="flow-smooth-line-chart-wrapper">
    <chart :data="smoothLineChartData"></chart>
  </div>
</template>

<script>
import chart from "@/components/common/chart";

export default {
  name: "FlowSmoothLineChart",
  data() {
    return {};
  },
  props: {
    chartData: {
      type: Array
    }
  },
  computed: {
    smoothLineChartData() {
      return {
        title: {
          text: "折线图",
          show: false
        },
        tooltip: {},
        legend: {
          show: false
        },
        color: ["#1AC050"],
        grid: {
          top: "8%",
          bottom: "16%",
          left: "16%",
          right: "5%"
        },
        xAxis: {
          type: "category",
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
          },
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
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24"
          ]
        },
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
            data: [
              820,
              932,
              901,
              934,
              1290,
              1330,
              1320,
              820,
              932,
              901,
              934,
              1290,
              820,
              932,
              901,
              934,
              1290,
              1330,
              1320,
              820,
              932,
              901,
              934,
              1290
            ],
            type: "line",
            smooth: true,
            symbol: "none",
            areaStyle: {
              color: "#0D1F45"
            }
          }
        ]
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.flow-smooth-line-chart-wrapper {
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