<template>
  <div class="daily-msg-wrapper">
    <h3 class="title">每日速报</h3>
    <span class="tip tip1">A</span>
    <progress-chart
      class="progress-chart1"
      :percent="percent1"
      :chartRadius="chartRadius"
      :colors="color1"
      :textColor="textColor1"
    ></progress-chart>

    <span class="tip tip2">B</span>
    <progress-chart
      class="progress-chart2"
      :percent="percent2"
      :chartRadius="chartRadius"
      :colors="color2"
      :textColor="textColor2"
    ></progress-chart>

    <span class="tip tip3">C</span>
    <progress-chart
      class="progress-chart3"
      :percent="percent3"
      :chartRadius="chartRadius"
      :colors="color3"
      :textColor="textColor3"
    ></progress-chart>

    <span class="tip tip4">D</span>
    <progress-chart
      class="progress-chart4"
      :percent="percent4"
      :chartRadius="chartRadius"
      :colors="color4"
      :textColor="textColor4"
    ></progress-chart>

    <radar-chart :chartData="radarChartData"></radar-chart>

    <div class="icon-content">
      <span class="item item1">
        <span></span>
        A: 计划完成率
      </span>
      <span class="item item2">
        <span></span>
        B: 费用收缴率
      </span>
      <span class="item item3">
        <span></span>
        C: 汇报完成率
      </span>
      <span class="item item4">
        <span></span>
        D: 满意度
      </span>
    </div>

    <video class="video" src="~@/assets/screen/staff-bg.mp4" loop muted autoplay></video>
  </div>
</template>

<script>
export default {
  name: "DailyMsg",
  data() {
    return {
      chartRadius: ['70%', '86%'],
      percent1: 80,
      color1: ["#0797FF", '#225B7A'],
      textColor1: "#ABFFF8",
      percent2: 90,
      color2: ["#90FEA0", '#225B7A'],
      textColor2: "#ABFFF8",
      percent3: 85,
      color3: ["#29B76C", '#225B7A'],
      textColor3: "#ABFFF8",
      percent4: 95,
      color4: ["#0058DB", '#225B7A'],
      textColor4: "#ABFFF8",
      radarChartData: [45, 90, 85, 60]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/px2vw.scss";

.daily-msg-wrapper {
  width: pxTovw(939);
  height: pxTovw(289);
  // background: url(~@/assets/screen/staff-bg.png) center center no-repeat;
  // background-size: 100% 100%;
  position: relative;

  .video {
    width: pxTovw(939);
    height: pxTovw(289);
  }

  .title {
    color: #ffffff;
    font-size: pxTovw(28);
    font-family: "PingFangSC-Ultralight";
    font-weight: 200;
    position: absolute;
    left: pxTovw(773);
    top: pxTovw(14);
  }

  .tip {
    color: #00c3ff;
    font-size: pxTovw(24);
    font-family: "zqk";
    font-weight: normal;
    position: absolute;
  }

  .tip1 {
    left: pxTovw(72);
    top: pxTovw(80);
  }

  .progress-chart1 {
    width: pxTovw(101);
    height: pxTovw(101);
    position: absolute;
    left: pxTovw(96);
    top: pxTovw(44);
  }

  .tip2 {
    left: pxTovw(236);
    top: pxTovw(80);
  }

  .progress-chart2 {
    width: pxTovw(101);
    height: pxTovw(101);
    position: absolute;
    left: pxTovw(260);
    top: pxTovw(44);
  }

  .tip3 {
    left: pxTovw(122);
    top: pxTovw(190);
  }

  .progress-chart3 {
    width: pxTovw(101);
    height: pxTovw(101);
    position: absolute;
    left: pxTovw(146);
    top: pxTovw(150);
  }

  .tip4 {
    left: pxTovw(286);
    top: pxTovw(190);
  }

  .progress-chart4 {
    width: pxTovw(101);
    height: pxTovw(101);
    position: absolute;
    left: pxTovw(310);
    top: pxTovw(150);
  }

  .radar-chart-wrapper {
    width: pxTovw(289);
    height: pxTovw(269);
    position: absolute;
    left: pxTovw(440);
    top: pxTovw(2);
  }


  .icon-content {
    width: pxTovw(142);
    height: pxTovw(130);
    position: absolute;
    left: pxTovw(741);
    top: pxTovw(92);
    box-sizing: border-box;

    .item {
      display: inline-block;
      width: pxTovw(140);
      height: pxTovw(26);
      color: #03CBD7;
      text-align: left;
      font-size: pxTovw(14);
      padding-left: pxTovw(26);
      position: relative;

      span {
        display: inline-block;
        width: pxTovw(11);
        height: pxTovw(11);
        position: absolute;
        left: pxTovw(0);
        top: pxTovw(7);
      }
    }

    .item1 span {
      background: #03CBD7;
    }

    .item2 span {
      background: #90FEA0;
    }

    .item3 span {
      background: #29B76C;
    }

    .item4 span {
      background: #0058DB;
    }
  }
}
</style>
