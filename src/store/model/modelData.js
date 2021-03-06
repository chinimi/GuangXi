
import Vue from 'vue'
import Vuex  from  'vuex'

Vue.use(Vuex)

const state = {
  //一维
  OneDimensionalModelTabID:null,
  OneDimensionalModelTabLayer:null,

  //二维
  TwoDimensionalModelTabID:null,
  TwoDimensionalModelTabLayer:null,

}
const getters = {
  //一维
  getter_OneDimensionalModelTabID() {
    return state.OneDimensionalModelTabID
  },
  getter_OneDimensionalModelTabLayer() {
    return state.OneDimensionalModelTabLayer
  },

  //二维
  getter_TwoDimensionalModelTabID() {
    return state.TwoDimensionalModelTabID
  },
  getter_TwoDimensionalModelTabLayer() {
    return state.TwoDimensionalModelTabLayer
  },

}
const mutations = {
  //一维
  mutation_OneDimensionalModelTabID(state,param){
    state.OneDimensionalModelTabID = param.value
   },
   mutation_OneDimensionalModelTabLayer(state,param){
    state.OneDimensionalModelTabLayer = param.layer
   },


   //二维
   mutation_TwoDimensionalModelTabID(state,param){
    console.log(param)
    state.TwoDimensionalModelTabID = param.value
   },
   mutation_TwoDimensionalModelTabLayer(state,param){
    state.TwoDimensionalModelTabLayer = param.layer
   },


}
const actions = {
  //一维
  ChangeOneDimensionalModelTabID: ({ commit }, param) => {
    commit("mutation_OneDimensionalModelTabID", param)
  },
  ChangeOneDimensionalModelTabLayer: ({ commit }, param) => {
    commit("mutation_OneDimensionalModelTabLayer", param)
  },
  //二维
  ChangeTwoDimensionalModelTabID: ({ commit }, param) => {
    commit("mutation_TwoDimensionalModelTabID", param)
  },
  ChangeTwoDimensionalModelTabLayer: ({ commit }, param) => {
    commit("mutation_TwoDimensionalModelTabLayer", param)
  },


}
export default {
  state,
  getters,
  mutations,
  actions
}
