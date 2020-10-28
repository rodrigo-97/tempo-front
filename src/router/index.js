import Vue from 'vue'
import VueRouter from 'vue-router'
import Cliente from '../views/Cliente.vue'
import Produto from '../views/Produto.vue'
import Pedido from '../views/Pedido.vue'
import ClienteCadastro from '../components/ClienteCadastro.vue'
import ProdutoCadastro from '../components/ProdutoCadastro.vue'
import PedidoCadastro from '../components/PedidoCadastro.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'cliente',
    component: Cliente
  },
  {
    path: '/produto',
    name: 'produto',
    component: Produto
  },
  {
    path: '/pedido',
    name: 'pedido',
    component: Pedido
  },
  {
    path: '/cliente-cadastro',
    name: 'cliente-cadastro',
    component: ClienteCadastro
  },
  {
    path: '/produto-cadastro',
    name: 'produto-cadastro',
    component: ProdutoCadastro
  },
  {
    path: '/pedido-cadastro',
    name: 'pedido-cadastro',
    component: PedidoCadastro
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
