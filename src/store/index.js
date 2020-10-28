import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cliente: {
      nome: "",
      telefone: "",
      dataNascimento: "",
    },
    pedido: {
     
    },
    produto: {
      nome: "",
      valor: "",
    }
  },

  getters:{
    cliente: (state) => state.cliente,
    produto: (state) => state.produto,
  },
  mutations: {
  },
})
