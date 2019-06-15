<template>
  <div class="plan-stacked-line-chart-wrapper">
    <chart :data="stackedLineChartData"></chart>
  </div>
</template>

<script>
import chart from "@/components/common/chart";

export default {
  name: "planStackedLineChart",
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
        // dataRange: {
        //     x: 'left',
        //     y: 'bottom',
        //     splitList: [
        //         {start: 0, end: 100},
        //         {start: 100, end: 500},
        //         {start: 500, end: 1000},
        //         {start: 1000},
        //     ],

        // },
        color: ["#07C2FF", "#90FEA0", "#29B76C", "#007DDB", "#F2D961"],
        grid: {
          top: "7%",
          bottom: "16%",
          left: "15%",
          right: "5%"
        },
        legend: {
          data: [
            "中宙控股",
            "中宙投资",
            "中宙建工",
            "中宙物业",
            "澜海生态农业"
          ],
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
            name: "中宙控股",
            type: "line",
            data: [120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90]
          },
          {
            name: "中宙投资",
            type: "line",
            data: [220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290]
          },
          {
            name: "中宙建工",
            type: "line",
            data: [120, 102, 101, 104, 90, 330, 200, 120, 92, 91, 94, 60]
          },
          {
            name: "中宙物业",
            type: "line",
            data: [220, 232, 201, 234, 190, 330, 310, 320, 232, 201, 234, 190]
          },
          {
            name: "澜海生态农业",
            type: "line",
            data: [20, 32, 1, 34, 50, 30, 10, 20, 32, 11, 34, 80]
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
.plan-stacked-line-chart-wrapper {
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
