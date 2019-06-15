import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        token:sessionStorage.getItem('token'),
        role:'',
        accountId:sessionStorage.getItem('accountId'),
        accountName:'',
        areaScale:0,
        py2hz:{//拼音映射到汉字
            xihu:'西湖区',
            linan:'临安区',
            fuyang:'富阳区',
        },
        dotCurIndex:-1,
        currentType: 0, // 0:全部 1:物业 2:工地
        /*type：1表示物业，2表示在建，3表示已建
        * 物业不需要简介，点击图标直接弹出3D页面
        * 工地中西湖公安指挥中心暂时没有简介*/
        dotList:[
            /*西湖区*/
            {id:-1,type:1,x:750,y:383,title:'益展商务大厦',area:'xihu',info:{title:'智慧物业概况',imgList:[{url:require('../assets/screen/imgs/-1.png'),content:'xxxxx'}],}},
            {id:0,type:1,x:426,y:426,title:'三深综合大楼',area:'xihu',info:{title:'智慧物业概况',imgList:[{url:require('../assets/screen/imgs/0.png'),content:'xxxxx'}],}},
            {id:1,type:2,x:471,y:357,title:'三深村经济合作社综合楼建设(1)项目',area:'xihu',info:{title:'智慧工地概况',imgList:[{url:require('../assets/screen/imgs/1.png'),content:'项目用地面积约 35504 平方米，总建筑面积为 103447平方米；其中地上建筑面积 59246 平方米，地下建筑面积 44201 平方米。本项目地下 2 层，地上最高 11 层。结构形式为钢筋混凝土框架结构。'}],}},
            {id:2,type:3,x:645,y:510,title:'古荡综合商务大楼',area:'xihu',info:{title:'智慧工地概况',imgList:[{url:require('../assets/screen/imgs/2.png'),content:'本工程位于杭州市西湖区古荡镇，总建筑面积55252.1平方米，地上39471平方米，地下15781.1平方米。本工程结构类型为框剪结构。获得奖项：国家优质工程奖、浙江省“钱江杯“优质工程、杭州市“西湖杯”优质工程、浙江省建筑安全文明施工标准化工地1。'}],}},
            {id:3,type:3,x:450,y:371,title:'蒋村商务中心',area:'xihu',info:{title:'智慧工地概况',imgList:[{url:require('../assets/screen/imgs/3.png'),content:'由商业、办公、地下车库、配套用房等组成，总建筑面积113635m2。获得奖项：浙江省“钱江杯”优质工程、杭州市建设工程“西湖杯”（建筑工程奖）、浙江省优秀安装质量奖、杭州市“西湖杯”（装饰优质奖）'}],}},
            {id:4,type:3,x:450,y:353,title:'金色西溪商务中心',area:'xihu',info:{title:'智慧工地概况',imgList:[{url:require('../assets/screen/imgs/4.png'),content:'建筑面积为119029.4㎡(其中地下室约为34295.4㎡)，地上13层，地下1层，开挖深度6.8米，包括商业、办公、地下汽车库、配套用房等内容。获得奖项：杭州市“西湖杯”建筑工程奖 、浙江省优秀安装质量奖、杭州市“西湖杯”（装饰优质奖）'}],}},
            {id:7,type:2,x:526,y:1382,title:'杭政储出（2011）2号地块商业金融用房',area:'xihu',info:{title:'智慧工地概况',imgList:[{url:require('../assets/screen/imgs/7.png'),content:'地面建筑层数、高度:商务办公楼地上12层，主屋面标高45.15米；商贸城地上5层，主屋面标高19.60米；商贸街1#楼，2#楼，为三层框架结构，建筑物高度12m；商贸街3#~8#楼，单层建筑，局部两层，建筑物高度7m。地下建筑层数：南区一层满堂地下室，北区两层满堂地下室，南北区地下室相连为整体地下室。'}],}},
            {id:8,type:3,x:479,y:164,title:'创美华彩',area:'xihu',info:{title:'智慧工地概况',imgList:[{url:require('../assets/screen/imgs/8.png'),content:'由（1#-7#）7幢地上20层办公楼，其中1#，4#楼有商业裙房和一层地下室的建筑安装等工程，总建筑面积115365m2'}],}},
            {id:12,type:3,x:503,y:405,title:'西湖公安指挥中心',area:'xihu',info:{title:'智慧工地概况',imgList:[{url:require('../assets/screen/imgs/12.png'),content:'xxxxx'}],}},
            {id:13,type:2,x:517,y:1217,title:'公交闸口停保基地迁建工程',area:'xihu',info:{title:'智慧工地概况',imgList:[{url:require('../assets/screen/imgs/13.png'),content:'总用地面积15228m2. 本工程建筑结构形式为框架结构。总建筑面积为83128 m2，其中地下建筑面积为18430 m2、地上部分建筑面积为64698m2。'}],}},
            {id:14,type:2,x:414,y:346,title:'蒋村单元R22-A-01/02/03地块幼儿园及中小学建安工程',area:'xihu',info:{title:'智慧工地概况',imgList:[{url:require('../assets/screen/imgs/14.png'),content:'总建筑面积为94466.89m2，其中：地上建筑面积为 62099.66m2，地下建筑面积为 32367.23m2。'}],}},
            {id:15,type:3,x:623,y:1283,title:'之江第一中学',area:'xihu',info:{title:'智慧工地概况',imgList:[{url:require('../assets/screen/imgs/15.png'),content:'建设48班中学，主要内容包括教学及教学管理用房、生活辅助用房、体育活动场所、绿化和地下车库等。总建筑面积约 86490 平方米，其中地上建筑面积为60848平方米，架空层1133平方米（不计入容积率），地下建筑面积24509平方米，设置553个停车位。'}],}},
            {id:16,type:3,x:458,y:645,title:'杨家牌楼城中村综合整治工程',area:'xihu',info:{title:'智慧工地概况',imgList:[{url:require('../assets/screen/imgs/16.png'),content:'累计拆除各类违章建筑12万平方米，立面整治、环境改善，改造道路、广场、庭院铺装10万方、建设绿化面积6.1万方。'}],}},
            {id:1717,type:3,x:381,y:1103,title:'叠翠湾',area:'xihu',info:{title:'智慧工地概况',imgList:[{url:require('../assets/screen/imgs/17.png'),content:'本地块共有建筑11幢，均为多层建筑，其中1#为酒店，2-5#楼为酒店配套的客房，6-11#楼为办公楼，建筑层数2-4层为主。总建筑面积37505平方米，计容面积17267平方米。'}],}},
            {id:21,type:2,x:330,y:261,title:'杭州双桥（云谷）单元 XH0206-08 地块拆迁安置房东区项目',area:'xihu',info:{title:'智慧工地概况',imgList:[{url:require('../assets/screen/imgs/21.png'),content:'项目总投资约 201517.2万元，其中：东区项目总建筑面积196587.01平方米，地上建筑面积 104736.01平方米，地下建筑面积91851平方米'}],}},
            {id:22,type:2,x:362,y:236,title:'西湖区双桥区块R1-18地块塘河村农转非居民拆迁安置房工程一标段',area:'xihu',info:{title:'智慧工地概况',imgList:[{url:require('../assets/screen/imgs/22.png'),content:'总建筑面积 134248.13 ㎡，其中：地上包括：25 幢 5~6 层多层建筑（1#~25#楼）、1 幢 3 层配套公建用房（45#楼）及 2#开闭所，框架结构，总建筑面积 98922.87 ㎡；地下一层，建筑面积35325.26 ㎡。工程类别为：建筑工程三类。'}],}},
            {id:23,type:2,x:385,y:110,title:'西湖区三墩北单元 B-R21-01、02 地块农转非居民拆迁安置房（五幸家园）2 标段',area:'xihu',info:{title:'智慧工地概况',imgList:[{url:require('../assets/screen/imgs/23.png'),content:'本标段沁芳苑总建筑面积 101162.63 ㎡，其中地下室27646㎡，主体结构为框架剪力墙结构。'}],}},
            {id:24,type:2,x:511,y:612,title:'留下单元金鱼井XH1309-01 地块农转居安置房项目工程',area:'xihu',info:{title:'智慧工地概况',imgList:[{url:require('../assets/screen/imgs/24.png'),content:'总建筑面积 95213 平方米，地上建筑面积 54681 平方米。地下面积40532平方米。基坑深度9.45米'}],}},
            {id:25,type:2,x:627,y:485,title:'古荡镇股份经济合作社农居公寓三期工程',area:'xihu',info:{title:'智慧工地概况',imgList:[{url:require('../assets/screen/imgs/25.png'),content:'本工程总建筑面积55252.1平米，其中地上建筑面积39471平米，地下建筑面积15781.1平米。'}],}},
            {id:26,type:2,x:709,y:386,title:'浙江财经大学文华校区改扩建工程',area:'xihu',info:{title:'智慧工地概况',imgList:[{url:require('../assets/screen/imgs/26.png'),content:'总体规划建筑面积 116707 平方米，其中一期综合楼建筑面积 67464 平方米（地上总建筑面积 44798 平方米，地下总建筑面积 22666 平方米）'}],}},

            /*富阳区*/

            {id:9,type:1,x:388,y:587,title:'洞桥营地',area:'fuyang',info:{title:'智慧工地概况',imgList:[{url:require('../assets/screen/imgs/9.png'),content:'包含了集体营房、室内训练馆、志愿者楼及员工宿舍、小团体营房四个房建项目，总建筑面积为15820m2；以及施工图范围内的配套、附属及市政园林工程。房建三类工程'}],}},
            {id:11,type:1,x:1494,y:130,title:'警察学校',area:'fuyang',info:{title:'智慧工地概况',imgList:[{url:require('../assets/screen/imgs/11.png'),content:'本工程为迁建项目：建筑面积34998.3平方米（不含架空层，其中地上建筑面积27793.9）'}],}},
            {id:18,type:1,x:1336,y:284,title:'富阳区高桥公共租赁房工程',area:'fuyang',info:{title:'智慧工地概况',imgList:[{url:require('../assets/screen/imgs/18.png'),content:'地上17层，地下1层，高度49.47米，地上建筑面积46872.02m2， 地下建筑面积15073.53m2 总建筑面积61945.55平方米，民用二类。'}],}},


        ],
        pointsList:[
            /*西湖区*/
            {id:-1,type:1,x:750,y:383,title:'益展商务大厦',area:'xihu',info:{title:'智慧物业概况',imgList:[{url:require('../assets/screen/imgs/-1.png'),content:'xxxxx'}],}},
            {id:0,type:1,x:426,y:426,title:'三深综合大楼',area:'xihu',info:{title:'智慧物业概况',imgList:[{url:require('../assets/screen/imgs/0.png'),content:'xxxxx'}],}},
            {id:1,type:2,x:471,y:357,title:'三深村经济合作社综合楼建设(1)项目',area:'xihu',info:{title:'智慧工地概况',imgList:[{url:require('../assets/screen/imgs/1.png'),content:'项目用地面积约 35504 平方米，总建筑面积为 103447平方米；其中地上建筑面积 59246 平方米，地下建筑面积 44201 平方米。本项目地下 2 层，地上最高 11 层。结构形式为钢筋混凝土框架结构。'}],}},
            {id:2,type:3,x:645,y:510,title:'古荡综合商务大楼',area:'xihu',info:{title:'智慧工地概况',imgList:[{url:require('../assets/screen/imgs/2.png'),content:'本工程位于杭州市西湖区古荡镇，总建筑面积55252.1平方米，地上39471平方米，地下15781.1平方米。本工程结构类型为框剪结构。获得奖项：国家优质工程奖、浙江省“钱江杯“优质工程、杭州市“西湖杯”优质工程、浙江省建筑安全文明施工标准化工地1。'}],}},
            {id:3,type:3,x:450,y:371,title:'蒋村商务中心',area:'xihu',info:{title:'智慧工地概况',imgList:[{url:require('../assets/screen/imgs/3.png'),content:'由商业、办公、地下车库、配套用房等组成，总建筑面积113635m2。获得奖项：浙江省“钱江杯”优质工程、杭州市建设工程“西湖杯”（建筑工程奖）、浙江省优秀安装质量奖、杭州市“西湖杯”（装饰优质奖）'}],}},
            {id:4,type:3,x:450,y:353,title:'金色西溪商务中心',area:'xihu',info:{title:'智慧工地概况',imgList:[{url:require('../assets/screen/imgs/4.png'),content:'建筑面积为119029.4㎡(其中地下室约为34295.4㎡)，地上13层，地下1层，开挖深度6.8米，包括商业、办公、地下汽车库、配套用房等内容。获得奖项：杭州市“西湖杯”建筑工程奖 、浙江省优秀安装质量奖、杭州市“西湖杯”（装饰优质奖）'}],}},
            {id:7,type:2,x:526,y:1382,title:'杭政储出（2011）2号地块商业金融用房',area:'xihu',info:{title:'智慧工地概况',imgList:[{url:require('../assets/screen/imgs/7.png'),content:'地面建筑层数、高度:商务办公楼地上12层，主屋面标高45.15米；商贸城地上5层，主屋面标高19.60米；商贸街1#楼，2#楼，为三层框架结构，建筑物高度12m；商贸街3#~8#楼，单层建筑，局部两层，建筑物高度7m。地下建筑层数：南区一层满堂地下室，北区两层满堂地下室，南北区地下室相连为整体地下室。'}],}},
            {id:8,type:3,x:479,y:164,title:'创美华彩',area:'xihu',info:{title:'智慧工地概况',imgList:[{url:require('../assets/screen/imgs/8.png'),content:'由（1#-7#）7幢地上20层办公楼，其中1#，4#楼有商业裙房和一层地下室的建筑安装等工程，总建筑面积115365m2'}],}},
            {id:12,type:3,x:503,y:405,title:'西湖公安指挥中心',area:'xihu',info:{title:'智慧工地概况',imgList:[{url:require('../assets/screen/imgs/12.png'),content:'xxxxx'}],}},
            {id:13,type:2,x:517,y:1217,title:'公交闸口停保基地迁建工程',area:'xihu',info:{title:'智慧工地概况',imgList:[{url:require('../assets/screen/imgs/13.png'),content:'总用地面积15228m2. 本工程建筑结构形式为框架结构。总建筑面积为83128 m2，其中地下建筑面积为18430 m2、地上部分建筑面积为64698m2。'}],}},
            {id:14,type:2,x:414,y:346,title:'蒋村单元R22-A-01/02/03地块幼儿园及中小学建安工程',area:'xihu',info:{title:'智慧工地概况',imgList:[{url:require('../assets/screen/imgs/14.png'),content:'总建筑面积为94466.89m2，其中：地上建筑面积为 62099.66m2，地下建筑面积为 32367.23m2。'}],}},
            {id:15,type:3,x:623,y:1283,title:'之江第一中学',area:'xihu',info:{title:'智慧工地概况',imgList:[{url:require('../assets/screen/imgs/15.png'),content:'建设48班中学，主要内容包括教学及教学管理用房、生活辅助用房、体育活动场所、绿化和地下车库等。总建筑面积约 86490 平方米，其中地上建筑面积为60848平方米，架空层1133平方米（不计入容积率），地下建筑面积24509平方米，设置553个停车位。'}],}},
            {id:16,type:3,x:458,y:645,title:'杨家牌楼城中村综合整治工程',area:'xihu',info:{title:'智慧工地概况',imgList:[{url:require('../assets/screen/imgs/16.png'),content:'累计拆除各类违章建筑12万平方米，立面整治、环境改善，改造道路、广场、庭院铺装10万方、建设绿化面积6.1万方。'}],}},
            {id:1717,type:3,x:381,y:1103,title:'叠翠湾',area:'xihu',info:{title:'智慧工地概况',imgList:[{url:require('../assets/screen/imgs/17.png'),content:'本地块共有建筑11幢，均为多层建筑，其中1#为酒店，2-5#楼为酒店配套的客房，6-11#楼为办公楼，建筑层数2-4层为主。总建筑面积37505平方米，计容面积17267平方米。'}],}},
            {id:21,type:2,x:330,y:261,title:'杭州双桥（云谷）单元 XH0206-08 地块拆迁安置房东区项目',area:'xihu',info:{title:'智慧工地概况',imgList:[{url:require('../assets/screen/imgs/21.png'),content:'项目总投资约 201517.2万元，其中：东区项目总建筑面积196587.01平方米，地上建筑面积 104736.01平方米，地下建筑面积91851平方米'}],}},
            {id:22,type:2,x:362,y:236,title:'西湖区双桥区块R1-18地块塘河村农转非居民拆迁安置房工程一标段',area:'xihu',info:{title:'智慧工地概况',imgList:[{url:require('../assets/screen/imgs/22.png'),content:'总建筑面积 134248.13 ㎡，其中：地上包括：25 幢 5~6 层多层建筑（1#~25#楼）、1 幢 3 层配套公建用房（45#楼）及 2#开闭所，框架结构，总建筑面积 98922.87 ㎡；地下一层，建筑面积35325.26 ㎡。工程类别为：建筑工程三类。'}],}},
            {id:23,type:2,x:385,y:110,title:'西湖区三墩北单元 B-R21-01、02 地块农转非居民拆迁安置房（五幸家园）2 标段',area:'xihu',info:{title:'智慧工地概况',imgList:[{url:require('../assets/screen/imgs/23.png'),content:'本标段沁芳苑总建筑面积 101162.63 ㎡，其中地下室27646㎡，主体结构为框架剪力墙结构。'}],}},
            {id:24,type:2,x:511,y:612,title:'留下单元金鱼井XH1309-01 地块农转居安置房项目工程',area:'xihu',info:{title:'智慧工地概况',imgList:[{url:require('../assets/screen/imgs/24.png'),content:'总建筑面积 95213 平方米，地上建筑面积 54681 平方米。地下面积40532平方米。基坑深度9.45米'}],}},
            {id:25,type:2,x:627,y:485,title:'古荡镇股份经济合作社农居公寓三期工程',area:'xihu',info:{title:'智慧工地概况',imgList:[{url:require('../assets/screen/imgs/25.png'),content:'本工程总建筑面积55252.1平米，其中地上建筑面积39471平米，地下建筑面积15781.1平米。'}],}},
            {id:26,type:2,x:709,y:386,title:'浙江财经大学文华校区改扩建工程',area:'xihu',info:{title:'智慧工地概况',imgList:[{url:require('../assets/screen/imgs/26.png'),content:'总体规划建筑面积 116707 平方米，其中一期综合楼建筑面积 67464 平方米（地上总建筑面积 44798 平方米，地下总建筑面积 22666 平方米）'}],}},

            /*富阳区*/

            {id:9,type:1,x:388,y:587,title:'洞桥营地',area:'fuyang',info:{title:'智慧工地概况',imgList:[{url:require('../assets/screen/imgs/9.png'),content:'包含了集体营房、室内训练馆、志愿者楼及员工宿舍、小团体营房四个房建项目，总建筑面积为15820m2；以及施工图范围内的配套、附属及市政园林工程。房建三类工程'}],}},
            {id:11,type:1,x:1494,y:130,title:'警察学校',area:'fuyang',info:{title:'智慧工地概况',imgList:[{url:require('../assets/screen/imgs/11.png'),content:'本工程为迁建项目：建筑面积34998.3平方米（不含架空层，其中地上建筑面积27793.9）'}],}},
            {id:18,type:1,x:1336,y:284,title:'富阳区高桥公共租赁房工程',area:'fuyang',info:{title:'智慧工地概况',imgList:[{url:require('../assets/screen/imgs/18.png'),content:'地上17层，地下1层，高度49.47米，地上建筑面积46872.02m2， 地下建筑面积15073.53m2 总建筑面积61945.55平方米，民用二类。'}],}},


        ],
    },
    mutations:{
        setToken(state,value){
            state.token=value
        },
        setAccountId(state,value){
            state.accountId=value
        },
        setScale(state,value){
            state.areaScale=value
        },
        setDotCurIndex(state,value){
            state.dotCurIndex=value
        },
        setAllPoints(state) {
            // var pos = []; 
            // state.pointsList.map(item => {
            //     pos.push(item);
            //     return pos;
            // })
            // state.dotList = pos;
            state.dotList = state.pointsList;
        },
        setSitePoints(state) {
            var pos = [];

            state.pointsList.map(item => {
                if(item.type != 1) {
                    pos.push(item);
                }
                return pos;
            });
            state.dotList = pos;
        },
        setWuyePoints(state) {
            var pos = [];
            state.pointsList.map(item => {
                if (item.type == 1) {
                    pos.push(item);
                }
                return pos;
            });
            state.dotList = pos;
        },
        setCurrentType(state, value){
            state.currentType = value;
        }
    },
    actions:{}
})
