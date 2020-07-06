import Vuex from 'vuex';
import Vue from "vue";
import Axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
  // strict: true,
  state: {

    lists: {}
  },
  mutations: {
    SET_DASHBOARD_DATA(state, payload) {
      return state.lists = payload;
    },

  },
});

export default store
