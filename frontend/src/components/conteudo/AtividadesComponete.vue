<template>
    <div class="row">
        <div class="col-md-12 grid-margin">
            <div class="row">
                <div class="col-12 col-xl-8 mb-4 mb-xl-0">
                    <h3 class="font-weight-bold">Atividades</h3>
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
                    <a @click="criarAtividade(dados)">
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
                        <i class="mdi mdi-border-color"></i>
                    </a>
                </div>


                <div class="card-body">
                    <p class="card-title">{{ dados.titulo }}</p>
                    <img class="card-img-top" :src="dados.link" style="height: 200px;" alt="Card image cap">
                    <br><br>
                    <p class="font-weight-500">{{ dados.texto }}</p>
                </div>
            </div>
        </div>
    </div>
    <modalAtividade ref="modalAtividade"></modalAtividade>
    <modalEditarAtividade ref="modalEditarAtividade"></modalEditarAtividade>
</template>

<script>
import ApiMethodsAtividades from '../../views/conteudo/service/service.atividades'
import modalEditarAtividade from './modal/ModalEditarAtividade.vue'
import modalAtividade from './modal/ModalAtividade.vue'

export default {
    name: 'AtividadesComponete',
    components: {
        modalEditarAtividade,
        modalAtividade
    },
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
            const retorno = await ApiMethodsAtividades.obertAtividade()

            retorno.map((at) => {
                this.ativiArry.push({
                    id_atividade: at.id_atividade,
                    id_ordem: at.id_ordem,
                    usuario: at.usuario,
                    titulo: at.titulo,
                    texto: at.texto,
                    link: `https://apienerge.apololab.net/atividades/${at.imageName}`,
                    imageName: at.imageName,
                    dt_criacao: at.dt_criacao,
                    publicada: at.publicada
                })
            })

        },
        criarAtividade() {
            this.$refs.modalAtividade.show(this.atividade);
        },
        editarAtividade(dados) {
            this.$refs.modalEditarAtividade.show(dados);
        }
    }
}
</script>
