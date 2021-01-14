/*入口*/
import Vue from 'vue'
import Vuex  from  'vuex'
import mutations from  "./mutations"
import actions from  "./action"

Vue.use(Vuex)

const state={
  map:null,//全局变量地图



}

export default new Vuex.Store({
  state,
  mutations,
  actions


})
