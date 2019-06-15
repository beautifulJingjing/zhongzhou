<template>
  <div class="progress-circle-wrapper">
    <!-- <span class="progress">{{percent}}</span> -->
    <svg class="progress-bar" width="126" height="126">
      <circle cx="42" cy="42" :r="radius" stroke-width="2" stroke="#000" fill="none"></circle>
      <circle
        cx="42"
        class="circle"
        cy="42"
        :r="radius"
        stroke-width="2"
        stroke-linecap="round"
        stroke="#7ADFFF"
        fill="none"
        :stroke-dasharray="dasharray.end"
      >
        <!-- 动画 -->
        <!-- <animate
          attributeName="stroke-dasharray"
          :from="dasharray.start"
          :to="dasharray.end"
          dur="1s"
        ></animate>
        <animate attributeName="stroke" from="#ff0000" to="#00f" dur="1s"></animate> -->
      </circle>
    </svg>
    <div class="slot-wrapper">
      <slot></slot>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "progressCircle",
  data() {
    return {
      
    };
  },
  props: {
    width: {
      type: Number,
      default: 150
    },
    height: {
      type: Number,
      default: 150,
    },
    percent: {
      type: Number,
      default: 0
    },
    radius: {
      type: Number,
      default: 70
    }
  },
  computed: {
    cx() {
      return (this.width / 3);
    },
    cy() {
      return (this.height / 3);
    },
    dasharray() {
      const perimeter = Math.PI * 2 * this.radius;

      return {
        start: '0,' + perimeter,    // 开始状态,虚线的宽度
        end: perimeter * (this.percent / 100) + ',' + perimeter * ((100 - this.percent) / 100)    // 结束状态,虚线两两的间隔
      }
    }
  }
};
</script>
 
<style scoped lang="scss">
.progress-circle-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  .progress-bar {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .progress {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .circle {
    transform-origin: center;
    transform: rotate(-90deg);
  }

  .slot-wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
}
</style>
