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

const fs = require('fs');
const path = require('path');
module.exports = class UsuariosController {

    constructor() {
        this.atividadeServices = Container().resolve("atividadeServices");

    }


    async gravaAtividade(req, res) {

        console.log("gravaAtividade", req.body.texto);

        try {
            const dados = {
                id_ordem: req.body.id_ordem,
                usuario: req.body.usuario,
                titulo: req.body.titulo,
                texto: req.body.texto,
                arquivo: req.body.arquivo,
                link: req.body.link,
                imageName: req.file.filename,
                documento: req.body.documento,
                tag: req.body.tag
            }

            //    console.log("dados", dados);
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
        let imagem
        if (req.file) {
            imagem = req.file.filename
        } else {
            imagem = req.body.imageName
        }
        try {

            if (req.body.documento) {
                const dados = {
                    id_atividade: Number(req.body.id_atividade),
                    id_ordem: Number(req.body.id_ordem),
                    usuario: req.body.usuario,
                    titulo: req.body.titulo,
                    texto: req.body.texto,
                    arquivo: req.body.arquivo,
                    link: req.body.link,
                    imageName: imagem,
                    documento: req.body.documento,
                    tag: req.body.tag
                }
                console.log("dados preparados para controller =====>", dados);
                const response = await this.atividadeServices.editarAtividade(dados);
                if (response) {
                    return res.status(200).send("sucesso");
                } else {
                    return res.status(200).send("falha");
                }
            } else {
                const dados = {
                    id_atividade: Number(req.body.id_atividade),
                    id_ordem: Number(req.body.id_ordem),
                    usuario: req.body.usuario,
                    titulo: req.body.titulo,
                    texto: req.body.texto,
                    link: req.body.link,
                    imageName: imagem,
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


            console.log("erro editar atividades metodo controller ===>", error);


            return res.status(500).send(error);
        }
    }

    async deleteAtividade(req, res) {

        const {
            id
        } = req.params

        try {

            console.log("dados preparados para controller delete =====>", id);


            const response = await this.atividadeServices.deleteAtividade(id);
            return res.status(200).send(response);


        } catch (error) {


            console.log("dados preparados para controller delete ===>", error);


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

    async deleteVideos(req, res) {

        const {
            id
        } = req.params

        try {

            console.log("dados preparados para controller delete deleteVideos =====>", id);


            const response = await this.atividadeServices.deleteVideos(id);
            return res.status(200).send(response);


        } catch (error) {


            console.log("dados preparados para controller delete deleteVideos ===>", error);


            return res.status(500).send(error);
        }
    }

    async obertVideosId(req, res) {
        const {
            id
        } = req.params
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

    async gravaTutoriais(req, res) {
        console.log("controler", req.body);
        try {
            const dados = {
                id_ordem: req.body.id_ordem,
                usuario: req.body.usuario,
                titulo: req.body.titulo,
                texto: req.body.texto,
                arquivo: req.body.arquivo,
                link: req.body.link,
                imageName: req.file.filename,
                documento: req.body.documento,
                tag: req.body.tag
            }

            //  console.log("dados", dados);


            const response = await this.atividadeServices.gravaTutoriais(dados);
            if (response) {
                return res.status(200).send("sucesso");
            } else {
                return res.status(200).send("falha");
            }
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    async editarTutoriais(req, res) {

        console.log("editarTutoriais", req.file);
        let imagem
        if (req.file) {
            imagem = req.file.filename
        } else {
            imagem = req.body.imageName
        }
        try {

            if (req.body.documento) {
                const dados = {
                    id_atividade: Number(req.body.id_atividade),
                    id_ordem: Number(req.body.id_ordem),
                    usuario: req.body.usuario,
                    titulo: req.body.titulo,
                    texto: req.body.texto,
                    arquivo: req.body.arquivo,
                    link: req.body.link,
                    imageName: imagem,
                    documento: req.body.documento,
                    tag: req.body.tag
                }
                console.log("dados preparados para controller =====>", dados);
                const response = await this.atividadeServices.editarTutoriais(dados);
                if (response) {
                    return res.status(200).send("sucesso");
                } else {
                    return res.status(200).send("falha");
                }
            } else {
                const dados = {
                    id_atividade: Number(req.body.id_atividade),
                    id_ordem: Number(req.body.id_ordem),
                    usuario: req.body.usuario,
                    titulo: req.body.titulo,
                    texto: req.body.texto,
                    link: req.body.link,
                    imageName: imagem,
                    tag: req.body.tag
                }
                console.log("dados", dados);
                const response = await this.atividadeServices.editarTutoriais(dados);
                if (response) {
                    return res.status(200).send("sucesso");
                } else {
                    return res.status(200).send("falha");
                }


            }


        } catch (error) {


            console.log("erro editar atividades metodo controller ===>", error);


            return res.status(500).send(error);
        }
    }

    async deleteTutoriais(req, res) {

        const {
            id
        } = req.params

        try {

            console.log("dados preparados para controller delete =====>", id);


            const response = await this.atividadeServices.deleteTutoriais(id);
            return res.status(200).send(response);


        } catch (error) {


            console.log("dados preparados para controller delete ===>", error);


            return res.status(500).send(error);
        }
    }

    async obterTutoriais(req, res) {
        try {
            const response = await this.atividadeServices.obterTutoriais();
            //      console.log("ret", response);
            return res.status(200).send(response);
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    async obterTutoriaisId(req, res) {
        //   console.log("back end ====> obterTutoriaisId ", req.params);

        const {
            id
        } = req.params
        //     console.log("obterTutoriaisId controler =====>", id);

        try {
            const response = await this.atividadeServices.obterTutoriaisId(id);
            console.log("ret", response);
            return res.status(200).send(response);
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    async gravaAgua(req, res) {

        console.log("controler Agua", req.body);


        try {
            const dados = {
                id_ordem: req.body.id_ordem,
                usuario: req.body.usuario,
                titulo: req.body.titulo,
                texto: req.body.texto,
                arquivo: req.body.arquivo,
                link: req.body.link,
                imageName: req.file.filename,
                documento: req.body.documento,
                tag: req.body.tag
            }

            console.log("dados Agua", dados);


            const response = await this.atividadeServices.gravaAgua(dados);
            if (response) {
                return res.status(200).send("sucesso");
            } else {
                return res.status(200).send("falha");
            }
        } catch (error) {

            console.log("error", error);


            return res.status(500).send(error);
        }
    }

    async editarAgua(req, res) {

        console.log("editarTutoriais", req.file);
        let imagem
        if (req.file) {
            imagem = req.file.filename
        } else {
            imagem = req.body.imageName
        }

        try {

            if (req.body.documento) {
                const dados = {
                    id_atividade: Number(req.body.id_atividade),
                    id_ordem: Number(req.body.id_ordem),
                    usuario: req.body.usuario,
                    titulo: req.body.titulo,
                    texto: req.body.texto,
                    arquivo: req.body.arquivo,
                    link: req.body.link,
                    imageName: imagem,
                    documento: req.body.documento,
                    tag: req.body.tag
                }
                console.log("dados preparados para controller =====>", dados);
                const response = await this.atividadeServices.editarAgua(dados);
                if (response) {
                    return res.status(200).send("sucesso");
                } else {
                    return res.status(200).send("falha");
                }
            } else {
                const dados = {
                    id_atividade: Number(req.body.id_atividade),
                    id_ordem: Number(req.body.id_ordem),
                    usuario: req.body.usuario,
                    titulo: req.body.titulo,
                    texto: req.body.texto,
                    link: req.body.link,
                    imageName: imagem,
                    tag: req.body.tag
                }
                console.log("dados", dados);
                const response = await this.atividadeServices.editarAgua(dados);
                if (response) {
                    return res.status(200).send("sucesso");
                } else {
                    return res.status(200).send("falha");
                }
            }


        } catch (error) {


            console.log("erro editar atividades metodo controller ===>", error);


            return res.status(500).send(error);
        }
    }

    async deleteAgua(req, res) {

        const {
            id
        } = req.params

        try {

            console.log("dados preparados para controller delete =====>", id);


            const response = await this.atividadeServices.deleteAgua(id);
            return res.status(200).send(response);


        } catch (error) {


            console.log("dados preparados para controller delete ===>", error);


            return res.status(500).send(error);
        }
    }

    async obterAgua(req, res) {
        try {
            const response = await this.atividadeServices.obterAgua();
            console.log("ret", response);
            return res.status(200).send(response);
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    async obterAguaId(req, res) {
        console.log("back end ====> obterTutoriaisId ", req.params);

        const {
            id
        } = req.params
        console.log("obterTutoriaisId controler =====>", id);

        try {
            const response = await this.atividadeServices.obterAguaId(id);
            console.log("ret", response);
            return res.status(200).send(response);
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    async gravaAr(req, res) {

        console.log("controler Ar", req.body);


        try {
            const dados = {
                id_ordem: req.body.id_ordem,
                usuario: req.body.usuario,
                titulo: req.body.titulo,
                texto: req.body.texto,
                arquivo: req.body.arquivo,
                link: req.body.link,
                imageName: req.file.filename,
                documento: req.body.documento,
                tag: req.body.tag
            }


            console.log("dados Ar", dados);


            const response = await this.atividadeServices.gravaAr(dados);
            if (response) {
                return res.status(200).send("sucesso");
            } else {
                return res.status(200).send("falha");
            }
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    async editarAr(req, res) {

        let imagem
        if (req.file) {
            imagem = req.file.filename
        } else {
            imagem = req.body.imageName
        }

        try {

            if (req.body.documento) {
                const dados = {
                    id_atividade: Number(req.body.id_atividade),
                    id_ordem: Number(req.body.id_ordem),
                    usuario: req.body.usuario,
                    titulo: req.body.titulo,
                    texto: req.body.texto,
                    arquivo: req.body.arquivo,
                    link: req.body.link,
                    imageName: imagem,
                    documento: req.body.documento,
                    tag: req.body.tag
                }


                console.log("dados preparados para controller =====>", dados);


                const response = await this.atividadeServices.editarAr(dados);
                if (response) {
                    return res.status(200).send("sucesso");
                } else {
                    return res.status(200).send("falha");
                }
            }  else {
                const dados = {
                    id_atividade: Number(req.body.id_atividade),
                    id_ordem: Number(req.body.id_ordem),
                    usuario: req.body.usuario,
                    titulo: req.body.titulo,
                    texto: req.body.texto,
                    link: req.body.link,
                    imageName: imagem,
                    tag: req.body.tag
                }
                console.log("dados", dados);
                const response = await this.atividadeServices.editarAr(dados);
                if (response) {
                    return res.status(200).send("sucesso");
                } else {
                    return res.status(200).send("falha");
                }


            }


        } catch (error) {


            console.log("erro editar atividades metodo controller ===>", error);


            return res.status(500).send(error);
        }
    }

    async deleteAr(req, res) {

        const {
            id
        } = req.params

        try {

            console.log("dados preparados para controller delete =====>", id);


            const response = await this.atividadeServices.deleteAr(id);
            return res.status(200).send(response);


        } catch (error) {


            console.log("dados preparados para controller delete ===>", error);


            return res.status(500).send(error);
        }
    }

    async obterAr(req, res) {
        try {
            const response = await this.atividadeServices.obterAr();
            console.log("ret", response);
            return res.status(200).send(response);
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    async obterArId(req, res) {
        console.log("back end ====> obterTutoriaisId ", req.params);

        const {
            id
        } = req.params
        console.log("obterTutoriaisId controler =====>", id);

        try {
            const response = await this.atividadeServices.obterArId(id);
            console.log("ret", response);
            return res.status(200).send(response);
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    async gravaTerra(req, res) {

        console.log("controler Terra", req.body);


        try {
            const dados = {
                id_ordem: req.body.id_ordem,
                usuario: req.body.usuario,
                titulo: req.body.titulo,
                texto: req.body.texto,
                arquivo: req.body.arquivo,
                link: req.body.link,
                imageName: req.file.filename,
                documento: req.body.documento,
                tag: req.body.tag
            }

            console.log("dados Terra", dados);


            const response = await this.atividadeServices.gravaTerra(dados);
            if (response) {
                return res.status(200).send("sucesso");
            } else {
                return res.status(200).send("falha");
            }
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    async editarTerra(req, res) {

        console.log("editarTerra", req.body.imageName);

        let imagem
        if (req.file) {
            imagem = req.file.filename
        } else {
            imagem = req.body.imageName
        }  

        try {
            if (req.body.documento) {
                const dados = {
                    id_atividade: Number(req.body.id_atividade),
                    id_ordem: Number(req.body.id_ordem),
                    usuario: req.body.usuario,
                    titulo: req.body.titulo,
                    texto: req.body.texto,
                    arquivo: req.body.arquivo,
                    link: req.body.link,
                    imageName: imagem,
                    documento: req.body.documento,
                    tag: req.body.tag
                }
                console.log("dados preparados para controller =====>", dados);


                const response = await this.atividadeServices.editarTerra(dados);
                if (response) {
                    return res.status(200).send("sucesso");
                } else {
                    return res.status(200).send("falha");
                }
            } else {
                const dados = {
                    id_atividade: Number(req.body.id_atividade),
                    id_ordem: Number(req.body.id_ordem),
                    usuario: req.body.usuario,
                    titulo: req.body.titulo,
                    texto: req.body.texto,
                    link: req.body.link,
                    imageName: imagem,
                    tag: req.body.tag
                }
                console.log("dados", dados);
                const response = await this.atividadeServices.editarTerra(dados);
                if (response) {
                    return res.status(200).send("sucesso");
                } else {
                    return res.status(200).send("falha");
                }


            }


        } catch (error) {


            console.log("erro editar atividades metodo controller ===>", error);


            return res.status(500).send(error);
        }
    }

    async deleteTerra(req, res) {

        const {
            id
        } = req.params

        try {

            console.log("dados preparados para controller delete =====>", id);


            const response = await this.atividadeServices.deleteTerra(id);
            return res.status(200).send(response);


        } catch (error) {


            console.log("dados preparados para controller delete ===>", error);


            return res.status(500).send(error);
        }
    }

    async obterTerra(req, res) {
        try {
            const response = await this.atividadeServices.obterTerra();
            console.log("ret", response);
            return res.status(200).send(response);
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    async obterTerraId(req, res) {
        console.log("back end ====> obterTutoriaisId ", req.params);

        const {
            id
        } = req.params
        console.log("obterTutoriaisId controler =====>", id);

        try {
            const response = await this.atividadeServices.obterTerraId(id);
            console.log("ret", response);
            return res.status(200).send(response);
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    async gravaFogo(req, res) {

        console.log("controler Fogo", req.body);


        try {
            const dados = {
                id_ordem: req.body.id_ordem,
                usuario: req.body.usuario,
                titulo: req.body.titulo,
                texto: req.body.texto,
                arquivo: req.body.arquivo,
                link: req.body.link,
                imageName: req.file.filename,
                tag: req.body.tag
            }

            console.log("dados Fogo", dados);


            const response = await this.atividadeServices.gravaFogo(dados);
            if (response) {
                return res.status(200).send("sucesso");
            } else {
                return res.status(200).send("falha");
            }
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    async editarFogo(req, res) {

        console.log("editarFogo", req.body.imageName);

        try {

            if (req.file) {
                const dados = {
                    id_atividade: req.body.id_atividade,
                    id_ordem: req.body.id_ordem,
                    usuario: req.body.usuario,
                    titulo: req.body.titulo,
                    texto: req.body.texto,
                    arquivo: req.body.arquivo,
                    link: req.body.link,
                    imageName: req.file.filename,
                    tag: req.body.tag
                }


                console.log("dados preparados para controller =====>", dados);


                const response = await this.atividadeServices.editarFogo(dados);
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
                    arquivo: req.body.arquivo,
                    link: req.body.link,
                    imageName: req.body.imageName,
                    tag: req.body.tag
                }
                console.log("dados", dados);
                const response = await this.atividadeServices.editarFogo(dados);
                if (response) {
                    return res.status(200).send("sucesso");
                } else {
                    return res.status(200).send("falha");
                }


            }


        } catch (error) {


            console.log("erro editar atividades metodo controller ===>", error);


            return res.status(500).send(error);
        }
    }

    async deleteFogo(req, res) {

        const {
            id
        } = req.params

        try {

            console.log("dados preparados para controller delete =====>", id);


            const response = await this.atividadeServices.deleteFogo(id);
            return res.status(200).send(response);


        } catch (error) {


            console.log("dados preparados para controller delete ===>", error);


            return res.status(500).send(error);
        }
    }

    async obterFogo(req, res) {
        try {
            const response = await this.atividadeServices.obterFogo();
            console.log("ret", response);
            return res.status(200).send(response);
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    async obterFogoId(req, res) {
        console.log("back end ====> obterTutoriaisId ", req.params);

        const {
            id
        } = req.params
        console.log("obterTutoriaisId controler =====>", id);

        try {
            const response = await this.atividadeServices.obterFogoId(id);
            console.log("ret", response);
            return res.status(200).send(response);
        } catch (error) {
            return res.status(500).send(error);
        }
    }



    async docPdf(req, res) {
        console.log("docPdf", req);

        try {
            // O arquivo enviado é acessível através de req.file
            const file = req.file;
            if (!file) {
                return res.status(400).send({
                    error: 'No file uploaded'
                });
            }

            return res.status(200).send(file.filename);

        } catch (error) {
            console.log("Erro", error);
            return res.status(400).send(error.message);
        }
    }

    async docImagem(req, res) {
        try {
            // O arquivo enviado é acessível através de req.file
            const file = req.file;
            if (!file) {
                return res.status(400).send({
                    error: 'No file uploaded'
                });
            }

            return res.status(200).send(file.filename);

        } catch (error) {
            console.log("Erro", error);
            return res.status(400).send(error.message);
        }
    }















}