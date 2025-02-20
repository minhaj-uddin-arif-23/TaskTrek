// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCndhA4DNzsV_sMg_0y6OrEmt9fP_l_UNc",
  authDomain: "tasktrek-eb4c9.firebaseapp.com",
  projectId: "tasktrek-eb4c9",
  storageBucket: "tasktrek-eb4c9.firebasestorage.app",
  messagingSenderId: "413583074576",
  appId: "1:413583074576:web:941cbd37a9a1e78890f195"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);