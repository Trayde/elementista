const express = require('express');
const multer = require('multer');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const upload = multer({ dest: 'uploads/' });
const { Container } = require("../../../infra/middlewares/dependency.injection");

module.exports = class UsuariosController {

    constructor() {
        this.atividadeServices = Container().resolve("atividadeServices");

    }


    async gravaAtividade(req, res) {
        try {
          const dados = {
                id_ordem: req.body.id_ordem ,
                usuario: req.body.usuario ,
                titulo: req.body.titulo ,
                texto:  req.body.texto,
                link:  req.body.link ,
                imageName: req.file.filename 
              }
            const response = await this.atividadeServices.gravaAtividade(dados);

            return res.status(200).send(response);
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    async editarAtividade(req, res){

        console.log("req", req.file);

        try {

             if (req.file) {
                const dados = {
                    id_atividade: req.body.id_atividade ,
                    id_ordem: req.body.id_ordem ,
                    usuario: req.body.usuario ,
                    titulo: req.body.titulo ,
                    texto:  req.body.texto,
                    link:  req.body.link ,
                    imageName: req.file.filename 
                  }
                const response = await this.atividadeServices.editarAtividade(dados);
                if (response) {
                    return res.status(200).send("sucesso");
                 }else {
                     return res.status(200).send("falha");
                 }
             } else {
                const dados = {
                    id_atividade: req.body.id_atividade ,
                    id_ordem: req.body.id_ordem ,
                    usuario: req.body.usuario ,
                    titulo: req.body.titulo ,
                    texto:  req.body.texto,
                    link:  req.body.link ,
                    imageName: req.body.imageName 
                  }
                  console.log("dados", dados);
                const response = await this.atividadeServices.editarAtividade(dados);
                if (response) {
                   return res.status(200).send("sucesso");
                }else {
                    return res.status(200).send("falha");
                }

    
             }

          
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    async obterAtividade(req, res) {
        try {
            const response = await this.atividadeServices.obterAtividade();
            console.log("ret", response);
            return res.status(200).send(response);
        } catch (error) {
            return res.status(500).send(error);
        }
    }

   
}



