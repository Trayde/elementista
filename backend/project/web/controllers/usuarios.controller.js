const express = require('express');
const multer = require('multer');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');
const upload = multer({ dest: 'uploads/' });
const { Container } = require("../../infra/middlewares/dependency.injection");

module.exports = class UsuariosController {

    constructor() {
        this.perfilLoginServices =  Container().resolve("perfilLoginServices"); 
    }

async usuario(req, res) {
    console.log("req", req.params);
    const { chave } = req.params
    try {
        const perfilLogin = await this.perfilLoginServices.perfilHome(chave);
       
        return res.status(200).send(perfilLogin)
    } catch (error) {
        return res.status(400).send(error)
    }

}


async chave(req, res) {
    console.log("chave");
    try {
        const chave = await this.perfilLoginServices.chave();
        console.log("chave1", chave);
        return res.status(200).send(chave)
    } catch (error) {
        return res.status(400).send(error)
    }

}



async alteraSenha(req, res) {
    try {
      console.log("request", req.body);
      const retorno = await this.perfilLoginServices.alteraSenha(req.body);

      return res.status(200).send(retorno)
    } catch (err) {
        return res.status(400).send(err)
    }
}

async token(req, res) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).send({ error: 'Token não fornecido' });
    }

    try {
        const validado = jwt.verify(token, "D62ST92Y7A6V7K5C6W9ZU6W8KS3");
        res.send({ message: 'Token válido', data: validado });
    } catch (error) {
        console.log("errro de", error instanceof jwt.JsonWebTokenError);
        if (error instanceof jwt.JsonWebTokenError) {
            res.status(400).send({ error: 'Token inválido', message: error.message });
        } else {
            res.status(500).send({ error: 'Erro inesperado', message: error.message });
        }
    }
}

async acessoRapido(req, res) {
    const cargo = req.params.cargo;

    try {
        const retorno = await this.perfilLoginServices.acessoRapido(cargo);
  
        return res.status(200).send(retorno)
      } catch (err) {
          return res.status(400).send(err)
      }
}

async validation(req, res) {
    const token = req.params.token;
    if (!token) {
        return res.status(401).send({ error: 'Token não fornecido' });
    }
    try {
        const validado = jwt.verify(token, "ACP21102014WY7#A6V7K5C6W9ZU6W8AVT");
           console.log("validado", validado);
           const retorno = await this.perfilLoginServices.verificarLogin(validado);
            console.log("retorno banco", retorno);
            res.send(retorno);
       } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            res.status(400).send({ error: 'Token inválido', message: error.message });
        } else {
            res.status(500).send({ error: 'Erro inesperado', message: error.message });
        }
    }

}
async login(req, res) {
  try {
        const login = await this.perfilLoginServices.login(req.body);
        return res.status(200).send(login)
    } catch (error) {
        return res.status(400).send(error)
    }
}
async createUsuario(req, res) {
    try {
        const perfilLogin = await this.perfilLoginServices.createUsuario(req.body);
        return res.status(200).send(perfilLogin)
    } catch (error) {
        return res.status(400).send(error)
    }
}

async avatar(req, res) {
  const  { chave } = req.params
  console.log("avatar ===>back", chave);
 

        try {
            const avatar = await this.perfilLoginServices.avatar(chave);
         
       
        return res.status(200).send(avatar)
        } catch (error) {
            return res.status(400).send(error)
        }
}

async imagens(req, res) {
    try {
        const { chave, fileName, tag } = req.body;
        const file = req.file;

      
        if (!file) {
            return res.status(400).send("No file uploaded.");
        }

        // Salvar metadados da imagem no banco de dados
        const savedImage = await prisma.image.create({
            data: {
                chave: chave,
                fileName: fileName,
                filePath: file.filename, // Caminho onde a imagem foi salva
                tag: tag 
            },
        });

        return res.status(200).json(savedImage);
    } catch (error) {
        console.error(error);
        return res.status(400).send(error);
    }
}

    

}



