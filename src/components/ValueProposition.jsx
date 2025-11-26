import React from 'react';
import { Droplets, Tent, Star } from 'lucide-react';
import FadeInSection from './ui/FadeInSection';

const ValueProposition = () => {
    return (
        <section id="experiencia" className="py-24 bg-stone-50">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <FadeInSection>
                        {/* IMAGEN CORREGIDA: Conexión sin filtros */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px] md:h-[700px] group bg-stone-200">
                            <img
                                src="https://images.unsplash.com/photo-1453227588063-bb30fd974395?q=80&w=2070&auto=format&fit=crop"
                                alt="Horses in water"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end p-8 md:p-12">
                                <div className="border-l-4 border-amber-500 pl-6">
                                    <p className="text-white font-serif italic text-2xl md:text-3xl leading-tight">"No se trata de montar al caballo, se trata de fluir con él."</p>
                                    <p className="text-stone-400 mt-2 text-sm uppercase tracking-wider">- Tu Guía Experto</p>
                                </div>
                            </div>
                        </div>
                    </FadeInSection>

                    <div className="space-y-12">
                        <FadeInSection delay={200}>
                            <h2 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-none">
                                Conexión <br /> <span className="text-amber-700">Sin Filtros.</span>
                            </h2>
                            <p className="text-stone-600 text-lg leading-relaxed mb-8">
                                Olvídate del estrés de la ciudad. Hemos diseñado un santuario temporal donde la tecnología se apaga y los sentidos se encienden. No es un tour turístico, es una inmersión en la vida de campo con un toque de sofisticación.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { icon: Droplets, title: "Inmersión en Laguna", desc: "Siente la ingravidez mientras nadas junto a caballos entrenados en las aguas dulces del cráter." },
                                    { icon: Tent, title: "Glamping Premium", desc: "Tiendas safari equipadas con camas reales, sábanas de hilo y vistas privilegiadas." },
                                    { icon: Star, title: "Fuego y Vino", desc: "Cenas curadas al fuego de leña, maridaje de vinos y leyendas locales bajo las estrellas." }
                                ].map((feature, idx) => (
                                    <div key={idx} className="flex gap-6 p-6 rounded-2xl bg-white shadow-sm border border-stone-100 hover:shadow-xl hover:border-amber-200 transition-all duration-300 group">
                                        <div className="bg-stone-100 group-hover:bg-amber-500 p-4 rounded-2xl h-fit text-stone-600 group-hover:text-white transition-colors duration-300">
                                            <feature.icon size={28} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-xl text-stone-800 mb-2">{feature.title}</h3>
                                            <p className="text-stone-500 text-sm leading-relaxed">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </FadeInSection>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ValueProposition;
