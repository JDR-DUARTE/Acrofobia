import imgLogo from '../assets/logoAmarillo.png';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { Menu } from "lucide-react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubMenu, setSubMenu] = useState(false);
    const [activeLink, setActiveLink] = useState(null);
    const [isMobileClases, setMobileClases] = useState(false);

    return (
        <header className="absolute bg-black/40 text-white px-8 sm:px-6 md:px-12 py-2 sm:py-3 shadow-md w-full z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">

                <Link to="/" className="flex items-center">
                    <img
                        src={imgLogo}
                        alt="Acrofobia Logo"
                        className="h-12 sm:h-16 md:h-20 w-auto cursor-pointer"
                    />
                </Link>

                <button
                    className='md:hidden text-white focus:outline-none'
                    onClick={() => setSubMenu(!isSubMenu)}
                >
                    <Menu size={32} /> {/* Icono de hamburguesa */}

                </button>

                <nav className="hidden md:flex space-x-9 font-display text-2xl tracking-tight">
                    <div
                        className="relative inline-block"
                        onMouseEnter={() => setIsOpen(true)}
                        onMouseLeave={() => setIsOpen(false)}
                    >
                        <span className="hover:text-primario cursor-pointer">
                            PLANES
                        </span>

                        {isOpen && (
                            <div className=" absolute left-0  w-56 bg-white/50 backdrop-blur-md rounded-lg shadow-lg font-body text-base">
                                <Link
                                    to="/Adultos"
                                    className="block px-4 py-2 hover:bg-primario hover:border hover:border-amber-400 rounded-md hover:text-black transition"
                                >
                                    Escalada Adultos
                                </Link>
                                <Link
                                    to="/clases-niños"
                                    className="block px-4 py-2  hover:bg-primario hover:border hover:border-amber-400 rounded-md hover:text-black transition"
                                >
                                    Escalada Niños
                                </Link>
                                <Link
                                    to="/entrenamiento"
                                    className="block px-4 py-2 hover:bg-primario hover:border hover:border-amber-400 rounded-md hover:text-black transition"
                                >
                                    Entrenamiento Personalizado
                                </Link>
                                <Link
                                    to="/TuPlan"
                                    className="block px-4 py-2 hover:bg-primario hover:border hover:border-amber-400 rounded-md hover:text-black transition"
                                >
                                    TU PLAN
                                </Link>
                            </div>
                        )}
                    </div>
                    <a href="/precios" className="hover:text-primario">PRECIOS</a>
                    <a href="#instalaciones" className="hover:text-primario">INSTALACIONES</a>
                    <a href="#precios" className="hover:text-primario">NOSOTROS</a>
                    <a href="#contacto" className="hover:text-primario">CONTACTO</a>
                    <a href="#TIENDA" className="hover:text-primario">TIENDA</a>
                </nav>
            </div >


            {isSubMenu && (
                <div
                    className="md:hidden bg-black/80  text-white font-display text-lg space-y-3 py-2 px-4 absolute top-20 left-0 w-full ">

                    <div className="flex justify-end ">
                        <button
                            className="text-white"
                            onClick={() => setSubMenu(false)}
                        >
                        X
                        </button>
                    </div>

                    <div>
                        <div
                            className="flex justify-between items-center cursor-pointer py-2"
                            onClick={() => setMobileClases(!isMobileClases)}
                        >
                            <span className={activeLink === 'clases' ? 'text-primario font-bold' : 'text-white'}>CLASES</span>
                            <span>{isMobileClases ? '▲' : '▼'}</span>
                        </div>
                       
                        {/* Submenú desplegable */}
                        {isMobileClases && (
                            <div className="pl-4 space-y-1">
                                <Link to="/Adultos" className="block py-1 text-white hover:text-body">Escalada Adultos</Link>
                                <Link to="/clases-kids" className="block py-1 text-white hover:text-body">Escalada Niños</Link>
                                <Link to="/entrenamiento" className="block py-1 text-white hover:text-body">Entrenamiento Personalizado</Link>
                                <Link to="/TuPlan" className="block py-1 text-white hover:text-body">TU PLAN</Link>

                            </div>
                        )}
                    </div>

                    <a
                        href="/precios"
                        className={`block mb-3 cursor-pointer ${activeLink === 'precios' ? 'text-primario' : 'text-white'}`}
                        onClick={() => setActiveLink('precios')}
                    >
                        PRECIOS
                    </a>

                    <a
                        href="#instalaciones"
                        className={`block mb-3 cursor-pointer ${activeLink === 'instalaciones' ? 'text-primario' : 'text-white'}`}
                        onClick={() => setActiveLink('instalaciones')}
                    >
                        INSTALACIONES
                    </a>

                    <a
                        href="#nosotros"
                        className={`block mb-3 cursor-pointer ${activeLink === 'nosotros' ? 'text-primario' : 'text-white'}`}
                        onClick={() => setActiveLink('nosotros')}
                    >
                        NOSOTROS
                    </a>

                    <a
                        href="#contacto"
                        className={`block mb-3 cursor-pointer ${activeLink === 'contacto' ? 'text-primario' : 'text-white'}`}
                        onClick={() => setActiveLink('contacto')}
                    >
                        CONTACTO
                    </a>

                    <a
                        href="#Tienda"
                        className={`block mb-3 cursor-pointer ${activeLink === 'Tienda' ? 'text-primario' : 'text-white'}`}
                        onClick={() => setActiveLink('Tienda')}
                    >
                        TIENDA
                    </a>
                    
                </div>
            )}
        </header >
    )
}
export default Header