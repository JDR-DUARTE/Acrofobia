import adultoImg from "../assets/adult2.jpg";
import equipo from "../assets/equipo.jpg";
import muro from "../assets/acrofobiaMuro1.jpg"
import ContentBlock from "../componets/ContentBlock";
function Adultos() {
    return (
        <>
            <div
                className="bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${equipo})` }}
            >
                <div className="bg-black/60 p-4 h-25">
                </div>
                <ContentBlock
                    titulo="ESCALADA PARA ADULTOS"
                    align="center"
                    imagePosition="left"
                    imagen={adultoImg}
                    text="La escalada para adultos es un entrenamiento completo que combina técnica, 
                fuerza y concentración. Al practicarla activas brazos, espalda, core y piernas mientras mejoras equilibrio,
                 coordinación y control del cuerpo. Además, reduce el estrés, mejora la confianza y ofrece una forma divertida 
                 de ganar fuerza funcional y movilidad sin necesidad de experiencia previa."
                />
                <ContentBlock
                    titulo="PLAN 10"
                    align="right"
                    imagePosition="right"
                    imagen={adultoImg}
                    text="La escalada para adultos es un entrenamiento completo que combina técnica, 
                fuerza y concentración. Al practicarla activas brazos, espalda, core y piernas mientras mejoras equilibrio,
                 coordinación y control del cuerpo. Además, reduce el estrés, mejora la confianza y ofrece una forma divertida 
                 de ganar fuerza funcional y movilidad sin necesidad de experiencia previa."
                />
                <ContentBlock
                    titulo="PLAN MENSUAL"
                    align="left"
                    imagePosition="left"
                    imagen={adultoImg}
                    text="La escalada para adultos es un entrenamiento completo que combina técnica, 
                fuerza y concentración. Al practicarla activas brazos, espalda, core y piernas mientras mejoras equilibrio,
                 coordinación y control del cuerpo. Además, reduce el estrés, mejora la confianza y ofrece una forma divertida 
                 de ganar fuerza funcional y movilidad sin necesidad de experiencia previa."
                />
                <ContentBlock
                    titulo="PERSONALIZADO"
                    align="right"
                    imagePosition="right"
                    imagen={adultoImg}
                    text="La escalada para adultos es un entrenamiento completo que combina técnica, 
                fuerza y concentración. Al practicarla activas brazos, espalda, core y piernas mientras mejoras equilibrio,
                 coordinación y control del cuerpo. Además, reduce el estrés, mejora la confianza y ofrece una forma divertida 
                 de ganar fuerza funcional y movilidad sin necesidad de experiencia previa."
                />

                <ContentBlock
                    titulo="MANEJO DE EQUIPOS"
                    align="center"
                    imagePosition="left"
                    imagen={equipo}
                    text="El curso manejo de equipo tiene una duracion de una semana 
                    2 horas por dia aproximadamente , en el cual aprenderas tecnicas y manejo
                    de equipo necesario para escalar en roca, en el cual el ultimo dia se realizara una practica en roca 
                    costo: 30 $.
                    "
                />
            </div>
        </>

    )

}

export default Adultos