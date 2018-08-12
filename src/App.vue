<template>
<div id="app">

    <router-view/>
</div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'App',
  mounted(){
    // this.getGoodsList();
  },

    data() {
        return {
          // msg:""
        }
    },
    methods: {
      // 请求数据测试方法
      //   getGoodsList() {
      //       axios.get("/goods/list", {
      //           params: {
      //               page: 0,
      //               pageSize: 8,
      //               orderFlag: true,
      //               priceLevel: '4'
      //           }
      //       }).then((res) => {
      //           // console.log(JSON.stringify(res.data))
      //         this.msg=res.data
      //       }).catch(function (error) {
      //         console.log("失败")
      //       })
      //   }



    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;


  width: 100%;
}
</style>
