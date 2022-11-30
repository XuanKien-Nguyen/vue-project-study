import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from './components/Home.vue';
import LoginPage from './components/Login.vue';
import RegisterPage from './components/Register.vue';
import NotFoundPage from './components/NotFound.vue';

const routes = [
    { path: '/home', name: 'Home', component: HomePage },
    { path: '/login', name: 'Login', component: LoginPage },
    { path: '/register', name: 'Register', component: RegisterPage },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundPage },
  ]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;