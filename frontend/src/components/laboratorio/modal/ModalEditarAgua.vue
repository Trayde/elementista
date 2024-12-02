<template>
    <div class="row">
        <div class="col-md-10 grid-margin">
            <div class="row">
                <div class="col-12 col-xl-8 mb-4 mb-xl-0">
                    <h3 class="font-weight-bold white">Editar Água</h3>
                </div>
            </div>
        </div>
        <!-- Spinner que aparece quando loading é true -->
        <div v-if="loading" class="spinner-container">
            <div class="base_spinner"> </div>
        </div>

    </div>
    <div class="card">
        <form @submit.prevent="salvar">
            <div v-if="content.link" class="modal-body">
                <img class="card-img-top" :src="content.link" alt="Card image cap">
            </div>
            <div v-else class="modal-body">
                <img class="card-img-top" src="../../../assets/imagemPadao.png" style="height: 400px"
                    alt="Card image cap">
            </div>
            <div class="modal-body">
                <label for="imageUpload" class="form-label">Upload de imagem &nbsp;</label>
                <input type="file" @change="onFileChange">
            </div>
            <div class="card-body">
                <div class="">

                    <label class="form-label">Título</label>
                    <input type="text" class="col-12 col-xl-12 mb-xl-0 form-control spacamento-top"
                        v-model="content.titulo">
                    <label class="form-label spacamento-top">TAG</label>
                    <input type="text" class="col-4 col-xl-4 mb-xl-0 form-control" placeholder="TAG#"
                        v-model="content.tag">

                    <label class="form-label spacamento-top">Nome arquivo .ino</label>
                    <input type="text" class="col-4 col-xl-4 mb-xl-0 form-control" placeholder="TAG#"
                        v-model="content.arquivo">
                </div>
                <div class="">
                    <label for="activAdmin" class="form-label spacamento-top">Descrição Texto</label>
                    <div ref="editorContainer"></div> <!-- Removido o espaço extra -->
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary spacamento-top">Salvar</button>
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
                arquivo: "",
                selectedFile: null,
                imageName: "", // Adiciona o nome da imagem
                tag: ""
            },
            quill: null,
            avatar: avatar
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
            const id = JSON.parse(this.$route.query.atividades);
            const response = await ApiMethodsAtividades.obterAguaId(id)
            response.map((dados) => {
                this.content = {
                    id_atividade: dados.id_atividade,
                    id_ordem: dados.id_ordem,
                    usuario: dados.usuario,
                    titulo: dados.titulo,
                    texto: dados.texto, // Este campo armazenará o HTML gerado pelo Quill
                    arquivo: dados.arquivo,
                    link: `https://apienerge.apololab.net/atividades/${dados.imageName}`,
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
            this.loading = true
            // Atualiza o conteúdo com o HTML gerado pelo Quill
            this.content.texto = this.quill.root.innerHTML;

            const dados = this.content;
            ApiMethodsAtividades.editarAgua(dados).then((res) => {
                if (res.data === 'sucesso') {
                    this.isVisible = false;
                    setTimeout(() => {
                        this.loading = false;
                        this.$router.push("/agua"); // Redirecionar para a rota raiz
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
