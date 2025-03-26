// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbR-O6hqk9gN2ohQuCCmV-vHiaEGhAL8s",
  authDomain: "construyecercadeti.firebaseapp.com",
  databaseURL: "https://construyecercadeti-default-rtdb.firebaseio.com",
  projectId: "construyecercadeti",
  storageBucket: "construyecercadeti.firebasestorage.app",
  messagingSenderId: "888808949632",
  appId: "1:888808949632:web:677961b72573979c1b6365",
  measurementId: "G-METG6NS3ZC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
    const auth = firebase.auth();
  const db = firebase.firestore();