import React from 'react';
import { Star } from 'lucide-react';
import FadeInSection from './ui/FadeInSection';

const Banner = () => {
    return (
        <div className="h-[50vh] bg-fixed bg-center bg-cover relative flex items-center justify-center"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=2070&auto=format&fit=crop")' }}>
            <div className="absolute inset-0 bg-stone-900/70 backdrop-blur-[2px]"></div>
            <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
                <FadeInSection>
                    <Star className="w-16 h-16 text-amber-400 mx-auto mb-6 opacity-80" />
                    <h3 className="text-4xl md:text-6xl font-serif italic mb-8 leading-tight">"La naturaleza no es un lugar para visitar. Es el hogar."</h3>
                    <div className="inline-block border border-white/30 px-8 py-3 rounded-full text-stone-300 tracking-widest uppercase text-sm backdrop-blur-md">
                        Próxima Fecha: 15 - 17 Noviembre 2024
                    </div>
                </FadeInSection>
            </div>
        </div>
    );
};

export default Banner;
