import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import vuexPersist from "vuex-persist";

export default new Vuex.Store({
  state: {
   
  },
  mutations: {
    
  },
  actions: {},
  modules: {},
  getters: {},
  plugins: [
    new vuexPersist({
      storage: window.localStorage,
    }).plugin,
  ],
});
// store是仓库的意思
// state 是状态的意思 就是要管理的公共数据相当于是data
// mutations 是修改状态的方法，相当于是methods
// 只有mutation才有权利修改state
// actions 是执行异步操作的地方
// modules 是模块的意思 分模块管理state
// getters 是计算的意思 相当于是计算属性computed

// 在页面中使用state;
// this.$store.state.xxx;
// 使用mutation;
// this.$store.commit("xxx", xxx);
