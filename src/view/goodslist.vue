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
          <span class="sort_jiantou"  :class="{sort_jiantou_turn:!orderFlag}">&#xe765;</span>
          <span v-on:click="sortBy()">价格</span>
          <a href="">默认</a>
          <span>排序：</span>
        </div>
      </div>

      <div class="main_content">

        <div class="content_left">
          <div class="content_title">价 格: </div>
          <ul class="filter">

            <li v-on:click="setPriceLevel('all')" ><a href="javascript:void(0)"  v-bind:class="{'filter_current': pricechecked=='all'}"  v-on:click="pricechecked='all'">全部</a></li>

            <li v-for="(item,index) in price" @click="pricechecked=index" v-on:click="setPriceLevel(index)">
              <a href="javascript:void(0)"  v-bind:class="{'filter_current':pricechecked==index}" >{{item.startPrice}}-{{item.endPrice}}
              </a></li>

          </ul>
        </div>


        <div class="content_right">
          <div class="content_item" v-for="item in GoodsList">

            <a href=""><img v-bind:src="'/static/'+item.productImg" class="item_img"></a>
            <span class="item_name">{{item.productName}}</span>
            <p class="item_price">{{item.productPrice}}</p>
           <div class="item_buy" @click="addToCar(item.productId)" >加入购物车</div>
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
  <modal v-show="modalShow" v-on:close="closeModal" >
    <p slot="message" style="margin-left: 87px">请先登录，否则无法加入购物车</p>
    <button slot="btnGroup" class="md_btn" style="margin-left: 90px" @click="closeModal"  >关闭</button>
  </modal>
  <modal v-show="modaCar" v-on:close="closeModal">
    <div slot="message" class="confirm_tip">
      <span>&#xe654;</span>
      <p>加入购物车成功</p>
    </div>
    <div slot="btnGroup">
      <button class="md_btn" @click="modaCar=false">继续购物</button>
      <router-link  href="javascript:;" to="/car"><button class="md_btn mg_r">查看购物车</button></router-link>
    </div>
  </modal>
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
  import Modal from '@/components/Modal.vue'
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
           ],
          pricechecked:'all',
          orderFlag:false,
          priceLevel:'all',
          modalShow:false,
          modaCar:false,
          msg:'1'



        }
      },
      components: {
        NavHeader,
        NavFooter,
        NavBread,
        Modal,
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
                    page:0,
                    pageSize:8,
                    orderFlag:this.orderFlag,
                    priceLevel:this.priceLevel,
                  }
              }).then((res) => {
                console.log(res.data);
                this.GoodsList=res.data
              }).catch(function (error) {
                console.log("失败")
              })
          },
          sortBy(){
          this.orderFlag=!this.orderFlag;
          this.page=0;
          this.getGoodsList(false);
        },
        setPriceLevel(index){
          this.priceLevel=index;
          this.page=0;
          this.getGoodsList(false);
        },
        addToCar(productId){
          axios.post("/goods/addCar",{
            productId:productId
          }).then((res)=>{
            if(res.data.status=='0'){

            this.modaCar=true
            }else {
              this.modalShow=true
            }
          })
        },
        closeModal(){
          this.modalShow=false;
          this.modaCar=false;

        }
      }
    }
</script>

<style scoped>


</style>
