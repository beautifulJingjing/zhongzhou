<template>
    <div class="HZ-xihu-wrapper">
        <div class="HZ-xihu"></div>
        <div
                v-for="(item, index) in dataList"
                :key="index"
                class="map-wrapper_dot-item"
                @mouseenter="mouseenterDot(item, index)"
                @mouseleave="mouseenterDot()"
                :style="{top: item.x + 'px',left: item.y + 'px'}">
            <div :class="[{'active': currentIndex === index}, 'type' + item.type]"></div>
            <div v-show="currentIndex === index" class="item-title">{{item.title}}</div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "HangzhouMap",
        data() {
            return {
                currentIndex: -1,
                dataList: [
                    {type: 1, x: 177, y: 1101, title: '益展大厦', area: 'xihu'},
                    {type: 2, x: 445, y: 811, title: '蒋村商务中心', area:'fuyang'},
                    {type: 3, x: 190, y: 545, title: '三深大厦', area:'linan'},
                    {type: 3, x: 150, y: 685, title: '创美华彩', area:'linan'},
                    {type: 1, x: 235, y: 440, title: '益展大厦', area:'linan'}
                ]
            };
        },
        methods: {
            mouseenterDot(item, index) {
                this.currentIndex = index !== undefined ? index : -1;
            },
            adjustDot() {
                let el = this.$el;
                var pageWidth = el.clientWidth;//获取页面宽度
                var pageHeith = el.clientHeight;//获取页面高度

                var imageWidth = 1475;	//图片的长宽
                var imageHeigth = 937;
                this.dataList.map(item => {
                    item.x = Math.round(parseInt(item.x) * pageWidth / imageWidth).toString();
                    item.y = Math.round(parseInt(item.y) * pageHeith / imageHeigth).toString();//y坐标;
                    return item;
                })
            }
        },
        mounted() {
            this.adjustDot();
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "@/style/px2vw.scss";

    .HZ-xihu-wrapper {
        width: 100%;
        height: 100%;
        background-size: 100% 100%;
        background-image: url('../../assets/screen/HZ-linan.png');
        background-repeat: no-repeat;
        background-position: center center;
    }
</style>
