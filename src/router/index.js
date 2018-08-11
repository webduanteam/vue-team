import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import goodslist from  '@/view/goodslist.vue'
import  Title from  '@/view/title.vue'
import  Image from  '@/view/image.vue'
import  cart from  '@/view/cart.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/goods',
      name: 'gooodslist',
      component: goodslist,
      children:[
        {
          path:'title',
          name:'title',
          component:Title

        },
    {
        path:'image',
       name:'image',
       component:Image

          }
      ]
    },
    {
      path:'/cart',
      name:cart,
      component:cart
    }
  ]
})
