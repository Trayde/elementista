<template>
  <div class="row">
    <div class="col-md-10 grid-margin">
      <div class="row">
        <div class="col-12 col-xl-8 mb-4 mb-xl-0">
          <h3 class="font-weight-bold white">Atividades</h3>
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
              <img class="card-img-top" :src="content.link" alt="Card image cap">
              <br><br>
              <p class="font-weight-500 truncated-text" v-html="sanitizeHtml(content.texto)"></p>
            </div>
          </div>
          <button v-if="content.isArquivo" @click="downloadFile" class="btn btn-primary mt-3 spacamento-top">Baixar Arquivo</button>
        </div>

      </div>
    </div>
    <div class="col-md-4 stretch-card grid-margin">
      <div class="card">
        <div class="card-body">
          <p class="card-title">Mix de atividades</p>
          <ul class="icon-data-list">
            <li v-for="(item, index) in items" :key="index" @click="selectImage(item)">
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
      try {
        const obterResponse = await ApiMethodsAtividades.obertAtividade();
        console.log("obter", obterResponse);
        
        let arrays = [];
        const $dados = this.$route.query;

        if ($dados.id) {
          arrays = obterResponse.filter((a) => a.id_atividade === JSON.parse($dados.id));
        } else if ($dados.nome) {
          arrays = obterResponse.filter((a) => a.arquivo === $dados.nome);
        }

        if (arrays.length === 0 || !arrays[0]?.id_atividade) {
          console.error("Nenhuma atividade encontrada com os parâmetros fornecidos.");
          return; // Sai do método se não houver correspondência
        }


        const response = await ApiMethodsAtividades.obertAtividadeId(arrays[0].id_atividade);

        response.map((dados) => {
          ///     console.log("dentro do map", dados);
          this.content = {
            id_atividade: dados.id_atividade,
            id_ordem: dados.id_ordem,
            usuario: dados.usuario,
            titulo: dados.titulo,
            texto: dados.texto, // Este campo armazenará o HTML gerado pelo Quill
            isArquivo: dados.documento,
            link: `https://apienerge.apololab.net/atividades/${dados.imageName}`,
            imageName: dados.imageName, // Adiciona o nome da imagem
            tag: dados.tag,
            arquvio: `https://apienerge.apololab.net/documentos/${dados.documento}`,
          };
        });
        console.log("dados tela content", this.content);
        if ($dados.nome) {
          this.content.fileName = $dados.nome;
        }
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }
    },
    downloadFile() {

      const fileName = this.content.arquvio;
      if (!fileName) {
        console.error("Nome do arquivo não especificado.");
        return;
      }

      // Cria a URL completa para o arquivo no diretório public
      const fileUrl = this.content.arquvio;

      // Cria um link temporário para download
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);


    },
    async listaCards() {
      const response = await ApiMethodsAtividades.obertAtividade()
      response.map((dados) => {
        //  console.log("troca dados ", dados);

        this.items.push({
          id_atividade: dados.id_atividade,
          id_ordem: dados.id_ordem,
          usuario: dados.usuario,
          titulo: dados.titulo,
          isArquivo: dados.documento,
          texto: dados.texto, // Este campo armazenará o HTML gerado pelo Quill
          link: `https://apienerge.apololab.net/atividades/${dados.imageName}`,
          arquvio: `https://apienerge.apololab.net/documento/${dados.documento}`,
          imageName: dados.imageName, // Adiciona o nome da imagem
          tag: dados.tag
        })
      })

      console.log("items", this.items);
    },

    selectImage(item) {
      ///  console.log("itemsss", item);

      this.content.link = item.link;
      this.content.titulo = item.titulo;
      this.content.texto = item.texto;
      this.content.fileName = item.id_atividade;
      this.content.isArquivo = item.isArquivo;
    }
  }
}
</script>
