import { motion } from 'framer-motion';

import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import WSASouthAmerica from '../components/WSASouthAmerica';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import FactCard from '../components/FactCard'; 

import barcoCargaImg from '../assets/barrco-de-carga-atardecer.jpg';

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative bg-white">
        <HeroSection />
      </section>

      {/* Curva de división */}
      <div className="relative w-full overflow-hidden leading-none" aria-hidden="true">
        <svg viewBox="0 0 1440 100" className="w-full h-24 block" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="grad1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#111827" />
              <stop offset="100%" stopColor="#374151" />
            </linearGradient>
          </defs>
          <path fill="url(#grad1)" d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z" />
        </svg>
      </div>

      {/* Servicios */}
      <section id="services" className="px-4 md:px-8">
        <ServicesSection />
      </section>


      {/* Curva invertida */}
      <div className="relative w-full overflow-hidden leading-none rotate-180" aria-hidden="true">
        <svg viewBox="0 0 1440 100" className="w-full h-24 block" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="grad2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#111827" />
              <stop offset="100%" stopColor="#374151" />
            </linearGradient>
          </defs>
          <path fill="url(#grad2)" d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z" />
        </svg>
      </div>

      {/* WSA South America */}
      <section className="bg-white w-full px-4 md:px-8 pt-4 pb-20">
        <WSASouthAmerica />
      </section>

      {/* Animación con números clave */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative w-full min-h-[600px] font-mono overflow-hidden flex flex-col justify-between"
        style={{
          backgroundImage: `url(${barcoCargaImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay ligero */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Contenido principal */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 pt-24 pb-16 text-center text-white/90">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 drop-shadow-md">
            We Work every day building confidence.
          </h2>
          <p className="italic text-lg md:text-2xl text-white/80 drop-shadow-sm">
            Growing together!
          </p>
        </div>

        {/* Barra inferior con FactCards */}
        <div className="relative z-10 w-full bg-black/40 backdrop-blur-md px-4 md:px-12 py-8 flex flex-col md:flex-row justify-center items-center md:space-x-16 space-y-4 md:space-y-0 text-white/90">
          <FactCard value={2014} label="Founding Year" />
          <FactCard value={7} label="Countries" />
          <FactCard value={500} label="Owner's Matters Services" sublabel="Per Year" />
          <FactCard value={35} label="Staff" />
        </div>
      </motion.section>

      {/* Curva inferior */}
      <div className="relative w-full overflow-hidden leading-none" aria-hidden="true">
        <svg viewBox="0 0 1440 100" className="w-full h-24 block" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="grad3" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#111827" />
              <stop offset="100%" stopColor="#374151" />
            </linearGradient>
          </defs>
          <path fill="url(#grad3)" d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z" />
        </svg>
      </div>

      {/* Contacto */}
      <section className="bg-white w-full px-4 md:px-8 pt-1 pb-16">
        <ContactUs />
      </section>

      <Footer />
    </>
  );
}
