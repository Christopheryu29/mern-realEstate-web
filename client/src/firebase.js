// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-69d9d.firebaseapp.com",
  projectId: "mern-estate-69d9d",
  storageBucket: "mern-estate-69d9d.appspot.com",
  messagingSenderId: "446809607896",
  appId: "1:446809607896:web:7c77ccfbbba192a10051ad",
  measurementId: "G-ZZZY5L0YGY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
