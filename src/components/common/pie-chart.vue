<template>
  <div class="pie-chart-wrapper">
    <span v-show="countShow" class="item-count">{{itemCount}}</span>
    <span v-show="titleShow" class="desc-title">{{descTitle}}</span>
    <chart :data="pieChartData"></chart>
    <span class="title">{{title}}</span>
  </div>
</template>

<script>
import chart from "../common/chart";

export default {
  name: "pieChart",
  data() {
    return {
      count: 0,
      countShow: true,
      titleShow: true
    };
  },
  props: {
    itemCount: {
      type: Number,
      default: 0
    },
    descTitle: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    pieData: {
      type: Array,
      required: true
    }
  },
  components: {
    chart
  },
  computed: {
    pieChartData() {
      return {
        tooltip: {
          show: true,
          trigger: "item",
          // formatter: "{a} <br/>{b}: {c} ({d}%)",
          // formatter: params => {
          //   let data = params.data;
          //   this.count = data.value;
          // }
        },
        color: ['#00C3FF', 'rgb(144, 254, 160)', 'rgb(41, 183, 108)', 'rgb(6, 124, 224)', 'rgb(242, 217, 97)'],
        series: [
          {
            name: "",
            type: "pie",
            radius: ["65%", "80%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: false,
                textStyle: {
                  fontSize: "12",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: this.pieData
          }
        ]
      };
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "@/style/px2vw.scss";


.pie-chart-wrapper {
  width: 100%;
  height: 100%;
  position: relative;

  .chart-wrapper {
    width: 80%;
    height: 80%;
    position: absolute;
    top: 10%;
    left: 10%;
  }

  .item-count {
    display: block;
    width: pxTovw(60);
    color: #abfff8;
    font-size: pxTovw(24);
    text-align: center;
    position: absolute;
    top: pxTovw(64);
    left: 50%;
    transform: translateX(-50%);
  }

  .desc-title {
    display: block;
    width: pxTovw(120);
    height: pxTovw(30);
    color: #abfff8;
    font-size: pxTovw(14);
    text-align: center;
    position: absolute;
    top: pxTovw(88);
    left: 50%;
    transform: translateX(-50%);
  }

  .title {
    display: block;
    width: pxTovw(120);
    text-align: center;
    color: #00c3ff;
    font-size: pxTovw(14);
    position: absolute;
    top: pxTovw(160);
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
