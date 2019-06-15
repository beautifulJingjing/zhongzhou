<template>
  <div class="area-stack-wrapper">
    <chart :data="areaStackChartData"></chart>
  </div>
</template>

<script>
import chart from "./chart";

export default {
  name: "areaStackChart",
  data() {
    return {};
  },
  props: {
    areaStackData: {
      type: Array,
      required: true
    }
  },
  components: {
    chart
  },
  computed: {
    areaStackChartData() {
      return {
        title: {
          text: "区域图",
          show: false
        },
        tooltip: {},
        legend: {
          show: false
        },
        color: ["#00C3FF"],
        grid: {
          top: "8%",
          bottom: "18%",
          left: "18%",
          right: "2%"
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
                fontSize: 14
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
                fontSize: 14
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
            name: "出入车辆",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: this.areaStackData
          }
        ]
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.area-stack-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}

.chart-wrapper {
  position: absolute;
  top: 5%;
  bottom: 20%;
  left: 0;
  right: 0;
}
</style>
