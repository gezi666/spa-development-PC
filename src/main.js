// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
/*引入element ui 相关*/
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import './assets/css/index.sass'
Vue.config.productionTip = false

Vue.prototype.$echarts = echarts

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
