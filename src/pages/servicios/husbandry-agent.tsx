import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import isotipo from '../../assets/isotipo.svg';
import WSAIcon from '../../assets/isotipo.svg';

import foto1 from '../../assets/crew/foto1.png';
import foto2 from '../../assets/crew/foto2.png';
import foto3 from '../../assets/crew/foto3.png';
import foto4 from '../../assets/crew/foto4.png';
import foto5 from '../../assets/crew/foto5.png';
import foto6 from '../../assets/crew/foto6.png';
import foto7 from '../../assets/crew/foto7.png';
import foto8 from '../../assets/crew/foto8.png';
import foto9 from '../../assets/crew/foto9.png';

const images = [foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9];

export default function HusbandryAgent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    "Crew change",
    "Medical assistance",
    "VISA authorization on arrival",
    "Hotel service",
    "Transportation",
    "Working permit",
    "Cash to master",
    "Ok to board Issuance",
  ];

  return (
    <>
      <Header />

      <main className="bg-gray-50 text-gray-900 min-h-screen flex flex-col items-center">
        {/* Hero Carrusel con animación fade */}
        <section className="relative w-screen h-[65vh] md:h-[80vh] overflow-hidden bg-black">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Husbandry Agent ${idx + 1}`}
              className={`
                absolute top-0 left-0 w-full h-full object-cover object-center brightness-75 transition-opacity duration-1000 ease-in-out
                ${idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}
              `}
            />
          ))}

          {/* Texto superpuesto */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20 pointer-events-none">
            <h1 className="text-white text-4xl md:text-6xl font-extrabold drop-shadow-lg select-none">
              Husbandry Agent
            </h1>
            <p className="mt-4 max-w-xl text-white text-lg md:text-xl font-light drop-shadow-md select-none">
              Reliable port assistance focused on crew, provisions, logistics, and more.
            </p>
          </div>

          {/* Indicadores */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
            {images.map((_, idx) => (
              <button
                type="button"
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`
                  w-3 h-3 md:w-4 md:h-4 rounded-full transition-colors duration-300
                  ${idx === currentIndex ? 'bg-white' : 'bg-white/50'}
                `}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Contenido principal */}
        <section className="max-w-5xl px-6 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Specialized Port Services for Your Crew and Operations
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
            Our husbandry services ensure seamless port calls, prioritizing the needs of your crew and ship. From medical assistance to efficient provisioning and cash-to-master delivery, WSA Ship Agencies takes care of all on-shore responsibilities with accuracy and discretion.
          </p>

          {/* Línea decorativa + título */}
          <div className="flex justify-center items-center mb-4">
            <div className="w-20 h-[2px] bg-blue-800 rounded mr-3"></div>
            <img src={WSAIcon} alt="WSA Icon" className="w-16 h-16" />
            <div className="w-20 h-[2px] bg-blue-800 rounded ml-3"></div>
          </div>

          <h3 className="text-2xl font-semibold text-blue-900 mb-10 uppercase">
            Specialized in Owners Matters
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto justify-items-end">
            {services.map((service, idx) => (
              <div key={idx} className="flex items-center space-x-3 w-full max-w-xs">
                <img src={isotipo} alt="icon" className="w-6 h-6 flex-shrink-0" />
                <span className="text-lg text-gray-800">{service}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mt-16">
            With WSA as your husbandry agent, you gain a trusted local partner that ensures every detail is covered with speed and care.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
