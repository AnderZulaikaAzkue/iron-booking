import http from './base-api';

const create = (client) => http.post('/register', client)
  .then((res) => res.data);

const login = (client) => http.post('/login', client)
  .then((res) => res.data);

export default {
  create,
  login,
}