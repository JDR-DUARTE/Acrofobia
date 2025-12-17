import BackgroundVideo from "../componets/BackgroundVideo";
import TextoV from "../componets/TextoV";
import Card from "../componets/Card";
import adultosImg from "../assets/adullto.jpg";
import ninosImg from "../assets/nino.jpg";
import acro from '../assets/acro2_11.png';
import videoInicio from '../assets/video.mp4'

function Inicio() {
    return (
        <>
            <BackgroundVideo 
                videoSrc={videoInicio}
                textoV={<TextoV/>}
                darckOverlay={true}
            />

            <div className="relative z-10 bg-black text-white">
                <div className="h-20"></div>
                <div className="w-[350px] sm:w-[400px] md:w-[1000px] mx-auto border-t-2 border-white mt-0"></div>
                <div className="h-2 sm:h-5 "></div>

                <div className="relative z-10 bg-black text-white px-4 sm:px-6 py-10 overflow-hidden">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4 text-center">
                        Bienvenidos a nuestra comunidad
                    </h2>
                    <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-10">
                        <p className="text-base text-center sm:text-lg md:text-xl">
                            En Acrofobia encontrarás más que muros para escalar: encontrarás personas que te apoyan, que celebran tus logros y te motivan a seguir creciendo. Cada día aquí es una oportunidad para compartir, aprender y disfrutar juntos.
                        </p>
                        <img
                            src={acro}
                            alt="Comunidad Acrofobia"
                            className="w-20 sm:w-32 md:w-48 lg:w-60 h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>


                <div className="h-2 sm:h-5 "></div>
                <div className="w-[350px] sm:w-[400px] md:w-[1000px] mx-auto border-t-2 border-white mt-0"></div>
                <div className="h-2 sm:h-5 "></div>
                <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display mt-6 sm:mt-8 mb-3 sm:mb-4">
                    ¡ DESCUBRE TODO LO QUE PUEDES HACER !
                </h2>
                <div className="h-5"></div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 mb-12 max-w-4xl mx-auto px-4 sm:px-6">
                    <Card imagen={adultosImg} title="ESCALADA ADULTOS" link="/clases-adultos" />
                    <Card imagen={ninosImg} title="ESCALADA NIÑOS" link="/clases-kids" />
                </div>
                
                <div className="h-8 sm:h-10 bg-black"></div>
            </div>
        </>
    )
}
export default Inicio;