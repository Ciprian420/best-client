import { createStore } from 'vuex'

export default createStore({
  state: {
    isSearchPopupActive: false,
    isProductPopupActive: false,
    isUserPopupActive: false
  },
  getters: {
    getSearchPopupState(state){
      return state.isSearchPopupActive
    },
    getProductPopupState(state){
      return state.isProductPopupActive
    },
    getUserPopupState(state){
      return state.isUserPopupActive
    }
  },
  mutations: {
    toggleSearchPopupState(state, val){
      state.isSearchPopupActive = val
    },
    toggleProductPopupState(state, val){
      state.isProductPopupActive = val
    },
    toggleUserPopupState(state, val){
      state.isUserPopupActive = val
    }
  },
})
