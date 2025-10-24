// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAW00zK4hlZXm666ubfezyko-PjRdnwU8",
  authDomain: "toy-store-auth.firebaseapp.com",
  projectId: "toy-store-auth",
  storageBucket: "toy-store-auth.firebasestorage.app",
  messagingSenderId: "85284137137",
  appId: "1:85284137137:web:a02df4cf5b560a0e389a90"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);