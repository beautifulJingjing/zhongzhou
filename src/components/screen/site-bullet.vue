<template>
  <div class="site-bullet-wrapper" v-show="visible" :class="{'active': visible}">
    <!--<div class="next-page">下一页</div>-->
    <h3 class="title">智慧工地概況</h3>
    <img class="site-img" :src="imgSrc" alt>

    <div class="site-desc overflow">
      <p>公司成立于 2018 年 8 月，致力于融合最前沿的人工智能、物联网、大数据及云计算技术，聚焦智慧园区、智慧酒店和智慧零售等领域，提供以指令集商业智能操作系统( BI-OS，Business Intelligence Operating System )为核心的商业智能解决方案及相关产品与服务。</p>

      <!-- <p>提供以指令集商业智能操作系统( BI-OS， Intelligence Operating System )为核心的商业智能解决方案及相关产品与服务。</p> -->
    </div>

    <div class="close-bullet" @click="closeBullet"></div>

    <video
      class="video video-first"
      src="~@/assets/screen/bullet-show.mp4"
      autoplay
      muted
      @ended="playEnd"
      v-show="playFirst"
      ref="first"
    ></video>
    <video
      class="video video-loop"
      src="~@/assets/screen/bullet-loop.mp4"
      autoplay
      muted
      loop
      v-show="!playFirst"
    ></video>
  </div>
</template>

<script>
export default {
  name: "SiteBullet",
  data() {
    return {
      imgSrc: require("@/assets/screen/site-info.png"),
      playFirst: true
    };
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    visible(val) {
      if (val) {
        this.playFirst = true;
        this.$nextTick(() => {
          this.$refs.first.play();
        });
      }
    }
  },
  methods: {
    playEnd() {
      this.playFirst = false;
    },
    closeBullet() {
      this.$emit("closeSiteBullet");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/px2vw.scss";

.site-bullet-wrapper {
  width: pxTovw(475);
  // height: pxTovw(594);
  height: pxTovw(0);
  position: relative;
  &.active {
    height: pxTovw(594);
  }

  .video-first {
    width: pxTovw(475);
    height: pxTovw(594);
  }

  .video-loop {
    width: pxTovw(475);
    height: pxTovw(594);
  }

  .next-page {
    color: #90fea0;
    font-size: pxTovw(18);
    position: absolute;
    left: pxTovw(354);
    top: pxTovw(4);
    cursor: pointer;
  }

  .title {
    font-size: pxTovw(24);
    color: #7adfff;
    font-family: "PingFangSC-Regular";
    font-weight: 400;
    position: absolute;
    left: pxTovw(48);
    top: pxTovw(48);
  }

  .site-img {
    display: block;
    width: pxTovw(371);
    height: pxTovw(165);
    position: absolute;
    left: pxTovw(48);
    top: pxTovw(100);
  }

  .site-desc {
    width: pxTovw(361);
    height: pxTovw(216);
    position: absolute;
    left: pxTovw(48);
    top: pxTovw(296);
    box-sizing: border-box;
    overflow: auto;

    p {
      color: #7adfff;
      font-size: pxTovw(14);
      font-family: "PingFangSC-Regular";
      font-weight: 400;
      line-height: pxTovw(24);
      text-indent: pxTovw(37);
      margin-bottom: pxTovw(10);
    }
  }

  .close-bullet {
    width: pxTovw(46);
    height: pxTovw(46);
    z-index: 10;
    cursor: pointer;
    position: absolute;
    left: pxTovw(422);
    top: pxTovw(542);
  }
}
</style>
