<template>
  <div class="iframe-bullet-wrapper" @click="closeIframe">
    <div v-if="type == 1">
      <div class="iframe-content" @click.stop="clickIframeBox">
        <iframe ref="iframe" :src="iframeSrc" frameborder="0" name="showIframe" scrolling="auto"></iframe>
      </div>

      <!-- <div class="previous-page" @click.stop="changeIframe(-1)"></div>
      <div class="previous-msg">
        <h3>上一个</h3>
        <h3>{{previousTitle}}</h3>
      </div>
      <div class="next-page" @click.stop="changeIframe(1)"></div>
      <div class="next-msg">
        <h3>下一个</h3>
        <h3>{{nextTitle}}</h3>
      </div>-->
    </div>

    <div v-if="type == 2">
      <div class="site-info">
        <img :src="imgSrc" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "iframeBullet",
  data() {
    return {
      previousTitle: "问源环保",
      nextTitle: "三深大厦",
      imgSrc: require('@/assets/screen/site-info1.png')
    };
  },
  props: {
    type: {
      type: String,
      default: "2"
    },
    iframeSrc: {
      type: String,
      default:
        "https://zhongzhou-3d.isyscore.com?access_token=6277368bbe3f4634b263a46cfe901ba6J5V&account_id=3434"
    }
  },
  methods: {
    changeIframe(val) {
      console.log(val);
      this.$emit("changeIframe", val);
    },
    closeIframe() {
      this.$emit("closeIframe");
    },
    clickIframeBox() {}
  },
  mounted() {
    // console.log(this.$refs.iframe);
    // console.log(this.$refs.iframe.contentWindow);
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/px2vw.scss";

.iframe-bullet-wrapper {
  width: pxTovw(3840);
  height: pxTovw(1080);
  background: rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 10;

  .iframe-content {
    // width: pxTovw(1920);
    width: pxTovw(1980);
    height: pxTovw(1140);
    position: absolute;
    top: pxTovw(-30);
    left: pxTovw(930);

    iframe {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
    }
  }

  .site-info {
    width: pxTovw(1920);
    height: pxTovw(1080);
    box-sizing: border-box;
    position: absolute;
    top: pxTovw(0);
    left: pxTovw(960);

    img {
      width: 100%;
      height: 100%;
    }
  }

  .previous-page {
    width: pxTovw(67);
    height: pxTovw(105);
    background: url(~@/assets/screen/BTN_L.png) center center no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left: pxTovw(850);
    top: pxTovw(480);
    cursor: pointer;
  }

  .previous-msg {
    width: pxTovw(221);
    height: pxTovw(105);
    color: #458fff;
    position: absolute;
    top: pxTovw(480);
    left: pxTovw(620);

    h3 {
      font-size: pxTovw(30);
      font-family: "PingFangSC-Regular";
      font-weight: 400;
      height: pxTovw(50);
      line-height: pxTovw(50);
      text-align: center;
    }
  }

  .next-page {
    width: pxTovw(67);
    height: pxTovw(105);
    background: url(~@/assets/screen/BTN_R.png) center center no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left: pxTovw(2901);
    top: pxTovw(480);
    cursor: pointer;
  }

  .next-msg {
    width: pxTovw(221);
    height: pxTovw(105);
    color: #458fff;
    position: absolute;
    top: pxTovw(480);
    left: pxTovw(3000);

    h3 {
      font-size: pxTovw(30);
      font-family: "PingFangSC-Regular";
      font-weight: 400;
      height: pxTovw(50);
      line-height: pxTovw(50);
      text-align: center;
    }
  }
}
</style>
