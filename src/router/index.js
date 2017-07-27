import Vue from 'vue'
import Router from 'vue-router'
import BootPage from '@/pages/boot-page'
import ScenesOneRoutre from '@/pages/scenes-one/router'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'BootPage',
      component: BootPage
    }
  ].concat(ScenesOneRoutre)
})
