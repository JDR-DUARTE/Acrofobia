import equipo from "../assets/equipo.jpg";
import ninosImg from "../assets/ninos.png";
import ContentBlock from "../componets/ContentBlock";

function Ninos() {
    return (
        <>
            <div className="relative bg-cover bg-center bg-no-repeat"
                style={{ background: `url(${equipo})` }}
            >
                <div className="bg-black/80 p-4 h-full w-full absolute inset-0"></div>
                <div className="relative pt-26">
                    <ContentBlock
                        titulo="ESCALADA PARA NIÑOS"
                        align="center"
                        imagePosition="left"
                        imagen={ninosImg}
                        text={`La escalada para niños es una actividad divertida y segura que combina juego, ejercicio y desarrollo de habilidades. 
                                Al practicarla, los niños fortalecen brazos, piernas y core mientras mejoran su coordinación, equilibrio y confianza en sí mismos. 
                                Además, fomenta la concentración y el trabajo en equipo, todo dentro de un entorno seguro y supervisado.
                                Costo: 30 USD`}
                        horario={`Horario: 2:30pm - 4:00pm
                                    • Lunes y Miercoles
                                    • Martes y Jueves
                                     `}
                    />
                </div>
            </div>
        </>
    );
}
export default Ninos;