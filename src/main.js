
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '/src/styles/css_reset.css';
import '/src/styles/styles.css';

const app = createApp(App);

app.use(router);

app.mount('#app');

