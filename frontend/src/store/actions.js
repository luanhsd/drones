import * as types from './mutation-types';
import api from '../services/api';

export const getDrones = ({
  commit,
}) => {
  api.get('drones')
    .then((response) => {
      commit(types.GET_DRONES, response.data.serializedDrones);
      commit(types.GET_TOTAL, response.data.total);
      commit(types.GET_PAGE, response.data.page);
      commit(types.GET_TOTALPAGES, response.data.totalPages);
    })
    .catch((error) => {
      console.log(error.response.data.message);
    });
};

export const getDronesParams = ({ commit }, dronePayload) => {
  commit(types.GET_DRONES, dronePayload.serializedDrones);
  commit(types.GET_TOTAL, dronePayload.total);
  commit(types.GET_PAGE, dronePayload.page);
  commit(types.GET_TOTALPAGES, dronePayload.totalPages);
};
