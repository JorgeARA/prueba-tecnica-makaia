// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCB-wkKFKjrYqiKXczAPv0mJrECZ7ZO4BY",
  authDomain: "prueba-tecnica-makaia.firebaseapp.com",
  projectId: "prueba-tecnica-makaia",
  storageBucket: "prueba-tecnica-makaia.appspot.com",
  messagingSenderId: "1031589964729",
  appId: "1:1031589964729:web:f3364be627fea7dd962468",
  measurementId: "G-XX54VCRN36"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);

export const db = getFirestore();
export default app;

// export const db = app.firestore();