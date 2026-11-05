import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Mengimpor file styling global CSS
import "./index.css";
// Mengimpor komponen utama aplikasi (App)
import App from "./App.jsx";

// Menemukan elemen HTML dengan id 'root' dan merender komponen utama App ke dalam DOM menggunakan createRoot
createRoot(document.getElementById("root")).render(
  // StrictMode digunakan untuk mendeteksi potensi masalah atau praktik usang selama pengembangan
  <StrictMode>
    <App />
  </StrictMode>,
);
