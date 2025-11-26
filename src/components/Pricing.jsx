import React from 'react';
import { Shield, Check } from 'lucide-react';
import Button from './ui/Button';

const Pricing = () => {
    return (
        <section id="reservar" className="py-24 relative overflow-hidden bg-white">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-stone-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-60"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col md:flex-row border border-stone-100">

                    {/* Left side: Image & Urgency */}
                    <div className="md:w-5/12 relative bg-stone-900 text-white p-10 flex flex-col justify-between overflow-hidden">
                        <div className="absolute inset-0 opacity-60">
                            <img src="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Camping night" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent"></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                                <span className="text-red-400 text-xs font-bold uppercase tracking-widest">Cupo Limitado</span>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-serif font-bold leading-tight">Tu lugar en la historia te espera.</h3>
                        </div>

                        <div className="relative z-10 mt-12 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                            <div className="flex items-start gap-3">
                                <Shield size={24} className="text-amber-400 shrink-0 mt-1" />
                                <div>
                                    <span className="font-bold text-white block text-sm mb-1">Garantía "Zero Risk"</span>
                                    <p className="text-xs text-stone-300 leading-relaxed">Si la experiencia no se realiza por clima o cupo, recibes un reembolso automático del 100% en menos de 24 horas.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side: Offer Details */}
                    <div className="md:w-7/12 p-8 md:p-14 flex flex-col justify-center">
                        <div className="flex justify-between items-end mb-8 border-b border-stone-100 pb-8">
                            <div>
                                <h4 className="text-amber-600 text-xs font-bold uppercase tracking-widest mb-2">Preventa Early Bird</h4>
                                <h2 className="text-3xl font-serif font-bold text-stone-900">Pase All-Inclusive</h2>
                            </div>
                            <div className="text-right">
                                <span className="block text-stone-400 line-through text-sm font-medium">$6,500 MXN</span>
                                <div className="flex items-baseline gap-1 justify-end">
                                    <span className="text-5xl font-serif font-bold text-stone-900">$4,999</span>
                                    <span className="text-xs text-stone-500 font-bold">MXN</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4 mb-10">
                            {[
                                "Acceso VIP a la laguna y muelle privado",
                                "Experiencia guiada de nado con caballos (2 hrs)",
                                "Hospedaje Glamping (Tienda Safari)",
                                "Transporte redondo (Punto de encuentro GDL)",
                                "Kit de bienvenida y fotografía profesional",
                                "Seguro de viajero incluido"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-stone-600 text-sm">
                                    <div className="bg-green-100 p-1 rounded-full text-green-600 mt-0.5 shrink-0">
                                        <Check size={12} strokeWidth={3} />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </div>

                        <div className="space-y-4">
                            <Button className="w-full py-5 text-lg shadow-amber-500/20">
                                Apartar mi lugar con $1,000 MXN
                            </Button>
                            <div className="flex justify-between items-center text-xs text-stone-400 px-2">
                                <span>Pago seguro vía Stripe/MercadoPago</span>
                                <span className="text-amber-600 font-bold">Solo 4 lugares restantes</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Pricing;
