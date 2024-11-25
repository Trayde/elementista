export default {
	namespaced: true, //
	state: {
	  arquivo: null, // 
	},
	getters: {
        arquivo: state => state.arquivo
	},
	mutations: {
	 
	  setArquivo(state, route) {
		state.arquivo = route; // Define a rota para redirecionar após login
	  }
	},
	actions: {
	
	  updateArquivo({ commit }, route) {
		commit('setArquivo', route); // Atualiza a rota para redirecionamento após login
	  }
	}
  };
  