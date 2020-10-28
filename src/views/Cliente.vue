<template>
  <div>
    <div class="cliente">
      <router-link to="cliente-cadastro" class="link">Novo</router-link>
    </div>

    <div id="listagem">
      <div class="wrapper">
        <div class="table">
          <div class="row header blue">
            <div class="cell">Nome</div>
            <div class="cell">Telefone</div>
            <div class="cell">Data de nascimento</div>
            <div class="cell">Situação</div>
          </div>

          <div class="row" v-for="cliente in clientes" :key="cliente.id">
            <div class="cell" data-title="Nome">{{ cliente.nome }}</div>
            <div class="cell" data-title="Telefone">{{ cliente.telefone }}</div>
            <div class="cell" data-title="Data de Nascimento">
              {{ cliente.dataNascimento }}
            </div>
            <div class="cell" data-title="Situação">{{ cliente.situacao }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClienteService from "../services/clienteService";
export default {
  data() {
    return {
      clientes: [],
    };
  },

  mounted() {
    this.listar();
  },

  methods: {
    listar() {
      ClienteService.list().then((res) => {
        this.clientes = res.data;
      });
    },
  },
};
</script>

<style scoped lang="sass">
.link
  text-decoration: none

.link
  cursor: pointer
  border: none
  background: #4c7aaf
  color: #fff
  margin: 0 0 5px
  padding: 10px
  font-size: 15px

.link:visited
  color: #fff

.body
  font-size: 14px
  line-height: 20px
  font-weight: 400
  color: #3b3b3b
  -webkit-font-smoothing: antialiased
  font-smoothing: antialiased
  background: #2b2b2b

  @media screen and (max-width: 580px)
    font-size: 16px
    line-height: 22px

.wrapper
  margin: 0 auto
  padding: 40px
  max-width: 800px

.table
  margin: 0 0 40px 0
  width: 100%
  box-shadow: 0 1px 3px rgba(0,0,0,0.2)
  display: table
  @media screen and (max-width: 580px)
    display: block

.row
  display: table-row
  background: #f6f6f6

  &:nth-of-type(odd)
    background: #e9e9e9

  &.header
    font-weight: 900
    color: #ffffff
    background: #ea6153

  &.green
    background: #27ae60

  &.blue
    background: #2980b9

  @media screen and (max-width: 580px)
    padding: 14px 0 7px
    display: block

    &.header
      padding: 0
      height: 6px

      .cell
        display: none

    .cell
      margin-bottom: 10px

      &:before
        margin-bottom: 3px
        content: attr(data-title)
        min-width: 98px
        font-size: 10px
        line-height: 10px
        font-weight: bold
        text-transform: uppercase
        color: #969696
        display: block

.cell
  padding: 6px 12px
  display: table-cell
  @media screen and (max-width: 580px)
    padding: 2px 16px
    display: block
</style>