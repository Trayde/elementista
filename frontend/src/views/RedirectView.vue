<template>
    <div></div> <!-- Pode ser um elemento vazio, pois o redirecionamento será automático -->
  </template>
  
  <script>
  import { useRouter, useRoute } from 'vue-router';
  import { computed, onMounted } from 'vue';
  import { useStore } from 'vuex';
  
  export default {
    setup() {
      const router = useRouter();
      const route = useRoute();
      const store = useStore();
  
      // Computed property para verificar autenticação
      const isAuthenticated = computed(() => store.getters['auth/isAuthenticated']);
      const targetRoute = route.query.target || '/';
      const arquivoIno  = route.query.nome || ''

      
      
  
      onMounted(() => {
        // Executa após o componente ser montado
        if (isAuthenticated.value) {
          router.push(targetRoute); // Redireciona para a rota alvo diretamente
        } else {
       //     console.log("query rediret", targetRoute, '   ', arquivoIno);
          // Salva a rota alvo para redirecionar após login
          store.commit('auth/setRedirectAfterLogin', targetRoute);
          store.commit('arquivo/setArquivo', arquivoIno);
          router.push('/login');
        }
      });
    }
  };
  </script>
  