<template>
    <div class="site-msg-wrapper" @click="showSiteInit('siteInit')">
        <h3 class="title" @click.stop="showSiteBullet">智慧工地</h3>
            <span
                    v-for="(item,index) in dataList" :key="index"
                    class="type-item"
                    :class="['type-item' + item.index, {actived: curItem === item.index}]"
                    @click.stop="changeItem(item.index)">{{item.title}}</span>
        <!--<span class="type-item type-item2" :class="{actived: curItem == 2}" @click.stop="changeItem(2)">建筑面积</span>-->
        <!--<span class="type-item type-item3" :class="{actived: curItem == 3}" @click.stop="changeItem(3)">合同造价</span>-->
        <isys-select :selectOptions="selectOptions" @selectChange.stop="selectChange"></isys-select>

        <siteStackedAreaChart :chartData="siteChartData"></siteStackedAreaChart>
        <div class="icon-item">
            <div class="item item1">
                <span></span> 在建
            </div>
            <div class="item item2">
                <span></span> 竣工
            </div>
        </div>

        <video class="video" src="~@/assets/screen/site-bg.mp4" loop muted autoplay></video>
    </div>
</template>

<script>
    import SiteStackedAreaChart from "./site-stacked-area-chart";

    export default {
        name: "industryMsg",
        components: {
            SiteStackedAreaChart
        },
        data() {
            return {
                selectOptions: [
                    // { text: "全部", value: "0" },
                    {text: "全部", value: "1"}
                ],
                dataList: [
                    { title: '工地数', index: 1},
                    { title: '建筑面积', index: 2},
                    { title: '合同造价', index: 3}
                ],
                curItem: 1,
                siteChartData: [],
                curItem: 2, // 1,工地数 2,建筑面积 3,合同造价
                curSite: "1", // 当前工地
                swiperOption: {
                    autoplay: true,
                    pagination: {
                        el: '.swiper-pagination',
                    },
                }
            };
        },
        watch: {
            curPark: function (val) {
                if (this.curItem == 1) {
                    this.getData1();
                } else if (this.curItem == 2) {
                    this.getData2();
                } else if (this.curItem == 3) {
                    this.getData3();
                }
            },
            curItem: function (val) {
                if (val == 1) {
                    this.getData1();
                } else if (val == 2) {
                    this.getData2();
                } else if (val == 3) {
                    this.getData3();
                }
            }
        },
        created() {
            this.getData2();
        },
        mounted() {
            this.timer = setInterval(() => {
                this.curItem = this.curItem === 3 ? 1 : (this.curItem + 1)
            }, 2000)
        },
        methods: {
            getData1() {
                // 建筑工地
                // const params = {
                //   parkId: this.curSite
                // };
                // const data = await this.$axios.get("/api/parking/queryParkingData", {
                //   params
                // });

                // if (!data) {
                //   return;
                // }
                // let resData = data.data.data;
                // let areaData = [];
                // resData.timePointDataList.map(item => {
                //   areaData.push(item.number);
                // });
                // this.areaData = areaData;
                this.siteChartData = [[2, 3, 1, 2, 2, 0, 2, 3, 1, 4, 1, 3], [1, 2, 1, 3, 4, 0, 1, 1, 2, 3, 2, 2]];
            },
            getData2() {
                // 建筑面积
                this.siteChartData = [[80000, 95621, 121245, 110020, 160024, 80000, 89652, 96887, 140023, 157862, 60000, 126584], [60000, 85621, 111245, 120020, 150024, 86000, 88652, 116887, 120023, 127862, 42000, 116584]];
            },
            getData3() {
                // 合同造价
                this.siteChartData = [[25698, 35632, 54721, 28654, 45872, 15842, 26587, 31254, 10235, 26541, 12548, 30126], [21698, 30632, 50721, 38654, 35872, 25842, 21587, 25254, 16235, 21541, 14548, 26126]];
            },
            changeItem(val) {
                this.curItem = val;
            },
            selectChange(val) {
                console.log(val);
            },
            showSiteBullet() {
                this.$emit("showSiteBullet");
            },
            showSiteInit(val) {
                this.$emit("showSiteInit", val);
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "@/style/px2vw.scss";

    .site-msg-wrapper {
        width: pxTovw(622);
        height: pxTovw(337);
     /*background: url(~@/assets/screen/site-bg.png) center center no-repeat;*/
    /*/ / background-size: 100 % 100 %;*/
        position: relative;

    .video {
        width: pxTovw(622);
        height: pxTovw(337);
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

    .type-item {
        display: block;
        height: pxTovw(24);
        text-align: left;
        font-size: pxTovw(18);
        color: rgba(0, 195, 255, 0.5);
        position: absolute;
        top: pxTovw(48);
        cursor: pointer;
        transition: all .5s;
    }

    .type-item.actived {
        color: #00c3ff;
    }

    .type-item1 {
        left: pxTovw(194);
    }

    .type-item2 {
        left: pxTovw(262);
    }

    .type-item3 {
        left: pxTovw(348);
    }

    .isys-select-wrapper {
        width: pxTovw(122);
        position: absolute;
        left: pxTovw(432);
        top: pxTovw(44);
    }

    .site-stacked-area-chart-wrapper {
        width: pxTovw(432);
        height: pxTovw(218);
        position: absolute;
        left: pxTovw(40);
        top: pxTovw(90);
    }

    .icon-item {
        width: pxTovw(110);
        height: pxTovw(100);
        position: absolute;
        left: pxTovw(490);
        top: pxTovw(140);

    .item {
        height: pxTovw(50);
        font-size: pxTovw(18);
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(0, 195, 255, 1);
        padding-left: pxTovw(6);
    }

    .item span {
        display: inline-block;
        width: pxTovw(11);
        height: pxTovw(11);
    }

    .item1 span {
        background: #1de7d6;
    }

    .item2 span {
        background: #00ff00;
    }

    }
    }
</style>
