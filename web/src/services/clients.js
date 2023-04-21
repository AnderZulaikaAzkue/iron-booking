import http from './base-api';

const create = (client) => http.post('/clients', client)
  .then((res) => res.data);

const login = (client) => http.post('/login', client)
  .then((res) => res.data);

const get = (id) => http.get(`/clients/${id}`)
  .then((res) => res.data);


export default {
  create,
  login,
  get,
}