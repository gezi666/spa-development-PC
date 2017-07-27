import Scenes1 from '@/pages/scenes-one/index.vue'
import Subpage1 from '@/pages/scenes-one/pages/index'
import subpage2 from '@/pages/scenes-one/pages/index2'
const routes = [{
    path: '/scenes-1',
    name: 'scenes1',
    component: Scenes1,
    children: [{
        path: '/scenes-1/1',
        component: Subpage1
    },{
        path: '/scenes-1/2',
        component: subpage2
    }]
}]

export default routes
