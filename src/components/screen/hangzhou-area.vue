<template>
    <div class="HZ-area-wrapper">
        <div
                class="area-item"
                :class="currentArea"
                ref="area"
                :style="areaStyle"
                @mousedown="startCreate"
                @mousemove="mouseMove"
                @mouseup="stopCreate">
            <div
                    v-for="(item, index) in dotList"
                    :key="index"
                    class="map-wrapper_dot-item"
                    :style="{left: item.offsetX + 'px',top: item.offsetY + 'px'}">
                <div
                        v-show="hoverIndex === index"
                        class="item-title"
                        :ref="'title' + index"
                        :class="[item.titlePosition, {'long-text':item.title.length>10}]">
                    {{item.title}}</div>
                <el-popover
                        placement="left"
                        popper-class="popper-class"
                        :visible-arrow="false"
                        v-model="item.showPop">
                    <dot-popper :data="item.info" @close="closeAreaDot" @clickDetail="clickDetail" :visible="item.showPop"></dot-popper>
                    <div
                            :class="[{'active': hoverIndex === index}, 'type' + item.type]"
                            @mouseenter="mouseenterAreaDot(item, index, $event)"
                            @mouseleave="mouseenterAreaDot()"
                            @click="clickAreaDot(item, index)"
                            slot="reference"></div>
                </el-popover>
            </div>
        </div>
        <!--<span @click="enlarge(true)" style="color:#fff">放大</span>
        <span @click="enlarge(false)" style="color:#fff">缩小</span>-->
        <iframe-bullet v-if="iframeBulletShow" :iframeSrc="iframeSrc" :type="type" @changeIframe="changeIframe" @closeIframe='closeIframe'></iframe-bullet>
    </div>
</template>

<script>
    import IframeBullet from './iframe-bullet';
    import { classIndexOf } from '@/utils/index';
    import Popper from '@/utils/vue-popper';
    import DotPopper from "@/components/screen/dot-popper";

    export default {
        name: "HangzhouMap",
        mixins: [Popper],
        components: {
            DotPopper,
            IframeBullet
        },
        props: {
            currentArea: String
        },
        data() {
            return {
                showPop: false,
                hoverIndex: -1,
                currentClick: null,
                areaParams: {
                    'xihu': [1193, 1958, -150],
                    'linan': [2216, 1229,0],
                    'fuyang': [1956, 1465,0]
                },
                iframeBulletShow: false,
                iframeSrc: '',
                dotList: [],
                type: '1'
            };
        },
        methods: {
            clickDetail(){
                this.type = '1';
                this.iframeSrc = 'https://zhongzhou-3d.isyscore.com?access_token=6277368bbe3f4634b263a46cfe901ba6J5V&account_id=3434';
                this.iframeBulletShow = true;
            },
            changeIframe(val) {
//                console.log(val);
            },
            closeIframe() {
                this.iframeBulletShow = false;
            },
            mouseenterAreaDot(item, index, val) {
                this.hoverIndex = index !== undefined ? index : -1;
                if(item) {
                    let target = val.target.parentNode.parentNode;
                    this.$nextTick(() => {
                        let el = this.$refs['title' + index][0];
                        let top = Number(target.style.top.split('px')[0])
                        item.titlePosition = el.clientHeight + 34 + 34 > top ? 'bottom' : 'top'
                    })
                }
            },
            clickAreaDot(item) {
                this.currentClick = item;
            },
            closeAreaDot(item) {
                this.currentClick.showPop = false;
            },
            adjustDot(){
                let $el = this.$refs.area;
                var pageWidth = $el.clientWidth;//获取图片显示宽度
                var pageHeith = $el.clientHeight;//获取图片显示宽度
                var imageWidth = this.areaParams[this.currentArea][0];	//图片的长宽
                var imageHeigth = this.areaParams[this.currentArea][1];
                this.dotList.map(item=> {
                    this.$set(item, 'titlePosition', 'top')
                    this.$set(item, 'offsetX',  Math.round(parseInt(item.x) * pageWidth / imageWidth).toString());
                    this.$set(item, 'offsetY',  Math.round(parseInt(item.y) * pageWidth / imageWidth).toString())
                    return item;
                })
            },
            // 拖拽操作
            startCreate(val) {
                // 考虑到文本的内容填充,故查找path
                let target = val.target;
                if (classIndexOf(target, 'area-item') > -1) {
                    this.startPoint = {
                        x: val.x,
                        y: val.y,
                        target,
                        width: target.clientWidth,
                        height: target.clientHeight,
                        offsetY: target.offsetTop,
                        offsetX: target.offsetLeft
                    }
                }
            },
            mouseMove(val) {
                if (!this.startPoint) return;
                let width = val.x - this.startPoint.x;
                let height = val.y - this.startPoint.y;
                // 拖拽
                if (this.startPoint.target) {
                    let top = this.startPoint.offsetY + height;
                    let left = this.startPoint.offsetX + width;
                    let blockWidth = this.startPoint.width;
                    let blockHeight = this.startPoint.height;
                    if (top <= 0 && this.pxTovw(blockHeight) >= this.pxTovw(this.container.height - top)) {
                        this.startPoint.target.style.top = top + 'px';
                    }
                    if (left <= 0 && this.pxTovw(blockWidth) >= this.pxTovw(this.container.width - left)) {
                        this.startPoint.target.style.left = left + 'px';
                    }
                }
            },
            stopCreate() {
                if (!this.startPoint) return;
                this.startPoint = undefined;
            },
            enlarge(large) {
                this.scale = large ? (this.scale + 0.25) : (this.scale - 0.25);
                this.adjustDot();
            },
            pxTovw(px) {
                return (px / 3840) * 100 + 'vw';
            },
            getDotList(){
                setTimeout(() => {
                    let areaList = this.$store.state.dotList;
                    this.dotList = areaList.filter(item => item.area === this.currentArea);
                    this.$nextTick(() => {
                        this.adjustDot();
                    })
                }, 500)
            }
        },
//        watch:{
//            scale(v){
//                if(v===1){
//                    this.adjustDot();
//                }
//            }
//        },
        computed: {
            areaStyle() {
                let width = this.areaParams[this.currentArea][0] * this.scale;
                let height = this.areaParams[this.currentArea][1] * this.scale;
                return this.container ? {
                    originWidth: width,
                    originHeight: height,
                    width: this.pxTovw(width),
                    height: this.pxTovw(height),
                    top: this.pxTovw(this.areaParams[this.currentArea][2] * this.scale),
                    left: this.pxTovw((this.container.originWidth - width) / 2)
                } : {}
            },
            scale() {return this.$store.state.areaScale},
            currentIndex(){
                return this.$store.state.dotCurIndex
            }
        },
        created() {
            this.container = {
                originWidth: 1780,
                originHeight: 937
            };
            this.getDotList();
        },
        mounted() {
            let el = this.$el;
            this.container.height = el.clientHeight;
            this.container.width = el.clientWidth;
            // 全局绑定mouse事件,监听mouseup事件是否在画框外面进行
            document.addEventListener('mouseup', val => {
                let target = val.target;
                if (classIndexOf(target, 'area-item') < 0) {
                    this.stopCreate();
                }
            }, true);
        },
        beforeDestroy() {
            document.removeEventListener('mouseup', val => {
                let target = val.target;
                if (classIndexOf(target, 'area-item') < 0) {
                    this.stopCreate();
                }
            }, true);
        },
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "@/style/px2vw.scss";
    .popper-class{
        outline: none;
    }
    .HZ-area-wrapper {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        .item-title{
            position: absolute;
        }
        .area-item{
            background-size: 100% auto;
            background-repeat: no-repeat;
            background-position: top center;
            cursor: pointer;
            &.xihu{
                position: absolute;

                /*width: pxTovw(120);*/
                /*height: pxTovw(181);*/
                /*top: pxTovw(378);*/
                /*left:pxTovw(830);*/
                background-image: url('../../assets/screen/xihu-large.png');
            }
            &.linan{
                position: absolute;
                /*width: pxTovw(625);
                height: pxTovw(355);
                top: pxTovw(291);
                left:pxTovw(578);*/
                background-image: url('../../assets/screen/linan-larger.png');
            }
            &.fuyang{
                position: absolute;
                /*width: pxTovw(625);*/
                /*height: pxTovw(355);*/
                /*top: pxTovw(291);*/
                /*left:pxTovw(578);*/
                background-image: url('../../assets/screen/fuyang-larger.png');
            }
        }

        .iframe-bullet-wrapper {
            z-index: 10000;
        }
    }

</style>
