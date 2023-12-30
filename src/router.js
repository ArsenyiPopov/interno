import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import BlogPage from '@/components/BlogPage.vue';
const routes = [
  
  { path: '/', component: HomePage },  // Уникальный путь для HomePage
  { path: '/Blog', component: BlogPage },  // Уникальный путь для BlogPage
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


