function BackgroundVideo({ videoSrc, textoV , darkOverlay=false}) {
    return (
       
        <div className="relative w-full h-screen overflow-hidden">
            
            {/* 2. El video ahora es 'absolute' pero solo RELATIVO a su padre (el div de arriba) */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
            >
                Tu navegador no soporta el tag de video.
            </video>
            {darkOverlay && (
                <div className="absolute inset-0 bg-black/40 z-0"></div>
            )}
            {textoV &&(
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white">
                    {textoV}
                </div>
            )}
            
        </div>
    )
}

export default BackgroundVideo;