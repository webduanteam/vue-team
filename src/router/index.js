import Vue from 'vue'
import Router from 'vue-router'
import goodslist from  '@/view/goodslist.vue'
import car from '@/view/Car.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'gooodslist',
      component: goodslist,

    },
    {
      path: '/car',
      name: 'car',
      component: car,

    }

  ]
})
