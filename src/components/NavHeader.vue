<!-- 展示模板 -->
<template>
  <header class="header">
    <div class="header_main">
      <div class="header_logo">
        <a href=""><img src="/static/logo.jpg" alt=""></a>
      </div>
      <div class="header_login" >
        <router-link  href="javascript:;" to="/car" class="shoppingcar" >&#xe63f;</router-link>
        <span v-if="nickName">{{nickName}}</span>

        <a v-if="nickName" @click="logout">退出</a>
        <a @click="modelFlag=true" v-if="!nickName">登录</a>

        <div  ><router-link  href="javascript:;" to="/car" class="carCount1"></router-link></div>
      </div>
    </div>
    <div class="modal" v-if="modelFlag" >
      <a href="javascript:(0)" class="md_close" @click="modelFlag=false" >×</a>
      <div class="md_title">
        <h2>登 录</h2>
      </div>
      <div class="md_content" >
        <div class="confirm_tip1" v-show="errorTip" >
          <span class="tip_icon" >&#xe616;</span>用户名或密码错误
        </div>
        <ul>
          <li>
            <span>&#xe600;</span>
            <input type="text" placeholder="用户名"  v-model="userName">
          </li>
          <li>
            <span>&#xe603;</span>
            <input type="password" placeholder="密码" v-model="userPwd">
          </li>
        </ul>
        <button class="md_btn1" @click="login" v-show="modelFlag"> 登录</button>
      </div>
    </div>
  </header>

</template>

<script>
  import './../assets/login.css'
  import axios from 'axios'
  export default {
    data(){
      return{
        userName:'',
        userPwd:'',
        errorTip:false,
        modelFlag:false,
        nickName:''

      }
    },

      mounted(){
        this.checkLogin();
      },

         methods :{
           checkLogin(){
             axios.get("/users/checkLogin").then((response)=>{
               let res=response.data;
               if(res.status=='0'){
                 this.nickName=res.result.userName;

               }
             })
           },
           login(){
             axios.post("/users/login",{
               userName:this.userName,
               userPwd:this.userPwd,
             }).then((response)=>{
               let res=response.data;
               console.log(res)
               if (res.status=="0"){
                 this.errorTip=false,
                 this.nickName=res.result.userName
                  this.modelFlag=false
               } else {
            this.errorTip=true
               }

             }).catch(function (error) {
               console.log("失败")
             })
           },
           logout(){
             axios.post("/users/logout").then((response)=>{
               let res=response.data;

               if(res.status=="0"){

                 this.nickName='';
                 this.userName='';
                 this.userPwd='';
                 // this.errorTip=false;

               }
             })
           },
          }

  }
</script>


