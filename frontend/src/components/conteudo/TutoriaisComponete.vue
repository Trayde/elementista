<template>
    <div class="row">
        <div class="col-md-10 grid-margin">
            <div class="row">
                <div class="col-12 col-xl-8 mb-4 mb-xl-0">
                    <h3 class="font-weight-bold white">Tutoriais</h3>
                </div>
            </div>
        </div>
        <div class="justify-content-end d-flex">
            <div class="dropdown flex-md-grow-1 flex-xl-grow-0">
                <a @click="criarTutorial(dados)">
                    <!-- <i style="font-size: 25px;" class="mdi mdi-note-plus"></i> -->
                    <img :src="avatar" style="width: 90px; height: 80px;">
                </a>
            </div>
        </div>
        <!-- Spinner que aparece quando loading é true -->
        <div v-if="loading" class="spinner-container">
            <div class="base_spinner">
                <img src="../../../public/img/Gotanav2.png" alt="Spinner" class="spinner-image">
            </div>
        </div>
    </div>
    <div class="col-12 grid-margin stretch-card">
        <div class="card" style="background-color: #fff0;">
            <div class="row">
                <div class="col-md-12">
                    <div class="card-body">
                        <div class="template-demo">
                            <button @click="filterByTag('')"
                                :class="['btn btn-inverse-orange btn-fw', { 'btn-primary': selectedTag === '' }]">
                                TODAS
                            </button>
                            <button v-for="tag in uniqueTags" :key="tag" @click="filterByTag(tag)"
                                :class="['btn btn-inverse-orange btn-fw', { 'btn-primary': selectedTag === tag }]">
                                {{ tag }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div v-for="(dados, index) in filteredAtividades" :key="index" class="col-md-4 grid-margin stretch-card">
            <div class="card">
                <div class="icon-right">
                    <ul class="navbar-nav navbar-nav-right">
                        <li class="nav-item dropdown">
                        <li class="nav-item nav-profile dropdown">
                            <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
                                <i class="mdi mdi-dots-vertical"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right navbar-dropdown"
                                aria-labelledby="profileDropdown">
                                <a class="dropdown-item" @click="editarTutorial(dados)">Editar</a>
                                <a class="dropdown-item" @click="deletaAtividade(dados.id_atividade)">Deletar</a>
                           </div>
                        </li>
                        </li>
                    </ul>
                </div>
                <div class="card-body">
                    <p class="card-title">{{ dados.titulo }}</p>
                    <img class="card-img-top" :src="dados.link" style="height: 200px;" alt="Card image cap">
                    <br><br>
                    <p class="font-weight-500 truncated-text" v-html="sanitizeHtml(dados.texto)"></p>
                    <a class="btn btn-primary mt-3" @click="verMais(dados)">Ver mais</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
 import ApiMethodsAtividades from '../../views/conteudo/service/service.atividades'
import avatar from '../../../public/img/Gotanav2.png'
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import DOMPurify from 'dompurify';
//const  arrays = require('../../localStore/turoriais')

import   arrays  from '../../localStore/turoriais'

export default {
    name: 'Tutoriais',
    components: {
        QuillEditor
    },
    data() {
        return {
            loading: false,
            atividade: {
                id_atividade: "",
                id_ordem: "",
                usuario: "",
                titulo: "",
                texto: "",
                arquivo: "",
                link: "",
                dt_criacao: "",
                publicada: "",
                tag: ""
            },
            ativiArry: [],
            selectedTag: '', // Armazena a tag selecionada, '' significa todas as tags
            avatar: avatar
        }
    },
    computed: {
        filteredAtividades() {
            if (this.selectedTag) {
                return this.ativiArry.filter(atividade => atividade.tag === this.selectedTag);
            }
            return this.ativiArry;
        },
        uniqueTags() {
            const tags = this.ativiArry.map(atividade => atividade.tag).filter(tag => tag);
            return [...new Set(tags)];
        }
    },
    created() {
        this.listaAtividades()
    },
    methods: {
        sanitizeHtml(html) {
            return DOMPurify.sanitize(html);
        },
        async listaAtividades() {
             const retorno = await ApiMethodsAtividades.obterTutoriais()
             console.log("reotno tela obterTutoriais listaAtividades", retorno);

    
            this.ativiArry = retorno.map((at) => ({
                id_atividade: at.id_atividade,
                id_ordem: at.id_ordem,
                usuario: at.usuario,
                titulo: at.titulo,
                texto: at.texto,
                arquivo: at.arquivo,
                link: `https://apienerge.apololab.net/atividades/${at.imageName}`,
                imageName: at.imageName,
                dt_criacao: at.dt_criacao,
                publicada: at.publicada,
                tag: at.tag
            }));

        },
        filterByTag(tag) {
            this.selectedTag = tag;
        },
        criarTutorial() {
            this.$router.push("/cria-tutorial"); // Redirecionar para a rota raiz
        },
        editarTutorial(dados) {
            this.$router.push({
                path: "/editar-tutorial",
                query: { atividades: dados.id_atividade }
            });
        },
        async deletaAtividade(itemId) {
            // Exibe o SweetAlert2 para confirmação
            const result = await Swal.fire({
                title: "Tem certeza?",
                text: "Você não poderá desfazer essa ação!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#d33",
                cancelButtonColor: "#3085d6",
                confirmButtonText: "Sim, excluir!",
                cancelButtonText: "Cancelar",
            });

            // Se o usuário confirmar, remove o item
            if (result.isConfirmed) {
                this.deleteItem(itemId);
               
            }
        },
        deleteItem(itemId) {
            this.loading = true 
           ApiMethodsAtividades.deleteTutoriais(itemId).then((res) => {
            console.log("delete", res);
            
                if (res.mensagen === 'sucesso') {
                    
                    this.isVisible = false;
                    setTimeout(() => {
                        this.loading = false;
                        this.$router.push("/tutoriais"); // Redirecionar para a rota raiz
                    }, 3000);
                } else {
                    this.loading = false; // Oculta o spinner em caso de erro
                }
            });
        },
        verMais(dados) {
            // Redirecionar para a página de detalhes ou outra página


            this.$router.push({
                path: "/ver-tutoriais",
                query: { nome: dados.arquivo }
            });



        }
    }
}
</script>

<style scoped>
.nav-link[data-toggle="dropdown"]::after {
    display: none;
}

.icon-right {
    position: absolute;
    top: 10px;
    right: 10px;
}

.card-img-top {
    border-radius: 5%;
}

.btn-primary {
    background-color: #131415 !important;
    border-color: #f6f8f9 !important;
}

.truncated-text {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    /* Número de linhas que deseja mostrar */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
