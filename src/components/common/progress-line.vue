<template>
  <div class="progress-line-wrapper">
    <div class="progress" :style="{width: percentage}"></div>
  </div>
</template>

<script>
export default {
  name: "progressLine",
  data() {
    return {};
  },
  props: {
    percentage: {
      type: String,
      default: '0'
    }
  }
};
</script>

<style lang="scss" scoped>
.progress-line-wrapper {
  width: 100%;
  height: 7px;
  margin: 0px;
  position: relative;
  border-radius: 4px;
  border: 1px solid #1B85A6;
  background: transparent;

  .progress {
    width: 0%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    box-shadow: 0 0 2px #ced0f4;
    border-radius: 4px;
    background:linear-gradient(90deg,rgba(16,164,210,1),rgba(144,254,160,1));
    transition: all 1.3s;
  }
}
</style>
