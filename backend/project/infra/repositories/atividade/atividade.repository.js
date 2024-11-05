
"use strict";

const { PrismaClient } = require('@prisma/client');
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

}

