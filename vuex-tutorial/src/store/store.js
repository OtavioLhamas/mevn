import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
  },
  getters: {
    fetchCount: (state) => state.count,
  },
  mutations: {
    increment: (state) => { state.count += 1; },
    decrement: (state) => { state.count -= 1; },
  },
  actions: {
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement'),
  },
});
