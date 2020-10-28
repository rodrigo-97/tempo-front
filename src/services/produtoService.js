const axios = require('axios');


const http = axios.create({
  baseURL: 'http://localhost:3333/',
  timeout: 1000,
});

export default {
  list: () => {
    return http.get("/listar-produtos");
  },

  insert: (clan) => {
    return http.post("/inserir-rpduto", clan);
  },

  update: (clan) => {
    return http.put("/alterar-produto", clan)
  },

  remove: (id) => {
    return http.delete("/remover-produto/" + id)
  },
};
