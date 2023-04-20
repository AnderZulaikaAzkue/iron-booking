import http from "./base-api";

const list = () =>  http.get('/hotels')
.then((res) => res.data)

export default {
  list
}