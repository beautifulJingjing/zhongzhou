<template>
  <div class="alarm-msg-wrapper">
    <h3 class="title">异常反馈</h3>
    <div class="alarm alarm1">
      <!-- <div></div> -->
      <span>{{alarm1Count}}</span>
      <h3>一级告警</h3>

      <video class="video" src="~@/assets/screen/alarm1.mp4" loop muted autoplay></video>
    </div>
    <div class="alarm alarm2">
      <!-- <div></div> -->
      <span>{{alarm2Count}}</span>
      <h3>二级告警</h3>

      <video class="video" src="~@/assets/screen/alarm2.mp4" loop muted autoplay></video>
    </div>
    <div class="alarm alarm3">
      <!-- <div></div> -->
      <span>{{alarm3Count}}</span>
      <h3>三级告警</h3>

      <video class="video" src="~@/assets/screen/alarm3.mp4" loop muted autoplay></video>
    </div>
    <div class="alarm-content">
      <div class="list" v-for="(item, index) in alarmInfo" :key="index">
        <span class="item item1">{{item.siteName}}</span>
        <span class="item item2">{{item.name}}</span>
        <span class="item item3">{{item.waitTime}}</span>
        <span class="item item4">{{item.levelType}}</span>
      </div>
    </div>

    <video class="video alarm-bg" src="~@/assets/screen/alarm-bg.mp4" loop muted autoplay></video>
  </div>
</template>

<script>
export default {
  name: "meetingMsg",
  data() {
    return {
      alarm1Count: "0",
      alarm2Count: "0",
      alarm3Count: "0",
      alarmInfo: [
        {
          siteName: "益展大厦",
          name: "17层弱电间门禁控制",
          waitTime: "89:18",
          levelType: "二级告警"
        },
        {
          siteName: "益展大厦",
          name: "17层弱电间门禁控制",
          waitTime: "89:18",
          levelType: "二级告警"
        },
        {
          siteName: "益展大厦",
          name: "17层弱电间门禁控制",
          waitTime: "89:18",
          levelType: "二级告警"
        }
      ]
    };
  },
  created() {
    this.getAlarmCount();
    this.getAlarmInfo();
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
    },
    async getAlarmInfo() {
      const data = await this.$axios.get("/api/alarm/queryAllAlarmInfo");

      if (!data) {
        return;
      }

      let resData = data.data.data;
      this.alarmInfo = resData;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/px2vw.scss";

.alarm-msg-wrapper {
  width: pxTovw(965);
  height: pxTovw(230);
  // background: url(~@/assets/screen/alarm-bg.png) center center no-repeat;
  // background-size: 100% 100%;
  position: relative;

  .alarm-bg {
    width: pxTovw(965);
    height: pxTovw(230);
  }

  .title {
    color: #ffffff;
    font-size: pxTovw(28);
    font-family: "PingFangSC-Ultralight";
    font-weight: 200;
    position: absolute;
    left: pxTovw(801);
    top: pxTovw(18);
  }

  .alarm {
    width: pxTovw(114);
    height: pxTovw(144);
    position: absolute;

    span {
      display: block;
      width: pxTovw(32);
      height: pxTovw(32);
      text-align: center;
      line-height: pxTovw(32);
      font-size: pxTovw(18);
      position: absolute;
      left: 50%;
      top: 40%;
      transform: translate(-50%, -50%);
    }

    h3 {
      width: pxTovw(118);
      text-align: center;
      font-size: pxTovw(14);
      font-family: "PingFangSC-Regular";
      font-weight: 400;
      position: absolute;
      left: 50%;
      top: 85%;
      transform: translate(-50%, -50%);
    }

    .video {
      width: pxTovw(102);
      height: pxTovw(102);
      position: absolute;
      left: pxTovw(6);
      top: pxTovw(3);
    }
  }

  .alarm1 {
    left: pxTovw(50);
    top: pxTovw(63);

    span {
      color: #ff5c5c;
    }

    h3 {
      color: #ff5c5c;
    }
  }

  .alarm2 {
    left: pxTovw(170);
    top: pxTovw(63);

    span {
      color: #ff825c;
    }

    h3 {
      color: #ff825c;
    }
  }

  .alarm3 {
    left: pxTovw(290);
    top: pxTovw(63);

    span {
      color: #ffb85c;
    }

    h3 {
      color: #ffb85c;
    }
  }

  .alarm-content {
    width: pxTovw(500);
    height: pxTovw(140);
    box-sizing: border-box;
    position: absolute;
    left: pxTovw(428);
    top: pxTovw(70);

    .list {
      height: pxTovw(27);
      line-height: pxTovw(27);
      overflow: hidden;
      font-size: pxTovw(14);
      position: relative;
      cursor: pointer;
    }
    .list:nth-child(1) .item {
      color: #ff5c5c;
    }
    .list:nth-child(2) .item {
      color: #ff825c;
    }
    .list:nth-child(3) .item {
      color: #ffb85c;
    }
    .list:nth-child(4) .item {
      color: #ffb85c;
    }
    .list:nth-child(5) .item {
      color: #ff5c5c;
    }

    .list::before {
      content: "";
      display: inline-block;
      width: pxTovw(8);
      height: pxTovw(7);
      position: absolute;
      left: 0;
      top: pxTovw(10);
    }
    .list:nth-child(1)::before {
      background: #ff5c5c;
    }
    .list:nth-child(2)::before {
      background: #ff825c;
    }
    .list:nth-child(3)::before {
      background: #ffb85c;
    }
    .list:nth-child(4)::before {
      background: #ffb85c;
    }
    .list:nth-child(5)::before {
      background: #ff5c77;
    }

    .item1 {
      display: inline-block;
      width: pxTovw(80);
      overflow: hidden;
      position: absolute;
      left: pxTovw(16);
    }
    .list:nth-child(1) .item1 {
      color: #ff5c5c;
    }
    .list:nth-child(2) .item1 {
      color: #ff825c;
    }
    .list:nth-child(3) .item1 {
      color: #ffb85c;
    }
    .list:nth-child(4) .item1 {
      color: #ffb85c;
    }
    .list:nth-child(5) .item1 {
      color: #ff825c;
    }

    .item2 {
      display: inline-block;
      width: pxTovw(220);
      overflow: hidden;
      position: absolute;
      left: pxTovw(102);
    }
    .item3 {
      display: inline-block;
      width: pxTovw(75);
      overflow: hidden;
      position: absolute;
      left: pxTovw(330);
    }
    .item4 {
      display: inline-block;
      width: pxTovw(80);
      overflow: hidden;
      position: absolute;
      left: pxTovw(412);
    }
  }
}
</style>
