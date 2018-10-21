import Vue from 'vue';
import Vuex from 'vuex';
import ProductList from './modules/vapi-productlist'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    forSale: [],
    inCart: [],
  },
  getters: {
    inCart: state => state.inCart,
    forSale: state => state.forSale,
  },
  mutations: {
    ADD_TO_CART(state, id) { state.inCart.push(id); },
  },
  actions: {
    addToCart(context, id) { context.commit('ADD_TO_CART', id) }
  },
});