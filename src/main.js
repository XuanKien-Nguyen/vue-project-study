import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue';
import HomePage from './components/Home.vue';
import LoginPage from './components/Login.vue';
import RegisterPage from './components/Register.vue';
import NotFoundPage from './components/NotFound.vue';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCDjqe1bCPGRAwKI5Kc42bN5l0fsOUbxPU",
  authDomain: "vue3-database.firebaseapp.com",
  databaseURL: "https://vue3-database-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vue3-database",
  storageBucket: "vue3-database.appspot.com",
  messagingSenderId: "575940223833",
  appId: "1:575940223833:web:9ae25880f08990562ae248",
  measurementId: "G-CWYSG23GJT"
};

firebase.initializeApp(firebaseConfig);


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

createApp(App).use(router).mount('#app')
