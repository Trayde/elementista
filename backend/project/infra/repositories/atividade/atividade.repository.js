
"use strict";

const { PrismaClient } = require('@prisma/client');
const { text } = require('body-parser');
const { log } = require('util');

module.exports = class AtividadeRepository {

  constructor() {
    this.prisma = new PrismaClient();
  }

  async gravaAtividade(dados) {
    try {
      const retorno = await this.prisma.atividades.create({
        data: {
          id_ordem: Number(dados.id_ordem),
          usuario: dados.usuario,
          titulo: dados.titulo,
          texto:  dados.texto,
          link: dados.link,
          imageName: dados.imageName,
          dt_criacao: new Date(),
          publicada: true,
          tag: dados.tag
        }
      })      

      console.log("retorno banco ", retorno);
      
      return  {
        mensagen: "sucesso"
      }
    } catch (error) {
      console.log("error", error);
    }

  }

  async editarAtividade (dados) {

    console.log("repositorio", dados);

    try {
      const retorno = await this.prisma.atividades.update({
  
        where: {
          id_atividade: Number(dados.id_atividade)
        },
  
        data: {
          id_ordem: Number(dados.id_ordem),
          usuario: dados.usuario,
          titulo: dados.titulo,
          texto: dados.texto,
          link: dados.link,
          imageName: dados.imageName,
          dt_criacao: new Date(),
          publicada: true,
          tag: dados.tag
        }
  
      })

      return retorno
    } catch (error) {
      console.log("erro", error);
    }
    


  }

  async deleteAtividade(id) {
    console.log("deleteAtividade repositorio", id);

    try {
      const retorno = await this.prisma.atividades.deleteMany({
  
        where: {
          id_atividade: Number(id)
        }
  
      })
      return  {
        mensagen: "sucesso"
      }
    } catch (error) {
      console.log("erro", error);
    }
  }

  async obterAtividade() {
    try {
      const retorno = await this.prisma.atividades.findMany()
      return retorno
    } catch (error) {
      console.log("error", error);
    }
  }

  async obterAtividadeId(id) {

    try {
      const retorno = await this.prisma.atividades.findMany({
        where: {
          id_atividade: Number(id)
        }
      })
      return retorno
    } catch (error) {
      console.log("error", error);
    }
  }

  async obertVideos() {
    try {
      const retorno = await this.prisma.videos.findMany()
      return retorno
    } catch (error) {
      console.log("error", error);
    }
  }

  async deleteVideos(id) {
    console.log("deleteVideos repositorio", id);

    try {
      const retorno = await this.prisma.videos.deleteMany({
  
        where: {
          id_videos: Number(id)
        }
  
      })
      return  {
        mensagen: "sucesso"
      }
    } catch (error) {
      console.log("erro", error);
    }
  }

  async obertVideosId(id){
    try {
      const retorno = await this.prisma.videos.findMany({
        where: {
          id_videos: Number(id)
        }
      })
      return retorno
    } catch (error) {
      console.log("error", error);
    }
  }

  async gravaVideos(dados) {
    try {
      const retorno = await this.prisma.videos.create({
        data: {
          id_ordem: Number(dados.id_ordem),
          usuario: dados.usuario,
          titulo: dados.titulo,
          texto: dados.texto,
          link: dados.link,
          dt_criacao: new Date(),
          publicada: true,
          tag: dados.tag
        }
      })
      return retorno
    } catch (error) {
      console.log("error", error);
    }

  }


  async editarVideos(dados) {

    console.log("repositorio", dados);

    try {
      const retorno = await this.prisma.videos.update({
  
        where: {
          id_videos: Number(dados.id_videos)
        },
  
        data: {
          id_ordem: Number(dados.id_ordem),
          usuario: dados.usuario,
          titulo: dados.titulo,
          texto: dados.texto,
          link: dados.link,
          dt_criacao: new Date(),
          publicada: true,
          tag: dados.tag
        }
  
      })

      return retorno
    } catch (error) {
      console.log("erro", error);
    }
    


  }


  async gravaTutoriais(dados) {

    console.log("back end grava tutoriais ====>", dados);
    

    try {
      const retorno = await this.prisma.tutoriais.create({
        data: {
          id_ordem: Number(dados.id_ordem),
          usuario: dados.usuario,
          titulo: dados.titulo,
          texto:  dados.texto,
          arquivo: dados.arquivo,
          link: dados.link,
          imageName: dados.imageName,
          documento: dados.documento,
          dt_criacao: new Date(),
          publicada: true,
          tag: dados.tag
        }
      })      

      console.log("retorno banco ", retorno);
      
      return  {
        mensagen: "sucesso"
      }
    } catch (error) {
      console.log("error", error);
    }

  }

  async editarTutoriais (dados) {

    console.log("repositorio", dados);

    try {
      const retorno = await this.prisma.tutoriais.update({
  
        where: {
          id_atividade: Number(dados.id_atividade)
        },
  
        data: dados
  
      })

      return retorno
    } catch (error) {
      console.log("erro", error);
    }
    


  }

  async deleteTutoriais(id) {
    console.log("deleteAtividade repositorio", id);

    try {
      const retorno = await this.prisma.tutoriais.deleteMany({
  
        where: {
          id_atividade: Number(id)
        }
  
      })
      return  {
        mensagen: "sucesso"
      }
    } catch (error) {
      console.log("erro", error);
    }
  }

  async obterTutoriais() {
    try {
      const retorno = await this.prisma.tutoriais.findMany()
   //   console.log("retorno tutoriais repositorio ====>", retorno);
      
      return retorno
    } catch (error) {
      console.log("error", error);
    }
  }


  async obterTutoriaisId(id) {

    console.log("obterTutoriaisId repositorio", id);
    

    try {
      const retorno = await this.prisma.tutoriais.findMany({
        where: {
          id_atividade: Number(id)
        }
      })
      return retorno
    } catch (error) {
      console.log("error", error);
    }
  }




  async gravaAgua(dados) {

    console.log("back end grava Agua ====>", dados);
    

    try {
      const retorno = await this.prisma.agua.create({
        data: {
          id_ordem: Number(dados.id_ordem),
          usuario: dados.usuario,
          titulo: dados.titulo,
          texto:  dados.texto,
          arquivo: dados.arquivo,
          link: dados.link,
          imageName: dados.imageName,
          dt_criacao: new Date(),
          publicada: true,
          tag: dados.tag
        }
      })      

      console.log("retorno banco ", retorno);
      
      return  {
        mensagen: "sucesso"
      }
    } catch (error) {
      console.log("error", error);
    }

  }

  async editarAgua (dados) {

    console.log("repositorio", dados);

    try {
      const retorno = await this.prisma.agua.update({
  
        where: {
          id_atividade: Number(dados.id_atividade)
        },
  
        data: {
          id_ordem: Number(dados.id_ordem),
          usuario: dados.usuario,
          titulo: dados.titulo,
          texto: dados.texto,
          arquivo: dados.arquivo,
          link: dados.link,
          imageName: dados.imageName,
          dt_criacao: new Date(),
          publicada: true,
          tag: dados.tag
        }
  
      })

      return retorno
    } catch (error) {
      console.log("erro", error);
    }
    


  }

  async deleteAgua(id) {
    console.log("deleteAgua repositorio", id);

    try {
      const retorno = await this.prisma.agua.deleteMany({
  
        where: {
          id_atividade: Number(id)
        }
  
      })
      return  {
        mensagen: "sucesso"
      }
    } catch (error) {
      console.log("erro", error);
    }
  }

  async obterAgua() {
    try {
      const retorno = await this.prisma.agua.findMany()
      console.log("retorno Agua repositorio ====>", retorno);
      
      return retorno
    } catch (error) {
      console.log("error", error);
    }
  }


  async obterAguaId(id) {

    console.log("obterAguaId repositorio", id);
    

    try {
      const retorno = await this.prisma.agua.findMany({
        where: {
          id_atividade: Number(id)
        }
      })
      return retorno
    } catch (error) {
      console.log("error", error);
    }
  }

  async gravaAr(dados) {

    console.log("back end grava Ar ====>", dados);
    

    try {
      const retorno = await this.prisma.ar.create({
        data: {
          id_ordem: Number(dados.id_ordem),
          usuario: dados.usuario,
          titulo: dados.titulo,
          texto:  dados.texto,
          arquivo: dados.arquivo,
          link: dados.link,
          imageName: dados.imageName,
          dt_criacao: new Date(),
          publicada: true,
          tag: dados.tag
        }
      })      

      console.log("retorno banco ", retorno);
      
      return  {
        mensagen: "sucesso"
      }
    } catch (error) {
      console.log("error", error);
    }

  }

  async editarAr (dados) {

    console.log("repositorio", dados);

    try {
      const retorno = await this.prisma.ar.update({
  
        where: {
          id_atividade: Number(dados.id_atividade)
        },
  
        data: {
          id_ordem: Number(dados.id_ordem),
          usuario: dados.usuario,
          titulo: dados.titulo,
          texto: dados.texto,
          arquivo: dados.arquivo,
          link: dados.link,
          imageName: dados.imageName,
          dt_criacao: new Date(),
          publicada: true,
          tag: dados.tag
        }
  
      })

      return retorno
    } catch (error) {
      console.log("erro", error);
    }
    


  }

  async deleteAr(id) {
    console.log("deleteAr repositorio", id);

    try {
      const retorno = await this.prisma.ar.deleteMany({
  
        where: {
          id_atividade: Number(id)
        }
  
      })
      return  {
        mensagen: "sucesso"
      }
    } catch (error) {
      console.log("erro", error);
    }
  }

  async obterAr() {
    try {
      const retorno = await this.prisma.ar.findMany()
      console.log("retorno Ar repositorio ====>", retorno);
      
      return retorno
    } catch (error) {
      console.log("error", error);
    }
  }

  async obterArId(id) {

    console.log("obterArId repositorio", id);
    

    try {
      const retorno = await this.prisma.ar.findMany({
        where: {
          id_atividade: Number(id)
        }
      })
      return retorno
    } catch (error) {
      console.log("error", error);
    }
  }

  async gravaTerra(dados) {

    console.log("back end grava Terra ====>", dados);
    

    try {
      const retorno = await this.prisma.terra.create({
        data: {
          id_ordem: Number(dados.id_ordem),
          usuario: dados.usuario,
          titulo: dados.titulo,
          texto:  dados.texto,
          arquivo: dados.arquivo,
          link: dados.link,
          imageName: dados.imageName,
          dt_criacao: new Date(),
          publicada: true,
          tag: dados.tag
        }
      })      

      console.log("retorno banco ", retorno);
      
      return  {
        mensagen: "sucesso"
      }
    } catch (error) {
      console.log("error", error);
    }

  }

  async editarTerra (dados) {

    console.log("repositorio", dados);

    try {
      const retorno = await this.prisma.terra.update({
  
        where: {
          id_atividade: Number(dados.id_atividade)
        },
  
        data: {
          id_ordem: Number(dados.id_ordem),
          usuario: dados.usuario,
          titulo: dados.titulo,
          texto: dados.texto,
          arquivo: dados.arquivo,
          link: dados.link,
          imageName: dados.imageName,
          dt_criacao: new Date(),
          publicada: true,
          tag: dados.tag
        }
  
      })

      return retorno
    } catch (error) {
      console.log("erro", error);
    }
    


  }

  async deleteTerra(id) {
    console.log("deleteTerra repositorio", id);

    try {
      const retorno = await this.prisma.terra.deleteMany({
  
        where: {
          id_atividade: Number(id)
        }
  
      })
      return  {
        mensagen: "sucesso"
      }
    } catch (error) {
      console.log("erro", error);
    }
  }

  async obterTerra() {
    try {
      const retorno = await this.prisma.terra.findMany()
      console.log("retorno Terra repositorio ====>", retorno);
      
      return retorno
    } catch (error) {
      console.log("error", error);
    }
  }

  async obterTerraId(id) {

    console.log("obterTerraId repositorio", id);
    

    try {
      const retorno = await this.prisma.terra.findMany({
        where: {
          id_atividade: Number(id)
        }
      })
      return retorno
    } catch (error) {
      console.log("error", error);
    }
  }

  async gravaFogo(dados) {

    console.log("back end grava Fogo ====>", dados);
    

    try {
      const retorno = await this.prisma.fogo.create({
        data: {
          id_ordem: Number(dados.id_ordem),
          usuario: dados.usuario,
          titulo: dados.titulo,
          texto:  dados.texto,
          arquivo: dados.arquivo,
          link: dados.link,
          imageName: dados.imageName,
          dt_criacao: new Date(),
          publicada: true,
          tag: dados.tag
        }
      })      

      console.log("retorno banco ", retorno);
      
      return  {
        mensagen: "sucesso"
      }
    } catch (error) {
      console.log("error", error);
    }

  }

  async editarFogo (dados) {

    console.log("repositorio", dados);

    try {
      const retorno = await this.prisma.fogo.update({
  
        where: {
          id_atividade: Number(dados.id_atividade)
        },
  
        data: {
          id_ordem: Number(dados.id_ordem),
          usuario: dados.usuario,
          titulo: dados.titulo,
          texto: dados.texto,
          arquivo: dados.arquivo,
          link: dados.link,
          imageName: dados.imageName,
          dt_criacao: new Date(),
          publicada: true,
          tag: dados.tag
        }
  
      })

      return retorno
    } catch (error) {
      console.log("erro", error);
    }
  }

  async deleteFogo(id) {
    console.log("deleteFogo repositorio", id);

    try {
      const retorno = await this.prisma.fogo.deleteMany({
  
        where: {
          id_atividade: Number(id)
        }
  
      })
      return  {
        mensagen: "sucesso"
      }
    } catch (error) {
      console.log("erro", error);
    }
  }

  async obterFogo() {
    try {
      const retorno = await this.prisma.fogo.findMany()
      console.log("retorno Fogo repositorio ====>", retorno);
      
      return retorno
    } catch (error) {
      console.log("error", error);
    }
  }

  async obterFogoId(id) {

    console.log("obterFogoId repositorio", id);
    

    try {
      const retorno = await this.prisma.fogo.findMany({
        where: {
          id_atividade: Number(id)
        }
      })
      return retorno
    } catch (error) {
      console.log("error", error);
    }
  }



}

