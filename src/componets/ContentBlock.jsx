function ContentBlock( { titulo, align = 'center', imagen, text, imagePosition = 'left', horario }) {
    const alignmentClass =
        align === "left" ? "md:text-left" :
            align === "right" ? "md:text-right" :
                "md:text-center";

    // Para el flex-row en desktop, invertir el orden si imagePosition es 'right'
    const flexDirection = imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row';

    return (
        <div className="text-primario relative z-10 bg-black/95 px-4 sm:px-6 py-10 overflow-hidden">
            <h2
                className={`w-full max-w-2xl mx-auto text-3xl sm:text-4xl md:text-4xl font-bold font-display mb-10 text-center ${alignmentClass}`}
            >
                {titulo}
            </h2>

            <div className={`max-w-4xl mx-auto flex flex-col ${flexDirection} items-center justify-center text-center gap-20`}>
                {imagen && (
                    <img
                        className="w-70 sm:w-50 md:w-48 lg:w-100 h-auto rounded-lg shadow-lg"
                        src={imagen}
                        alt={titulo}
                    />
                )}

                {text && (
                    <p className="font-body text-base text-white text-left sm:text-lg md:text-xl whitespace-pre-line">
                        {text}
                    </p>
                )}
                
            </div>
            {horario && (
                    <p className="font-body text-base text-primario text-right sm:text-lg md:text-xl pr-10 sm:pr-14 whitespace-pre-line">
                        {horario}
                    </p>
                )}
        </div>
    );
}
export default ContentBlock;