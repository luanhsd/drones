import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ondrone-api.herokuapp.com/api'
});

export default api;
