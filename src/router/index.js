import Vue from 'vue'
import Router from 'vue-router'
import goodslist from  '@/view/goodslist.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'gooodslist',
      component: goodslist,

    }

  ]
})
