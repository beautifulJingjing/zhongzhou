<template>
  <div class="staff-msg-wrapper">
    <h3 class="staff-info-title">员工情况</h3>
    <div class="chart-box1">
      <pie-chart
        :itemCount="chartData1.itemCount"
        :descTitle="chartData1.descTitle"
        :title="chartData1.title"
        :pieData="chartData1.pieData"
      ></pie-chart>
    </div>

    <div class="chart-box2 chart-box">
      <pie-chart
        :itemCount="chartData2.itemCount"
        :descTitle="chartData2.descTitle"
        :title="chartData2.title"
        :pieData="chartData2.pieData"
      ></pie-chart>
    </div>

    <div class="chart-box3">
      <pie-chart
        :itemCount="chartData3.itemCount"
        :descTitle="chartData3.descTitle"
        :title="chartData3.title"
        :pieData="chartData3.pieData"
      ></pie-chart>
    </div>

    <div class="chart-box4">
      <pie-chart
        :itemCount="chartData4.itemCount"
        :descTitle="chartData4.descTitle"
        :title="chartData4.title"
        :pieData="chartData4.pieData"
      ></pie-chart>
    </div>

    <div class="chart-box5">
      <pie-chart
        :itemCount="chartData5.itemCount"
        :descTitle="chartData5.descTitle"
        :title="chartData5.title"
        :pieData="chartData5.pieData"
      ></pie-chart>
    </div>

    <div class="icon-content">
      <span class="item item1">
        中宙控股
        <span></span>
      </span>
      <span class="item item2">
        中宙投资
        <span></span>
      </span>
      <span class="item item3">
        中宙建工
        <span></span>
      </span>
      <span class="item item4">
        中宙物业
        <span></span>
      </span>
      <span class="item item5">
        澜海生态农业
        <span></span>
      </span>
    </div>

    <video class="video" src="~@/assets/screen/staff-bg.mp4" loop muted autoplay></video>
  </div>
</template>

<script>
import pieChart from "../../components/common/pie-chart";

export default {
  name: "staffMsg",
  data() {
    return {
      chartData1: {
        itemCount: 405,
        descTitle: "人数总和",
        title: "企业总人数",
        pieData: [
          { value: 37, name: "中宙控股" },
          { value: 32, name: "中宙投资" },
          { value: 114, name: "中宙建工" },
          { value: 115, name: "中宙物业" },
          { value: 107, name: "澜海生态农业" }
        ]
      },
      chartData2: {
        itemCount: 164,
        descTitle: "女性",
        title: "性别",
        pieData: [
          { value: 15, name: "中宙控股" },
          { value: 9, name: "中宙投资" },
          { value: 28, name: "中宙建工" },
          { value: 52, name: "中宙物业" },
          { value: 60, name: "澜海生态农业" }
        ]
      },
      chartData3: {
        itemCount: 197,
        descTitle: "高中及以下",
        title: "学历",
        pieData: [
          { value: 6, name: "中宙控股" },
          { value: 1, name: "中宙投资" },
          { value: 21, name: "中宙建工" },
          { value: 78, name: "中宙物业" },
          { value: 91, name: "澜海生态农业" }
        ]
      },
      chartData4: {
        itemCount: 99,
        descTitle: "28周岁以下",
        title: "年龄",
        pieData: [
          { value: 12, name: "中宙控股" },
          { value: 10, name: "中宙投资" },
          { value: 38, name: "中宙建工" },
          { value: 26, name: "中宙物业" },
          { value: 13, name: "澜海生态农业" }
        ]
      },
      chartData5: {
        itemCount: 62,
        descTitle: "初级职称",
        title: "职称",
        pieData: [
          { value: 12, name: "中宙控股" },
          { value: 11, name: "中宙投资" },
          { value: 37, name: "中宙建工" },
          { value: 2, name: "中宙物业" },
          { value: 0, name: "澜海生态农业" }
        ]
      },
      resData: ""
    };
  },
  components: {
    pieChart
  },
  created() {
    this.getInfoData();
  },
  mounted() {
    let i = 0;
    setInterval(() => {
      i++;

      // 总人数
      let totalCount = 0;
      let totalData = this.resData.total;
      totalData.map(item => {
        totalCount += item.number;
      });
      this.chartData1.itemCount = totalCount;

      let sexData = this.resData.sex;
      let sexPieData;
      // 性别
      if (i % 2 == 0) {
        let itemCount = 0;
        sexPieData = sexData.map(item => {
          itemCount += item.statistics[0].number;
          return {
            name: item.unitName,
            value: item.statistics[0].number
          };
        });
        this.chartData2.itemCount = itemCount;
        this.chartData2.descTitle = "女性";
      } else if (i % 2 == 1) {
        let itemCount = 0;
        sexPieData = sexData.map(item => {
          itemCount += item.statistics[1].number;
          return {
            name: item.unitName,
            value: item.statistics[1].number
          };
        });
        this.chartData2.itemCount = itemCount;
        this.chartData2.descTitle = "男性";
      }
      this.chartData2.pieData = sexPieData;

      // 学历
      let eduData = this.resData.education;
      let eduPieData;
      if (i % 4 == 0) {
        let itemCount = 0;
        eduPieData = eduData.map(item => {
          itemCount += item.statistics[0].number;
          return {
            name: item.unitName,
            value: item.statistics[0].number
          };
        });
        this.chartData3.itemCount = itemCount;
        this.chartData3.descTitle = "高中及以下";
      } else if (i % 4 == 1) {
        let itemCount = 0;
        eduPieData = eduData.map(item => {
          itemCount += item.statistics[1].number;
          return {
            name: item.unitName,
            value: item.statistics[1].number
          };
        });
        this.chartData3.itemCount = itemCount;
        this.chartData3.descTitle = "专科";
      } else if (i % 4 == 2) {
        let itemCount = 0;
        eduPieData = eduData.map(item => {
          itemCount += item.statistics[2].number;
          return {
            name: item.unitName,
            value: item.statistics[2].number
          };
        });
        this.chartData3.itemCount = itemCount;
        this.chartData3.descTitle = "本科";
      } else if (i % 4 == 3) {
        let itemCount = 0;
        eduPieData = eduData.map(item => {
          itemCount += item.statistics[3].number;
          return {
            name: item.unitName,
            value: item.statistics[3].number
          };
        });
        this.chartData3.itemCount = itemCount;
        this.chartData3.descTitle = "研究生及以上";
      }
      this.chartData3.pieData = eduPieData;

      // 年龄
      let ageData = this.resData.age;
      let agePieData;
      if (i % 5 == 0) {
        let itemCount = 0;
        agePieData = ageData.map(item => {
          itemCount += item.statistics[0].number;
          return {
            name: item.unitName,
            value: item.statistics[0].number
          };
        });
        this.chartData4.itemCount = itemCount;
        this.chartData4.descTitle = "28以下";
      } else if (i % 5 == 1) {
        let itemCount = 0;
        agePieData = ageData.map(item => {
          itemCount += item.statistics[1].number;
          return {
            name: item.unitName,
            value: item.statistics[1].number
          };
        });
        this.chartData4.itemCount = itemCount;
        this.chartData4.descTitle = "29岁-40岁";
      } else if (i % 5 == 2) {
        let itemCount = 0;
        agePieData = ageData.map(item => {
          itemCount += item.statistics[2].number;
          return {
            name: item.unitName,
            value: item.statistics[2].number
          };
        });
        this.chartData4.itemCount = itemCount;
        this.chartData4.descTitle = "41岁-50岁";
      } else if (i % 5 == 3) {
        let itemCount = 0;
        agePieData = ageData.map(item => {
          itemCount += item.statistics[3].number;
          return {
            name: item.unitName,
            value: item.statistics[3].number
          };
        });
        this.chartData4.itemCount = itemCount;
        this.chartData4.descTitle = "51岁-60岁";
      } else if (i % 5 == 4) {
        let itemCount = 0;
        agePieData = ageData.map(item => {
          itemCount += item.statistics[4].number;
          return {
            name: item.unitName,
            value: item.statistics[4].number
          };
        });
        this.chartData4.itemCount = itemCount;
        this.chartData4.descTitle = "60以上";
      }
      this.chartData4.pieData = agePieData;

      // 职称
      let titleData = this.resData.title;
      let titlePieData;
      if (i % 3 == 0) {
        let itemCount = 0;
        titlePieData = titleData.map(item => {
          itemCount += item.statistics[0].number;
          return {
            name: item.unitName,
            value: item.statistics[0].number
          };
        });
        this.chartData5.itemCount = itemCount;
        this.chartData5.descTitle = "初级职称";
      } else if (i % 3 == 1) {
        let itemCount = 0;
        titlePieData = titleData.map(item => {
          itemCount += item.statistics[1].number;
          return {
            name: item.unitName,
            value: item.statistics[1].number
          };
        });
        this.chartData5.itemCount = itemCount;
        this.chartData5.descTitle = "中级职称";
      } else if (i % 3 == 2) {
        let itemCount = 0;
        titlePieData = titleData.map(item => {
          itemCount += item.statistics[1].number;
          return {
            name: item.unitName,
            value: item.statistics[1].number
          };
        });
        this.chartData5.itemCount = itemCount;
        this.chartData5.descTitle = "高级职称";
      }
      this.chartData5.pieData = titlePieData;
    }, 5000);
  },
  methods: {
    async getInfoData() {
      const data = await this.$axios.get(
        "/api/employee/queryEmployeeStatisticsData"
      );

      if (!data) {
        return;
      }
      let resData = data.data.data;
      this.resData = resData;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/px2vw.scss";

.staff-msg-wrapper {
  width: pxTovw(939);
  height: pxTovw(289);
  // background: url(~@/assets/screen/staff-bg.png) center center no-repeat;
  // background-size: 100% 100%;
  position: relative;

  .video {
    width: pxTovw(939);
    height: pxTovw(289);
  }

  .staff-info-title {
    color: #ffffff;
    font-size: pxTovw(28);
    font-family: "PingFangSC-Ultralight";
    font-weight: 200;
    position: absolute;
    left: pxTovw(773);
    top: pxTovw(14);
  }

  .chart-box1 {
    width: pxTovw(178);
    height: pxTovw(178);
    position: absolute;
    left: pxTovw(60);
    top: pxTovw(50);
  }

  .chart-box2 {
    width: pxTovw(178);
    height: pxTovw(178);
    position: absolute;
    left: pxTovw(200);
    top: pxTovw(50);
  }

  .chart-box3 {
    width: pxTovw(178);
    height: pxTovw(178);
    position: absolute;
    left: pxTovw(345);
    top: pxTovw(50);
  }

  .chart-box4 {
    width: pxTovw(178);
    height: pxTovw(178);
    position: absolute;
    left: pxTovw(490);
    top: pxTovw(50);
  }

  .chart-box5 {
    width: pxTovw(178);
    height: pxTovw(178);
    position: absolute;
    left: pxTovw(635);
    top: pxTovw(50);
  }

  .icon-content {
    width: pxTovw(142);
    height: pxTovw(134);
    position: absolute;
    left: pxTovw(781);
    top: pxTovw(86);
    box-sizing: border-box;

    .item {
      display: inline-block;
      width: pxTovw(110);
      height: pxTovw(26);
      color: #00c3ff;
      text-align: right;
      font-size: pxTovw(14);
      position: relative;

      span {
        display: inline-block;
        width: pxTovw(11);
        height: pxTovw(11);
        position: absolute;
        left: pxTovw(124);
        top: pxTovw(7);
      }
    }

    .item1 span {
      background: #00c3ff;
    }

    .item2 span {
      background: rgb(144, 254, 160);
    }

    .item3 span {
      background: rgb(41, 183, 108);
    }

    .item4 span {
      background: rgb(6, 124, 224);
    }

    .item5 span {
      background: rgb(242, 217, 97);
    }
  }
}
</style>
