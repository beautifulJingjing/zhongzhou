<template>
  <div class="screen-wrapper">
    <screen-head :weatherInfo="weatherInfo" @showGroupVideo="showGroupVideo"></screen-head>

    <!-- 左侧 -->
    <industry-msg @showZhongzhou="showZhongzhou" @showGroupIframe="showGroupIframe" @showGroupInit="showGroupInit"></industry-msg>
    <site-msg @showSiteBullet="showSiteBullet" @showSiteInit="showSiteInit"></site-msg>
    <site-bullet :visible="siteBulletShow" @closeSiteBullet="closeSiteBullet"></site-bullet>
    <wuye-msg @showWuyeBullet="showWuyeBullet" @showWuyeInit="showWuyeInit"></wuye-msg>
    <wuye-bullet :visible="wuyeBulletShow" @closeWuyeBullet="closeWuyeBullet"></wuye-bullet>
    <div class="more more_l"></div>

    <hangzhou-map></hangzhou-map>

    <!-- 右侧初始展示 -->
    <div class="first-msg" v-if="firstMsgShow">
      <staff-msg></staff-msg>
      <operate-msg></operate-msg>
      <plan-msg></plan-msg>
      <alarm-msg></alarm-msg>
    </div>

    <!-- 右侧选择区域后展示 -->
    <div class="second-msg" v-if="secondMsgShow">
      <staff-msg></staff-msg>
      <operate-msg></operate-msg>
      <flow-msg></flow-msg>
      <alarm-msg></alarm-msg>
    </div>

    <!-- 右侧工地视频展示 -->
    <div class="three-msg" v-if="thirdMsgShow">
      <site-detail-msg></site-detail-msg>
    </div>

    <!-- 右侧物业信息展示 -->
    <div class="forth-msg" v-if="forthMsgShow">
      <daily-msg></daily-msg>
      <energy-msg></energy-msg>
      <personnel-msg></personnel-msg>
      <device-msg></device-msg>
    </div>

    <div class="more more_r"></div>

    <isys-logo></isys-logo>
    <!-- <iframe-bullet v-if="iframeBulletShow" @changeIframe="changeIframe" @closeIframe='closeIframe'></iframe-bullet> -->
    <group-iframe-bullet :groupIframeSrc="groupIframeSrc" v-if="groupIframeBulletShow" @closeGroupIframe='closeGroupIframe'></group-iframe-bullet>
  </div>
</template>

<script>
import ScreenHead from "@/components/screen/screen-head";

import IndustryMsg from "@/components/screen/industry-msg";
import SiteMsg from "@/components/screen/site-msg";
import WuyeMsg from "@/components/screen/wuye-msg";
import SiteBullet from "../../components/screen/site-bullet";
import WuyeBullet from "../../components/screen/wuye-bullet";

import HangzhouMap from "@/components/screen/hangzhou-map";

import StaffMsg from "../../components/screen/staff-msg";
import OperateMsg from "../../components/screen/operate-msg";
import PlanMsg from "../../components/screen/plan-msg";
import AlarmMsg from "../../components/screen/alarm-msg";
import FlowMsg from "../../components/screen/flow-msg";
import SiteDetailMsg from "../../components/screen/site-detail-msg";
import DailyMsg from "../../components/screen/daily-msg";
import EnergyMsg from "../../components/screen/energy-msg";
import PersonnelMsg from "../../components/screen/personnel-msg";
import DeviceMsg from "../../components/screen/device-msg";

import isysLogo from "../../components/screen/isys-logo";
import iframeBullet from "../../components/screen/iframe-bullet";
import groupIframeBullet from "../../components/screen/group-iframe-bullet";

export default {
  name: "Screen",
  data() {
    return {
      iframeToken: '?access_token=6277368bbe3f4634b263a46cfe901ba6J5V&account_id=3434',
      weatherInfo: {
        temperature: "28℃",
        temperatureDesc: "多云转晴",
        humidity: "68%",
        humidityDesc: "室外湿度",
        air: "74良",
        airDesc: "空气质量",
        roomTemp: "24℃",
        roomTempDesc: "室内温度"
      },
      firstMsgShow: true,
      secondMsgShow: false,
      thirdMsgShow: false,
      forthMsgShow: false,
      siteBulletShow: false,
      wuyeBulletShow: false,
      iframeBulletShow: false,
      groupIframeBulletShow: false,
      groupIframeSrc: ''
    };
  },
  components: {
    ScreenHead,
    IndustryMsg,
    SiteMsg,
    SiteBullet,
    WuyeMsg,
    WuyeBullet,
    HangzhouMap,
    StaffMsg,
    OperateMsg,
    PlanMsg,
    AlarmMsg,
    FlowMsg,
    SiteDetailMsg,
    DailyMsg,
    EnergyMsg,
    PersonnelMsg,
    DeviceMsg,
    isysLogo,
    iframeBullet,
    groupIframeBullet
  },
  created() {
    this.getWeatherInfo();
  },
  mounted() {},
  methods: {
    async getWeatherInfo() {
      const data = await this.$axios.get("/api/weather/querySanShenWeather");

      if (!data) {
        return;
      }
      let resData = JSON.parse(JSON.stringify(data.data.data));
      this.weatherInfo = {
        temperature: resData.tmp + "℃",
        temperatureDesc: resData.cond,
        humidity: resData.hum + "%",
        humidityDesc: "室外湿度",
        air: resData.aqi + resData.qlty,
        airDesc: "空气质量",
        roomTemp: resData.indoorTmp + "℃",
        roomTempDesc: "室内温度"
      };
    },
    showGroupVideo() {
      this.groupIframeSrc = 'groupVideo';
      this.groupIframeBulletShow = true;
    },
    showGroupInit() {
      // this.$store.commit('setAllPoints');
      // console.log(this.$store.state.dotList);

      // this.secondMsgShow = false;
      // this.thirdMsgShow = false;
      // this.forthMsgShow = false;
      // this.firstMsgShow = true;

      // this.siteBulletShow = false;
      // this.wuyeBulletShow = false;
    },
    showZhongzhou(val) {
      // this.groupIframeSrc = val;
      this.groupIframeSrc = 'http://www.zzkgjt.cn/';
      this.groupIframeBulletShow = true;

      this.secondMsgShow = false;
      this.thirdMsgShow = false;
      this.forthMsgShow = false;
      this.firstMsgShow = true;

      this.siteBulletShow = false;
      this.wuyeBulletShow = false;

      this.$store.commit('setAllPoints');
      console.log(this.$store.state.dotList);
    },
    showGroupIframe(val) {
      this.groupIframeSrc = val;
      this.groupIframeBulletShow = true;


      this.secondMsgShow = false;
      this.thirdMsgShow = false;
      this.forthMsgShow = false;
      this.firstMsgShow = true;

      this.siteBulletShow = false;
      this.wuyeBulletShow = false;
    },
    showSiteInit() {
      

    },
    showSiteBullet() {
      this.siteBulletShow = true;

      this.firstMsgShow = false;
      this.secondMsgShow = false;
      this.forthMsgShow = false;
      this.thirdMsgShow = true;

      this.wuyeBulletShow = false;

      this.$store.commit('setSitePoints');
      console.log(this.$store.state.dotList);
    },
    closeSiteBullet() {
      this.siteBulletShow = false;
    },
    showWuyeInit() {

    },
    showWuyeBullet() {
      this.wuyeBulletShow = true;

      this.firstMsgShow = false;
      this.secondMsgShow = false;
      this.thirdMsgShow = false;
      this.forthMsgShow = true;

      this.siteBulletShow = false;

      this.$store.commit('setWuyePoints');
      console.log(this.$store.state.dotList);
    },
    closeWuyeBullet() {
      this.wuyeBulletShow = false;
    },
    showSiteDetailMsg() {},
    showWuyeDetailMsg() {},
    changeIframe(val) {
      console.log(val);
    },
    closeIframe() {
      this.iframeBulletShow = false;
    },
    closeGroupIframe() {
      this.groupIframeBulletShow = false;
    }
  }
};
</script>

<style lang="scss">
@import "@/style/px2vw.scss";

.screen-wrapper {
  width: pxTovw(3840);
  height: pxTovw(1080);
  background: url(~@/assets/screen/bg.png) center center no-repeat;
  background-size: 100% 100%;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;

  // 头部
  .screen-head-wrapper {
    width: pxTovw(3195);
    height: pxTovw(144);
    position: absolute;
    top: 0;
    left: pxTovw(189);
  }

  // 产业架构
  .industry-msg-wrapper {
    width: pxTovw(691);
    height: pxTovw(348);
    position: absolute;
    left: pxTovw(13);
    top: pxTovw(13);
  }

  // 智慧工地
  .site-msg-wrapper {
    width: pxTovw(622);
    height: pxTovw(337);
    position: absolute;
    left: pxTovw(12);
    top: pxTovw(370);
  }

  .site-bullet-wrapper,
  .wuye-bullet-wrapper {
    width: pxTovw(475);
    height: pxTovw(594);
    position: absolute;
    // left: pxTovw(717);
    left: pxTovw(680);
    top: pxTovw(229);
  }

  // 智慧物业
  .wuye-msg-wrapper {
    width: pxTovw(729);
    height: pxTovw(349);
    position: absolute;
    left: pxTovw(12);
    top: pxTovw(719);
  }

  .more_l {
    width: pxTovw(118);
    height: pxTovw(36);
    /*background: url(~@/assets/screen/L-more.png) center center no-repeat;*/
    background-size: 100% 100%;
    position: absolute;
    left: pxTovw(739);
    top: pxTovw(1029);
  }

  // 地图
  .hangzhou-map-wrapper {
    width: pxTovw(1780);
    height: pxTovw(1070-130);
    position: absolute;
    left: pxTovw(896);
    /*right: pxTovw(950);*/
    /*top: pxTovw(130);*/
  }

  // 员工情况
  .staff-msg-wrapper {
    width: pxTovw(939);
    height: pxTovw(289);
    position: absolute;
    top: pxTovw(14);
    left: pxTovw(2890);
  }

  // 经营数据
  .operate-msg-wrapper {
    width: pxTovw(681);
    height: pxTovw(269);
    position: absolute;
    left: pxTovw(3148);
    top: pxTovw(282);
  }

  // 计划管控
  .plan-msg-wrapper {
    width: pxTovw(621);
    height: pxTovw(269);
    position: absolute;
    left: pxTovw(3208);
    top: pxTovw(559);
  }

  // 异常反馈
  .alarm-msg-wrapper {
    width: pxTovw(965);
    height: pxTovw(230);
    position: absolute;
    left: pxTovw(2864);
    top: pxTovw(840);
  }

  // 人流统计
  .flow-msg-wrapper {
    width: pxTovw(621);
    height: pxTovw(269);
    position: absolute;
    left: pxTovw(3208);
    top: pxTovw(559);
  }

  // 工地详情视频
  .site-detail-msg-wrapper {
    width: pxTovw(691);
    height: pxTovw(1075);
    position: absolute;
    left: pxTovw(3139);
    top: pxTovw(0);
  }

  // 每日速报
  .daily-msg-wrapper {
    width: pxTovw(939);
    height: pxTovw(289);
    position: absolute;
    top: pxTovw(14);
    left: pxTovw(2890);
  }

  // 能耗管理
  .energy-msg-wrapper {
    width: pxTovw(681);
    height: pxTovw(269);
    position: absolute;
    left: pxTovw(3148);
    top: pxTovw(282);
  }

  // 人员管理
  .personnel-msg-wrapper {
    width: pxTovw(621);
    height: pxTovw(269);
    position: absolute;
    left: pxTovw(3208);
    top: pxTovw(559);
  }

  // 设备管理
  .device-msg-wrapper {
    width: pxTovw(745);
    height: pxTovw(230);
    position: absolute;
    left: pxTovw(3084);
    top: pxTovw(840);
  }

  // 更多
  .more_r {
    width: pxTovw(118);
    height: pxTovw(36);
    /*background: url(~@/assets/screen/R-more.png) center center no-repeat;*/
    background-size: 100% 100%;
    position: absolute;
    left: pxTovw(2721);
    top: pxTovw(1029);
  }

  .isys-logo-wrapper {
    width: pxTovw(661);
    height: pxTovw(97);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: pxTovw(981);
  }

  // iframe大型弹窗
  .iframe-bullet-wrapper {
    width: pxTovw(3840);
    height: pxTovw(1080);
    position: fixed;
    left: 0;
    top: 0;
    // z-index: 100;
  }
}
</style>

