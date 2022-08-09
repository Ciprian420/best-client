import { createStore } from 'vuex'

export default createStore({
  state: {
    isSearchPopupActive: false,
    isProductPopupActive: false,
    isUserPopupActive: false,
    products: []
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
    },
    getProductsState(state) {
      return state.products
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
    },
    toggleProductsState(state, val) {
      state.products = val
    }
  },
})
