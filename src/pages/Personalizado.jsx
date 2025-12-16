import ContentBlock from "../componets/ContentBlock";
import equipo from "../assets/equipo.jpg"
import personalImg from "../assets/personal2.jpg"
function Personalizado() {
    return (
        <>
            <div className="relative  bg-cover bg-center bg-repeat"
                style={{ backgroundImage: `url(${equipo})` }}
            >
                <div className="bg-black/80 w-full h-full absolute inset-0"></div>
                <div className="relative pt-26 ">
                    <ContentBlock
                        titulo="ENTRENAMIENTO PERSONALIZADO"
                        align="center"
                        imagePosition="left"
                        imagen={personalImg}
                        text={`Las clases personalizadas de escalada están diseñadas para adaptarse a tus necesidades y nivel. 
                                Cada sesión dura aproximadamente 2 horas y se centra en tus objetivos personales, ya sea mejorar técnica, fuerza o confianza en la escalada. 
                                El instructor te guiará de manera individual, asegurando un aprendizaje seguro y efectivo.`}
                            horario={`Horario: a convenir
                                    Duración: 2 horas por sesión
                                    Costo: 10 USD por sesión`}
                    />
                </div>

            </div>

        </>
    );
}
export default Personalizado