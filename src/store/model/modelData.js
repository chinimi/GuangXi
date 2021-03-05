
import Vue from 'vue'
import Vuex  from  'vuex'

Vue.use(Vuex)

const state = {
  OneDimensionalModelTabID:null,
  TwoDimensionalModelTabID:null,

}
const getters = {
  getter_OneDimensionalModelTabID() {
    return state.OneDimensionalModelTabID
  },
  getter_TwoDimensionalModelTabID() {
    return state.TwoDimensionalModelTabID
  },

}
const mutations = {
  mutation_OneDimensionalModelTabID(state,param){
    console.log(param)
    state.OneDimensionalModelTabID = param.value
   },
   mutation_TwoDimensionalModelTabID(state,param){
    console.log(param)
    state.TwoDimensionalModelTabID = param.value
   },

}
const actions = {
  ChangeOneDimensionalModelTabID: ({ commit }, param) => {
    commit("mutation_OneDimensionalModelTabID", param)
  },
  ChangeTwoDimensionalModelTabID: ({ commit }, param) => {
    commit("mutation_TwoDimensionalModelTabID", param)
  },


}
export default {
  state,
  getters,
  mutations,
  actions
}
