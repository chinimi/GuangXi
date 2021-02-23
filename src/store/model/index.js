
const state = {
  OneDimensionalModelTabID:null,

}
const getters = {
  getter_OneDimensionalModelTabID() {
    return state.OneDimensionalModelTabID
  },

}
const mutations = {
  mutation_OneDimensionalModelTabID(state,param){
    console.log(param)
    state.OneDimensionalModelTabID = param.value
   },

}
const actions = {
  ChangeOneDimensionalModelTabID: ({ commit }, param) => {
    commit("mutation_OneDimensionalModelTabID", param)
  },


}
export default {
  state,
  getters,
  mutations,
  actions
}
