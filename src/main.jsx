import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./pages/Cadastro.jsx";
import Login from "./pages/Login.jsx";
import Listas from "./explicacoes/Listas.jsx";
import Estado from "./explicacoes/estado.jsx";
import Estado2 from "./explicacoes/Estado2.jsx";
import Inicio from "./pages/Inicio.jsx";
import DetalheAnuncio from "./pages/DetalheAnuncio.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/dashboard" element={<App />} />
        <Route path="/detalhe/:id" element={<DetalheAnuncio />} />

        {/* Rotas de explicações do projeto */}
        <Route path="/renderizando-listas" element={<Listas />} />
        <Route path="/estado" element={<Estado />} />
        <Route path="/estado-2" element={<Estado2 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
