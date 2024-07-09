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
                    <div class="">
                        <h4 class="modal-title fs-8" id="exampleModalLabel">
                            <label class="form-label">Link</label>
                            <input type="text" class="col-12 col-xl-12 mb-xl-0" v-model="content.link">
                        </h4>
                    </div>
                    <div class="modal-body">
                        <iframe 
                            width="420" 
                            height="200"
                            :src="content.link"
                            title="YouTube video player" 
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen>
                        </iframe>
                    </div>
                    <div class="modal-body">
                        <label for="activAdmin" class="form-label">Descrição Texto</label>
                        <textarea class="form-control" v-model="content.texto" id="activAdmin" rows="10"></textarea>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="hide">Fechar</button>
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
    name: 'ModalVideos',
    data() {
        return {
            isVisible: false,
            content: {
                id_ordem: null,
                usuario: "",
                titulo: "",
                texto: "",
                link: "",
            },
        };
    },

    methods: {
        show() {
            
            this.isVisible = true;
        },
        hide() {
            this.isVisible = false;
        },
        salvar() {
            console.log("salve", this.content);
            const dados = this.content;
            ApiMethodsAtividades.gravaVideos(dados).then((res) => {
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
