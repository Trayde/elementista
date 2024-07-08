"use strict";

const { PrismaClient } = require('@prisma/client');

module.exports = class PerfilUsuariosRepository {

  constructor() {
    this.prisma = new PrismaClient();
  }


  async verfEmail(dados) {
    try {
      const email = await this.prisma.usuarios.findMany({
        where: { email: dados.email },
        select: {
          email: true
        },
      });
      return email[0].email;
    } catch (error) {
      console.log("erro back cria usuarios", error);
    }
    
  }

  async chaveInsert(chave){
      const retorno = await this.prisma.controle_chave.create({
        data: {
          chave: chave
        }
      })
      return retorno;
  }

  async chave() {
    const chave = await this.prisma.controle_chave.findMany({
      orderBy: {
        id_chave: 'desc' // ou 'id' dependendo de como você quer ordenar
      },
      select: {
        chave: true
      },
      take: 1
    });
    return chave;
  }

  async perfilHome(chave) {
    const allUsers = await this.prisma.usuarios.findMany({
      where: { chave: chave },
      include: {
        lista_acesso: {
          select: {
            chave: true,
            clube: true,
            nome: true,
            id_acesso: true,
            id_usuario: true,
            avatar: true
          }
        }
      }
    });
    return allUsers;
  }
  async avatar(chave) {
    const retorno = await this.prisma.image.findMany({
      orderBy: {
        createdAt: 'desc' // ou 'id' dependendo de como você quer ordenar
      },
      where: {
        AND: [
          {
            chave: chave
          },
          {
            tag: 'avatar'
          }
        ]

      },
      take: 1
    });
    return retorno[0]; // Retorna apenas o primeiro (e único) item do array
  }

  async alteraSenhaValidada(id) {
    const deleteUser = await this.prisma.validacao.deleteMany({
      where: {
        id_usuario: id
      },
    })

    return deleteUser
  }

  async editarUsuario(dados) {
    const editarUsuario = await this.prisma.usuarios.updateMany({
      where: {
        email: dados.email
      },
      data: {
        nome: dados.nome,
        empresa: dados.empresa,
        status: dados.status

      }
    })

    return editarUsuario
  }

  async deleteUsuario(dados) {

    const deleteUsuario = await this.prisma.usuarios.deleteMany({
      where: {
        email: dados.email
      }
    })

    return deleteUsuario
  }

  async validate(dados, token) {
    const retorno = await this.prisma.validacao.create({
      data: {
        id_usuario: Number(dados.id_usuario),
        token: token,
        nome: dados.nome,
        email: dados.email
      }
    })
  }

  async verificarLogin(verification) {
    const retorno = await this.prisma.validacao.findMany({
      where: {
        id_usuario: Number(verification.id)
      },
      select: {
        id_usuario: true
      },
    })

    return retorno
  }

  async login(dados) {
    try {
      const retorno = await this.prisma.usuarios.findMany({
        where: {
          email: dados.email
        }

      });
      return retorno
    } catch (error) {
      console.log("error: ", error);
    }

  }

  async createUsuario(dados, hash) {
    console.log("dados", dados);
    try {
      const created = await this.prisma.usuarios.create({
        data: {
          nome: dados.nome,
          email: dados.email,
          passaword: hash,
          clube: dados.clube,
          chave: dados.chave,
          status: dados.status,
          validado: false,
          usuario: "Luis Eduardo",
          dt_create: new Date()
        },

      });

      const resultados = await Promise.all([Promise.resolve(created)]);
      return resultados
    } catch (error) {
      console.log("error: ", error);
    }
  }

  async visitasclube(dados) {
    console.log("repositorio", dados);

    // Função para garantir que a hora está no formato correto
    const formatTime = (time) => {
      const [hour, minute] = time.split(':');
      return `${hour.padStart(2, '0')}:${minute.padStart(2, '0')}:00`;
    }

    try {
      const horaInicioFormatada = formatTime(dados.horaInicio);
      const horaFimFormatada = formatTime(dados.horaFim);

      const retorno = await this.prisma.visitas.create({
        data: {
          nome: dados.nome,
          chave: dados.chave,
          clube: dados.clube,
          funcao: dados.funcao,
          enderecoClube: dados.enderecoClube,
          dataVisita: new Date(dados.dataVisita),
          numeroAventureiros: Number(dados.numeroAventureiros),
          horaInicio: horaInicioFormatada,
          horaFim: horaFimFormatada,
          imagem: dados.imagem,
          activ: dados.activ,
          activAdmin: dados.activAdmin,
          area: Number(2),
          regiao: Number(7),
          distrito: " São Bras"
        }
      });

      console.log("retorno banco", retorno);
      return retorno;
    } catch (error) {
      console.log("retorno banco", error);
    }
  }


  async alteraSenha(dados, hash) {

    const retorno = await this.prisma.usuarios.update({
      where: {
        id_usuario: dados.id_usuario
      },
      data: {
        passaword: hash
      }
    })

    return retorno

  }

  async acessoRapido(cargo) {
    const retorno = await this.prisma.acesso_rapido.findMany({
      where: {
        cargo: cargo
      }
    })

    return retorno
  }

}