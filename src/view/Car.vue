<!-- 展示模板 -->
<template>
  <div>
    <!--顶部-->
    <nav-header></nav-header>
    <!--面包屑部分-->
    <nav-bread>
      <a href="javascript:;">购物车</a>
    </nav-bread>



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
        return {

        }
      },
      components: {
        NavHeader,
        NavFooter,
        NavBread,
        Modal,
      },
      mounted(){

      },
      computed:{



      },
      methods:{




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
