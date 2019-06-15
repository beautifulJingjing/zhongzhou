<template>
    <div class="hangzhou-map-wrapper">
        <hangzhou-city v-if="!currentArea" @set-area="setArea"></hangzhou-city>
        <hangzhou-area :current-area="currentArea[0]" v-else></hangzhou-area>
        <!--<linan-area v-show="currentArea === 'linan'"></linan-area>-->
        <div class="go-back" :class="{cursor:currentArea}" @click="hideAreaMap" >
            <video src="../../assets/screen/position.mp4" autoplay loop ></video>
            <span>{{currentArea ? currentArea[1] : '杭州市'}}</span>
        </div>
        <div class="tips-wrapper">
            <div v-show="currentType === 0 || currentType === 2">
                <div class="tips-item">
                    <i class="gdyj"></i>
                    <span>工地已建</span>
                </div>
                <div class="tips-item">
                    <i class="gdzj"></i>
                    <span>工地在建</span>
                </div>
            </div>
            <div class="tips-item" v-show="currentType < 2">
                <i class="wy"></i>
                <span>物业</span>
            </div>
        </div>
    </div>
</template>

<script>
    import HangzhouCity from "@/components/screen/hangzhou-city";
    import HangzhouArea from "@/components/screen/hangzhou-area";
    import LinanArea from "@/components/screen/hangzhou-linan";

    export default {
        name: "HangzhouMap",
        components: {
            HangzhouCity,
            HangzhouArea,
            LinanArea
        },
        data() {
            return {
                currentArea: undefined,
            };
        },
        methods: {
            hideAreaMap(){
                this.currentArea = undefined;
                this.$store.commit("setScale", 0);
                this.$store.commit("setDotCurIndex", -1);
                this.$store.commit('setAllPoints');

            },
            setArea(val) {
                this.currentArea = val;
            }
        },
        computed: {
            currentType(){
                return this.$store.state.currentType;
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "@/style/px2vw.scss";
    .hangzhou-map-wrapper {
        background: transparent;
        position: relative;
        top: pxTovw(130);
        .map-wrapper_dot-item {
            position: absolute;
            background-size: 100% auto;
            cursor: pointer;
            z-index: 2;
            .item-title {
                color:#fff;
                font-size: pxTovw(24);
                width:24px;
                left:-12px;
                text-align: center;
                &.long-text{
                    width:48px;
                    /*left: -24px;*/
                }
                &.top{
                    bottom:34px;
                }
                &.bottom{
                    top:14px;
                }
            }
            .type1, .type2, .type3{
                outline: none;
                position: absolute;
                bottom:-2px;
                width: 18px;
                height: 22px;
                left:-9px;
                background-size: 100% 100%;
                opacity: 1;
                transition: all .1s;
                &.active {
                    width: 28px;
                    height: 34px;
                    left:-14px;
                }
                &.disactive{
                    opacity: .5;
                }
            }
            .type1 {
                background-image: url('../../assets/screen/hover1.png');
            }
            .type2 {
                background-image: url('../../assets/screen/hover2.png');
            }
            .type3 {
                background-image: url('../../assets/screen/hover3.png');
            }
        }
        .go-back{
            /*width: pxTovw(176);*/
            height: pxTovw(173);
            right: 0;
            bottom: 0;
            position: absolute;
            video{
                width: pxTovw(176);
                height: 100%;
            }
            span{
                color:#10A4D2;
                display: inline-block;
                font-size: pxTovw(24);
                height: pxTovw(173);
                vertical-align: middle;
            }
        }
        .cursor{ cursor:pointer;}
        .tips-wrapper{
            position: absolute;
            left: pxTovw(1401);
            top: pxTovw(660);
            .tips-item{
                display: flex;
                height:40px;
                align-items: center;
                i{
                    display: inline-block;
                    width:17px;
                    height:17px;
                    border-radius: 50%;
                    margin-right: 10px;
                    &.gdyj{
                        background-color: #72B644;
                    }
                    &.gdzj{
                        background-color: #5FABF8;
                    }
                    &.wy{
                        background-color: #9891F8;
                    }

                }
                span{
                    color:#7ADFFF;
                    font-size:pxTovw(21);
                }
            }
        }
    }
</style>
