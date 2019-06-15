<template>
  <div class="plan-msg-wrapper">
    <!-- <h3 class="title">计划管控</h3> -->

    <transition name="slide-fade">
      <div v-show="planContent1Show">
        <h3 class="title">计划管控</h3>

        <PlanStackedLineChart :chartData="planChartData"></PlanStackedLineChart>

        <div class="icon-content">
          <span class="item item1">
            中宙控股
            <span></span>
          </span>
          <span class="item item2">
            中宙投资
            <span></span>
          </span>
          <span class="item item3">
            中宙建工
            <span></span>
          </span>
          <span class="item item4">
            中宙物业
            <span></span>
          </span>
          <span class="item item5">
            澜海生态农业
            <span></span>
          </span>
        </div>
      </div>
    </transition>

    <video class="video" src="~@/assets/screen/plan-bg.mp4" loop muted autoplay></video>
  </div>
</template>

<script>
import PlanStackedLineChart from "./plan-stacked-line-chart";

export default {
  name: "PlanMsg",
  data() {
    return {
      planChartData: [],
      planContent1Show: true,
      planContent2Show: false
    };
  },
  components: {
    PlanStackedLineChart
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/px2vw.scss";

.plan-msg-wrapper {
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

  .plan-stacked-line-chart-wrapper {
    width: pxTovw(420);
    height: pxTovw(190);
    position: absolute;
    left: pxTovw(40);
    top: pxTovw(60);
  }

  .icon-content {
    width: pxTovw(142);
    height: pxTovw(134);
    position: absolute;
    left: pxTovw(459);
    top: pxTovw(86);
    box-sizing: border-box;

    .item {
      display: inline-block;
      width: pxTovw(110);
      height: pxTovw(26);
      color: #00c3ff;
      text-align: right;
      font-size: pxTovw(14);
      position: relative;

      span {
        display: inline-block;
        width: pxTovw(11);
        height: pxTovw(11);
        position: absolute;
        left: pxTovw(124);
        top: pxTovw(7);
      }
    }

    .item1 span {
      background: #07c2ff;
    }

    .item2 span {
      background: #90fea0;
    }

    .item3 span {
      background: #29b76c;
    }

    .item4 span {
      background: #007ddb;
    }

    .item5 span {
      background: #f2d961;
    }
  }
}
</style>
