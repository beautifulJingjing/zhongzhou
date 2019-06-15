<template>
  <div class="device-msg-wrapper">
    <h3 class="title">设备管理</h3>
    <div class="alarm alarm1">
      <!-- <div></div> -->
      <span>{{alarm1Count}}</span>
      <h3>火警</h3>

      <video class="video" src="~@/assets/screen/alarm1.mp4" loop muted autoplay></video>
    </div>
    <div class="alarm alarm2">
      <!-- <div></div> -->
      <span>{{alarm2Count}}</span>
      <h3>故障</h3>

      <video class="video" src="~@/assets/screen/alarm2.mp4" loop muted autoplay></video>
    </div>
    <div class="alarm alarm3">
      <!-- <div></div> -->
      <span>{{alarm3Count}}</span>
      <h3>反馈</h3>

      <video class="video" src="~@/assets/screen/alarm3.mp4" loop muted autoplay></video>
    </div>
    <div class="alarm-content">
      <p class="tip1">主机故障信息:</p>
      <div class="direction-bg"></div>
      <p class="tip2">
        管道压力是否预警:
        <span v-if="isAlarm">是</span>
        <span v-else>否</span>
      </p>
    </div>

    <video class="video device-bg" src="~@/assets/screen/device-bg.mp4" loop muted autoplay></video>
  </div>
</template>

<script>
export default {
  name: "deviceMsg",
  data() {
    return {
      alarm1Count: "0",
      alarm2Count: "0",
      alarm3Count: "0",
      isAlarm: 0
    };
  },
  created() {
    this.getAlarmCount();
  },
  methods: {
    async getAlarmCount() {
      const data = await this.$axios.get("/api/alarm/queryLevelCount");

      if (!data) {
        return;
      }
      let resData = data.data.data;
      this.alarm1Count = resData.level1;
      this.alarm2Count = resData.level2;
      this.alarm3Count = resData.level3;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/px2vw.scss";

.device-msg-wrapper {
  width: pxTovw(745);
  height: pxTovw(230);
  background: url(~@/assets/screen/device-bg.png) center center no-repeat;
  background-size: 100% 100%;
  position: relative;

  .device-bg {
    width: pxTovw(745);
    height: pxTovw(230);
  }

  .title {
    color: #ffffff;
    font-size: pxTovw(28);
    font-family: "PingFangSC-Ultralight";
    font-weight: 200;
    position: absolute;
    left: pxTovw(576);
    top: pxTovw(18);
  }

  .alarm {
    width: pxTovw(138);
    height: pxTovw(144);
    position: absolute;
    top: pxTovw(81);

    span {
      display: block;
      width: pxTovw(32);
      height: pxTovw(32);
      text-align: center;
      line-height: pxTovw(32);
      font-size: pxTovw(18);
      position: absolute;
      left: pxTovw(75);
      top: pxTovw(38);
    }

    h3 {
      width: pxTovw(36);
      text-align: center;
      font-size: pxTovw(14);
      font-family: "PingFangSC-Regular";
      font-weight: 400;
      position: absolute;
      left: 0%;
      top: 28%;
    }

    .video {
      width: pxTovw(94);
      height: pxTovw(94);
      position: absolute;
      left: pxTovw(44);
      top: pxTovw(3);
    }
  }

  .alarm1 {
    left: pxTovw(272);

    span {
      color: #ff5c5c;
    }

    h3 {
      color: #ff5c5c;
    }
  }

  .alarm2 {
    left: pxTovw(424);

    span {
      color: #ff825c;
    }

    h3 {
      color: #ff825c;
    }
  }

  .alarm3 {
    left: pxTovw(576);

    span {
      color: #ffb85c;
    }

    h3 {
      color: #ffb85c;
    }
  }

  .alarm-content {
    width: pxTovw(200);
    height: pxTovw(156);
    position: absolute;
    left: pxTovw(60);
    top: pxTovw(50);

    .tip1 {
      color: #00c3ff;
      font-size: pxTovw(18);
      font-family: "PingFangSC-Regular";
      font-weight: 400;
      position: absolute;
      left: pxTovw(36);
      top: pxTovw(16);
    }

    .direction-bg {
      width: pxTovw(156);
      height: pxTovw(38);
      background: url(~@/assets/screen/direction.png) center center no-repeat;
      background-size: 100% 100%;
      position: absolute;
      left: pxTovw(36);
      top: pxTovw(44);
    }

    .tip2 {
      color: #00c3ff;
      font-size: pxTovw(18);
      font-family: "PingFangSC-Regular";
      font-weight: 400;
      position: absolute;
      left: pxTovw(0);
      top: pxTovw(110);
    }
  }
}
</style>
