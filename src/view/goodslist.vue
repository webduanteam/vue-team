<template>
<div>
  <NavHeader></NavHeader>
  <NavBread>
    <a >商品</a>
  </NavBread>
  <!--主题部分-->
  <main class="main">
    <section class="main_main">

      <div class="main_sort">
        <div class="sort_content">
          <span class="sort_jiantou" >&#xe765;</span>
          <span >价格</span>
          <a href="">默认</a>
          <span>排序：</span>
        </div>
      </div>

      <div class="main_content">

        <div class="content_left">
          <div class="content_title">价 格: </div>
          <ul class="filter">

            <li ><a href="javascript:void(0)"  >全部</a></li>

            <li v-for="item in price" ><a href="javascript:void(0)"  >{{item.startPrice}}-{{item.endPrice}}</a></li>

          </ul>
        </div>


        <div class="content_right">
          <div class="content_item" v-for="item in GoodsList">

            <a href=""><img v-bind:src="'/static/'+item.productImg" class="item_img"></a>
            <span class="item_name">{{item.productName}}</span>
            <p class="item_price">{{item.productPrice}}</p>
           <div class="item_buy" >加入购物车</div>
          </div>

        </div>

      </div>
      <!--<div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="30">-->
        <!--&lt;!&ndash;加载中...&ndash;&gt;-->
      <!--</div>-->
    </section>
  </main>
  <!--底部-->
  <NavFooter></NavFooter>
  <!--。。。。。。。。。。。。。。。。。。。。。。。。。-->
  <!--路由的练习-->
  <!--<div>-->
    <!--&lt;!&ndash;<span>{{$route.params.goodsId}}</span>&ndash;&gt;-->
    <!--&lt;!&ndash;<router-link to="/goods/Title">显示商品标题</router-link>&ndash;&gt;-->
    <!--&lt;!&ndash;<router-link to="/goods/Image">显示商品图片</router-link>&ndash;&gt;-->
    <!--&lt;!&ndash;<div>&ndash;&gt;-->
    <!--&lt;!&ndash;<router-view></router-view>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;<router-link to="/cart">跳转到购物车页面</router-link>&ndash;&gt;-->
    <!--&lt;!&ndash;<button @click="jump">跳转购物车页面</button>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
  <!--</div>-->
 <!--&lt;!&ndash;。。。。。。。。。。。。。。。。。。。。。。。。 &ndash;&gt;-->

</div>

</template>

<script>
  import axios from 'axios'
  import NavHeader from '@/components/NavHeader.vue'
  import './../assets/goodList.css'
  import NavFooter from '@/components/NavFooter.vue'
  import NavBread from '@/components/NavBread.vue'
  // import Modal from '@/components/Modal.vue'
    export default {
        name: "goodslist",
      mounted(){
        this.getGoodsList();
      },
      data () {
        return {
          GoodsList: [],
           price:[
             {
               "startPrice":"0.00",
               "endPrice":"100.00"
             },
             {
               "startPrice":"100.00",
               "endPrice":"500.00"
             },
             {
               "startPrice":"500.00",
               "endPrice":"1000.00"
             },
             {
               "startPrice":"1000.00",
               "endPrice":"8000.00"
             },
           ]
        }
      },
      components: {
        NavHeader,
        NavFooter,
        NavBread,
      //   Modal,
      },
      methods:{
          // jump () {
          //  // this.$router.push('/cart');
          //  //  this.$router.push({path:'/cart'});
          //  //  传参的方式
          //
          //   this.$router.push({path:'/cart?goodsId=123'});
          // }
        // 请求数据测试方法
          getGoodsList() {
              axios.get("/goods/list", {
                  params: {
                      page: 0,
                      pageSize: 8,
                      orderFlag: true,
                      priceLevel: '4'
                  }
              }).then((res) => {
                console.log(res.data);
                this.GoodsList=res.data
              }).catch(function (error) {
                console.log("失败")
              })
          }
      }
    }
</script>

<style scoped>


</style>
