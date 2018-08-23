import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const store = new Vuex.Store({
  // state是唯一的数据源
  state: {
    cartCount:0
  },
  // 改变公用数据只能使用mutations
  mutations: {
    updateCartCount(state,cartCount){
      state.cartCount = cartCount;
    },
    updateCartCount1(state,cartCount){
      state.cartCount += cartCount;
    }
  }
});
export default store
