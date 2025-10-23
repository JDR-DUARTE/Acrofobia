import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook } from "react-icons/fa";

function Footer() {
    return (
        // Contenedor principal del footer: Fondo negro, padding y texto blanco.
        <footer className="bg-gray-900 text-white pt-12 pb-6 border-t border-primario">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* 1. SECCIÓN PRINCIPAL DE ENLACES (Grid) */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    
                    {/* Columna 1: Branding y Redes */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-primario">Club de Escalada Acrofobia</h3>
                        <p className="text-sm text-gray-400 mb-4">
                            Tu lugar seguro para alcanzar nuevas alturas.
                        </p>
                      
                        <div className="flex space-x-4">
                            <a 
                            href="https://www.instagram.com/clubacrofobia/" 
                            className="text-gray-400 hover:text-primario transition text-4xl">
                                <FaInstagram/>
                            </a>
                            <a href="#" 
                            className="text-gray-400 hover:text-primario transition text-4xl">
                                <FaFacebook/>
                            </a>
                        </div>
                    </div>

                    {/* Columna 2: Navegación Rápida */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Explora</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/" className="text-gray-400 hover:text-primario transition">Inicio</Link></li>
                            <li><Link to="/Precios" className="text-gray-400 hover:text-primario transition">Precios</Link></li>
                            <li><Link to="/Instalaciones" className="text-gray-400 hover:text-primario transition">Instalaciones</Link></li>
                            <li><Link to="/Nosotros" className="text-gray-400 hover:text-primario transition">Nosotros</Link></li>
                            <li><Link to="/Contacto" className="text-gray-400 hover:text-primario transition">Contacto</Link></li>
                        </ul>
                    </div>
                    
                    {/* Columna 3: Clases y Servicios */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Planes</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/clases-adultos" className="text-gray-400 hover:text-primario transition">Escalada Adultos</Link></li>
                            <li><Link to="/clases-kids" className="text-gray-400 hover:text-primario transition">Escalada Niños</Link></li>
                            <li><Link to="/entrenamiento" className="text-gray-400 hover:text-primario transition">Entrenamiento Personal</Link></li>
                        </ul>
                    </div>

                    {/* Columna 4: Contacto Rápido */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contáctanos</h3>
                        <p className="text-sm text-gray-400">
                            Dirección: Av. Ferrero Tamayo , detras del Hotel el Rey , frente a recidencias Paraiso, casa #0-147
                        </p>
                        <p className="text-sm text-gray-400 mt-2">
                            Teléfono: 04149762649
                        </p>
                        <p className="text-sm text-gray-400 mt-2">
                            Email: acrofobiagym@gmail.com
                        </p>
                    </div>
                </div>

                {/* Separador */}
                <div className="mt-8 border-t border-gray-700 pt-6">
                    
                    {/* 2. SECCIÓN DE COPYRIGHT Y LEGAL */}
                    <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
                        <p>&copy; {new Date().getFullYear()} Club de Escalada Acrofobia. Todos los derechos reservados.</p>
                        <div className="mt-3 sm:mt-0 space-x-4">
                            <Link to="/aviso-legal" className="hover:text-primario transition">Aviso Legal</Link>
                            <Link to="/privacidad" className="hover:text-primario transition">Política de Privacidad</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;