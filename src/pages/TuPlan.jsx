import { supabase } from "../supabaseClient";
import { useState } from "react";
import imagenMuro from "../assets/acrofobiaMuro1.jpg"
import acro2_06 from "../assets/acro2_06.png"


function TuPlan() {

    const [cedula, setCedula] = useState("");
    const [plan, setPlan] = useState(null);
    const [error, setError] = useState(null);
    const planD='Por dias';
    const planM='Mensual';

    const consultarPlan = async () => {
        setPlan(null);
        setError(null);

        // Buscar cliente por cédula
        const { data: cliente, error: clienteError } = await supabase
            .from("clientes")
            .select("*")
            .eq("cedula", cedula)
            .single();

        if (clienteError || !cliente) {
            setError("No se encontró un cliente con esa cédula.");
            return;
        }

        //  Buscar suscripción activa o última
        const { data: subs, error: subsError } = await supabase
            .from("suscripciones")
            .select("*")
            .eq("cliente_id", cliente.id)
            .order("fecha_inicio", { ascending: false }) // la más reciente primero
            .limit(1)
            .single();

        if (subsError || !subs) {
            setError("No se encontró ninguna suscripción para este cliente.");
            return;
        }

        // Traer datos del plan
        const { data: planData, error: planError } = await supabase
            .from("planes")
            .select("*")
            .eq("id", subs.plan_id)
            .single();

        if (planError || !planData) {
            setError("No se encontró el plan asociado a esta suscripción.");
            return;
        }

        // Guardar la información que queremos mostrar
        setPlan({
            nombre_cliente: cliente.nombre,
            nombre_plan: planData.nombre_plan,
            tipo: planData.tipo,
            dias_totales: planData.dias_totales,
            fecha_inicio: subs.fecha_inicio,
            fecha_vencimiento: subs.fecha_vencimiento,
            dias_usados: subs.dias_usados,
            monto_pagado: subs.monto_pagado,
            esta_activa: subs.esta_activo
        });
        console.log("subs:", subs);
        console.log("planData:", planData);
    };


    return (
        <>
            <div>
                <div className="relative w-full h-[40vh] md:h-[60vh] flex items-center justify-center">
                    {/* Imagen de fondo */}
                    <div
                        className="absolute inset-0 overflow-hidden -z-10"
                        style={{
                            backgroundImage: `url(${imagenMuro})`, // tu imagen
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    ></div>

                    {/* Overlay para oscurecer la imagen */}
                    <div className="absolute inset-0 bg-black/80"></div>
                    <img
                        src={acro2_06} // importa tu imagen pequeña
                        alt="Logo pequeño"
                        className="absolute right-8 top-1/2 transform -translate-y-1/2 w-14 hover:scale-105 md:w-48 z-10"
                    />

                    {/* Contenido encima */}

                    <div className="relative z-10 text-center px-4 mt-10 md:mt-20 max-w-2xl">
                        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold font-display text-primario mb-4">
                            CONSULTA TU PLAN
                        </h1>
                        <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed md:leading-snug max-w-xl mx-auto tracking-wide px-2 sm:px-0 ">
                            Ingresa tu número de cédula para ver tu plan de entrenamiento y los días que has usado.
                        </p>
                    </div>
                </div>
                <section className="bg-black/95 min-h-[60vh] py-16 px-6 md:px-20 flex justify-center items-start">
                    <div className="bg-gray-900/90 p-8 rounded-xl shadow-lg max-w-md w-full">
                        <label className="block mb-2 font-semibold text-[#fecb00]">
                            Número de cédula
                        </label>
                        <input
                            type="text"
                            value={cedula}
                            onChange={(e) => setCedula(e.target.value)}
                            placeholder="Ej: 12345678"
                            className="w-full p-2 mb-4 rounded-md bg-black text-white border border-[#fecb00] focus:outline-none focus:ring-2 focus:ring-[#fecb00]"
                        />
                        <button
                            className="w-full bg-[#fecb00] text-black font-bold py-3 rounded-md hover:bg-yellow-500 transition"
                            onClick={consultarPlan}
                        >
                            Consultar
                        </button>
                        {error && <p className="text-red-500 mt-4">{error}</p>}

                        {plan && (
                            <div className="mt-4 p-4 bg-gray-800 rounded-md text-white space-y-1">
                                {plan.tipo === planD &&(
                                    <>
                                        <p><strong>{plan.nombre_cliente}</strong> </p>
                                        <p><strong> {plan.nombre_plan} </strong></p>
                                        <p><strong>Días totales:</strong> {plan.dias_totales}</p>
                                        <p><strong>Fecha inicio:</strong> {plan.fecha_inicio}</p>
                                        <p><strong>Fecha vencimiento:</strong> {plan.fecha_vencimiento}</p>
                                        <p><strong>Días usados:</strong> {plan.dias_usados}</p>
                                        <p>

                                            <strong>PLAN:</strong>{" "}
                                            <span
                                                className={
                                                    (
                                                        plan.dias_usados < plan.dias_totales && new Date(plan.fecha_vencimiento) > new Date())

                                                        ? "text-green-500"
                                                        : "text-red-500"
                                                }
                                            >
                                                <strong>
                                                    {( plan.dias_usados < plan.dias_totales && new Date(plan.fecha_vencimiento) > new Date())
                                                        ? "ACTIVO"
                                                        : "VENCIDO"}
                                                </strong>
                                            </span>
                                        </p>
                                    </>
                                )}

                                {plan.tipo === planM &&(
                                    <>
                                        <p><strong>{plan.nombre_cliente}</strong> </p>
                                        <p><strong> {plan.nombre_plan} </strong></p>
                                        <p><strong>Fecha inicio:</strong> {plan.fecha_inicio}</p>
                                        <p><strong>Fecha vencimiento:</strong> {plan.fecha_vencimiento}</p>
                                        <p>

                                            <strong>PLAN:</strong>{" "}
                                            <span
                                                className={
                                                        (plan.tipo === "Mensual" &&
                                                            new Date(plan.fecha_vencimiento) > new Date())
                                                        ? "text-green-500"
                                                        : "text-red-500"
                                                }
                                            >
                                                <strong>
                                                    {
                                                        (plan.tipo === "Mensual" &&
                                                        new Date(plan.fecha_vencimiento) > new Date())
                                                        ? "ACTIVO"
                                                        : "VENCIDO"}
                                                </strong>
                                            </span>
                                        </p>
                                    </>
                                )}

                            </div>
                        )}
                    </div>
                </section>
            </div>

        </>

    );
}

export default TuPlan;
