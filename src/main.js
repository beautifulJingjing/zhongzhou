import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

Vue.config.productionTip = false

// reset css
import '@/style/reset.css'

// axiox api
// import service from '@/api/index'

// window.axios = service
import axios from 'axios';
const service = axios.create({
  timeout: 30 * 1000,
  baseURL: process.env.NODE_ENV === 'production' ? 'http://digital-3d.isyscore.com/' : 'http://192.168.9.10:7080'
});
Vue.prototype.$axios = service;

// import all svg
// const requireAllSvg = requireContext => requireContext.keys().map(requireContext)
// const req = require.context('./assets/svg', true, /\.svg$/)
// requireAllSvg(req)

// 全局注册组件
const requireComponent = require.context('./components/common', true, /\.vue$/)

requireComponent.keys().forEach((filename) => {
  const componentConfig = requireComponent(filename)
  const component = componentConfig.default || componentConfig

  Vue.component(component.name, component)
})

// 引入echarts
import echarts from 'echarts';
Vue.prototype.$echarts = echarts;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
