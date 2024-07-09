"use strict";
const { Container } = require("../../../infra/middlewares/dependency.injection");

module.exports = class AtividadeServices {
    constructor() {
        const container = Container();
        this.atividadeRepository = container.resolve("atividadeRepository");
        
        
    }

    async gravaAtividade (dados) {
        console.log("service visitas backend",dados );

        return await this.atividadeRepository.gravaAtividade(dados);
    }


    async obterAtividade() {
        const retorno = await this.atividadeRepository.obterAtividade();

        return retorno
    }


   async obertVideos() {
        const retorno = await this.atividadeRepository.obertVideos();

        return retorno
    }

    async editarAtividade(dados) {

        const retorno = await this.atividadeRepository.editarAtividade(dados);

        
        return retorno
    }



    async gravaVideos(dados) {
        console.log("service visitas backend gravaVideos",dados  );

        return await this.atividadeRepository.gravaVideos(dados);
    }


}   