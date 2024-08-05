// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "quadiro-601bd.firebaseapp.com",
  projectId: "quadiro-601bd",
  storageBucket: "quadiro-601bd.appspot.com",
  messagingSenderId: "981959549953",
  appId: "1:981959549953:web:d30e848ef70f373c704c00"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);