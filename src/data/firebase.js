// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAotuH7ymPcwr0zJ-5nxzWeaXth33_5ONI",
  authDomain: "portafolio-f1e48.firebaseapp.com",
  projectId: "portafolio-f1e48",
  storageBucket: "portafolio-f1e48.appspot.com",
  messagingSenderId: "176990707690",
  appId: "1:176990707690:web:357a171911a070c9719c93",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize db
const db = getFirestore();

export { app, db };
