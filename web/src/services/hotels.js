import http from "./base-api";

const list = (query) =>  http.get('/hotels', { params: query })
.then((res) => res.data)

const detail = (id) => http.get(`/hotels/${id}`)
  .then((res) => res.data);

  const rooms = (id) => http.get(`/rooms/${id}`)
  .then((res) => res.data);

export default {
  list,
  detail, 
  rooms
}