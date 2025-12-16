import adultoImg from "../assets/adulto3.jpg";
import adultoImg01 from "../assets/adulto01.jpg";
import equipo from "../assets/equipo.jpg";
import equipo2 from "../assets/equipo2.jpg";
import mujerImg from "../assets/mujer.jpg";
import ContentBlock from "../componets/ContentBlock";
function Adultos() {
    return (
        <>
            <div
                className="relative  bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${equipo2})` }}
            >
                <div className="bg-black/80 w-full h-full absolute inset-0"></div>
                <div className="relative pt-26">
                    <ContentBlock
                        titulo="ESCALADA PARA ADULTOS"
                        align="center"
                        imagePosition="left"
                        imagen={adultoImg01}
                        text="La escalada para adultos es un entrenamiento completo que combina técnica, 
                fuerza y concentración. Al practicarla activas brazos, espalda, core y piernas mientras mejoras equilibrio,
                 coordinación y control del cuerpo. Además, reduce el estrés, mejora la confianza y ofrece una forma divertida 
                 de ganar fuerza funcional y movilidad sin necesidad de experiencia previa 
                 "
                        horario={`Horario: 400pm - 10:00pm
                                 Lunes a Sabado`}

                    />
                    <ContentBlock
                        titulo="PLAN 10"
                        align="right"
                        imagePosition="right"
                        imagen={mujerImg}
                        text={`Con el Plan 10 tienes 10 días para escalar cuando quieras durante el mes.
                                El plan tiene un costo de 20 USD, y si lo necesitas, puedes alquilar:
                                • Zapatillas por 5 USD
                                • Arnés por 5 USD`}
                    />
                    <ContentBlock
                        titulo="PLAN MENSUAL"
                        align="right"
                        imagePosition="right"
                        imagen={adultoImg}
                        text={`Con el plan mensual disfruta de acceso ilimitado durante todo el mes.
                                El costo es de 40 USD, y si lo necesitas, puedes alquilar:
                                • Zapatillas por 5 USD
                                • Arnés por 5 USD`
                        }
                    />

                    <ContentBlock
                        titulo="MANEJO DE EQUIPOS"
                        align="center"
                        imagePosition="left"
                        imagen={equipo2}
                        text={`El curso de manejo de equipo tiene una duración de una semana,
                                con clases de 2 horas diarias.
                                Aprenderás técnicas esenciales y el uso correcto del equipo para escalar en roca.
                                El último día culmina con una práctica real en roca.
                                Costo: 30 USD.`}
                    />
                </div>

            </div>
        </>

    )

}

export default Adultos