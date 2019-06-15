<template>
  <div class="site-detail-msg-wrapper">
    <div class="site-item site-item1">
      <h3 class="title">一号工地</h3>
      <div class="video-content">
        <!-- <p>信号源建设中...</p> -->
        <video-preview :cameraInfo="cameraInfo" :currentIndex="0"></video-preview>
      </div>

      <video class="video" src="~@/assets/screen/site-video1.mp4" loop muted autoplay></video>
    </div>
    <div class="site-item site-item2">
      <h3 class="title">二号工地</h3>
      <div class="video-content">
        <p>信号源建设中...</p>
      </div>

      <video class="video" src="~@/assets/screen/site-video2.mp4" loop muted autoplay></video>
    </div>
    <div class="site-item site-item3">
      <h3 class="title">三号工地</h3>
      <div class="video-content">
        <p>信号源建设中...</p>
      </div>

      <video class="video" src="~@/assets/screen/site-video3.mp4" loop muted autoplay></video>
    </div>
  </div>
</template>

<script>
import videoPreview from './video-preview';

export default {
  name: "SiteDetailMsg",
  data() {
    return {
      cameraId: '',
      cameraInfo: {
        webAppkey: '21747369',  // appkey
        webSecret: 'xV0JzjkVdugqCvH6NYqS',  // secret
        webDevip: '172.16.200.100',  // ip
        webDevport: '9016',  // port
      }
    };
  },
  components: {
    videoPreview
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/px2vw.scss";

.site-detail-msg-wrapper {
  width: pxTovw(691);
  height: pxTovw(1060);
  position: relative;
  box-sizing: border-box;

  .site-item {
    position: absolute;
    right: pxTovw(0);

    .title {
      color: #ffffff;
      font-size: pxTovw(28);
      font-family: "PingFangSC-Ultralight";
      font-weight: 200;
      position: absolute;
      right: pxTovw(68);
      top: pxTovw(14);
    }

    .video-content {
      width: pxTovw(510);
      height: pxTovw(223);
      box-sizing: border-box;
      background: url(~@/assets/screen/site-video-bg.png) center center
        no-repeat;
      background-size: 100% 100%;
      position: absolute;
      right: pxTovw(44);
      top: pxTovw(86);

      p {
        color: #36adff;
        font-size: pxTovw(30);
        font-family: "PingFangSC-Regular";
        font-weight: 400;
        text-align: center;
        line-height: pxTovw(223);
      }
    }
  }

  .site-item1 {
    width: pxTovw(691);
    height: pxTovw(348);
    top: pxTovw(15);
    // background: url(~@/assets/screen/site-video1.png) center center no-repeat;
    // background-size: 100% 100%;

    .video {
      width: pxTovw(691);
      height: pxTovw(348);
    }
  }

  .site-item2 {
    width: pxTovw(621);
    height: pxTovw(339);
    top: pxTovw(371);
    // background: url(~@/assets/screen/site-video2.png) center center no-repeat;
    // background-size: 100% 100%;

    .video {
      width: pxTovw(621);
      height: pxTovw(339);
    }
  }

  .site-item3 {
    width: pxTovw(691);
    height: pxTovw(347);
    top: pxTovw(723);
    // background: url(~@/assets/screen/site-video3.png) center center no-repeat;
    // background-size: 100% 100%;

    .video {
      width: pxTovw(691);
      height: pxTovw(347);
    }
  }
}
</style>
