<template>
  <div class="operate-msg-wrapper">
    <h3 class="title">经营数据</h3>

    <isys-select :selectOptions="selectOptions" @selectChange="selectChange"></isys-select>

    <span class="item item1" :class="{actived: curItem == 1}" @click="changeItem(1)">产值</span>
    <span class="item item2" :class="{actived: curItem == 2}" @click="changeItem(2)">收入</span>
    <span class="item item3" :class="{actived: curItem == 3}" @click="changeItem(3)">纳税</span>

    <!-- <banner :width="120" :height="30" :itemNum="7" :lineNum="3" :isColumn="0"></banner> -->

    <bar-chart :barData="barData"></bar-chart>

    <video class="video" src="~@/assets/screen/operate-bg.mp4" loop muted autoplay></video>
  </div>
</template>

<script>
export default {
  name: "operateMsg",
  data() {
    return {
      barData: [
        "8511.06",
        "34065.08",
        "4286.41",
        "2891.98",
        "12971.56",
        "7765.92",
        "8536.31",
        "15209.42",
        "6419.48",
        "9752.76",
        "16818.08",
        "29083.54"
      ],
      selectOptions: [
        { text: "2019年", value: "1" },
        { text: "2018年", value: "2" },
        { text: "2017年", value: "3" }
      ],
      comYear: 0,
      curYear: "2019",
      curItem: 2 // 1,产值 2,收入 3,纳税
    };
  },
  created() {
    this.comYear = new Date().getFullYear();

    this.getOperateYearData();
    this.searchOperateData();
  },
  watch: {
    curYear: function(val) {
      this.searchOperateData();
    },
    curItem: function(val) {
      this.searchOperateData();
    }
  },
  methods: {
    async getOperateYearData() {
      const data = await this.$axios.get("/api/group/queryRevenueYear");

      if (!data) {
        return;
      }

      let resData = data.data.data;
      this.selectOptions = resData.map(item => {
        return {
          text: item + "年",
          value: (this.comYear - item + 1).toString()
        };
      });

      this.curYear = resData[resData.length - 1].toString();
    },
    async searchOperateData() {
      const params = {
        year: this.curYear
      };
      const data = await this.$axios.get("/api/group/queryRevenueDataByYear", {
        params
      });

      if (!data) {
        return;
      }
      let resData = data.data.data;
      if (this.curItem == 1) {
        var outData = [];
        resData.outputValue.map(item => {
          outData.push(item.value);
        });
        this.barData = outData;
      } else if (this.curItem == 2) {
        var incomeData = [];
        resData.income.map(item => {
          incomeData.push(item.value);
        });
        this.barData = incomeData;
      } else if (this.curItem == 3) {
        var taxData = [];
        resData.tax.map(item => {
          taxData.push(item.value);
        });
        this.barData = taxData;
      }
    },
    selectChange(val) {
      this.curYear = (this.comYear - val + 1).toString();
    },
    changeItem(val) {
      this.curItem = val;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/px2vw.scss";

.operate-msg-wrapper {
  width: pxTovw(681);
  height: pxTovw(269);
  // background: url(~@/assets/screen/operate-bg.png) center center no-repeat;
  // background-size: 100% 100%;
  position: relative;

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

  .isys-select-wrapper {
    width: pxTovw(122);
    position: absolute;
    left: pxTovw(58);
    top: pxTovw(28);
  }

  .item {
    display: block;
    width: pxTovw(40);
    height: pxTovw(16);
    text-align: center;
    font-size: pxTovw(14);
    color: rgba(0, 195, 255, 0.5);
    position: absolute;
    top: pxTovw(34);
    cursor: pointer;
  }
  .item.actived {
    color: #00c3ff;
  }

  .item1 {
    left: pxTovw(246);
  }

  .item2 {
    left: pxTovw(314);
  }

  .item3 {
    left: pxTovw(382);
  }

  .bar-chart-wrapper {
    width: pxTovw(495);
    height: pxTovw(175);
    position: absolute;
    left: pxTovw(90);
    top: pxTovw(72);
  }
}
</style>
