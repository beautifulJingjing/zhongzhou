<template>
  <div
    v-if="isColumn == 1"
    :style="{height:((height)*lineNum) + 'px'}"
    class="rollScreen_container banner-wrapper"
    id="rollScreen_container_column"
  >
    <div
      class="rollScreen_list"
      :style="{transform:transform}"
      :class="{rollScreen_list_unanim:num===0}"
    >
      <div
        class="rollScreen_once"
        v-for="(item,index) in contentArr"
        :key="index"
        :style="{height:height+'px'}"
        @mouseover="stop"
        @mouseleave="play"
      >
        <span>{{item}}</span>
      </div>
      <div
        class="rollScreen_once"
        v-for="(item,index) in contentArr"
        :key="index+contentArr.length"
        :style="{height:height+'px'}"
      >
        <span>{{item}}</span>
      </div>
    </div>
  </div>
  <div
    v-else-if="isColumn == 0"
    :style="{width:((width)*lineNum) + 'px'}"
    class="rollScreen_container"
    id="rollScreen_container_row"
  >
    <div
      class="rollScreen_list"
      :style="{transform:transform,width:((width)*2*itemNum) + 'px'}"
      :class="{rollScreen_list_unanim:num===0}"
    >
      <div
        class="rollScreen_once rowlist"
        v-for="(item,index) in contentArr"
        :key="index"
        :style="{width:width+'px'}"
        @mouseover="stop"
        @mouseleave="play"
      >
        <span>{{item}}</span>
      </div>
      <div
        class="rollScreen_once rowlist"
        v-for="(item,index) in contentArr"
        :key="index+contentArr.length"
        :style="{width:width+'px'}"
      >
        <span>{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "banner",
  props: {
    height: {
      default: 200,
      type: Number
    },
    width: {
      default: 200,
      type: Number
    },
    itemNum: {
      default: 7,
      type: Number
    },
    lineNum: {
      default: 3,
      type: Number
    },
    isColumn: {
      default: 0, // 1是列 0是行
      type: Number
    }
  },
  data: function() {
    return {
      contentArr: [
        "内容1",
        "内容2",
        "内容3",
        "内容4",
        "内容5",
        "内容6",
        "内容7"
      ],
      num: 0
    };
  },
  computed: {
    transform: function() {
      if (this.isColumn == 1) {
        return "translateY(-" + this.num * this.height + "px)";
      } else if (this.isColumn == 0) {
        return "translateX(-" + this.num * this.width + "px)";
      }
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.play();
      window.onblur = function() {
        this.stop();
      }.bind(this); // 失焦停止轮播
      window.onfocus = function() {
        this.play();
      }.bind(this); // 聚焦开始轮播
    },
    play() {
      let _this = this;
      _this.timer = setInterval(function() {
        if (_this.num !== _this.contentArr.length) {
          _this.num++;
        } else {
          _this.num = 0;
        }
      }, 3000);
      _this.$emit("to-play");
    },
    stop() {
      let _this = this;
      window.clearInterval(_this.timer);
      _this.timer = null;
      _this.$emit("to-stop");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/px2vw.scss";


.rollScreen_container {
  display: inline-block;
  position: relative;
  overflow: hidden;
}
.rollScreen_list {
  transition: 1s linear;
}
.rollScreen_once {
}
.rollScreen_list_unanim {
  transition: none;
}
.rowlist {
  float: left;
}
</style>