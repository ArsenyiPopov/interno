
import { createApp } from 'vue';
import { createHead } from '@unhead/vue'
import App from './App.vue';
import store from './store';
import router from './router';
import '/src/styles/css_reset.css';
import '/src/styles/styles.css';

const app = createApp(App);

app.use(router);

app.use(store);

const head = createHead()
app.use(head)

app.mount('#app');


