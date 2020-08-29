import * as types from './mutation-types';

const mutations = {
  [types.GET_DRONES](state, payload) {
    state.drones = payload;
  },
  [types.SAVE_DRONE](state, payload) {
    state.drones.push(payload);
  },
};

export default mutations;
