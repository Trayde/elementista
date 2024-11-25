<template>
    <div class="row">
        <div class="col-md-10 grid-margin">
            <div class="row">
                <div class="col-12 col-xl-8 mb-4 mb-xl-0">
                    <h3 class="font-weight-bold white">Tutoriais</h3>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-md-8 grid-margin">
            <div class="row">
                <div class="col-md-12 grid-margin">
                    <div class="card">
                        <div class="card-body">
                            <p class="card-title">{{ content.titulo }}</p>
                            <img class="card-img-top" :src="content.link" alt="Card image cap">
                         
                            <p class="font-weight-500 truncated-text spacamento-top" v-html="sanitizeHtml(content.texto)"></p>
                        </div>
                    </div>
                    <button @click="downloadFile" class="btn btn-primary mt-3 spacamento-top">Baixar Arquivo</button>
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
import ApiMethodsAtividades from '../../../views/conteudo/service/service.atividades';
import dadoStore from '../../../localStore/turoriais'
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
            content: {}, // Inicializa content como um objeto vazio
            items: []
        };
    },
    created() {
        this.show();
        this.listaCards()
    },
    methods: {
        sanitizeHtml(html) {
            return DOMPurify.sanitize(html);
        },
        async show() {
            const id = this.$route.query;
            console.log("ver-tutoriais", id.nome);

            const obterResponse = await ApiMethodsAtividades.obterTutoriais()

             const arrays = obterResponse.filter((a) => a.arquivo === id.nome )

             console.log(arrays[0].id_atividade);
             

            const response = await ApiMethodsAtividades.obterTutoriaisId(arrays[0].id_atividade)

           

           response.map((dados) => {
                this.content = {
                    id_atividade: dados.id_atividade,
                    id_ordem: dados.id_ordem,
                    usuario: dados.usuario,
                    titulo: dados.titulo,
                    texto: dados.texto, // Este campo armazenará o HTML gerado pelo Quill
                    link: `https://apienerge.apololab.net/atividades/${dados.imageName}`,
                    //link: dados.imageName,
                    imageName: dados.imageName, // Adiciona o nome da imagem
                    tag: dados.tag
                }
            })

            console.log("dados tela ", this.content);
            


            // this.content.texto = `
            //     //Pino ligado ao pino D0 do sensor
            //     <br>
            //     int pino_D0 = 2;
            //     int rpm;
            //     volatile byte pulsos;
            //     unsigned long timeold;
            //     //Altere o numero abaixo de acordo com o seu disco encoder
            //     unsigned int pulsos_por_volta = 20;
            //                 void contador() {
            //                     //Incrementa contador
            //                     pulsos++;
            //                 }
            //                 void setup() {
            //                     Serial.begin(9600);
            //                     //Pino do sensor como entrada
            //                     pinMode(pino_D0, INPUT);
            //                     //Interrupcao 0 - pino digital 2
            //                     //Aciona o contador a cada pulso
            //                     attachInterrupt(0, contador, FALLING);
            //                     pulsos = 0;
            //                     rpm = 0;
            //                     timeold = 0;
            //                 }
            //                 void loop() {
            //                     //Atualiza contador a cada segundo
            //                     if (millis() - timeold >= 1000) {
            //                         //Desabilita interrupcao durante o calculo
            //                         detachInterrupt(0);
            //                         rpm = (60 * 1000 / pulsos_por_volta) / (millis() - timeold) * pulsos;
            //                         timeold = millis();
            //                         pulsos = 0;
            //                         //Mostra o valor de RPM no serial monitor
            //                         Serial.print(“RPM = “);
            //                         Serial.println(rpm, DEC);
            //                         //Habilita interrupcao
            //                         attachInterrupt(0, contador, FALLING);
            //                     }
            //                 }
            // `

            this.content.fileName = id.nome;
        },
        downloadFile() {
            const fileName = this.content.fileName;
            if (!fileName) {
                console.error("Nome do arquivo não especificado.");
                return;
            }

            // Cria a URL completa para o arquivo no diretório public
            const fileUrl = `/ARDUINO-CODIGOS/${fileName}`;

            // Cria um link temporário para download
            const link = document.createElement('a');
            link.href = fileUrl;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        },
        async listaCards() {
          const response = await ApiMethodsAtividades.obterTutoriais()
       //   const response = dadoStore

          response.map((dados) => {
                this.items.push({
                    id_atividade: dados.id_atividade,
                    id_ordem: dados.id_ordem,
                    usuario: dados.usuario,
                    titulo: dados.titulo,
                    texto: dados.texto, // Este campo armazenará o HTML gerado pelo Quill
                    link: `https://apienerge.apololab.net/atividades/${dados.imageName}`,
                    //link: dados.imageName,
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
            this.content.fileName = item.id_atividade
        }

    }
};
</script>
