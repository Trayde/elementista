
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
          texto: dados.texto,
          link: dados.link,
          imageName: dados.imageName,
          dt_criacao: new Date(),
          publicada: true
        }
      })
      return retorno
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
          publicada: true
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

}

