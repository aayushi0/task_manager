// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-f2e32.firebaseapp.com",
  projectId: "taskmanager-f2e32",
  storageBucket: "taskmanager-f2e32.appspot.com",
  messagingSenderId: "1041646845431",
  appId: "1:1041646845431:web:e971ef962388fabacfc2f2",
  measurementId: "G-5FFJ02M94M"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
