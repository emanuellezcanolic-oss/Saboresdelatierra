// ============================================================
// CONFIGURACIÓN DE FIREBASE - SABORES DE LA TIERRA
// ============================================================
// 1. Ir a https://console.firebase.google.com
// 2. Crear proyecto nuevo → "sabores-de-la-tierra"
// 3. Agregar app Web → copiar los datos aquí abajo
// 4. En Firestore Database → crear base de datos en modo producción
// ============================================================

const firebaseConfig = {
  apiKey: "TU_API_KEY_AQUI",
  authDomain: "TU_PROYECTO.firebaseapp.com",
  projectId: "TU_PROYECTO_ID",
  storageBucket: "TU_PROYECTO.appspot.com",
  messagingSenderId: "TU_SENDER_ID",
  appId: "TU_APP_ID"
};

// Contraseña del panel admin (podés cambiarla)
const ADMIN_PASSWORD = "sabores2024";

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
