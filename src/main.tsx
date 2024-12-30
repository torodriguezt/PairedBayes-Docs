import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./styles/doc-styles.css"; // Estilos personalizados

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);