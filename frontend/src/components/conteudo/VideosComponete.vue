<template>
    <div class="row">
        <div class="col-md-10 grid-margin">
            <div class="row">
                <div class="col-12 col-xl-8 mb-4 mb-xl-0">
                    <h3 class="font-weight-bold">Videos</h3>
                </div>
            </div>
        </div>
        <div class="justify-content-end d-flex">
            <div class="dropdown flex-md-grow-1 flex-xl-grow-0">
                <a @click="criarAtividade(dados)">
                    <i style="font-size: 25px;" class="mdi mdi-note-plus"></i>
                </a>
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
                                :class="['btn btn-inverse-secondary btn-fw', { 'btn-primary': selectedTag === '' }]">
                                Todas
                            </button>
                            <button v-for="tag in uniqueTags" :key="tag" @click="filterByTag(tag)"
                                :class="['btn btn-inverse-secondary btn-fw', { 'btn-primary': selectedTag === tag }]">
                                {{ tag }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <!-- <div class="col-md-4 "> -->
            <div v-for="(dados, index) in filteredAtividades" :key="index" class="col-md-4 grid-margin">
                <div class="card">
                    <div class="card-body">
                        <!-- <p class="card-title">{{ dados.titulo }}</p> -->
                        <div class="video-container">
                            <iframe :src="dados.link" title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                            </iframe>
                        </div>
                        
                        <br><br>
                        <div class="icon-right">
                        <ul class="navbar-nav navbar-nav-right">
                            <li class="nav-item dropdown">
                            <li class="nav-item nav-profile dropdown">
                                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown"
                                    id="profileDropdown">
                                    <i class="mdi mdi-dots-vertical"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right navbar-dropdown"
                                    aria-labelledby="profileDropdown">
                                    <a class="dropdown-item" @click="editarVideos(dados)">Editar</a>
                                </div>
                            </li>
                            </li>
                        </ul>
                    </div>
                        <p class="font-weight-500 truncated-text" v-html="sanitizeHtml(dados.texto)"></p>
                        
                    </div>
                </div>
            </div>
        <!-- </div> -->
    </div>
</template>

<script>
import ApiMethodsAtividades from '../../views/conteudo/service/service.atividades'

import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import DOMPurify from 'dompurify';


export default {
    name: 'VideoComponete',
    components: {
        DOMPurify,
    },
    data() {
        return {
            videos: {
                id_videos: "",
                id_ordem: "",
                usuario: "",
                titulo: "",
                texto: "",
                link: "",
                dt_criacao: "",
                publicada: "",
                tag: ""
            },
            ativiArry: [],
            selectedTag: ""
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
            console.log("this.ativiArry", this.ativiArry);
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
            const retorno = await ApiMethodsAtividades.obertVideos()

            console.log("retorno", retorno);

            retorno.map((at) => {
                this.ativiArry.push({
                    id_videos: at.id_videos,
                    id_ordem: at.id_ordem,
                    usuario: at.usuario,
                    titulo: at.titulo,
                    texto: at.texto,
                    link: at.link,
                    dt_criacao: at.dt_criacao,
                    publicada: at.publicada,
                    tag: at.tag
                })
            })

        },
        filterByTag(tag) {
            this.selectedTag = tag;
        },
        criarAtividade() {
            this.$router.push("/cria-videos"); // Redirecionar para a rota raiz
        },
        editarVideos(dados) {
            this.$router.push({
                path: "/editar-videos",
                query: { videos: JSON.stringify(dados.id_videos) }
            });
        },
        verMais(dados) {
            // Redirecionar para a página de detalhes ou outra página
            this.$router.push({
                path: "/ver-videos",
                query: { videos: JSON.stringify(dados.id_videos) }
            });

        }
    }
}
</script>
<style scoped>
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


.nav-link[data-toggle="dropdown"]::after {
    display: none;
}

.icon-right {
    position: absolute;
    /* top: 10px; */
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