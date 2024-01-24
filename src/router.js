import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import BlogPage from '@/components/BlogPage.vue';
import BlogDetailsPage from '@/components/BlogDetailsPage.vue';
const routes = [
  
  { path: '/', component: HomePage },  // Уникальный путь для HomePage
  { path: '/Blog', component: BlogPage },  // Уникальный путь для BlogPage
  { path: '/BlogDetailsPage', component: BlogDetailsPage },  // Уникальный путь для BlogDetailsPage
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


