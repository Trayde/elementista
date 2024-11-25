<template>
    <div class="row">
        <div class="col-md-10 grid-margin">
            <div class="row">
                <div class="col-12 col-xl-8 mb-4 mb-xl-0">
                    <h3 class="font-weight-bold white">Criar Tutorial</h3>
                </div>
            </div>
        </div>
        <div v-if="loading" class="spinner-container">
            <div class="base_spinner">
                <img :src="avatar" alt="Spinner" class="spinner-image">
            </div>
        </div>
    </div>
    <div class="card" style="max-width: 70rem;">
        <form @submit.prevent="salvar">
            <div v-if="content.link" class="modal-body">
                <img class="card-img-top" :src="content.link" style="height: 400px;" alt="Card image cap">
            </div>
            <div v-else class="modal-body">
                <img class="card-img-top" src="../../../../public/img/LOGO_ELEMENTISTA_V1_FUNDO-VERDE.jpg" style="height: 400px"
                    alt="Card image cap">
            </div>
            <div class="modal-body">
                <label for="imageUpload" class="form-label">Upload de Imagem&nbsp;</label>
                <input type="file" @change="onFileChange">
            </div>
            <div class="card-body">
                <div class="">
                    <h4 class="modal-title fs-8" id="exampleModalLabel">
                        <label class="form-label">Nome do arquivo .ino</label>
                        <input type="text" class="col-12 col-xl-12 mb-xl-0 form-control" v-model="content.titulo">
                        <br>
                        <input type="text" class="col-4 col-xl-4 mb-xl-0 form-control" placeholder="TAG#"
                            v-model="content.tag">
                    </h4>
                </div>
                <div >
                    <br>
                    <label for="activAdmin" class="form-label">Descrição Texto</label>
                    <div ref="editorContainer"></div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Salvar</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import ApiMethodsAtividades from '@/views/conteudo/service/service.atividades'
import avatar from '../../../../public/img/Gotanav2.png'
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

export default {
    name: "CriaAtividade",
    data() {
        return {
            isVisible: false,
            loading: false,
            content: {
                id_atividade: null,
                id_ordem: 0,
                usuario: "",
                titulo: "",
                texto: "", // Este campo armazenará o HTML gerado pelo Quill
                link: "",
                selectedFile: null,
                imageName: "", // Adiciona o nome da imagem
                tag: ""
            },
            quill: null,
            avatar: avatar
        };
    },

    mounted() {
        this.quill = new Quill(this.$refs.editorContainer, {
            theme: 'snow',
            modules: {
                toolbar: [
                    [{ 'header': '1' }, { 'header': '2' }],
                    ['bold', 'italic', 'underline'],
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                    [{ 'align': [] }],
                    ['link']
                ]
            }
        });

        // Carregar o conteúdo existente, se houver
        if (this.content.texto) {
            this.quill.root.innerHTML = this.content.texto;
        }
    },

    methods: {
        onFileChange(event) {
            const file = event.target.files[0];
            this.content.selectedFile = file;
            this.content.link = URL.createObjectURL(file); // Atualiza a visualização da imagem
            this.content.imageName = file.name; // Armazena o nome do arquivo
        },

        salvar() {
            this.loading = true;
            // Atualiza o conteúdo com o HTML gerado pelo Quill
            this.content.texto = this.quill.root.innerHTML;
            
            console.log("salve", this.content);
            const dados = this.content;
            ApiMethodsAtividades.gravaTutoriais(dados).then((res) => {
                console.log("res tela", res);

                if (res.data === 'sucesso') {
                    this.isVisible = false;
                    setTimeout(() => {
                        this.loading = false;
                        this.$router.push("/tutorial"); // Redirecionar para a rota raiz
                    }, 3000);

                } else {
                    // Tratar o erro
                }
            });
        }
    }
}
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

/* Container do spinner */
.spinner-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
}

/* Base do spinner */
.base_spinner {
    position: relative;
    width: 100px;
    height: 100px;
}

/* Imagem do spinner */
.spinner-image {
    width: 100%;
    height: auto;
    animation: spin 2s linear infinite;
    /* Gira continuamente */
}

/* Animação de rotação */
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
