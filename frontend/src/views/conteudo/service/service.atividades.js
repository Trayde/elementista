
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
  
  async deleteAtividade(id) {
    try {
      let response = []
      response = await axios.get(`https://apienerge.apololab.net:5000/atividades/deleteAtividade/${id}`);
      console.log("delete.data", response);
      return response.data;
    } catch (error) {
      console.log('Erro ao delete deleteAtividadeID:', error);
      throw error;
    }
  },

  async deleteVideos(id) {
    try {
      let response = []
      response = await axios.get(`https://apienerge.apololab.net:5000/atividades/deleteVideos/${id}`);
      console.log("delete.data", response);
      return response.data;
    } catch (error) {
      console.log('Erro ao delete deleteVideosID:', error);
      throw error;
    }
  },

  async gravaTutoriais(dados) {
    const formData = new FormData();

    formData.append('id_atividade', dados.id_atividade);
    formData.append('id_ordem', dados.id_ordem);
    formData.append('usuario', dados.usuario);
    formData.append('titulo', dados.titulo);
    formData.append('arquivo', dados.arquivo);
    formData.append('texto', dados.texto);
    formData.append('link', dados.link);
    if (dados.selectedFile) {
      formData.append('file', dados.selectedFile);
    }
    formData.append('imageName', dados.imageName);
    formData.append('tag', dados.tag);
  
    try {
      const response = await axios.post('https://apienerge.apololab.net:5000/atividades/gravaTutoriais', formData, {
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

  async obterTutoriais() {
    try {
      let response = []
      response = await axios.get('https://apienerge.apololab.net:5000/atividades/obterTutoriais');
      console.log("response.data", response.data);
      return response.data;
    } catch (error) {
      console.error('Erro ao obter Tutoriais:', error);
      throw error;
    }
  },

  async obterTutoriaisId(id) {
    console.log("obterTutoriaisId -", id);
    
    try {
      let response = []
      response = await axios.get(`https://apienerge.apololab.net:5000/atividades/obterTutoriaisId/${id}`);
      console.log("response.data", response);
      return response.data;
    } catch (error) {
      console.error('Erro ao obter Tutoriais:', error);
      throw error;
    }
  },
  
  async editarTutoriais(dados)
  {
    const formData = new FormData();
    formData.append('id_atividade', dados.id_atividade);
    formData.append('id_ordem', dados.id_ordem);
    formData.append('usuario', dados.usuario);
    formData.append('titulo', dados.titulo);
    formData.append('texto', dados.texto);
    formData.append('arquivo', dados.arquivo);
    formData.append('link', dados.link);
    formData.append('file', dados.selectedFile);
    formData.append('imageName', dados.imageName);
    formData.append('tag', dados.tag);

    try {
      const response = await axios.post('https://apienerge.apololab.net:5000/atividades/editarTutoriais', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      return response

    } catch (error) {
      console.error('Erro ao Tutoriais:', error);
      throw error;
    }
  },

  async deleteTutoriais(id) {
    try {
      let response = []
      response = await axios.get(`https://apienerge.apololab.net:5000/atividades/deleteTutoriais/${id}`);
      console.log("delete.data", response);
      return response.data;
    } catch (error) {
      console.log('Erro ao delete deleteTutoriaisID:', error);
      throw error;
    }
  },



  async gravaAgua(dados) {
    const formData = new FormData();

    formData.append('id_atividade', dados.id_atividade);
    formData.append('id_ordem', dados.id_ordem);
    formData.append('usuario', dados.usuario);
    formData.append('titulo', dados.titulo);
    formData.append('arquivo', dados.arquivo);
    formData.append('texto', dados.texto);
    formData.append('link', dados.link);
    if (dados.selectedFile) {
      formData.append('file', dados.selectedFile);
    }
    formData.append('imageName', dados.imageName);
    formData.append('tag', dados.tag);
  
    try {
      const response = await axios.post('https://apienerge.apololab.net:5000/atividades/gravaAgua', formData, {
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

  async obterAgua() {
    try {
      let response = []
      response = await axios.get('https://apienerge.apololab.net:5000/atividades/obterAgua');
      console.log("response.data", response.data);
      return response.data;
    } catch (error) {
      console.error('Erro ao obter Agua:', error);
      throw error;
    }
  },

  async obterAguaId(id) {
    console.log("obterAguaId -", id);
    
    try {
      let response = []
      response = await axios.get(`https://apienerge.apololab.net:5000/atividades/obterAguaId/${id}`);
      console.log("response.data", response);
      return response.data;
    } catch (error) {
      console.error('Erro ao obter Agua:', error);
      throw error;
    }
  },
  
  async editarAgua(dados)
  {
    const formData = new FormData();
    formData.append('id_atividade', dados.id_atividade);
    formData.append('id_ordem', dados.id_ordem);
    formData.append('usuario', dados.usuario);
    formData.append('titulo', dados.titulo);
    formData.append('texto', dados.texto);
    formData.append('arquivo', dados.arquivo);
    formData.append('link', dados.link);
    formData.append('file', dados.selectedFile);
    formData.append('imageName', dados.imageName);
    formData.append('tag', dados.tag);

    try {
      const response = await axios.post('https://apienerge.apololab.net:5000/atividades/editarAgua', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      return response

    } catch (error) {
      console.error('Erro ao Agua:', error);
      throw error;
    }
  },

  async deleteAgua(id) {
    try {
      let response = []
      response = await axios.get(`https://apienerge.apololab.net:5000/atividades/deleteAgua/${id}`);
      console.log("delete.data", response);
      return response.data;
    } catch (error) {
      console.log('Erro ao delete deleteAguaID:', error);
      throw error;
    }
  },

  async gravaAr(dados) {
    const formData = new FormData();

    formData.append('id_atividade', dados.id_atividade);
    formData.append('id_ordem', dados.id_ordem);
    formData.append('usuario', dados.usuario);
    formData.append('titulo', dados.titulo);
    formData.append('arquivo', dados.arquivo);
    formData.append('texto', dados.texto);
    formData.append('link', dados.link);
    if (dados.selectedFile) {
      formData.append('file', dados.selectedFile);
    }
    formData.append('imageName', dados.imageName);
    formData.append('tag', dados.tag);
  
    try {
      const response = await axios.post('https://apienerge.apololab.net:5000/atividades/gravaAr', formData, {
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

  async obterAr() {
    try {
      let response = []
      response = await axios.get('https://apienerge.apololab.net:5000/atividades/obterAr');
      console.log("response.data", response.data);
      return response.data;
    } catch (error) {
      console.error('Erro ao obter Ar:', error);
      throw error;
    }
  },

  async obterArId(id) {
    console.log("obterArId -", id);
    
    try {
      let response = []
      response = await axios.get(`https://apienerge.apololab.net:5000/atividades/obterArId/${id}`);
      console.log("response.data", response);
      return response.data;
    } catch (error) {
      console.error('Erro ao obter Ar:', error);
      throw error;
    }
  },
  
  async editarAr(dados)
  {
    const formData = new FormData();
    formData.append('id_atividade', dados.id_atividade);
    formData.append('id_ordem', dados.id_ordem);
    formData.append('usuario', dados.usuario);
    formData.append('titulo', dados.titulo);
    formData.append('texto', dados.texto);
    formData.append('arquivo', dados.arquivo);
    formData.append('link', dados.link);
    formData.append('file', dados.selectedFile);
    formData.append('imageName', dados.imageName);
    formData.append('tag', dados.tag);

    try {
      const response = await axios.post('https://apienerge.apololab.net:5000/atividades/editarAr', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      return response

    } catch (error) {
      console.error('Erro ao Ar:', error);
      throw error;
    }
  },

  async deleteAr(id) {
    try {
      let response = []
      response = await axios.get(`https://apienerge.apololab.net:5000/atividades/deleteAr/${id}`);
      console.log("delete.data", response);
      return response.data;
    } catch (error) {
      console.log('Erro ao delete deleteArID:', error);
      throw error;
    }
  },

  async gravaTerra(dados) {
    const formData = new FormData();

    formData.append('id_atividade', dados.id_atividade);
    formData.append('id_ordem', dados.id_ordem);
    formData.append('usuario', dados.usuario);
    formData.append('titulo', dados.titulo);
    formData.append('arquivo', dados.arquivo);
    formData.append('texto', dados.texto);
    formData.append('link', dados.link);
    if (dados.selectedFile) {
      formData.append('file', dados.selectedFile);
    }
    formData.append('imageName', dados.imageName);
    formData.append('tag', dados.tag);
  
    try {
      const response = await axios.post('https://apienerge.apololab.net:5000/atividades/gravaTerra', formData, {
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

  async obterTerra() {
    try {
      let response = []
      response = await axios.get('https://apienerge.apololab.net:5000/atividades/obterTerra');
      console.log("response.data", response.data);
      return response.data;
    } catch (error) {
      console.error('Erro ao obter Terra:', error);
      throw error;
    }
  },

  async obterTerraId(id) {
    console.log("obterTerraId -", id);
    
    try {
      let response = []
      response = await axios.get(`https://apienerge.apololab.net:5000/atividades/obterTerraId/${id}`);
      console.log("response.data", response);
      return response.data;
    } catch (error) {
      console.error('Erro ao obter Terra:', error);
      throw error;
    }
  },
  
  async editarTerra(dados)
  {
    const formData = new FormData();
    formData.append('id_atividade', dados.id_atividade);
    formData.append('id_ordem', dados.id_ordem);
    formData.append('usuario', dados.usuario);
    formData.append('titulo', dados.titulo);
    formData.append('texto', dados.texto);
    formData.append('arquivo', dados.arquivo);
    formData.append('link', dados.link);
    formData.append('file', dados.selectedFile);
    formData.append('imageName', dados.imageName);
    formData.append('tag', dados.tag);

    try {
      const response = await axios.post('https://apienerge.apololab.net:5000/atividades/editarTerra', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      return response

    } catch (error) {
      console.error('Erro ao Terra:', error);
      throw error;
    }
  },

  async deleteTerra(id) {
    try {
      let response = []
      response = await axios.get(`https://apienerge.apololab.net:5000/atividades/deleteTerra/${id}`);
      console.log("delete.data", response);
      return response.data;
    } catch (error) {
      console.log('Erro ao delete deleteTerraID:', error);
      throw error;
    }
  },

  async gravaFogo(dados) {
    const formData = new FormData();

    formData.append('id_atividade', dados.id_atividade);
    formData.append('id_ordem', dados.id_ordem);
    formData.append('usuario', dados.usuario);
    formData.append('titulo', dados.titulo);
    formData.append('arquivo', dados.arquivo);
    formData.append('texto', dados.texto);
    formData.append('link', dados.link);
    if (dados.selectedFile) {
      formData.append('file', dados.selectedFile);
    }
    formData.append('imageName', dados.imageName);
    formData.append('tag', dados.tag);
  
    try {
      const response = await axios.post('https://apienerge.apololab.net:5000/atividades/gravaFogo', formData, {
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

  async obterFogo() {
    try {
      let response = []
      response = await axios.get('https://apienerge.apololab.net:5000/atividades/obterFogo');
      console.log("response.data", response.data);
      return response.data;
    } catch (error) {
      console.error('Erro ao obter Fogo:', error);
      throw error;
    }
  },

  async obterFogoId(id) {
    console.log("obterFogoId -", id);
    
    try {
      let response = []
      response = await axios.get(`https://apienerge.apololab.net:5000/atividades/obterFogoId/${id}`);
      console.log("response.data", response);
      return response.data;
    } catch (error) {
      console.error('Erro ao obter Fogo:', error);
      throw error;
    }
  },
  
  async editarFogo(dados)
  {
    const formData = new FormData();
    formData.append('id_atividade', dados.id_atividade);
    formData.append('id_ordem', dados.id_ordem);
    formData.append('usuario', dados.usuario);
    formData.append('titulo', dados.titulo);
    formData.append('texto', dados.texto);
    formData.append('arquivo', dados.arquivo);
    formData.append('link', dados.link);
    formData.append('file', dados.selectedFile);
    formData.append('imageName', dados.imageName);
    formData.append('tag', dados.tag);

    try {
      const response = await axios.post('https://apienerge.apololab.net:5000/atividades/editarFogo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      return response

    } catch (error) {
      console.error('Erro ao Fogo:', error);
      throw error;
    }
  },

  async deleteFogo(id) {
    try {
      let response = []
      response = await axios.get(`https://apienerge.apololab.net:5000/atividades/deleteFogo/${id}`);
      console.log("delete.data", response);
      return response.data;
    } catch (error) {
      console.log('Erro ao delete deleteFogoID:', error);
      throw error;
    }
  }


};

// Exporte o objeto contendo os métodos
module.exports = apiMethodsAtividades;
