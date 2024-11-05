
const axios = require('axios');

// Objeto contendo os métodos para fazer requisições
const apiMethodsAtividades = {

  async obertAtividade() {
    try {
      let response = []
      response = await axios.get('https://apienerge.apololab.net:5000/atividades/obterAtividade');
      console.log("response.data", response.data);
      return response.data;
    } catch (error) {
      console.error('Erro ao obter usuarios:', error);
      throw error;
    }
  },

  async obertAtividadeId(id) {
    try {
      let response = []
      response = await axios.get(`https://apienerge.apololab.net:5000/atividades/obterAtividadeId/${id}`);
      console.log("response.data", response);
      return response.data;
    } catch (error) {
      console.error('Erro ao obter usuarios:', error);
      throw error;
    }
  },

  async obertVideos() {
    try {
      let response = []
      response = await axios.get('https://apienerge.apololab.net:5000/atividades/obertVideos');
      console.log("response.data", response.data);
      return response.data;
    } catch (error) {
      console.error('Erro ao obter usuarios:', error);
      throw error;
    }
  },

  async obertVideosId(id){
    try {
      let response = []
      response = await axios.get(`https://apienerge.apololab.net:5000/atividades/obertVideosId/${id}`);
      console.log("response.data", response);
      return response.data;
    } catch (error) {
      console.log('Erro ao obter obertVideosId:', error);
      throw error;
    }
  },

  async gravaAtividade(dados) {
    const formData = new FormData();

    formData.append('id_atividade', dados.id_atividade);
    formData.append('id_ordem', dados.id_ordem);
    formData.append('usuario', dados.usuario);
    formData.append('titulo', dados.titulo);
    formData.append('texto', dados.texto);
    formData.append('link', dados.link);
    if (dados.selectedFile) {
      formData.append('file', dados.selectedFile);
    }
    formData.append('imageName', dados.imageName);
    formData.append('tag', dados.tag);
  
    try {
      const response = await axios.post('https://apienerge.apololab.net:5000/atividades/gravaAtividade', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      return response;
    } catch (error) {
      console.error('Erro ao gravaAtividade:', error.response ? error.response.data : error.message);
      throw error;
    }
  },
  

  async gravaVideos(dados) {
   
    try {
      const response = await axios.post('https://apienerge.apololab.net:5000/atividades/gravaVideos', dados);

      return response

    } catch (error) {
      console.error('Erro ao gravaAtividade:', error);
      throw error;
    }
  },

 async editarAtividade(dados)
  {
    const formData = new FormData();
    formData.append('id_atividade', dados.id_atividade);
    formData.append('id_ordem', dados.id_ordem);
    formData.append('usuario', dados.usuario);
    formData.append('titulo', dados.titulo);
    formData.append('texto', dados.texto);
    formData.append('link', dados.link);
    formData.append('file', dados.selectedFile);
    formData.append('imageName', dados.imageName);
    formData.append('tag', dados.tag);

    try {
      const response = await axios.post('https://apienerge.apololab.net:5000/atividades/editarAtividade', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      return response

    } catch (error) {
      console.error('Erro ao gravaAtividade:', error);
      throw error;
    }
  },

  async editarVideos(dados)
  {
    try {
      const response = await axios.post('https://apienerge.apololab.net:5000/atividades/editarVideos', dados);

      return response

    } catch (error) {
      console.error('Erro ao editarVideos:', error);
      throw error;
    }
  },
  // Adicione mais métodos conforme necessário
};

// Exporte o objeto contendo os métodos
module.exports = apiMethodsAtividades;
