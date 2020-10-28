const axios = require('axios');


const http = axios.create({
  baseURL: 'http://localhost:3333/',
  timeout: 1000,
});

export default {
  list: () => {
    return http.get("/listar-clientes");
  },

  insert: (cliente) => {
    return http.post("/inserir-cliente", cliente);
  },

  update: (cliente) => {
    return http.put("/alterar-cliente", cliente)
  },

  remove: (id) => {
    return http.delete("/remover-cliente/" + id)
  },
};
