// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "pixelpulse-3f411.firebaseapp.com",
  projectId: "pixelpulse-3f411",
  storageBucket: "pixelpulse-3f411.firebasestorage.app",
  messagingSenderId: "110652341233",
  appId: "1:110652341233:web:72d486ccb811390b796250",
  measurementId: "G-YWSPC40ZGL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
