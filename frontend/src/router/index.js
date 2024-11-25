import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'



const routes = [
  {
    path: '/videos',
    name: 'videos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/conteudo/Videos.vue')
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
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
  ,
  {
    path: '/ver-tutoriais',
    name: 'VerTutoriais',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/conteudo/VerMaisConteudo/VerTutoriais.vue')
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
    path: '/cria-tutorial',
    name: 'CriaViTutorial',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/conteudo/criaConteudo/CriaTutorial.vue')
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
    path: '/editar-tutorial',
    name: 'EditarTutorial',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/conteudo/modal/ModalEditarTutorial.vue')
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
  ,
  {
    path: '/cria-agua',
    name: 'CriaAgua',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/laboratorio/criaConteudo/CriaAgua.vue')
  },
  
  {
    path: '/ver-agua',
    name: 'VerAgua',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/laboratorio/VerMaisLaboratorio/VerAgua.vue')
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
    path: '/ver-ar',
    name: 'VerAr',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/laboratorio/VerMaisLaboratorio/VerAr.vue')
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
  {
    path: '/redirect',
    name: 'Redirect',
    component: () => import(/* webpackChunkName: "about" */'../views/RedirectView.vue')
  }
  
  
]



console.log("log 2");

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  // Exemplo: Verificar um parâmetro na query e redirecionar ou manipular a navegação
  const atividadesParam = to.query.tutoriais; // Obtendo o valor da query string 'atividades'
  console.log("name atividadesParam", atividadesParam);

  const atividadesParam2 = to.query.target; // Obtendo o valor da query string 'atividades'
  console.log("query atividadesParam2", atividadesParam2);

  const arquivo = to.query.nome; // Obtendo o valor da query string 'atividades'
  console.log("query arquivo", arquivo);
  
  if (atividadesParam === '/redirect') {
    console.log('Parametro atividades:', atividadesParam);  // Log do valor da query
    next({
      path: "/redirect",
      query: { target: atividadesParam2 , nome: arquivo}
    });
  }
  
  next();  // Permite a navegação continuar
});

export default router
