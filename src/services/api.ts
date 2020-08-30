import axios from 'axios';

const api = axios.create({
  //baseURL: 'http://localhost:3333',
  //baseURL: 'http://10.0.2.2:3333',
  baseURL: 'http://192.168.1.65:3333', //rodar na avd do android studio.
});

export default api;
