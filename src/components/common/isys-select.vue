<template>
  <div class="isys-select-wrapper">
    <select v-model="selectedValue" @change="selectChange">
      <option
        v-for="option in selectOptions"
        :key="option.index"
        v-bind:value="option.value"
      >{{ option.text }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "isysSelect",
  data() {
    return {
      selectedValue: '1'
    };
  },
  props: {
    selectOptions: {
      type: Array
    },
  },
  methods: {
    selectChange(e) {
      this.selectedValue = e.target.value;
      let val = e.target.value;
      this.$emit('selectChange', val)
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/px2vw.scss";

.isys-select-wrapper {
  position: relative;

  select {
    width: 100%;
    border: solid pxTovw(1) #10a4d2;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    background: url("~@/assets/common/arrow.png") no-repeat scroll right center
      transparent;
    background-size: pxTovw(24) pxTovw(24);
    box-sizing: content-box;
    cursor: pointer;
    height: pxTovw(24);
    color: #10a4d2;
    font-size: pxTovw(18);
    padding: 0px pxTovw(18) 0px pxTovw(5);
  }

  select::-ms-expand {
    display: none;
  }
}
</style>
