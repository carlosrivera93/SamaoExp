import React from 'react';
import { MapPin, ArrowRight, ChevronDown } from 'lucide-react';
import FadeInSection from './ui/FadeInSection';
import Button from './ui/Button';

const Hero = () => {
    return (
        <header className="relative h-screen flex items-center justify-center overflow-hidden bg-stone-900">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1598974357801-cbca100e65d3?q=80&w=2070&auto=format&fit=crop"
                    alt="Hero Horse Background"
                    className="hidden md:block w-full h-full object-cover"
                />
                <img
                    src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=1971&auto=format&fit=crop"
                    alt="Hero Mobile"
                    className="md:hidden w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-stone-900"></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 container mx-auto px-6 text-center text-white mt-10">
                <FadeInSection>
                    <div className="inline-flex items-center gap-2 py-1 px-4 border border-white/20 rounded-full text-xs tracking-[0.2em] mb-8 uppercase bg-white/5 backdrop-blur-sm">
                        <MapPin size={12} className="text-amber-500" />
                        Santa María del Oro, Nayarit
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-bold mb-6 leading-[0.9]">
                        Instinto <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">Salvaje</span>
                    </h1>
                    <p className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                        La única experiencia en México que fusiona el nado con caballos en cráter volcánico y glamping de lujo.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <Button>
                            Asegurar mi lugar
                            <ArrowRight size={18} />
                        </Button>
                        <Button primary={false} className="flex items-center gap-2">
                            Ver Video <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_red]"></div>
                        </Button>
                    </div>
                </FadeInSection>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce cursor-pointer">
                <a href="#experiencia"><ChevronDown className="w-8 h-8 hover:text-white transition-colors" /></a>
            </div>
        </header>
    );
};

export default Hero;
