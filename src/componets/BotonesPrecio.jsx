function BotonesPrecio(titulo , opciones) {
    return (
        <div className="w-full max-w-sm mx-auto mb-6">
            {/* Botón principal */}
            <button
                onClick={() => setOpen(!open)}
                className="w-full bg-blue-600 text-white font-bold py-4 px-6 rounded-lg transform transition-all duration-300 hover:scale-105 focus:outline-none"
            >
                {title}
            </button>

            {/* Contenido desplegable */}
            {open && (
                <div className="mt-2 bg-blue-100 rounded-lg p-4 text-gray-800 space-y-2">
                    {options.map((option, index) => (
                        <p key={index}>{option}</p>
                    ))}
                </div>
            )}
        </div>
    )
}
export default BotonesPrecio;