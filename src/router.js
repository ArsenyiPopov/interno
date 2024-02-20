import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import BlogPage from '@/pages/BlogPage.vue';
import ProjectPage from '@/pages/ProjectPage.vue';
import BlogDetailsPage from '@/pages/BlogDetailsPage.vue';
import ProjectDitails from '@/pages/ProjectDitails.vue';
import NotFound from '@/pages/NotFound.vue';

const routes = [
  
  { path: '/', component: HomePage },  // Уникальный путь для HomePage
  { path: '/Blog', component: BlogPage },  // Уникальный путь для BlogPage
  { path: '/ProjectPage', component: ProjectPage },
  { path: '/BlogDetailsPage', component: BlogDetailsPage },
  { path: '/ProjectDitails', component: ProjectDitails },
  { path: '/:CatchAll(.*)', component: NotFound },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


