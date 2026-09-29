import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import Servicios from "./pages/Servicios";
import Contactos from "./pages/Contacto";

function App() {
  return (
    <BrowserRouter basename="/TP2_LENGUAJES_IV">
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contactos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
