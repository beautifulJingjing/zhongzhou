<template>
  <div class="isys-logo-wrapper">
    <div class="logo"></div>
    <div class="time1">{{ date | dateFormatString(0) }}</div>
    <div class="time2">{{ date | dateFormatString(1) }}</div>

    <video class="video" src="~@/assets/screen/date-bg.mp4" loop muted autoplay></video>
  </div>
</template>

<script>
export default {
  name: "isysLogo",
  data() {
    return {
      date: ""
    };
  },
  filters: {
    dateFormatString(timestamp, type) {
      const date = new Date(timestamp);

      if (type === 0) {
        return `${date.getFullYear()}.${date.getMonth() +
          1}.${date.getDate()}`.replace(/\b(\w)\b/g, "0$1");
      }

      if (type === 1) {
        return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`.replace(
          /\b(\w)\b/g,
          "0$1"
        );
      }
    }
  },
  created() {
    this.setDate();

    this.$timer = setTimeout(
      function aa() {
        this.setDate();

        this.$timer = setTimeout(aa.bind(this), 1000);
      }.bind(this),
      1000
    );
  },
  methods: {
    setDate() {
      const date = new Date();

      this.date = `${date.getFullYear()}-${date.getMonth() +
        1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`.replace(
        /\b(\w)\b/g,
        "0$1"
      );
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/px2vw.scss";

.isys-logo-wrapper {
  width: pxTovw(661);
  height: pxTovw(97);
  color: #7ADFFF;
  mix-blend-mode: screen;
  position: relative;

  .video {
    width: pxTovw(661);
    height: pxTovw(97);
  }

  .logo {
    width: pxTovw(69);
    height: pxTovw(58);
    background: url(~@/assets/screen/isys-logo.png) center center no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: pxTovw(18);
  }

  .time1 {
    width: pxTovw(280);
    height: pxTovw(80);
    font-size: pxTovw(36);
    font-family: "tec";
    text-align: center;
    letter-spacing: pxTovw(6);
    line-height: pxTovw(80);
    position: absolute;
    left: pxTovw(20);
    top: pxTovw(10);
  }

  .time2 {
    width: pxTovw(280);
    height: pxTovw(80);
    font-size: pxTovw(36);
    font-family: "tec";
    text-align: center;
    letter-spacing: pxTovw(6);
    line-height: pxTovw(80);
    position: absolute;
    left: pxTovw(360);
    top: pxTovw(10);
  }
}
</style>
