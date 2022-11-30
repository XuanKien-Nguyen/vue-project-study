import { createApp } from 'vue';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

import App from './App.vue';
import router from './routes.js';

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const fbDatabase = getDatabase(app);
export const fStore = getFirestore(app);
export const fStorage = getStorage(app);

createApp(App).use(router).mount('#app');
