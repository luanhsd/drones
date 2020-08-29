import * as types from './mutation-types';
import api from '../services/api';

export const getDrones = ({
  commit,
}) => {
  api.get('drones')
    .then((response) => {
      commit(types.GET_DRONES, response.data);
    });
};

export const saveDrone = ({ commit }, dronePayload) => {
  commit(types.SAVE_DRONE, dronePayload);
};
