# 🌿 Sabores de la Tierra – App de Ventas

## ¿Qué hace esta app?
- Los **puntos de entrega** registran ventas desde su celular con un link único
- Vos desde casa controlás el **stock, las ventas y las transferencias** en tiempo real
- Datos guardados en la nube (Firebase, gratis)

---

## 🚀 Cómo poner en marcha (una sola vez)

### Paso 1 – Crear el proyecto en Firebase

1. Ir a [console.firebase.google.com](https://console.firebase.google.com)
2. Hacer clic en **"Agregar proyecto"**
3. Nombre: `sabores-de-la-tierra` → continuar, crear
4. En el menú izquierdo ir a **Firestore Database** → "Crear base de datos" → modo producción → elegir ubicación (ej: `us-east1`) → listo
5. En el menú izquierdo ir a **Configuración del proyecto** (ícono ⚙️) → pestaña **"Tus apps"** → hacer clic en **`</>`** (Web)
6. Registrar la app (cualquier nombre), **NO activar Firebase Hosting**
7. Copiar los datos que aparecen (`apiKey`, `projectId`, etc.)

### Paso 2 – Pegar las credenciales en firebase-config.js

Abrir el archivo `firebase-config.js` y reemplazar los valores:

```js
const firebaseConfig = {
  apiKey: "PEGAR_AQUI",
  authDomain: "PEGAR_AQUI",
  projectId: "PEGAR_AQUI",
  storageBucket: "PEGAR_AQUI",
  messagingSenderId: "PEGAR_AQUI",
  appId: "PEGAR_AQUI"
};
const ADMIN_PASSWORD = "sabores2024"; // ← CAMBIAR ESTO
```

### Paso 3 – Configurar reglas de Firestore

En Firebase → Firestore Database → **Reglas**, pegar esto y publicar:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

### Paso 4 – Subir a GitHub Pages

1. Crear cuenta en [github.com](https://github.com) si no tenés
2. Crear repositorio nuevo: **"sabores-app"** (público)
3. Subir todos los archivos (`index.html`, `admin.html`, `vendedor.html`, `firebase-config.js`)
4. Ir a **Settings → Pages → Source: main branch** → Guardar
5. Tu app va a estar en: `https://TU_USUARIO.github.io/sabores-app/`

---

## 📱 Cómo usar

### Configuración inicial (desde admin)
1. Abrir `admin.html` → contraseña: `sabores2024` (la que pusiste en el config)
2. Ir a **⚙️ Config** → agregar los productos con sus precios
3. Ir a **📍 Puntos** → crear cada punto de entrega → copiar el link para cada uno
4. Ir a **📦 Stock** → elegir un punto → cargar cuántas unidades le mandás

### Cada día
- Los vendedores abren su link y registran las ventas
- Vos abrís el admin y ves todo en tiempo real
- Confirmás las transferencias en la pestaña **🧾 Ventas**
- Registrás los retiros en **💰 Retiros**

---

## 📁 Archivos

| Archivo | Para qué |
|---|---|
| `index.html` | Página de inicio |
| `admin.html` | Tu panel de control |
| `vendedor.html` | Lo que usan los puntos de venta |
| `firebase-config.js` | Credenciales de Firebase (completar) |
