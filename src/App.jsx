import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componets/Header";
import Inicio from "./pages/Inicio";
import Precios from "./pages/Precios";
import TuPlan from "./pages/TuPlan";
import Footer from "./componets/Footer";
import Adultos from "./pages/Adultos";
import Ninos from "./pages/Ninos";

import Personalizado from "./pages/Personalizado";

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
          </Routes>
        </main>

        <Footer />

      </div>
    </Router>
  );
}

export default App;