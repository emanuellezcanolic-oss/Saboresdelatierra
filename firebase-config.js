// ============================================================
// CONFIGURACIÓN DE FIREBASE - SABORES DE LA TIERRA
// ============================================================
// 1. Ir a https://console.firebase.google.com
// 2. Crear proyecto nuevo → "sabores-de-la-tierra"
// 3. Agregar app Web → copiar los datos aquí abajo
// 4. En Firestore Database → crear base de datos en modo producción
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSyD6aLgJQQmL4id0zhwdCT_NFQ70Azd9cLY",
  authDomain: "sabores-de-la-tierra-9c247.firebaseapp.com",
  projectId: "sabores-de-la-tierra-9c247",
  storageBucket: "sabores-de-la-tierra-9c247.firebasestorage.app",
  messagingSenderId: "1063794546096",
  appId: "1:1063794546096:web:e204c81c9b0aca2f20f275",
  measurementId: "G-WGJ04REFD6"
};

// Contraseña del panel admin (podés cambiarla)
const ADMIN_PASSWORD = "sabores2024";

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
