<!-- 展示模板 -->
<template>
  <div>
    <!--顶部-->
    <nav-header></nav-header>
    <!--面包屑部分-->
    <nav-bread>
      <a href="javascript:;">购物车</a>
    </nav-bread>
    <!--内容-->
    <div class="main_container">
      <div class="main_content1">
        <div class="main_title">购物车</div>
        <ul class="main_listTitle">
          <li class="long">商品</li>
          <li>价格</li>
          <li>数量</li>
          <li>总价</li>
          <li>编辑</li>
        </ul>
        <ul class="itemList">
          <li class="item" v-for="item of carList" >
            <ul>
              <li class="li_long">
                <!--单选-->
                <div class="active"  @click="editCar('',item)"><img src="../../static/finish.png" alt=""  v-show="item.checked"></div>
                <div class="imgBox" ><img :src="'../../static/'+item.productImage"alt=""></div>
                <span class="itemName">{{item.productName}}</span>
              </li>
              <li><span class="itemPrice">{{item.salePrice }}</span></li>
              <li>
                <div class="box">
                  <!--加减方法-->
                  <div class="subtract" @click="editCar('subtract',item)" >-</div>
                  <span>{{item.productNum}} </span>
                  <!--加减方法-->
                  <div class="add" @click="editCar('add',item)">+</div>
                </div>
              </li>
              <li>
                <span class="subtotal">{{(item.productNum*item.salePrice)}}</span>
              </li>
              <li @click="confirmDel(item.productId,item.productNum)">
                <span class="edit"  >&#xe613;</span>
              </li>
            </ul>
          </li>
        </ul>
        <div class="result">
          <div class="result_left">
            <!--全选-->
            <div class="circle" @click=" triggerCheckAll">
              <img src="../../static/finish.png" alt=""  v-show="checkAll">
            </div>
            <span>全部</span>
          </div>
          <div class="result_right">
            <span>合计：</span>
            <h4>{{subPrice}}</h4>
            <div class="buy" :class="{'buy_dis':checkCount==0}" @click="checkOut">去结算</div>
          </div>
        </div>
      </div>
    </div>
    <modal v-show="modalConfirm" @close="closeModal" >
      <div slot="message" class="confirm_tip" >
        <p style="margin-left: 123px">您确认删除这条信息吗？</p>
      </div>
      <div slot="btnGroup" >
        <button class="md_btn"  @click="carDel">确认</button>
        <button class="md_btn"  style="margin-left: 20px"@click="modalConfirm=false">关闭</button>
      </div>
    </modal>

  </div>
</template>

<script>
    // 导入组件
    import './../assets/car.css'
    import NavHeader from '@/components/NavHeader.vue'
    import NavFooter from '@/components/NavFooter.vue'
    import NavBread from '@/components/NavBread.vue'
    import Modal from '@/components/Modal.vue'
    import axios from 'axios'
    export default {
      data(){
        // 在data数据中只要不是传过来的数据都要用this而且要 在data中声明
        return {
          carList:[],
          modalConfirm:false,
          productId:''
        }
      },
      components: {
        NavHeader,
        NavFooter,
        NavBread,
        Modal,
      },
      mounted(){
      this.getCarList()
      },
      computed:{
        subPrice(){
          var price=0;
          this.carList.forEach((item)=>{
            if(item.checked=='1'){
              price+=item.productNum*item.salePrice;
            }
          })
          return price;
        },
        // 实时计算属性
        checkAll(){
          return this.carList.length==this.checkCount;
        },
        checkCount(){
          var i=0;
          this.carList.forEach((item)=>{
            if(item.checked=='1'){
              i++;
            }
          })
          return i;
        },
      },
      methods:{
        getCarList(){
          axios.get('/users/carList').then((response)=>{
            var res= response.data;

            if(res.status=='0'){
        this.carList=res.result
            }
          })
        },
        closeModal(){
          this.modalConfirm=false
        },
        confirmDel(productId,productNum){
          this.productId=productId;
          this.productNum=productNum;
          this.modalConfirm=true;
        },
        carDel(){
          axios.post('/users/carDel',{
            productId:this.productId
          }).then((response)=>{
            var res= response.data;

            if(res.status=='0'){
              this.modalConfirm=false;
              this.getCarList();

            }
          })
        },
          // editCart(flag,item){
          // if(flag=="add"){
          // item.productNum++
          //     }else {
          //   if (item.productNum<=1){
          //     return;
          //   }
          //   item.productNum--
          //   }
          //   axios.post('/users/carEdit',{
          //    productId:item.productId,
          //     productNum:item.productNum,
          //
          //   }).then((response)=>{
          //     var res= response.data;
          //     if(res.status=='0'){
          //       console.log(1)
          //     }
          //   })
          // }
        // 单选
        editCar(flag,item){
          if(flag=='add'){
            item.productNum++;
          }else if(flag=='subtract'){
            if(item.productNum<=1){
              return;
            }
            item.productNum--;
          }
          else {
            item.checked=item.checked=='1'?'0':'1';
          }
          axios.post('/users/carEdit',{
            Id:item.Id,
            productNum:item.productNum,
            checked:item.checked
          }).then((response)=>{
            var res= response.data;
            if(res.status=='0'){
              console.log(res)
              this.getCarList();

            }
          })
        },
        // 全选
        triggerCheckAll(){
          var flag=!this.checkAll;
          this.carList.forEach((item)=>{
            item.checked=flag?1:0;
          })
          axios.post('/users/carCheckAll',{
            checked:flag?'1':'0'
          }).then((response)=>{
            var res= response.data;
            if(res.status=='0'){
              console.log('更新成功')
            }
          })
        },
        checkOut(){
          if(this.checkCount>0){
            this.$router.push({
              path:"/address"
            });
          }
        }

      }
    }
</script>
<!-- 样式代码 -->
<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
