import { useState } from "react";
import equipo from "../assets/equipo.jpg";

function PriceButton({ title, options }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full max-w-sm mx-auto mb-6">
      {/* Botón principal */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full bg-primario text-black font-bold py-4 px-6 rounded-lg transform transition-all duration-300 hover:scale-105 focus:outline-none"
      >
        {title}
      </button>

      {/* Contenido desplegable */}
      {open && (
        <div className="mt-2 bg-black/70 backdrop-blur-sm rounded-lg p-6 text-white shadow-lg space-y-3 transition-all duration-300">
          {options.map((option, index) => (
            <p key={index} className="hover:text-primario cursor-default">
              {option}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

function Precios() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${equipo})` }}
    >
      {/* Overlay negro */}
      <div className="absolute inset-0 bg-black/90"></div>

      {/* Contenido */}
      <div className="relative z-10 py-16 px-4 pt-28">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-primario mb-12">
          Nuestros Precios
        </h1>

        {/* PLAN 10 */}
        <PriceButton
          title="HORARIOS"
          options={[
            "LUNES A SABADO",
            "NIÑOS - 2:30pm a 4:00pm",
            "ADULTOS- 4:00pm a 10:00pm",
          ]}
        />
        <PriceButton
          title="PLAN 10"
          options={[
            "Plan 10 - $20",
            "Plan 10 + alquiler de zapatillas - $25",
            "Plan 10 + alquiler de zapatillas + arnés - $30",
          ]}
        />

        {/* PLAN MENSUAL */}
        <PriceButton
          title="PLAN MENSUAL"
          options={[
            "Plan mensual - $40",
            "Plan mensual + alquiler de zapatillas - $45",
            "Plan mensual + alquiler de zapatillas + arnés - $50",
          ]}
        />

        <PriceButton
          title="PLAN NIÑOS"
          options={[
            "Plan Niños (todo incluido) - $30",
          ]}
        />
        <PriceButton
          title="PLAN PERSONALIZADO"
          options={[
            "Plan Personalizado 2 horas (todo incluido) - $10",
          ]}
        />

      </div>
    </div>
  );
}

export default Precios;
