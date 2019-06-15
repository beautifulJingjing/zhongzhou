<template>
  <div class="industry-msg-wrapper" @click="showGroupInit('groupinit')">
    <h3 class="title" @click.stop="showZhongzhou('zhongzhou')">产业架构</h3>
    <div class="item item1" @click.stop="showIframe(companyInfo.url1)">
      <div class="item-logo"></div>
      <h3>{{companyInfo.name1}}</h3>
    </div>
    <div class="item item2" @click.stop="showIframe(companyInfo.url2)">
      <div class="item-logo"></div>
      <h3>{{companyInfo.name2}}</h3>
    </div>
    <div class="item item3" @click.stop="showIframe(companyInfo.url3)">
      <div class="item-logo"></div>
      <h3>{{companyInfo.name3}}</h3>
    </div>

    <div class="item item4" @click.stop="showIframe(companyInfo.url4)">
      <div class="item-logo"></div>
      <h3>{{companyInfo.name4}}</h3>
    </div>
    <div class="item item5" @click.stop="showIframe(companyInfo.url5)">
      <div class="item-logo"></div>
      <h3>{{companyInfo.name5}}</h3>
    </div>
    <div class="item item6" @click.stop="showIframe(companyInfo.url6)">
      <div class="item-logo"></div>
      <h3>{{companyInfo.name6}}</h3>
    </div>
    <div class="item item7" @click.stop="showIframe(companyInfo.url7)">
      <div class="item-logo"></div>
      <h3>{{companyInfo.name7}}</h3>
    </div>
    <div class="item item8" @click.stop="showIframe(companyInfo.url8)">
      <div class="item-logo"></div>
      <h3>{{companyInfo.name8}}</h3>
    </div>

    <video class="video" src="~@/assets/screen/industry-bg.mp4" loop muted autoplay></video>
  </div>
</template>

<script>
export default {
  name: "industryMsg",
  data() {
    return {
      companyInfo: {
        name1: "中宙控股集团",
        url1: "http://www.zzkgjt.cn/",
        name2: "中宙投资",
        url2: "http://www.zzkgjt.cn/product.html",
        name3: "中宙建工",
        url3: "http://www.zzkgjt.cn/product/construction.html",
        name4: "中宙物业",
        url4: "http://www.zzkgjt.cn/product/property.html",
        name5: "澜海生态农业",
        url5: "http://www.zzkgjt.cn/product/agriculture.html",
        name6: "问源环保",
        url6: "http://www.wenyuanenviron.com/",
        name7: "中宙信天翁",
        url7: "http://www.hzalbatross.com/",
        name8: "指令集",
        url8: "http://www.isyscore.com/"
      }
    };
  },
  methods: {
    showIframe(val) {
      this.$emit("showGroupIframe", val);
    },
    showZhongzhou(val) {
      this.$emit("showZhongzhou", val);
    },
    showGroupInit(val) {
      this.$emit("showGroupInit", val);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/px2vw.scss";

.industry-msg-wrapper {
  width: pxTovw(691);
  height: pxTovw(348);
  // background: url(~@/assets/screen/industry-bg.png) center center no-repeat;
  // background-size: 100% 100%;
  position: relative;

  .video {
    width: pxTovw(691);
    height: pxTovw(348);
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
    width: pxTovw(112);
    height: pxTovw(90);
    cursor: pointer;
    position: absolute;

    .item-logo {
      display: inline-block;
      width: pxTovw(61);
      height: pxTovw(61);
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    h3 {
      display: inline-block;
      width: pxTovw(112);
      font-size: pxTovw(14);
      color: #00c3ff;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      text-align: center;
      position: absolute;
      top: pxTovw(70);
      left: 0;
    }
  }

  .item1 {
    left: pxTovw(65);
    top: pxTovw(89);

    .item-logo {
      background: url(~@/assets/screen/zhongzhou-logo.png) center center
        no-repeat;
      background-size: 100% 100%;
    }
  }
  .item2 {
    left: pxTovw(200);
    top: pxTovw(89);

    .item-logo {
      background: url(~@/assets/screen/zhongzhou-touzi.png) center center
        no-repeat;
      background-size: 100% 100%;
    }
  }
  .item3 {
    left: pxTovw(340);
    top: pxTovw(89);

    .item-logo {
      background: url(~@/assets/screen/zhongzhou-jiangong.png) center center
        no-repeat;
      background-size: 100% 100%;
    }
  }
  .item4 {
    left: pxTovw(480);
    top: pxTovw(89);

    .item-logo {
      background: url(~@/assets/screen/zhongzhou-wuye.png) center center
        no-repeat;
      background-size: 100% 100%;
    }
  }

  .item5 {
    left: pxTovw(65);
    top: pxTovw(210);

    .item-logo {
      background: url(~@/assets/screen/zhongzhou-lanhai.png) center center
        no-repeat;
      background-size: 100% 100%;
    }
  }
  .item6 {
    left: pxTovw(200);
    top: pxTovw(210);

    .item-logo {
      background: url(~@/assets/screen/zhongzhou-wenyuan.png) center center
        no-repeat;
      background-size: 100% 100%;
    }
  }
  .item7 {
    left: pxTovw(340);
    top: pxTovw(210);

    .item-logo {
      background: url(~@/assets/screen/zhongzhou-weng.png) center center
        no-repeat;
      background-size: 100% 100%;
    }
  }
  .item8 {
    left: pxTovw(480);
    top: pxTovw(210);

    .item-logo {
      background: url(~@/assets/screen/isys.png) center center no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>
