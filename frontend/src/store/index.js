import Vue from 'vue';
import VueX from 'vuex';
import mutations from './mutations';
import * as actions from './actions';
import getters from './getters';

Vue.use(VueX);

const state = {
  drones: [],
  total: 0,
  page: 1,
  totalPages: 0,
};

export default new VueX.Store({
  state,
  actions,
  mutations,
  getters,
});
