import React from 'react';
import FadeInSection from './ui/FadeInSection';

const Itinerary = () => {
    return (
        <section id="itinerario" className="py-24 bg-stone-950 text-stone-200">
            <div className="container mx-auto px-6">
                <FadeInSection>
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <span className="text-amber-500 font-bold tracking-widest uppercase text-xs mb-2 block">Agenda del Fin de Semana</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-white mt-2">Tu Escape Perfecto</h2>
                        </div>
                        <p className="text-stone-400 max-w-md text-sm md:text-right">
                            Diseñado para maximizar tu tiempo de relajación y aventura sin que tengas que preocuparte por la logística.
                        </p>
                    </div>
                </FadeInSection>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            day: "Día 01",
                            title: "Llegada y Fuego",
                            img: "https://images.unsplash.com/photo-1496545672447-f699b503d270?q=80&w=2071&auto=format&fit=crop",
                            desc: "Check-in en tu Glamping privado. Tarde de integración con los caballos (Groundwork) y cena asado gourmet."
                        },
                        {
                            day: "Día 02",
                            title: "El Ritual del Agua",
                            // IMAGEN CORREGIDA: Ritual del agua / Laguna
                            img: "https://images.unsplash.com/photo-1506519056131-e9b25123985b?q=80&w=2070&auto=format&fit=crop",
                            desc: "Amanecer en el muelle. La experiencia cumbre: entrar al agua con los caballos. Tarde libre en kayak y picnic."
                        },
                        {
                            day: "Servicios",
                            title: "All Inclusive",
                            img: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop",
                            desc: "Tu boleto incluye todo: Transporte redondo desde GDL, todas las comidas, bebidas ilimitadas (sin alcohol) y equipo."
                        }
                    ].map((item, idx) => (
                        <FadeInSection key={idx} delay={idx * 150}>
                            <div className="group bg-stone-900 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500 shadow-2xl border border-stone-800 hover:border-stone-700">
                                <div className="h-64 overflow-hidden relative bg-stone-800">
                                    <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="p-8 relative">
                                    <span className="absolute -top-6 right-8 bg-amber-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                                        {item.day}
                                    </span>
                                    <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-amber-400 transition-colors">{item.title}</h3>
                                    <p className="text-stone-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        </FadeInSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Itinerary;
