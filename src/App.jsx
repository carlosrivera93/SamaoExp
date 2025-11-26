import React, { useState, useEffect, useRef } from 'react';
import {
  Compass,
  Droplets,
  Tent,
  Star,
  Calendar,
  Check,
  ChevronDown,
  MapPin,
  Shield,
  Instagram,
  Facebook,
  Menu,
  X,
  ArrowRight
} from 'lucide-react';

// --- Internal Components ---

const FadeInSection = ({ children, delay = 0 }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    const currentElement = domRef.current;
    if (currentElement) observer.observe(currentElement);
    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Button = ({ children, primary = true, className = "", ...props }) => (
  <button
    className={`
      px-8 py-4 rounded-full font-bold tracking-wide transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center gap-2
      ${primary
        ? 'bg-amber-600 text-white hover:bg-amber-700 hover:shadow-amber-500/30'
        : 'bg-white/10 backdrop-blur-md text-white border border-white/30 hover:bg-white/20'}
      ${className}
    `}
    {...props}
  >
    {children}
  </button>
);

// --- Main Application ---

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans text-slate-800 bg-stone-50 overflow-x-hidden selection:bg-amber-200">

      {/* --- A. Navbar --- */}
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

      {/* --- B. Hero Section --- */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden bg-stone-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1598974357801-cbca100e65d3?q=80&w=2070&auto=format&fit=crop"
            alt="Hero Horse Background"
            className="w-full h-full object-cover animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-stone-900"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center text-white mt-10">
          <FadeInSection>
            <div className="inline-flex items-center gap-2 py-1 px-4 border border-white/20 rounded-full text-xs tracking-[0.2em] mb-8 uppercase bg-white/5 backdrop-blur-sm animate-fade-in-down">
              <MapPin size={12} className="text-amber-500" />
              Santa María del Oro, Nayarit
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-bold mb-6 leading-[0.9] animate-fade-in-down" style={{ animationDelay: '0.2s' }}>
              Instinto <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">Salvaje</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed animate-fade-in-down" style={{ animationDelay: '0.4s' }}>
              La única experiencia en México que fusiona el nado con caballos en cráter volcánico y glamping de lujo.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-fade-in-down" style={{ animationDelay: '0.6s' }}>
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

      {/* --- C. Value Proposition --- */}
      <section id="experiencia" className="py-24 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            <FadeInSection>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px] md:h-[700px] group bg-stone-200">
                <img
                  src="/Referencias/imagenes/caballo2.jpg"
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

      {/* --- D. Separator Parallax --- */}
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

      {/* --- E. Itinerary --- */}
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
                img: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=2071&auto=format&fit=crop",
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

      {/* --- F. Pricing & Pre-sale --- */}
      <section id="reservar" className="py-24 relative overflow-hidden bg-white">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-stone-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-blob" style={{ animationDelay: '2s' }}></div>

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

      {/* --- G. Footer --- */}
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

    </div>
  );
}
