const express = require('express');
const multer = require('multer');
const {
    PrismaClient
} = require('@prisma/client');
const prisma = new PrismaClient();

const upload = multer({
    dest: 'uploads/'
});
const {
    Container
} = require("../../../infra/middlewares/dependency.injection");
const {
    log
} = require('util');

module.exports = class UsuariosController {

    constructor() {
        this.atividadeServices = Container().resolve("atividadeServices");

    }


    async gravaAtividade(req, res) {

        console.log("controler", req.body.texto);


        try {
            const dados = {
                id_ordem: req.body.id_ordem,
                usuario: req.body.usuario,
                titulo: req.body.titulo,
                texto: req.body.texto,
                link: req.body.link,
                imageName: req.file.filename,
                tag: req.body.tag
            }

            console.log("dados", dados);


            const response = await this.atividadeServices.gravaAtividade(dados);
            if (response) {
                return res.status(200).send("sucesso");
            } else {
                return res.status(200).send("falha");
            }
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    async editarAtividade(req, res) {

        console.log("editarAtividade", req.body);

        try {

            if (req.file) {
                const dados = {
                    id_atividade: req.body.id_atividade,
                    id_ordem: req.body.id_ordem,
                    usuario: req.body.usuario,
                    titulo: req.body.titulo,
                    texto: req.body.texto,
                    link: req.body.link,
                    imageName: req.file.body.link,filename,
                    tag: req.body.tag
                }
                const response = await this.atividadeServices.editarAtividade(dados);
                if (response) {
                    return res.status(200).send("sucesso");
                } else {
                    return res.status(200).send("falha");
                }
            } else {
                const dados = {
                    id_atividade: req.body.id_atividade,
                    id_ordem: req.body.id_ordem,
                    usuario: req.body.usuario,
                    titulo: req.body.titulo,
                    texto: req.body.texto,
                    link: req.body.link,
                    imageName: req.body.imageName,
                    tag: req.body.tag
                }
                console.log("dados", dados);
                const response = await this.atividadeServices.editarAtividade(dados);
                if (response) {
                    return res.status(200).send("sucesso");
                } else {
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

    async obterAtividadeId(req, res) {
        const {
            id
        } = req.params

        try {
            const response = await this.atividadeServices.obterAtividadeId(id);

            return res.status(200).send(response);
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    async obertVideos(req, res) {
        try {
            const response = await this.atividadeServices.obertVideos();
            console.log("ret", response);
            return res.status(200).send(response);
        } catch (error) {
            return res.status(500).send(error);
        }
    }
 
    async obertVideosId(req, res){
        const {  id  } = req.params
        try {
            const response = await this.atividadeServices.obertVideosId(id);
            console.log("ret", response);
            return res.status(200).send(response);
        } catch (error) {
            return res.status(500).send(error);
        }
    }
    async gravaVideos(req, res) {
        try {
            const dados = {
                id_ordem: req.body.id_ordem,
                usuario: req.body.usuario,
                titulo: req.body.titulo,
                texto: req.body.texto,
                link: req.body.link,
                tag: req.body.tag
            }
            const response = await this.atividadeServices.gravaVideos(dados);
            if (response) {
                return res.status(200).send("sucesso");
            } else {
                return res.status(200).send("falha");
            }
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    async editarVideos(req, res) {
        try {
            const dados = {
                id_videos: req.body.id_videos,
                id_ordem: req.body.id_ordem,
                usuario: req.body.usuario,
                titulo: req.body.titulo,
                texto: req.body.texto,
                link: req.body.link,
                tag: req.body.tag
            }

            console.log("dados controller", dados);
            const response = await this.atividadeServices.editarVideos(dados);
            if (response) {
                return res.status(200).send("sucesso");
            } else {
                return res.status(200).send("falha");
            }
        } catch (error) {
            return res.status(500).send(error);
        }
    }


}