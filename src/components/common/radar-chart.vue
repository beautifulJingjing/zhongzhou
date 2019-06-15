<template>
  <div class="radar-chart-wrapper">
    <chart :data="radarChartData"></chart>
  </div>
</template>

<script>
import chart from "./chart";

export default {
  name: "radarChart",
  data() {
    return {};
  },
  props: {
    chartData: {
      type: Array
    }
  },
  components: {
    chart
  },
  computed: {
    radarChartData() {
      return {
        title: {
          text: "基础雷达图",
          show: false
        },
        tooltip: {
          trigger: "axis"
          //   show: false
        },
        legend: {
          data: ["实际值"],
          show: false
        },
        color: ["#5672FF"],
        // grid: {
        //   top: "10%",
        //   bottom: "10%",
        //   left: "10%",
        //   right: "10%"
        // },
        radar: [
          {
            name: {
              textStyle: {
                color: "#ABFFF8"
              }
            },
            splitNumber: 1,
            splitArea: {
              show: false,
              areaStyle: {
                color: "rgba(255,0,0,0)" // 图表背景的颜色
              }
            },
            // splitLine: {
            //   show: true,
            //   lineStyle: {
            //     width: 1,
            //     color: "rgba(131,141,158, 0.1)" // 设置网格的颜色
            //   }
            // },
            nameGap: 5,
            indicator: [
              { text: "A", max: 100 },
              { text: "B", max: 100 },
              { text: "C", max: 100 },
              { text: "D", max: 100 }
            ],
            center: ["50%", "50%"],
            radius: "50%"
          }
        ],
        series: [
          {
            type: "radar",
            tooltip: {
              trigger: "item",
              show: false
            },
            itemStyle: { normal: { areaStyle: { type: "default" } } },
            data: [
              {
                // value: [80, 85, 90, 95],
                value: this.chartData,
                name: "实际值"
              }
            ]
          }
        ]
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.radar-chart-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}

.chart-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
</style>
