import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gu:[],
    twolist:[]
  },
  mutations: {
    add(state,item){
      state.twolist.push(item)

    }
  },
  actions: {
  },
  modules: {
  }
})
