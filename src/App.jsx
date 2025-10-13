import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componets/Header";
import Inicio from "./pages/Inicio";
import Precios from "./pages/Precios";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/precios" element={<Precios />} />
      </Routes>
    </Router>
  );
}

export default App;
