<template>
  <div class="group-iframe-bullet-wrapper" @click="closeIframe">
    <div class="iframe-content" @click.stop="clickIframeBox">
      <div v-if="groupIframeSrc == 'zhongzhou'" class="group-info"></div>
      <div v-else-if="groupIframeSrc == 'groupVideo'" class="group-video">
        <video
          class="video"
          :src="videoSrc"
          loop
          muted
          autoplay
          controls
          poster="@/assets/screen/hb.jpg"
        ></video>
      </div>
      <iframe
        v-else
        ref="iframe"
        :src="groupIframeSrc"
        frameborder="0"
        name="showIframe"
        scrolling="auto"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "groupBullet",
  data() {
    return {
      // videoSrc: require('@/assets/screen/operate-bg.mp4')
      videoSrc: require('@/assets/screen/zhongzhou.mp4')
    };
  },
  props: {
    groupIframeSrc: {
      type: String,
      default: "http://www.zzkgjt.cn/"
    }
  },
  methods: {
    closeIframe() {
      this.$emit("closeGroupIframe");
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

.group-iframe-bullet-wrapper {
  width: pxTovw(3840);
  height: pxTovw(1080);
  background: rgba(0, 0, 0, 0.8);
  // filter: blur(1px);
  position: relative;
  z-index: 10;

  .iframe-content {
    width: pxTovw(1916);
    height: pxTovw(1078);
    position: absolute;
    top: pxTovw(1);
    left: pxTovw(961);

    .group-info {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      background: url("/images/group-bullet.png") center center no-repeat;
      background-size: 100% 100%;
    }

    .group-video {
      width: 100%;
      height: 100%;
      box-sizing: border-box;

      .video {
        width: 100%;
        height: 100%;
        pointer-events: auto;
      }
    }

    iframe {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
    }
  }
}
</style>
