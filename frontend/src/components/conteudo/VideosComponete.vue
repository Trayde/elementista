<template>
    <div class="row">
        <div class="col-md-12 grid-margin">
            <div class="row">
                <div class="col-12 col-xl-8 mb-4 mb-xl-0">
                    <h3 class="font-weight-bold">Videos</h3>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-xl-8 mb-4 mb-xl-0">

        </div>
        <div class="col-12 col-xl-4">
            <div class="justify-content-end d-flex">
                <div class="dropdown flex-md-grow-1 flex-xl-grow-0">
                    <a @click="criarAtividade()">
                        <button type="button" class="btn btn-info btn-icon-text">
                            <i style="font-size: 25px;" class="mdi mdi-note-plus"></i>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <br>
    <div class="row">
        <div v-for="(dados, index) in ativiArry" :key="index" class="col-md-4 grid-margin stretch-card">
            <div class="card">
                <div class="col-md-2 col-lg-1">
                    <br>
                    <a @click="editarAtividade(dados)">
                        <button type="button" class="btn btn-outline-primary btn-sm">
                            <i class="mdi mdi-border-color"></i>
                        </button>
                    </a>
                </div>
                <div class="card-body">
                    <iframe width="280" height="200" :src="dados.link"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                    </iframe>
                    <br><br>
                    <p class="font-weight-500">{{ dados.texto }}</p>
                </div>
            </div>
        </div>
    </div>
    <modalVideos ref="modalVideos"></modalVideos>
    <modalEditarAtividade ref="modalEditarAtividade"></modalEditarAtividade>
</template>

<script>
import ApiMethodsAtividades from '../../views/conteudo/service/service.atividades'
import modalEditarAtividade from './modal/ModalEditarAtividade.vue'
import ModalVideos from './modal/ModalVideos.vue'

export default {
    name: 'VideoComponete',
    components: {
        modalEditarAtividade,
        ModalVideos
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
                publicada: ""
            },
            ativiArry: []
        }
    },
    created() {
        this.listaAtividades()
    },
    methods: {
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
                    publicada: at.publicada
                })
            })

        },
        criarAtividade() {
            this.$refs.modalVideos.show();
        },
        editarAtividade(dados) {
            this.$refs.modalEditarAtividade.show(dados);
        }
    }
}
</script>
