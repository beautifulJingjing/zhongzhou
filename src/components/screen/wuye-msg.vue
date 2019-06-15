<template>
  <div class="wuye-msg-wrapper" @click="showWuyeInit('wuyeInit')">
    <h3 class="title" @click.stop="showWuyeBullet">智慧物业</h3>

    <span class="item item1" :class="{actived: curItem == 1}" @click.stop="changeItem(1)">能耗</span>
    <span class="item item2" :class="{actived: curItem == 2}" @click.stop="changeItem(2)">停车</span>
    <span class="item item3" :class="{actived: curItem == 3}" @click.stop="changeItem(3)">访客</span>
    <isys-select :selectOptions="selectOptions" @selectChange="selectChange"></isys-select>

    <WuyeBasicAreaChart :chartData="areaData"></WuyeBasicAreaChart>

    <div class="percent-box">
      <progress-chart
        :chartRadius="parkingRadius"
        :percent="parkingPercent"
        :colors="parkingPieColor"
        :textColor="textColor1"
      ></progress-chart>
      <div class="car-box"></div>
      <div class="num-box">{{carPercent}}</div>

      <video class="video alarm-bg" src="~@/assets/screen/parking-circle.mp4" loop muted autoplay></video>
    </div>

    <video class="video" src="~@/assets/screen/wuye-bg.mp4" loop muted autoplay></video>
  </div>
</template>

<script>
import WuyeBasicAreaChart from "./wuye-basic-area-chart";

export default {
  name: "WuyeMsg",
  data() {
    return {
      selectOptions: [
        { text: "全部", value: "0" },
        { text: "益展大厦", value: "1" },
        { text: "三深大厦", value: "2" }
      ],
      areaData: [],
      parkingPercent: 80,
      parkingRadius: ["96%", "99%"],
      parkingPieColor: ["#7ADFFF", "#000"],
      textColor1: "transparent",
      carPercent: "750/900",
      curPark: "1", // 当前大厦
      curItem: 2 // 1,能耗 2,停车 3,访客'
    };
  },
  watch: {
    curPark: function(val) {
      if (this.curItem == 1) {
        this.getEnergyData();
      } else if (this.curItem == 2) {
        this.getCarData();
      } else if (this.curItem == 3) {
        this.getVisitorData();
      }
    },
    curItem: function(val) {
      if (val == 1) {
        this.getEnergyData();
      } else if (val == 2) {
        this.getCarData();
      } else if (val == 3) {
        this.getVisitorData();
      }
    }
  },
  created() {
    this.getCarData();
  },
  methods: {
    async getCarData() {
      const params = {
        parkId: this.curPark
      };
      const data = await this.$axios.get("/api/parking/queryParkingData", {
        params
      });

      if (!data) {
        return;
      }
      let resData = data.data.data;
      let areaData = [];
      resData.timePointDataList.map(item => {
        areaData.push(item.number);
      });
      this.areaData = areaData;

      
      this.parkingPercent = (resData.currentNumber / resData.totalNumber) * 100;
      this.carPercent = resData.currentNumber + "/" + resData.totalNumber;
    },
    async getEnergyData() {
      const params = {
        parkId: this.curPark
      };
      const data = await this.$axios.get("/api/energy/queryEnergyData", {
        params
      });

      if (!data) {
        return;
      }
      let resData = data.data.data;
      let areaData = [];
      if (resData.length > 0) {
        resData.map(item => {
          areaData.push(item.powerDecimal);
        });
      }
      this.areaData = areaData;
    },
    async getVisitorData() {
      const params = {
        parkId: this.curPark
      };
      const data = await this.$axios.get("/api/visitor/queryVisitorData", {
        params
      });

      if (!data) {
        return;
      }
      let resData = data.data.data;
      let areaData = [];
      if (resData.length > 0) {
        resData.map(item => {
          areaData.push(item.number);
        });
      }
      this.areaData = areaData;
    },
    selectChange(val) {
      this.curPark = val;
    },
    changeItem(val) {
      this.curItem = val;
    },
    showWuyeBullet() {
      this.$emit("showWuyeBullet");
    },
    showWuyeInit() {
      this.$emit('showWuyeInit');
    }
  },
  components: {
    WuyeBasicAreaChart
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/px2vw.scss";

.wuye-msg-wrapper {
  width: pxTovw(729);
  height: pxTovw(349);
  // background: url(~@/assets/screen/wuye-bg.png) center center no-repeat;
  // background-size: 100% 100%;
  position: relative;

  .video {
    width: pxTovw(729);
    height: pxTovw(349);
  }

  .title {
    color: #ffffff;
    font-size: pxTovw(28);
    font-family: "PingFangSC-Ultralight";
    font-weight: 200;
    position: absolute;
    left: pxTovw(37);
    top: pxTovw(18);
    cursor: pointer;
  }

  .item {
    display: block;
    width: pxTovw(42);
    height: pxTovw(16);
    text-align: center;
    font-size: pxTovw(18);
    color: rgba(0, 195, 255, 0.5);
    position: absolute;
    top: pxTovw(44);
    cursor: pointer;
  }
  .item.actived {
    color: #00c3ff;
  }

  .item1 {
    left: pxTovw(221);
  }

  .item2 {
    left: pxTovw(292);
  }

  .item3 {
    left: pxTovw(362);
  }

  .isys-select-wrapper {
    width: pxTovw(122);
    position: absolute;
    left: pxTovw(432);
    top: pxTovw(40);
  }

  .wuye-basic-area-chart-wrapper {
    width: pxTovw(385);
    height: pxTovw(194);
    position: absolute;
    left: pxTovw(50);
    top: pxTovw(110);
  }

  .percent-box {
    width: pxTovw(190);
    height: pxTovw(195);
    // background: url(~@/assets/screen/parking-circle.png) center center no-repeat;
    // background-size: 100% 100%;
    position: absolute;
    left: pxTovw(495);
    top: pxTovw(118);

    .video {
      width: pxTovw(190);
      height: pxTovw(195);
    }

    .progress-chart-wrapper {
      width: pxTovw(126);
      height: pxTovw(126);
      position: absolute;
      left: pxTovw(33);
      top: pxTovw(38);
    }

    .car-box {
      width: pxTovw(47);
      height: pxTovw(35);
      box-sizing: border-box;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: pxTovw(62);
      background: url(~@/assets/screen/car.png) center center no-repeat;
      background-size: 100% 100%;
    }

    .num-box {
      width: pxTovw(96);
      height: pxTovw(30);
      box-sizing: border-box;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: pxTovw(98);
      font-size: pxTovw(24);
      text-align: center;
      line-height: pxTovw(30);
      color: #b5bcff;
    }
  }
}
</style>
