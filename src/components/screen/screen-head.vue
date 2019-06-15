<template>
  <div class="screen-head-wrapper">
    <div class="head-title"></div>
    <div class="status-bar status-bar1"></div>
    <div class="status-bar status-bar2"></div>
    <div class="status-bar status-bar3"></div>
    <div class="status-bar status-bar4"></div>
    <div class="group-info">
      <h3>集团动态</h3>
      <p>{{grounInfo}}</p>
    </div>
    <div class="group-video" @click="showGroupVideo">
      <h3>播放企业宣传片</h3>
    </div>
    <div class="wea-title wea-title1">
      <h3 class="title1">{{weatherInfo.temperature}}</h3>
      <h4 class="title2">{{weatherInfo.temperatureDesc}}</h4>
    </div>
    <div class="wea-title wea-title2">
      <h3 class="title1">{{weatherInfo.humidity}}</h3>
      <h4 class="title2">{{weatherInfo.humidityDesc}}</h4>
    </div>
    <div class="wea-title wea-title3">
      <h3 class="title1">{{weatherInfo.air}}</h3>
      <h4 class="title2">{{weatherInfo.airDesc}}</h4>
    </div>
    <div class="wea-title wea-title4">
      <h3 class="title1">{{weatherInfo.roomTemp}}</h3>
      <h4 class="title2">{{weatherInfo.roomTempDesc}}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScreenHead",
  data() {
    return {
      grounInfo: "2019年集团人事变动公告",
    };
  },
  props: {
    weatherInfo: {
      type: Object,
      required: true
    }
  },
  methods: {
    showGroupVideo() {
      this.$emit('showGroupVideo');
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/px2vw.scss";

.screen-head-wrapper {
  width: pxTovw(3195);
  height: pxTovw(144);
  position: relative;
  background: url(~@/assets/screen/head-title-bg.png) center center no-repeat;
  background-size: 100% 100%;

  .head-title {
    width: pxTovw(545);
    height: pxTovw(73);
    background: url(~@/assets/screen/screen-head-title.png) center center
      no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: pxTovw(15);
    left: 46%;
  }

  .status-bar {
    width: pxTovw(67);
    height: pxTovw(57);
    background: url(~@/assets/screen/status-bar-bg.png) center center no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: pxTovw(52);
  }

  .status-bar1 {
    left: 25%;
  }
  .status-bar2 {
    left: 35%;
  }
  .status-bar3 {
    left: 70%;
  }
  .status-bar4 {
    left: 77%;
  }

  .group-info {
    width: pxTovw(272);
    height: pxTovw(60);
    font-family: PingFangSC-Regular;
    font-weight: 400;
    text-align: center;
    position: absolute;
    left: 17%;
    top: pxTovw(68);

    h3 {
      font-size: pxTovw(24);
      color: #7ADFFF;
    }

    p {
      font-size: pxTovw(18);
      color: #00C3FF;
    }
  }

  .group-video {
    width: pxTovw(240);
    position: absolute;
    left: pxTovw(870);
    top: pxTovw(81);
    cursor: pointer;

    h3 {
      font-size: pxTovw(24);
      color: #7adfff;
      padding-left: pxTovw(49);
    }

    h3::before {
      content: "";
      width: pxTovw(32);
      height: pxTovw(32);
      background: url(~@/assets/screen/ico_play.png) center center no-repeat;
      background-size: 100% 100%;
      position: absolute;
      left: 3px;
    }
  }

  .wea-title {
    width: pxTovw(84);
    height: pxTovw(60);
    position: absolute;
    top: pxTovw(68);

    .title1 {
      height: pxTovw(28);
      font-size: pxTovw(30);
      color: #7adfff;
      text-align: center;
      font-family: "zqk";
      font-weight: 500;
    }

    .title2 {
      height: pxTovw(21);
      margin-top: 5px;
      font-size: pxTovw(18);
      color: #00c3ff;
      text-align: center;
      font-family: PingFangSC-Regular;
      font-weight: 400;
    }
  }
  .wea-title1 {
    left: pxTovw(1210);
  }
  .wea-title2 {
    left: pxTovw(2145);
  }
  .wea-title3 {
    left: pxTovw(2350);
  }
  .wea-title4 {
    left: pxTovw(2565);
  }
}
</style>
