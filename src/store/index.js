/*入口*/
import Vue from 'vue'
import Vuex  from  'vuex'

Vue.use(Vuex)

const state={
  map:null,//全局变量地图

}
import mutations from  "./mutations"
import actions from  "./action"
import modelData from "./model/modelData"
export default new Vuex.Store({
  modules:{
    state,
    mutations,
    actions,
    modelData
  }



})
