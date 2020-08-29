import * as types from './mutation-types';

export const getDrones = ({
  commit,
}) => {
  this.$api.get('drones')
    .then((response) => {
      commit(types.GET_DRONES, response.data);
    });
};

export const saveDrone = ({ commit }, dronePayload) => {
  commit(types.SAVE_DRONE, dronePayload);
};
