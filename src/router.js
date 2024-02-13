import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import BlogPage from '@/components/BlogPage.vue';
import ProjectPage from '@/components/ProjectPage.vue';
const routes = [
  
  { path: '/', component: HomePage },  // Уникальный путь для HomePage
  { path: '/Blog', component: BlogPage },  // Уникальный путь для BlogPage
  { path: '/ProjectPage', component: ProjectPage },  
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


