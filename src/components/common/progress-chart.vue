<template>
  <div class="progress-chart-wrapper">
    <chart :data="progressChartData"></chart>
  </div>
</template>

<script>
import chart from "./chart";

export default {
  name: "progressChart",
  data() {
    return {};
  },
  props: {
    percent: {
      type: Number,
      default: 80
    },
    colors: {
      type: Array
    },
    textColor: {
      type: String
    },
    chartRadius: {
      type: Array,
    },
  },
  components: {
    chart
  },
  computed: {
    progressChartData() {
      return {
        title: {
          show: true,
          text: this.percent + "%",
          x: "center",
          y: "center",
          textStyle: {
            fontSize: 14,
            color: this.textColor,
            fontWeight: 400
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{d}%",
          show: false
        },
        legend: {
          orient: "vertical",
          x: "left",
          show: false
        },
        grid: {
          top: "0",
          bottom: "0",
          left: "0",
          right: "0"
        },
        color: this.colors,
        series: [
          {
            name: "",
            type: "pie",
            radius: this.chartRadius,
            avoidLabelOverlap: true,
            hoverAnimation: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [{ value: this.percent, name: "" }, { value: 100 - this.percent, name: "" }]
          }
        ]
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.progress-chart-wrapper {
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
