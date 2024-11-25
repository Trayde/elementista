<template>
    <div class="row">
        <div class="col-md-10 grid-margin">
            <div class="row">
                <div class="col-12 col-xl-8 mb-4 mb-xl-0">
                    <h3 class="font-weight-bold white">Terra</h3>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
            <div class="col-md-8  grid-margin">
              <div class="row">
                <div class="col-md-12 grid-margin ">
                  <div class="card">
                    <div class="card-body">
                      <p class="card-title">{{ content.titulo }}</p>
                      <img class="card-img-top" :src="content.link"  alt="Card image cap">
                    <br><br>
                    <p class="font-weight-500 truncated-text" v-html="sanitizeHtml(content.texto)"></p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            <div class="col-md-4 stretch-card grid-margin">
              <div class="card">
                <div class="card-body">
                  <p class="card-title">Mix de Atividades</p>
                  <ul class="icon-data-list">
                    <li  v-for="(item, index) in items" :key="index" @click="selectImage(item)">
                      <div class="d-flex">
                        <img :src="item.link" alt="user">
                        <div>
                          <p class="text-info mb-2"></p>
                          <p class="mb-0 font-weight-bold">{{ item.titulo }}</p>
                        </div>
                      </div>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
</template>


<script>
import ApiMethodsAtividades from '../../../views/conteudo/service/service.atividades'
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import DOMPurify from 'dompurify';

export default {
    name: "VerConteudo",
    components: {
        QuillEditor
    },
    data() {
        return {
            isVisible: false,
            content: {}, // Inicializa content como um objeto vazio
            items: []
        };
    },
    created() {
        this.show(),
        this.listaCards()
    },
    methods: {
        sanitizeHtml(html) {
            return DOMPurify.sanitize(html);
        },
        async show() {
            const id = JSON.parse(this.$route.query.atividades);
            const response = await ApiMethodsAtividades.obertAtividadeId(id)
            response.map((dados) => {
                this.content = {
                    id_atividade: dados.id_atividade,
                    id_ordem: dados.id_ordem,
                    usuario: dados.usuario,
                    titulo: dados.titulo,
                    texto: dados.texto, // Este campo armazenará o HTML gerado pelo Quill
                    link: `https://apienerge.apololab.net/atividades/${dados.imageName}`,
                    imageName: dados.imageName, // Adiciona o nome da imagem
                    tag: dados.tag
                }
            })
            console.log("dados tela content", this.content);
        },
       
       async listaCards() {
            const response = await ApiMethodsAtividades.obertAtividade()

            response.map((dados) => {
                this.items.push({
                    id_atividade: dados.id_atividade,
                    id_ordem: dados.id_ordem,
                    usuario: dados.usuario,
                    titulo: dados.titulo,
                    texto: dados.texto, // Este campo armazenará o HTML gerado pelo Quill
                    link: `https://apienerge.apololab.net/atividades/${dados.imageName}`,
                    imageName: dados.imageName, // Adiciona o nome da imagem
                    tag: dados.tag
                })
            })

            console.log("items", this.items);
        },

        selectImage(item) {
            this.content.link = item.link;
            this.content.titulo = item.titulo;
            this.content.texto = item.texto;
        }
    }
}
</script>



