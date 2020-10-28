const axios = require('axios');


const http = axios.create({
  baseURL: 'http://localhost:3333/',
  timeout: 1000,
});

export default {
  list: () => {
    return http.get("/listar-produtos");
  },

  insert: (produto) => {
    return http.post("/inserir-produto", produto);
  },

  update: (produto) => {
    return http.put("/alterar-produto", produto)
  },

  remove: (id) => {
    return http.delete("/remover-produto/" + id)
  },
};
