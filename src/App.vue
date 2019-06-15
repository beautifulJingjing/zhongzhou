<template>
  <!-- <div id="app" :class="{'is-login': isLogin, cloak: cloak}">
    <router-view v-if="$route.meta.alone"></router-view>

    <template v-else>
      <router-view class="views"></router-view>
    </template>
  </div>-->
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      cloak: true
    };
  },
  watch: {
    $route(to) {
      this.cloak = false;

      document.title = `智慧中宙-${to.meta.title}`;
    }
  },
  computed: {
    isLogin() {
      return this.$route.meta.alone;
    }
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
@import '@/style/px2vw.scss';

#app {
  width: pxTovw(3840);
  height: pxTovw(1080);
  position: relative;
  box-sizing: border-box;
  left: 0;
  top: 0;
  overflow: hidden;
}
#app.is-login {
  min-width: 0;
  min-height: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
#app.cloak {
  display: none;
}
</style>
