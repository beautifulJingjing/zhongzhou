<template>
  <div class="energy-msg-wrapper">
    <transition name="slide-show">
      <div class="transition-content" v-if="energyContent1Show">
        <h3 class="title">能耗管理</h3>

        <div class="percent-box">
          <progress-chart
            :chartRadius="energyRadius"
            :percent="energyPercent"
            :colors="energyPieColor"
            :textColor="textColor1"
          ></progress-chart>
          <div class="icon-box"></div>
          <div class="num-box">{{energyValue}}</div>

          <!-- <video class="video alarm-bg" src="~@/assets/screen/parking-circle.mp4" loop muted autoplay></video> -->
        </div>

        <span class="item item1" :class="{actived: curItem == 1}" @click="changeItem(1)">用电</span>
        <!-- <span class="item item2" :class="{actived: curItem == 2}" @click="changeItem(2)">用水</span> -->
        <stacked-line-chart :chartData="energyChartData" :colors="colors"></stacked-line-chart>
      </div>
    </transition>

    <transition name="slide-show">
      <div class="transition-content" v-if="energyContent2Show">
        <h3 class="title">能耗管理</h3>

        <div class="percent-box">
          <progress-chart
            :chartRadius="energyRadius"
            :percent="energyPercent"
            :colors="energyPieColor"
            :textColor="textColor1"
          ></progress-chart>
          <div class="icon-box"></div>
          <div class="num-box">{{energyValue}}</div>

          <!-- <video class="video alarm-bg" src="~@/assets/screen/parking-circle.mp4" loop muted autoplay></video> -->
        </div>

        <span class="item item1" :class="{actived: curItem == 1}" @click="changeItem(1)">用电</span>
        <!-- <span class="item item2" :class="{actived: curItem == 2}" @click="changeItem(2)">用水</span> -->
        <stacked-line-chart :chartData="energyChartData" :colors="colors"></stacked-line-chart>
      </div>
    </transition>

    <video class="video" src="~@/assets/screen/operate-bg.mp4" loop muted autoplay></video>
  </div>
</template>

<script>
export default {
  name: "energyMsg",
  data() {
    return {
      // width: 150,
      // height: 150,
      // percent: 80,
      // radius: 40,
      energyPercent: 100,
      energyRadius: ["96%", "99%"],
      energyPieColor: ["#7ADFFF", "#000"],
      textColor1: "transparent",
      energyValue: "35180KW",
      curItem: 1, // 1,用电 2,用水,
      energyChartData: [],
      // colors: ["#909AFF", "#32B16C"],
      colors: ["#909AFF", "transparent"],
      energyContent1Show: true,
      energyContent2Show: false
    };
  },
  created() {
    this.getWaterData();
  },
  mounted() {
    let i = 0;
    setInterval(() => {
      i++;
        
      if (i % 2) {
        this.energyContent1Show = true;
        this.energyContent2Show = false;
      } else {
        this.energyContent1Show = false;
        this.energyContent2Show = true;
      }
    }, 10000);
  },
  watch: {
    curItem: function(val) {}
  },
  methods: {
    changeItem(val) {
      this.curItem = val;
    },
    async getWaterData() {
      const params = {
        parkId: 1
      };
      const data = await this.$axios.get("/api/energy/queryEnergyData", {
        params
      });

      if (!data) {
        return;
      }
      let resData = data.data.data;

      let energyValue = 0;
      let areaData = [];
      if (resData.length > 0) {
        resData.map(item => {
          energyValue += item.powerDecimal;
          areaData.push(item.powerDecimal);
        });
      }
      this.energyChartData = [areaData, []];
      this.energyValue = parseInt(energyValue) + 'KW';
    },
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/px2vw.scss";

.energy-msg-wrapper {
  width: pxTovw(681);
  height: pxTovw(269);
  // background: url(~@/assets/screen/operate-bg.png) center center no-repeat;
  // background-size: 100% 100%;
  position: relative;
  overflow: hidden;

  .video {
    width: pxTovw(681);
    height: pxTovw(269);
  }

  .title {
    color: #ffffff;
    font-size: pxTovw(28);
    font-family: "PingFangSC-Ultralight";
    font-weight: 200;
    position: absolute;
    left: pxTovw(514);
    top: pxTovw(18);
  }

  .percent-box {
    width: pxTovw(136);
    height: pxTovw(136);
    background: url(~@/assets/screen/parking-circle-bg.png) center center
      no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left: pxTovw(69);
    top: pxTovw(70);

    .video {
      width: pxTovw(190);
      height: pxTovw(195);
    }

    .progress-chart-wrapper {
      width: pxTovw(120);
      height: pxTovw(120);
      position: absolute;
      left: pxTovw(8);
      top: pxTovw(8);
    }

    .icon-box {
      width: pxTovw(40);
      height: pxTovw(56);
      box-sizing: border-box;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: pxTovw(20);
      background: url(~@/assets/screen/ico_flash.png) center center no-repeat;
      background-size: 100% 100%;
    }

    .num-box {
      width: pxTovw(96);
      height: pxTovw(30);
      box-sizing: border-box;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: pxTovw(72);
      font-size: pxTovw(24);
      font-family: "zqk";
      text-align: center;
      line-height: pxTovw(30);
      color: #7adfff;
    }
  }

  .item {
    display: block;
    width: pxTovw(42);
    height: pxTovw(16);
    text-align: center;
    font-size: pxTovw(18);
    color: #03cbd7;
    position: absolute;
    top: pxTovw(40);
    cursor: pointer;
  }
  .item.actived {
    color: #00c3ff;
  }

  .item1 {
    left: pxTovw(240);
  }

  .item2 {
    left: pxTovw(315);
  }

  .stacked-line-chart-wrapper {
    width: pxTovw(416);
    height: pxTovw(175);
    position: absolute;
    left: pxTovw(220);
    top: pxTovw(70);
  }
}
</style>
