import bgVideo from '../assets/video.mp4'
function BackgroundVideo() {
    return (
            <div className="absolute inset-0 overflow-hidden -z-10">
                <video
                    className="w-full h-full object-cover"
                    src={bgVideo} // CAMBIA ESTO
                    autoPlay
                    loop
                    muted
                    playsInline // Importante para móviles
                >
                    Tu navegador no soporta el tag de video.
                </video>

                {/* Opcional: Una capa oscura (overlay) para asegurar que el texto sea legible */}
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div>
                    <h1 className='text-5xl font-bold font-display'>
                        Acrofobia
                    </h1>
                </div>
            </div>

    )
}

export default BackgroundVideo;