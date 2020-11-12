import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [],
  },
  getters: {
    fetchMovies: (state) => state.movies,
  },
  mutations: {
    MOVIES: (state, payload) => {
      state.movies = payload;
    },
  },
  actions: {
    fetchMovies: (context) => {
      axios({
        method: 'get',
        url: '/movies',
      }).then((response) => {
        context.commit('MOVIES', response.data.movies);
      }).catch(() => {});
    },
  },
});
