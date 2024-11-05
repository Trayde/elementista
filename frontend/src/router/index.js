import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/atividades',
    name: 'atividades',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/conteudo/Atividades.vue')
  },
  {
    path: '/cria-atividade',
    name: 'criaAtividade',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/conteudo/criaConteudo/CriaAtividade.vue')
  },
  {
    path: '/videos',
    name: 'videos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/conteudo/Videos.vue')
  },
  {
    path: '/ver-conteudo',
    name: 'VerConteudo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/conteudo/VerMaisConteudo/Verconteudo.vue')
  },
  {
    path: '/ver-videos',
    name: 'VerVideos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/conteudo/VerMaisConteudo/VerVideos.vue')
  },
  {
    path: '/cria-videos',
    name: 'CriaVideos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/conteudo/criaConteudo/CriaVideos.vue')
  },
  {
    path: '/editar-atividade',
    name: 'EditarAtividade',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/conteudo/modal/ModalEditarAtividade.vue')
  },
  {
    path: '/editar-videos',
    name: 'EditarVideos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/conteudo/modal/ModalEditarVideos.vue')
  },
  {
    path: '/tutoriais',
    name: 'tutoriais',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/conteudo/Tutoriais.vue')
  },
  {
    path: '/agua',
    name: 'agua',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/laboratorio/Agua.vue')
  },
  
  {
    path: '/ar',
    name: 'ar',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/laboratorio/Ar.vue')
  },
  
  {
    path: '/terra',
    name: 'terra',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/laboratorio/Terra.vue')
  },
  
  {
    path: '/fogo',
    name: 'fogo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/laboratorio/Fogo.vue')
  },
  {
    path: '/noticias',
    name: 'noticias',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/postagem/Noticias.vue')
  },
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
