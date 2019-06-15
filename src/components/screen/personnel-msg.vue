<template>
  <div class="personnel-msg-wrapper">
    <transition name="slide-show">
      <div class="transition-content" v-if="personnelContent1Show">
        <h3 class="title">人员管理</h3>

        <progress-chart
          :chartRadius="personnelRadius"
          :percent="personnelPercent"
          :colors="personnelPieColor"
          :textColor="textColor1"
        ></progress-chart>
        <span class="pie-chart-desc">男女比例</span>
        <div class="icon-content">
          <span class="item item1">
            <span></span>
            男
          </span>
          <span class="item item2">
            <span></span>
            女
          </span>
        </div>

        <stacked-line-chart :chartData="personnelPieChartData" :colors="colors"></stacked-line-chart>
      </div>
    </transition>

    <transition name="slide-show">
      <div class="transition-content" v-if="personnelContent2Show">
        <h3 class="title">人员管理</h3>

        <progress-chart
          :chartRadius="personnelRadius"
          :percent="personnelPercent"
          :colors="personnelPieColor"
          :textColor="textColor1"
        ></progress-chart>
        <span class="pie-chart-desc">男女比例</span>
        <div class="icon-content">
          <span class="item item1">
            <span></span>
            男
          </span>
          <span class="item item2">
            <span></span>
            女
          </span>
        </div>

        <stacked-line-chart :chartData="personnelPieChartData" :colors="colors"></stacked-line-chart>
      </div>
    </transition>

    <video class="video" src="~@/assets/screen/plan-bg.mp4" loop muted autoplay></video>
  </div>
</template>

<script>
export default {
  name: "personnelMsg",
  data() {
    return {
      personnelPercent: 50,
      personnelPieColor: ["#A370DE", "#E1E744"],
      personnelRadius: ["70%", "85%"],
      // textColor1: "#079FCE",
      textColor1: "transparent",
      personnelPieChartData: [[120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90], [220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290]],
      colors: ["#A370DE", "#F2D961"],
      personnelContent1Show: true,
      personnelContent2Show: false
    };
  },
  mounted() {
    let i = 0;
    setInterval(() => {
      i++;
      
      if (i % 2) {
        this.personnelContent1Show = true;
        this.personnelContent2Show = false;
      } else {
        this.personnelContent1Show = false;
        this.personnelContent2Show = true;
      }
    }, 10000);
  },
  components: {}
};
</script>

<style lang="scss" scoped>
@import "@/style/px2vw.scss";

.personnel-msg-wrapper {
  width: pxTovw(621);
  height: pxTovw(269);
  // background: url(~@/assets/screen/plan-bg.png) center center no-repeat;
  // background-size: 100% 100%;
  position: relative;
  overflow: hidden;

  .video {
    width: pxTovw(621);
    height: pxTovw(269);
  }

  .transition-content {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
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

  .progress-chart-wrapper {
    width: pxTovw(128);
    height: pxTovw(128);
    position: absolute;
    left: pxTovw(40);
    top: pxTovw(50);
  }

  .pie-chart-desc {
    color: #079fce;
    font-size: pxTovw(16);
    width: pxTovw(39);
    text-align: center;
    position: absolute;
    left: pxTovw(84);
    top: pxTovw(94);
  }

  .icon-content {
    width: pxTovw(122);
    position: absolute;
    left: pxTovw(60);
    top: pxTovw(194);

    .item {
      display: inline-block;
      width: pxTovw(45);
      height: pxTovw(26);
      color: #079fce;
      text-align: left;
      font-size: pxTovw(14);
      padding-left: pxTovw(16);
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
      background: #e1e744;
    }

    .item2 span {
      background: #a370de;
    }
  }

  .stacked-line-chart-wrapper {
    width: pxTovw(416);
    height: pxTovw(175);
    position: absolute;
    left: pxTovw(174);
    top: pxTovw(70);
  }
}
</style>
