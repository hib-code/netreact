// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "netreact-33651.firebaseapp.com",
  projectId: "netreact-33651",
  storageBucket: "netreact-33651.firebasestorage.app",
  messagingSenderId: "94607664104",
  appId: "1:94607664104:web:43a284ca5246f529b43a5d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);