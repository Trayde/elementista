"use strict";
const {
    Container
} = require("../../../infra/middlewares/dependency.injection");

module.exports = class AtividadeServices {
    constructor() {
        const container = Container();
        this.atividadeRepository = container.resolve("atividadeRepository");


    }

    async gravaAtividade(dados) {
        console.log("service visitas backend", dados);

        return await this.atividadeRepository.gravaAtividade(dados);
    }


    async obterAtividade() {
        const retorno = await this.atividadeRepository.obterAtividade();
        return retorno
    }


    async obterAtividadeId(id) {
        console.log("obterAtividadeId", id);

        const retorno = await this.atividadeRepository.obterAtividadeId(id);
        return retorno
    }


    async obertVideos() {
        const retorno = await this.atividadeRepository.obertVideos();
        return retorno
    }


    async obertVideosId(id) {
        const retorno = await this.atividadeRepository.obertVideosId(id);
        return retorno
    }

    async editarAtividade(dados) {
        const retorno = await this.atividadeRepository.editarAtividade(dados);
        return retorno
    }

    async deleteAtividade(id) {
        const retorno = await this.atividadeRepository.deleteAtividade(id);
        return retorno
    }

    async editarVideos(dados) {
        const retorno = await this.atividadeRepository.editarVideos(dados);
        return retorno
    }

    async deleteVideos(dados) {
        const retorno = await this.atividadeRepository.deleteVideos(dados);
        return retorno
    }



    async gravaVideos(dados) {
        console.log("service visitas backend gravaVideos", dados);

        return await this.atividadeRepository.gravaVideos(dados);
    }


    async gravaTutoriais(dados) {
        console.log("service Tutoriais backend", dados);

        return await this.atividadeRepository.gravaTutoriais(dados);
    }


    async obterTutoriais() {
        const retorno = await this.atividadeRepository.obterTutoriais();
        return retorno
    }

    async obterTutoriaisId(id) {
        console.log("obterTutoriaisId ===> service", id);

        const retorno = await this.atividadeRepository.obterTutoriaisId(id);
        return retorno
    }

    async editarTutoriais(dados) {
        const retorno = await this.atividadeRepository.editarTutoriais(dados);
        return retorno
    }

    async deleteTutoriais(dados) {
        const retorno = await this.atividadeRepository.deleteTutoriais(dados);
        return retorno
    }

    async gravaAgua(dados) {
        console.log("obterAgua ===> service", dados);

        const retorno = await this.atividadeRepository.gravaAgua(dados);
        return retorno
    }

    async obterAgua() {
        const retorno = await this.atividadeRepository.obterAgua();
        return retorno
    }

    async obterAguaId(id) {
        console.log("obterAguaId ===> service", id);

        const retorno = await this.atividadeRepository.obterAguaId(id);
        return retorno
    }

    async editarAgua(dados) {
        const retorno = await this.atividadeRepository.editarAgua(dados);
        return retorno
    }

    async deleteAgua(dados) {
        const retorno = await this.atividadeRepository.deleteAgua(dados);
        return retorno
    }

    async obterAr() {
        const retorno = await this.atividadeRepository.obterAr();
        return retorno
    }

    async obterArId(id) {
        console.log("obterArId ===> service", id);

        const retorno = await this.atividadeRepository.obterArId(id);
        return retorno
    }

    async editarAr(dados) {
        const retorno = await this.atividadeRepository.editarAr(dados);
        return retorno
    }

    async deleteAr(dados) {
        const retorno = await this.atividadeRepository.deleteAr(dados);
        return retorno
    }

    async obterTerra() {
        const retorno = await this.atividadeRepository.obterTerra();
        return retorno
    }

    async obterTerraId(id) {
        console.log("obterTerraId ===> service", id);

        const retorno = await this.atividadeRepository.obterTerraId(id);
        return retorno
    }

    async editarTerra(dados) {
        const retorno = await this.atividadeRepository.editarTerra(dados);
        return retorno
    }

    async deleteTerra(dados) {
        const retorno = await this.atividadeRepository.deleteTerra(dados);
        return retorno
    }


    async obterFogo() {
        const retorno = await this.atividadeRepository.obterFogo();
        return retorno
    }

    async obterFogoId(id) {
        console.log("obterFogoId ===> service", id);

        const retorno = await this.atividadeRepository.obterFogoId(id);
        return retorno
    }

    async editarFogo(dados) {
        const retorno = await this.atividadeRepository.editarFogo(dados);
        return retorno
    }

    async deleteFogo(dados) {
        const retorno = await this.atividadeRepository.deleteFogo(dados);
        return retorno
    }


}