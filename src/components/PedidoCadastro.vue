<template>
  <div class="container">
    <form id="contact" style="margin-top: none" action="" method="post">
      <h3>Novo produto</h3>
      <fieldset>
        <h5 style="display: flex; justify-content: flex-start">
          Selecione os Produtos
        </h5>
        <select multiple v-model="selecionados">
          <option
            v-for="produto in produtos"
            :key="produto.id"
            v-bind:value="{ id: produto.id, valor: produto.valor }"
            v-bind:valor="produto.valor"
            @click="calcularValorTotal"
          >
            {{ produto.nome }} - R$ {{ produto.valor }}
          </option>
        </select>
      </fieldset>
      <fieldset>
        <h5 style="display: flex; justify-content: flex-start">
          Selecione o Cliente
        </h5>
        <select></select>
      </fieldset>
      <fieldset>
        <h5 style="display: flex; justify-content: flex-start">
          Valor total: {{ valorFinal }}
        </h5>
      </fieldset>
      <fieldset>
        <button name="submit" type="submit" id="contact-submit">Enviar</button>
      </fieldset>
    </form>
    {{ selecionados }}
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import ProdutoService from "../services/produtoService";
export default {
  data() {
    return {
      produtos: [],
      selecionados: [],
      valorFinal: "",
    };
  },

  computed: {
    ...mapGetters(["pedido"]),
  },

  async mounted() {
    ProdutoService.list().then((res) => {
      this.produtos = res.data;
    });
  },

  methods: {
    salvar() {
      alert("foi");
    },

    calcularValorTotal() {
      this.valorFinal = this.selecionados.reduce(function (total, numero) {
        return total + numero.valor;
      }, 0);
    },
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,600,400italic);
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  -o-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

body {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  font-weight: 100;
  font-size: 12px;
  line-height: 30px;
  color: #777;
  background: #4caf50;
}

.container {
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  position: relative;
}

#contact input[type="text"],
#contact input[type="tel"],
#contact button[type="submit"] {
  font: 400 12px/16px "Roboto", Helvetica, Arial, sans-serif;
}

#contact {
  background: #f9f9f9;
  padding: 25px;
  margin: 0 0;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

#contact h3 {
  display: block;
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 10px;
}

#contact h4 {
  margin: 5px 0 15px;
  display: block;
  font-size: 13px;
  font-weight: 400;
}

fieldset {
  border: medium none !important;
  margin: 0 0 10px;
  min-width: 100%;
  padding: 0;
  width: 100%;
}

#contact input[type="text"],
#contact input[type="tel"],
select {
  width: 100%;
  border: 1px solid #ccc;
  background: #fff;
  margin: 0 0 5px;
  padding: 10px;
}

#contact input[type="text"]:hover,
#contact input[type="tel"]:hover {
  -webkit-transition: border-color 0.3s ease-in-out;
  -moz-transition: border-color 0.3s ease-in-out;
  transition: border-color 0.3s ease-in-out;
  border: 1px solid #aaa;
}

#contact button[type="submit"] {
  cursor: pointer;
  width: 100%;
  border: none;
  background: #4caf50;
  color: #fff;
  margin: 0 0 5px;
  padding: 10px;
  font-size: 15px;
}

#contact button[type="submit"]:hover {
  background: #43a047;
  -webkit-transition: background 0.3s ease-in-out;
  -moz-transition: background 0.3s ease-in-out;
  transition: background-color 0.3s ease-in-out;
}

#contact button[type="submit"]:active {
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
}

.copyright {
  text-align: center;
}

#contact input:focus,
#contact textarea:focus {
  outline: 0;
  border: 1px solid #aaa;
}

::-webkit-input-placeholder {
  color: #888;
}

:-moz-placeholder {
  color: #888;
}

::-moz-placeholder {
  color: #888;
}

:-ms-input-placeholder {
  color: #888;
}
</style>