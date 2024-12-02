<template>
    <div v-if="isVisible" class="modal" @click.self="hide">
        <form @submit.prevent="salvar">
            <span class="close" @click.self="hide">&times;</span>
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="">
                        <h4 class="modal-title fs-8" id="exampleModalLabel">
                            <label class="form-label"> Titulo</label>
                            <input type="text" class="col-12 col-xl-12  mb-xl-0" v-model="content.titulo">
                        </h4>
                    </div>
                    <div v-if="content.link" class="modal-body">
                        <img class="card-img-top" :src="content.link" style="height: 200px;" alt="Card image cap">
                    </div>
                    <div v-else class="modal-body">
                        <img class="card-img-top" src="../../../assets/imagemPadao.png" style="height: 200px;"
                            alt="Card image cap">
                    </div>
                    <div class="modal-body">
                        <label for="imageUpload" class="form-label">Upload de imagem</label>
                        <input type="file" @change="onFileChange">
                    </div>

                    <div class="modal-body">
                        <label for="activAdmin" class="form-label">Descrição Texto</label>
                        <textarea class="form-control" v-model="content.texto" id="activAdmin" rows="10"></textarea>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                            @click="hide">Fechar</button>
                        <button type="submit" class="btn btn-primary">Salvar</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import ApiMethodsAtividades from '@/views/conteudo/service/service.atividades'

export default {
    name: 'ModalAtividade',
    data() {
        return {
            isVisible: false,
            content: {
                id_atividade: null,
                id_ordem: null,
                usuario: "",
                titulo: "",
                texto: "",
                link: "",
                selectedFile: null,
                imageName: "" // Adiciona o nome da imagem
            },
        };
    },

    methods: {
        show(dados) {
            console.log("dados ===> Modal", dados);
            this.content = {
                id_atividade: dados.id_atividade,
                id_ordem: dados.id_ordem,
                usuario: dados.usuario,
                titulo: dados.titulo,
                texto: dados.texto,
                link: dados.link,
                imageName: "" // Limpa o nome da imagem ao exibir o modal
            };
            this.isVisible = true;
        },
        hide() {
            this.isVisible = false;
        },
        onFileChange(event) {
            const file = event.target.files[0];
            this.content.selectedFile = file;
            this.content.link = URL.createObjectURL(file); // Atualiza a visualização da imagem
            this.content.imageName = file.name; // Armazena o nome do arquivo
        },
        salvar() {
            console.log("salve", this.content);
            const dados = this.content;
            ApiMethodsAtividades.gravaAtividade(dados).then((res) => {
                if (res.data === 'sucesso') {
                    this.isVisible = false;
                    setTimeout(function () {
                        location.reload();
                    }, 3000);

                } else {

                }
            });
        }
    }
};
</script>

<style scoped>
.modal {
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
}

.close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    cursor: pointer;
}

.modal-content {
    background-color: #fdf8f8;
    padding: 20px;
    border: none;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    animation: slide-in 0.5s forwards;
}
</style>
