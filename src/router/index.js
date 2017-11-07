import Vue from 'vue'
import Router from 'vue-router'
import BootPage from '@/pages/boot-page'
import scenesOne from '@/pages/scenes-one'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'BootPage',
      component: BootPage
    },
    {
      path: '/scenes-1',
      name: 'scenesOne',
      component: scenesOne
    }
  ],
   linkActiveClass: 'active'
})


