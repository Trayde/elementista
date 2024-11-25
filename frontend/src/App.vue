<template>
  <div>
    <Nav v-if="showLayout" />
    <div class="container-fluid page-body-wrapper">
      <SideBar v-if="showLayout" />
      <div class="main-panel">
        <div class="content-wrapper">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Nav from '@/components/navBar/NavBar';
import SideBar from '@/components/navBar/SideBar';

export default {
  components: {
    Nav,
    SideBar
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    // Esconde Nav e SideBar apenas na rota de login
    const showLayout = computed(() => route.name !== 'Login');

    const atividadesParam = route.query.atividades;

   
     console.log("log atividadesParam", atividadesParam);

    // Verifica se o parâmetro "atividades" está presente e redireciona
    const checkRedirect = () => {
      const atividadesParam = route.query.atividades;

   
      console.log("log atividadesParam", atividadesParam);



      if (atividadesParam) {
        // Redireciona para a rota /ver-conteudo com o parâmetro de consulta
        router.push({ path: '/Redirect', query: { atividades: atividadesParam } });
      }
    };

    // Executa a verificação ao montar o componente
    onMounted(() => {
      console.log("log 1");
      
      checkRedirect();
    });

    return {
      showLayout
    };
  }
};
</script>

<style scoped>
/* Aqui você pode colocar o CSS específico para seu layout */
</style>
