<template>
    <div class="row">
        <div class="col-md-10 grid-margin">
            <div class="row">
                <div class="col-12 col-xl-8 mb-4 mb-xl-0">
                    <h3 class="font-weight-bold white">Terra</h3>
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
                            <button @click="filterByTag('')" :class="['btn btn-inverse-orange btn-fw', { 'btn-primary': selectedTag === '' }]">
                                TODAS
                            </button>
                            <button v-for="tag in uniqueTags" :key="tag" @click="filterByTag(tag)" :class="['btn btn-inverse-orange btn-fw', { 'btn-primary': selectedTag === tag }]">
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
                                <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                                    <a class="dropdown-item" @click="editarAtividade(dados)">Editar</a>
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
// import ApiMethodsAtividades from '../../views/conteudo/service/service.atividades'
// import { QuillEditor } from '@vueup/vue-quill';
// import '@vueup/vue-quill/dist/vue-quill.snow.css';
// import DOMPurify from 'dompurify';

export default {
    name: 'Tutoriais',
    // components: {
    //     QuillEditor
    // },
    data() {
        return {
            atividade: {
                id_atividade: "",
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
            selectedTag: '', // Armazena a tag selecionada, '' significa todas as tags
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
            // const retorno = await ApiMethodsAtividades.obertAtividade()
            // console.log("reotno tela atividade", retorno);
            
            // this.ativiArry = retorno.map((at) => ({
            //     id_atividade: at.id_atividade,
            //     id_ordem: at.id_ordem,
            //     usuario: at.usuario,
            //     titulo: at.titulo,
            //     texto: at.texto,
            //     link: `https://apienerge.apololab.net/atividades/${at.imageName}`,
            //     imageName: at.imageName,
            //     dt_criacao: at.dt_criacao,
            //     publicada: at.publicada,
            //     tag: at.tag
            // }));
        },
        filterByTag(tag) {
            this.selectedTag = tag;
        },
        criarAtividade() {
            this.$router.push("/cria-atividade"); // Redirecionar para a rota raiz
        },
        editarAtividade(dados) {
            this.$router.push({
                path: "/editar-atividade",
                query: { atividades: JSON.stringify(dados.id_atividade) }
            });
        },
        verMais(dados) {
            // Redirecionar para a página de detalhes ou outra página
            

            this.$router.push({
                path: "/ver-conteudo",
                query: { atividades: JSON.stringify(dados.id_atividade) }
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
    -webkit-line-clamp: 3; /* Número de linhas que deseja mostrar */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
