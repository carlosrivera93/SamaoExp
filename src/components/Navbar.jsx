import React, { useState, useEffect } from 'react';
import { Compass, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-stone-900/95 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="text-2xl font-serif font-bold text-white tracking-widest flex items-center gap-2 z-50">
                    <Compass className="w-8 h-8 text-amber-500" />
                    SAMAO<span className="text-amber-500">.EXP</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-white/90 text-sm font-medium tracking-wide">
                    <a href="#experiencia" className="hover:text-amber-400 transition-colors">LA EXPERIENCIA</a>
                    <a href="#itinerario" className="hover:text-amber-400 transition-colors">ITINERARIO</a>
                    <a href="#galeria" className="hover:text-amber-400 transition-colors">GALERÍA</a>
                    <a href="#reservar" className="px-6 py-2 border border-amber-500 rounded-full hover:bg-amber-500 hover:text-white transition-all">
                        PRE-VENTA
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white z-50" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-stone-900 flex flex-col items-center justify-center gap-8 text-white text-xl transition-all duration-500 md:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <a href="#experiencia" onClick={() => setMobileMenuOpen(false)}>La Experiencia</a>
                <a href="#itinerario" onClick={() => setMobileMenuOpen(false)}>Itinerario</a>
                <a href="#reservar" onClick={() => setMobileMenuOpen(false)} className="text-amber-400 font-bold border-b-2 border-amber-400 pb-1">Reservar Ahora</a>
            </div>
        </nav>
    );
};

export default Navbar;
