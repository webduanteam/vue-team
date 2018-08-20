import Vue from 'vue'
import Router from 'vue-router'
import goodslist from  '@/view/goodslist.vue'
import car from '@/view/Car.vue'
import address from '@/view/Address.vue'
import OrderConfirm from '@/view/OrderConfirm'
import OrderSuccess from '@/view/OrderSuccess'
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

    },
    {
      path:'/address',
      name:'address',
      component:address,
    },
    {
      path: '/orderConfirm',
      name: 'orderConfirm',
      component: OrderConfirm
    },
    {
      path: '/orederSuccess',
      name: 'orderSuccess',
      component: OrderSuccess
    },

  ]
})
