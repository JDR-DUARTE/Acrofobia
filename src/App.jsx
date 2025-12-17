import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componets/Header";
import Inicio from "./pages/Inicio";
import Precios from "./pages/Precios";
import TuPlan from "./pages/TuPlan";
import Footer from "./componets/Footer";
import Adultos from "./pages/Adultos";
import Ninos from "./pages/Ninos";
import Personalizado from "./pages/Personalizado";
import Instalaciones from "./pages/Instalaciones";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Tienda from "./pages/Tienda";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">

        <Header />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/TuPlan" element={<TuPlan/>}/>
            <Route path="/Adultos" element={<Adultos/>}/>
            <Route path="/Ninos" element={<Ninos/>}/>
            <Route path="/Personalizado" element={<Personalizado/>} />
            <Route path="/precios" element={<Precios />} />
            <Route path="/Instalaciones" element={<Instalaciones/>}/>
            <Route path="/Nosotros" element={<Nosotros/>}/>
            <Route path="/Contacto" element={<Contacto/>}/>
            <Route path="/Tienda" element={<Tienda/>}/>
          </Routes>
        </main>

        <Footer />

      </div>
    </Router>
  );
}

export default App;