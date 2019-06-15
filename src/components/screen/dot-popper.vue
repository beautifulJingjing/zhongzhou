<template>
    <div class="dot-popper">
        <div class="popper-inner">
            <div class="popper-title">{{'智慧' + (currentType === 1 ? '物业' : '工地' ) + '概况'}}</div>
            <div class="popper-button" @click.stop="clickDetail()">查看详情</div>
            <swiper :options="swiperOption">
                <swiper-slide v-for="(item,index) in data.imgList" :key="index">
                    <img :src="item.url" alt="">
                    <div class="popper-content">{{item.content}}</div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
            <div class="close-button" @click.stop="closePop()"></div>
        </div>
        <img src="~@/assets/screen/popper-first.webp" v-show="playFirst">
        <img src="~@/assets/screen/popper-loop.webp" v-show="!playFirst">
    </div>
</template>

<script>
import {classIndexOf} from '@/utils/index';
import 'swiper/dist/css/swiper.css'
import {swiper,swiperSlide} from 'vue-awesome-swiper';

export default {
    name:"HangzhouMap",
    components:{
        swiper,
        swiperSlide
    },
    props: {
        visible: Boolean,
        data: Object
    },
    data(){
        return {
            playFirst:true,
            swiperOption:{
                autoplay:true,
//                loop:true,
                pagination:{
                    el:'.swiper-pagination',
                },
            }
        };
    },
    mounted() {
        this.playEnd();
    },
    computed:{
        currentIndex(){
            return this.$store.state.dotCurIndex
        },
        currentType(){
            return this.$store.state.currentType;
        }
    },
    methods:{
        clickDetail(){
            this.$emit('clickDetail')
        },
        closePop(){
            this.$emit('close')
        },
        playEnd(){
            setTimeout(() => {
                this.playFirst=false;
            }, 1000)
        },

    },
    watch:{
        visible(val){
            if(val){
                this.playFirst=true;
                this.playEnd();
            }
        }
    },
}
</script>

<style rel="stylesheet/scss" lang="scss">
@import "@/style/px2vw.scss";

.dot-popper {
    width: pxTovw(475);
    overflow: hidden;
    outline: none;
    top: pxTovw(-277);
    height: pxTovw(594);
    box-sizing: border-box;
    color: #7ADFFF;
    transition: all .5s;
    .popper-inner{
        /*background: #182631;*/
        position: absolute;
        padding: pxTovw(48);
        top:0;
        left:0;
        z-index: 2;
        img {
            width: pxTovw(371);
            height: pxTovw(165);
        }
    }
    >img{
        position: absolute;
        top: 0;
        left: 0;
        width: pxTovw(475);
        height: pxTovw(594);
    }
    .popper-title {
        font-size: pxTovw(24);
    }

    .swiper-container {
        margin-top: 19px;
        width: pxTovw(371);
        height: pxTovw(407);
        /*overflow-x: hidden;*/
        /*overflow-y: visible;*/
        padding-bottom: pxTovw(36);
    }

    .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
        bottom: pxTovw(246);
    }

    .swiper-pagination-bullet {
        width: 15px;
        height: 3px;
        border-radius: 0;
        background: #10A4D2;
    }

    .swiper-pagination-bullet-active {
        background: #10A4D2;
    }

    .popper-content {
        margin-top: pxTovw(36);
        font-size: pxTovw(14);
        height: pxTovw(206);
        overflow: auto;
    }

    .popper-button {
        position: absolute;
        word-break: keep-all;
        top: pxTovw(10);
        left: pxTovw(350);
        color: #90FEA0;
        font-size: pxTovw(18);
        cursor:pointer;
        z-index:10000;
    }

    .close-button {
        position: absolute;
        right:5px;
        bottom: 5px;
        width: pxTovw(40);
        height:pxTovw(40);
        cursor:pointer;
        z-index:2;
    }
}
</style>
