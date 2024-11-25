import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store'; // Importando a store

const app = createApp(App);

app.use(store); // Registrando a store no aplicativo
app.use(router);

app.mount('#app');
