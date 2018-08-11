<template>
  <div>
<div>这是商品列表页面</div>
    <!--<span>{{$route.params.goodsId}}</span>-->
    <router-link to="/goods/Title">显示商品标题</router-link>
    <router-link to="/goods/Image">显示商品图片</router-link>
    <div>
      <router-view></router-view>
    </div>
<router-link to="/cart">跳转到购物车页面</router-link>
    <button @click="jump">跳转购物车页面</button>
  </div>
</template>

<script>
    export default {
        name: "goodslist",
      data () {
        return {
          msg: 'Welcome to Your Vue.js App'
        }
      },
      methods:{
          jump () {
           // this.$router.push('/cart');
           //  this.$router.push({path:'/cart'});
           //  传参的方式

            this.$router.push({path:'/cart?goodsId=123'});
          }
      }
    }
</script>

<style scoped>

</style>
