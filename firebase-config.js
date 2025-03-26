// Importar Firebase desde la CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBbR-O6hqk9gN2ohQuCCmV-vHiaEGhAL8s",
  authDomain: "construyecercadeti.firebaseapp.com",
  databaseURL: "https://construyecercadeti-default-rtdb.firebaseio.com",
  projectId: "construyecercadeti",
  storageBucket: "construyecercadeti.appspot.com",
  messagingSenderId: "888808949632",
  appId: "1:888808949632:web:677961b72573979c1b6365",
  measurementId: "G-METG6NS3ZC"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
