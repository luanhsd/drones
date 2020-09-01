import * as types from './mutation-types';

const mutations = {
  [types.GET_DRONES](state, payload) {
    state.drones = payload;
  },
  [types.GET_TOTAL](state, payload) {
    state.total = payload;
  },
  [types.GET_PAGE](state, payload) {
    state.page = payload;
  },
  [types.GET_TOTALPAGES](state, payload) {
    state.totalPages = payload;
  },
};

export default mutations;
