<template>
    <div class="hangzhou-city-wrapper">
        <transition name="map-fade">
            <img name="bigHZ" :src="!currentHoverArea ? HZ : HZDark" border="0" id="HZMap" usemap="#m_HZ" alt>
        </transition>
        <map name="m_HZ" id="m_HZ">
            <!-- 西湖 -->
            <area @click="setArea(['xihu', '西湖区'])" @mouseenter.self.stop="selectArea('xihu')" @mouseleave.self.stop="selectArea()" shape="poly" coords="1111, 169, 1121, 167, 1129, 167, 1134, 169, 1134, 173, 1138, 179, 1140, 184, 1141, 193, 1141, 195, 1141, 200, 1143, 210, 1139, 212, 1135, 217, 1131, 220, 1128, 224, 1128, 231, 1125, 234, 1124, 239, 1123, 242, 1122, 251, 1128, 253, 1134, 257, 1140, 266, 1147, 269, 1151, 274, 1156, 277, 1160, 281, 1160, 284, 1157, 285, 1150, 286, 1145, 291, 1143, 293, 1138, 295, 1133, 296, 1134, 292, 1133, 291, 1128, 291, 1125, 294, 1125, 295, 1121, 300, 1119, 301, 1114, 301, 1102, 300, 1095, 297, 1088, 295, 1087, 295, 1081, 295, 1076, 295, 1073, 291, 1070, 288, 1066, 285, 1064, 283, 1060, 280, 1057, 279, 1055, 274, 1059, 262, 1061, 253, 1061, 249, 1060, 241, 1058, 238, 1054, 234, 1052, 233, 1058, 224, 1058, 218, 1059, 213, 1059, 213, 1066, 209, 1070, 208, 1070, 208, 1075, 201, 1080, 195, 1080, 192, 1080, 188, 1080, 183, 1080, 180, 1080, 176, 1080, 174, 1080, 173, 1080, 165, 1080, 161, 1076, 158, 1072, 162, 1072, 162, 1067, 160, 1067, 158, 1063, 152, 1063, 149, 1063, 146, 1063, 138, 1066, 135, 1072, 130, 1080, 132, 1086, 134, 1090, 135, 1094, 139, 1098, 145, 1104, 152, 1105, 155, 1106, 157, 1106, 159, 1106, 162, 1105, 165, 1105, 170, 1111, 169" href="javascript:;" alt>

            <!--富阳-->
            <area @click="setArea(['fuyang', '富阳区'])" @mouseenter.self.stop="selectArea('fuyang')" @mouseleave.self.stop="selectArea()" shape="poly" coords="1021, 246, 1034, 240, 1046, 237, 1053, 238, 1057, 242, 1058, 249, 1058, 252, 1055, 257, 1054, 262, 1052, 268, 1052, 271, 1051, 274, 1049, 278, 1054, 281, 1061, 283, 1064, 287, 1067, 292, 1073, 296, 1079, 297, 1083, 297, 1087, 296, 1090, 299, 1094, 302, 1104, 304, 1113, 304, 1122, 304, 1127, 298, 1129, 295, 1132, 294, 1133, 301, 1131, 311, 1130, 318, 1128, 320, 1128, 325, 1132, 327, 1134, 332, 1136, 334, 1136, 340, 1132, 350, 1132, 354, 1127, 358, 1122, 361, 1118, 364, 1115, 365, 1114, 368, 1117, 373, 1117, 378, 1112, 381, 1110, 387, 1110, 389, 1114, 393, 1116, 394, 1113, 403, 1111, 405, 1106, 411, 1105, 412, 1110, 417, 1110, 420, 1107, 423, 1105, 427, 1104, 436, 1110, 439, 1113, 443, 1115, 448, 1119, 454, 1122, 458, 1120, 464, 1120, 467, 1118, 470, 1116, 471, 1111, 473, 1106, 472, 1101, 471, 1097, 470, 1090, 470, 1085, 470, 1082, 473, 1079, 477, 1078, 482, 1075, 490, 1075, 496, 1074, 501, 1074, 506, 1073, 508, 1072, 509, 1067, 512, 1063, 512, 1060, 513, 1054, 514, 1051, 514, 1047, 512, 1043, 513, 1040, 514, 1035, 517, 1026, 520, 1018, 522, 1015, 523, 1008, 523, 1003, 515, 998, 516, 992, 513, 989, 510, 986, 509, 979, 503, 976, 500, 976, 494, 975, 486, 978, 486, 983, 488, 985, 481, 985, 478, 989, 469, 989, 465, 990, 461, 989, 460, 984, 460, 983, 459, 974, 457, 968, 455, 963, 454, 962, 449, 962, 447, 957, 445, 953, 443, 950, 441, 950, 437, 946, 435, 941, 432, 937, 435, 934, 437, 924, 438, 919, 438, 913, 438, 908, 438, 899, 438, 887, 441, 881, 445, 876, 447, 874, 442, 870, 436, 866, 433, 862, 429, 860, 421, 858, 416, 857, 405, 857, 402, 851, 402, 844, 402, 837, 402, 831, 402, 829, 399, 829, 393, 823, 389, 821, 383, 815, 377, 813, 373, 804, 371, 798, 369, 792, 366, 787, 366, 784, 366, 777, 369, 777, 366, 775, 361, 776, 351, 776, 348, 776, 343, 767, 343, 758, 344, 752, 343, 752, 334, 757, 322, 757, 315, 757, 308, 752, 306, 743, 302, 738, 300, 729, 300, 723, 296, 716, 290, 722, 285, 731, 279, 729, 273, 726, 267, 722, 266, 733, 262, 740, 262, 745, 264, 751, 260, 755, 256, 758, 256, 767, 252, 769, 249, 774, 244, 775, 238, 780, 233, 789, 233, 796, 229, 797, 233, 799, 236, 799, 242, 799, 247, 800, 251, 805, 251, 808, 251, 810, 255, 814, 262, 814, 264, 820, 269, 822, 272, 826, 277, 831, 279, 838, 275, 845, 272, 848, 279, 854, 283, 860, 289, 863, 291, 869, 294, 873, 295, 877, 300, 886, 300, 892, 300, 897, 299, 904, 300, 910, 300, 913, 303, 919, 301, 920, 294, 921, 289, 928, 287, 931, 279, 934, 275, 938, 271, 948, 267, 950, 258, 951, 253, 964, 246, 961, 242, 971, 239, 979, 234, 988, 234, 997, 232, 1006, 233, 1006, 238, 1006, 240, 1008, 248, 1011, 253, 1021, 246" href="javascript:;" alt>

            <!-- 临安 -->
            <area @click="setArea(['linan', '临安区'])" @mouseenter.self.stop="selectArea('linan')" @mouseleave.self.stop="selectArea()" shape="poly" coords="874, 106, 884, 106, 890, 102, 896, 103, 897, 106, 901, 112, 912, 118, 914, 120, 920, 125, 925, 129, 925, 138, 933, 139, 932, 148, 930, 153, 929, 159, 929, 165, 935, 166, 938, 163, 947, 159, 950, 169, 947, 178, 945, 182, 953, 186, 961, 182, 969, 182, 969, 185, 969, 191, 968, 198, 967, 202, 966, 206, 963, 208, 960, 211, 958, 213, 955, 219, 952, 223, 952, 225, 952, 229, 956, 235, 957, 235, 957, 240, 956, 244, 952, 245, 950, 250, 950, 254, 946, 261, 943, 268, 942, 271, 935, 271, 932, 274, 928, 280, 925, 282, 925, 284, 921, 289, 918, 293, 915, 299, 908, 299, 901, 296, 895, 296, 884, 299, 879, 298, 874, 292, 868, 286, 862, 283, 858, 279, 857, 278, 849, 270, 842, 270, 832, 274, 830, 275, 825, 270, 818, 264, 814, 256, 810, 250, 801, 249, 796, 242, 799, 232, 796, 226, 788, 230, 784, 233, 766, 240, 763, 250, 744, 260, 738, 260, 733, 260, 725, 260, 716, 271, 725, 276, 726, 282, 724, 285, 719, 286, 716, 288, 715, 294, 715, 296, 712, 300, 707, 304, 707, 304, 706, 309, 705, 312, 705, 316, 709, 318, 709, 323, 709, 329, 709, 336, 708, 343, 706, 350, 705, 355, 704, 359, 696, 358, 694, 355, 683, 358, 677, 358, 672, 357, 666, 353, 661, 348, 659, 348, 653, 349, 649, 350, 643, 348, 642, 353, 638, 355, 635, 355, 632, 355, 630, 349, 629, 346, 628, 345, 623, 345, 617, 348, 609, 353, 604, 353, 600, 353, 594, 356, 596, 362, 599, 367, 599, 373, 599, 379, 601, 385, 602, 390, 602, 393, 598, 393, 593, 391, 591, 388, 591, 383, 587, 381, 584, 380, 590, 376, 582, 375, 577, 375, 574, 376, 569, 377, 565, 377, 560, 377, 554, 375, 548, 375, 543, 372, 536, 369, 532, 366, 526, 364, 524, 363, 518, 360, 515, 360, 515, 354, 518, 349, 518, 346, 517, 342, 510, 341, 505, 341, 502, 341, 499, 345, 492, 349, 488, 349, 485, 346, 475, 346, 473, 347, 468, 342, 465, 337, 465, 334, 465, 329, 457, 328, 454, 334, 448, 339, 444, 339, 442, 338, 441, 332, 439, 329, 438, 329, 433, 330, 426, 334, 420, 341, 415, 342, 412, 344, 403, 344, 396, 344, 388, 343, 387, 338, 387, 330, 387, 323, 384, 317, 383, 315, 383, 303, 381, 298, 380, 294, 380, 291, 379, 288, 375, 284, 371, 283, 369, 267, 380, 268, 385, 268, 389, 265, 392, 261, 393, 258, 391, 256, 382, 253, 379, 255, 376, 260, 372, 261, 369, 260, 369, 254, 369, 248, 369, 245, 375, 240, 385, 240, 397, 236, 400, 233, 405, 230, 410, 229, 411, 226, 413, 222, 413, 219, 409, 213, 406, 210, 400, 207, 396, 205, 392, 199, 386, 196, 386, 192, 394, 188, 394, 185, 394, 179, 394, 174, 390, 173, 386, 166, 385, 162, 391, 155, 394, 152, 404, 145, 408, 144, 412, 142, 415, 138, 422, 135, 425, 132, 430, 129, 434, 128, 439, 134, 446, 134, 455, 137, 458, 144, 465, 148, 476, 148, 478, 151, 481, 157, 486, 161, 489, 161, 499, 157, 501, 155, 508, 152, 512, 150, 514, 150, 522, 150, 524, 153, 536, 157, 544, 163, 553, 166, 558, 166, 569, 170, 574, 170, 581, 170, 584, 165, 587, 163, 593, 169, 596, 169, 599, 163, 602, 159, 604, 153, 604, 148, 604, 142, 604, 140, 607, 138, 614, 142, 618, 141, 625, 136, 634, 130, 637, 128, 646, 120, 652, 122, 656, 126, 666, 132, 669, 134, 679, 132, 689, 129, 693, 124, 703, 120, 707, 116, 710, 114, 714, 110, 719, 106, 720, 104, 728, 98, 736, 99, 742, 100, 756, 100, 764, 100, 770, 102, 776, 96, 776, 94, 781, 84, 785, 83, 788, 76, 793, 75, 793, 82, 794, 85, 801, 87, 811, 86, 821, 82, 829, 80, 834, 80, 838, 81, 833, 85, 831, 88, 829, 92, 829, 94, 829, 97, 832, 103, 837, 105, 841, 105, 849, 103, 855, 100, 864, 100, 865, 102, 874, 106" href="javascript:;" alt>
        </map>
        <div
                v-for="(item, index) in dataList"
                :key="index"
                class="map-wrapper_dot-item"
                @click="clickCityDot(item, index)"
                @mouseenter="mouseenterCityDot(item, index, $event)"
                @mouseleave="mouseenterCityDot()"
                :style="{top: item.offsetY + 'px',left: item.offsetX + 'px'}">
            <el-popover
                    placement="top-end"
                    popper-class="popper-city"
                    trigger="hover"
                    :visible-arrow="false">
                <div class="item-title">{{item.title}}</div>
                <div
                        :class="[{'active': currentIndex === index}, 'type' + item.type, {'disactive': currentHoverArea && currentHoverArea !== item.area}]"
                        slot="reference"
                ></div>
            </el-popover>
        </div>
        <transition name="fade-linan">
            <div class="HZ-linan" v-show="currentHoverArea === 'linan'" @mouseenter="selectArea('linan', $event)" @mouseleave="selectArea()"></div>
        </transition>
        <transition name="fade-xihu">
            <div class="HZ-xihu" v-show="currentHoverArea === 'xihu'" @mouseenter="selectArea('xihu')" @mouseleave="selectArea()"></div>
        </transition>
        <transition name="fade-fuyang">
            <div class="HZ-fuyang" v-show="currentHoverArea === 'fuyang'" @mouseenter="selectArea('fuyang')" @mouseleave="selectArea()"></div>
        </transition>
    </div>
</template>

<script>

export default {
    name:"HangzhouMap",
    data(){
        return {
            HZ:require('../../assets/screen/HZ.png'),
            HZDark:require('../../assets/screen/HZ-dark.png'),
            currentIndex:-1,
            currentHoverArea:undefined,
            coordinate:[/*西湖区*/
                {"id":-1,"x":1107,"y":145},
                {"id":0,"x":1076,"y":149},
                {"id":1,"x":1088,"y":144},
                {"id":2,"x":1097,"y":157},
                {"id":3,"x":1078,"y":146},
                {"id":4,"x":1081,"y":142},
                {"id":7,"x":1086,"y":237},
                {"id":8,"x":1082,"y":125},
                {"id":12,"x":1074,"y":146},/*西湖公安指挥中心坐标信息CZZ提供*/
                {"id":13,"x":1085,"y":222},
                {"id":14,"x":1076,"y":139},
                {"id":15,"x":1095,"y":228},
                {"id":16,"x":1080,"y":170},
                {"id":17,"x":1073,"y":211},
                {"id":21,"x":1068,"y":134},
                {"id":22,"x":1071,"y":131},
                {"id":23,"x":1078,"y":125},/*五幸家园坐标信息CZZ提供*/
                {"id":24,"x":1085,"y":166},
                {"id":25,"x":1095,"y":154},
                {"id":26,"x":1102,"y":145},
                /*富阳区*/
                {"id":9,"x":789,"y":321},
                {"id":11,"x":1025,"y":234},
                {"id":18,"x":993,"y":268}
            ],
            dotPosition: {
                x: '',
                y: ''
            },
            dataList: []
        }
    },
    methods:{
        mouseenterCityDot(item,index, val){
            if (item) {
                let target = val.target;
                this.currentHoverArea = item.area;
                this.currentIndex = index;
                this.dotPosition.x = this.pxTovw(target.offsetLeft);
                this.dotPosition.y = this.pxTovw(target.offsetTop);
            }
            else {
                this.currentHoverArea = undefined;
                this.currentIndex = -1;
            }
        },
        clickCityDot(item,index){
            var val=this.dataList[index].area;
            this.setArea([val,this.$store.state.py2hz[val]]);
        },
        selectArea(val,el){
            this.currentHoverArea=val;
        },
        setArea(val){
            //动画。
            var progress=0,s;
            var t=setInterval(()=>{
                progress+=5;
                s=progress/100;//避免小数计算误差
                this.$store.commit("setScale",s);
                if(progress>=100) clearInterval(t);
            },1);
            this.$emit('set-area',val);
        },
        //获取MAP中元素属性
        adjust(map){
            var element=map.childNodes;
            var itemNumber=element.length;
            for(var i=0; i<itemNumber; i++){
                var oldCoords=element[i].coords;
                var newcoords=this.adjustPosition(oldCoords);
                element[i].setAttribute("coords",newcoords);
            }
        },
        //调整MAP中坐标
        adjustPosition(position){
            let el=this.$el;
            var pageWidth=el.clientWidth;//获取页面宽度
            var pageHeith=el.clientHeight;//获取页面高度
            var imageWidth=1475;	//图片的长宽
            var imageHeigth=937;
            var each=position.split(",");
            //获取每个坐标点
            for(var i=0; i<each.length; i++){
                each[i]=Math.round(parseInt(each[i])*pageWidth/imageWidth).toString();//x坐标
                i++;
                each[i]=Math.round(parseInt(each[i])*pageHeith/imageHeigth).toString();//y坐标
            }
            //生成新的坐标点
            var newPosition="";
            for(var i=0; i<each.length; i++){
                newPosition+=each[i];
                if(i<each.length-1){
                    newPosition+=",";
                }
            }
            return newPosition;
        },
        adjustDot(){
            let el = this.$el;
            var pageWidth = el.clientWidth;//获取页面宽度
            var pageHeith = el.clientHeight;//获取页面高度
            var imageWidth = 1475;	//图片的长宽
            var imageHeigth = 937;
            this.dataList.map(item=> {
                this.$set(item, 'offsetX',  Math.round(parseInt(item.x) * pageWidth / imageWidth).toString());
                this.$set(item, 'offsetY',  Math.round(parseInt(item.y) * pageWidth / imageWidth).toString())
                return item;
            })
        },
        pxTovw(px) {
            return (px / 1840) * 100 + 'vw';
        },
        areaChangeCity(list) {
            let coordinate = this.coordinate;
            let tempList = JSON.parse(JSON.stringify(list));
            this.dataList = tempList.map(item=> {
                for (let i = 0, L = coordinate.length; i < L; i++) {
                    let c = coordinate[i];
                    if (item.id === c.id) {
                        item.x = c.x + 15;
                        item.y = c.y + 15;
                        break
                    }
                }
                return item
            });
        },
        getDotList(){
            setTimeout(() => {
                let areaList = this.$store.state.dotList;
                this.areaChangeCity(areaList);
                this.$nextTick(() => {
                    this.adjustDot();
                })
            })
        }
    },
    computed: {
        list() {
            return this.$store.state.dotList
        }
    },
    watch: {
        list(val) {
            this.areaChangeCity(val);
            this.$nextTick(() => {
                this.adjustDot();
            })
        }
    },
    created() {
        this.getDotList();
    },
    mounted(){
        let hzMap=document.getElementById("m_HZ");
        this.adjust(hzMap);
    }
}
</script>

<style rel="stylesheet/scss" lang="scss">
@import "@/style/px2vw.scss";
.popper-city{
    color:#fff;
    font-size: pxTovw(24);
    width:24px;
    text-align: center;
}
.hangzhou-city-wrapper {
    width: pxTovw(1475);
    height: pxTovw(937);
    margin: 0 auto;
    position: relative;
    .item-title{
        position: fixed;
    }
    #HZMap {
        width: auto;
        height: 100%;
    }

    #m_HZ {
        cursor: pointer;

        area {
            /*outline: none;*/
        }
    }

    .HZ-linan, .HZ-xihu, .HZ-fuyang {
        position: absolute;
        z-index: 1;
        pointer-events: none;
    }

    .HZ-linan {
        top: pxTovw(45);
        left: pxTovw(340);
        width: pxTovw(625);
        height: pxTovw(355);
        background-size: 100% 100%;
        background-image: url('../../assets/screen/HZ-linan.png');
    }

    .HZ-xihu {
        top: pxTovw(119);
        left: pxTovw(1049);
        width: pxTovw(120);
        height: pxTovw(181);
        background-size: 100% 100%;
        background-image: url('../../assets/screen/HZ-xihu.png');
    }

    .HZ-fuyang {
        top: pxTovw(223);
        left: pxTovw(719);
        width: pxTovw(422);
        height: pxTovw(299);
        background-size: 100% 100%;
        background-image: url('../../assets/screen/HZ-fuyang.png');
    }

    .fade-linan-enter-active, .fade-linan-leave-active, .fade-xihu-enter-active, .fade-xihu-leave-active, .fade-fuyang-enter-active, .fade-fuyang-leave-active {
        transition: all .5s
    }

    .fade-linan-enter, .fade-linan-leave-active {
        opacity: 0;
        top: pxTovw(49);
    }

    .fade-xihu-enter, .fade-xihu-leave-active {
        opacity: 0;
        top: pxTovw(129);
    }

    .fade-fuyang-enter, .fade-fuyang-leave-active {
        opacity: 0;
        top: pxTovw(233);
    }

    .map-fade-enter-active, .map-fade-leave-active {
        transition: all .5s
    }

    .map-fade-enter, .map-fade-leave-active {
        opacity: 0;
    }

    .dark-fade-enter-active, .dark-fade-leave-active {
        transition: all .5s
    }

    .dark-fade-enter, .dark-fade-leave-active {
        opacity: 1;
    }
}
</style>
