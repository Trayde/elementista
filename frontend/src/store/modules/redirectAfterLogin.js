export default {
	namespaced: true, // Permite que o módulo seja acessado com prefixo "auth/"
	state: {
	  auth: null, // Armazena informações do usuário autenticado (pode ser um objeto ou apenas um token)
	  redirectAfterLogin: null // Rota para redirecionar após login
	},
	getters: {
	  isAuthenticated: state => !!state.auth, // Retorna `true` se `auth` tiver um valor
	  redirectAfterLogin: state => state.redirectAfterLogin
	},
	mutations: {
	  setAuth(state, userData) {
		state.auth = userData; // Define os dados do usuário ao logar
	  },
	  clearAuth(state) {
		state.auth = null; // Limpa os dados do usuário ao deslogar
	  },
	  setRedirectAfterLogin(state, route) {
		state.redirectAfterLogin = route; // Define a rota para redirecionar após login
	  }
	},
	actions: {
	  login({ commit }, userData) {
		// Simulação de login (aqui você normalmente faria uma chamada à API para autenticação)
		return new Promise((resolve) => {
		  setTimeout(() => {
			commit('setAuth', userData); // Salva os dados do usuário após autenticação
			resolve();
		  }, 1000);
		});
	  },
	  logout({ commit }) {
		commit('clearAuth'); // Limpa o estado de autenticação
	  },
	  updateRedirectAfterLogin({ commit }, route) {
		commit('setRedirectAfterLogin', route); // Atualiza a rota para redirecionamento após login
	  }
	}
  };
  