import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componets/Header";
import Inicio from "./pages/Inicio";
import Precios from "./pages/Precios";
import TuPlan from "./pages/TuPlan";
import Footer from "./componets/Footer";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/precios" element={<Precios />} />
        <Route path="/TuPlan" element={<TuPlan/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
