<template>
  <div class="flow-msg-wrapper">
    <h3 class="title">人流统计</h3>

    <flow-smooth-line-chart :chartData="flowChartData"></flow-smooth-line-chart>

    <video class="video" src="~@/assets/screen/plan-bg.mp4" loop muted autoplay></video>
  </div>
</template>

<script>
import FlowSmoothLineChart from "./flow-smooth-line-chart";

export default {
  name: "FlowMsg",
  data() {
    return {
      flowChartData: []
    };
  },
  components: {
    FlowSmoothLineChart
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/px2vw.scss";

.flow-msg-wrapper {
  width: pxTovw(621);
  height: pxTovw(269);
  // background: url(~@/assets/screen/plan-bg.png) center center no-repeat;
  // background-size: 100% 100%;
  position: relative;

  .video {
    width: pxTovw(621);
    height: pxTovw(269);
  }

  .title {
    color: #ffffff;
    font-size: pxTovw(28);
    font-family: "PingFangSC-Ultralight";
    font-weight: 200;
    position: absolute;
    left: pxTovw(454);
    top: pxTovw(18);
  }

  .flow-smooth-line-chart-wrapper {
    width: pxTovw(505);
    height: pxTovw(175);
    position: absolute;
    left: pxTovw(75);
    top: pxTovw(72);
  }
}
</style>
