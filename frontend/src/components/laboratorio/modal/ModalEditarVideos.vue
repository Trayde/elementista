<template>
    <div class="row">
        <div class="col-md-10 grid-margin">
            <div class="row">
                <div class="col-12 col-xl-8 mb-4 mb-xl-0">
                    <h3 class="font-weight-bold">Editar videos</h3>
                </div>
            </div>
        </div>
        <!-- Spinner que aparece quando loading é true -->
        <div v-if="loading" class="spinner-container">
            <div class="base_spinner"> </div>
        </div>
    </div>
    <div class="card" style="max-width: 70rem;">
        <form @submit.prevent="salvar">
            <div class="">
                <h4 class="modal-body fs-8" id="exampleModalLabel">
                    <label class="form-label">Link</label>
                    <input type="text" class="col-12 col-xl-12 mb-xl-0 form-control" v-model="content.link">
                </h4>
            </div>
            <div class="modal-body">
                <div class="video-container">
                    <iframe :src="content.link" title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                    </iframe>
                </div>
            </div>
            <div class="card-body">
                <div class="">
                    <h4 class="modal-title fs-8" id="exampleModalLabel">
                        <label class="modal-body">Título</label>
                        <input type="text" class="col-12 col-xl-12 mb-xl-0 form-control" v-model="content.titulo">
                        <br>
                        <input type="text" class="col-4 col-xl-4 mb-xl-0 form-control" placeholder="TAG#"
                            v-model="content.tag">
                    </h4>
                </div>
                <br>

                <label for="activAdmin" class="form-control">Descrição Texto</label>
                <div ref="editorContainer"></div> <!-- Removido o espaço extra -->

                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Salvar</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import ApiMethodsAtividades from '@/views/conteudo/service/service.atividades'
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
            quill: null
        };
    },
    created() {
        this.show()
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
        sanitizeHtml(html) {
            return DOMPurify.sanitize(html);
        },
        async show() {
            const id = JSON.parse(this.$route.query.videos);
            console.log("id tela", id);

            const response = await ApiMethodsAtividades.obertVideosId(id)
            response.map((dados) => {
                this.content = {
                    id_videos: dados.id_videos,
                    id_ordem: dados.id_ordem,
                    usuario: dados.usuario,
                    titulo: dados.titulo,
                    texto: dados.texto, // Este campo armazenará o HTML gerado pelo Quill
                    link: dados.link,
                    imageName: dados.imageName, // Adiciona o nome da imagem
                    tag: dados.tag
                }
            })

            if (this.content.texto) {
                this.quill.root.innerHTML = this.content.texto;
            }
        },

        onFileChange(event) {
            const file = event.target.files[0];
            this.content.selectedFile = file;
            this.content.link = URL.createObjectURL(file); // Atualiza a visualização da imagem
            this.content.imageName = file.name; // Armazena o nome do arquivo
        },

        salvar() {
            // Atualiza o conteúdo com o HTML gerado pelo Quill
            this.content.texto = this.quill.root.innerHTML;

            const dados = this.content;
            ApiMethodsAtividades.editarVideos(dados).then((res) => {
                if (res.data === 'sucesso') {
                    this.isVisible = false;
                    setTimeout(function () {
                        location.reload();
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

.video-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    /* Proporção 16:9 (9/16 = 0.5625) */
    height: 0;
    overflow: hidden;
    border-radius: 10px;
    /* Adiciona o border-radius ao contêiner */
}

.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    /* Aplica o border-radius ao iframe */
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
    width: 50px;
    height: 50px;
    border: 5px solid #f3f3f3;
    /* Cor do fundo do círculo */
    border-top: 5px solid #3498db;
    /* Cor da parte superior que vai girar */
    border-radius: 50%;
    /* Faz o círculo */
    animation: spin 1s linear infinite;
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
