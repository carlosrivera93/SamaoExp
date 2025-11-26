import React from 'react';
import { Compass, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-stone-950 text-stone-500 py-16 border-t border-stone-900">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="text-2xl font-serif font-bold text-white tracking-widest flex items-center gap-2 mb-6">
                            <Compass className="w-6 h-6 text-amber-500" />
                            SAMAO<span className="text-amber-500">.EXP</span>
                        </div>
                        <p className="max-w-sm text-sm leading-relaxed">
                            Creamos experiencias que reconectan el espíritu humano con la naturaleza a través de la convivencia ética con caballos.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Legales</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-amber-500 transition-colors">Términos y Condiciones</a></li>
                            <li><a href="#" className="hover:text-amber-500 transition-colors">Política de Privacidad</a></li>
                            <li><a href="#" className="hover:text-amber-500 transition-colors">Política de Reembolsos</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Síguenos</h4>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 flex items-center justify-center bg-stone-900 rounded-full hover:bg-amber-600 hover:text-white transition-all"><Instagram size={18} /></a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center bg-stone-900 rounded-full hover:bg-blue-600 hover:text-white transition-all"><Facebook size={18} /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-stone-900 pt-8 text-center text-xs text-stone-700">
                    © 2024 SAMAO Experience. Todos los derechos reservados. Guadalajara, Jalisco.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
