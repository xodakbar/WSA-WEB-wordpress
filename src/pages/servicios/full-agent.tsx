import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import isotipo from '../../assets/isotipo.svg';

import WSAIcon from '../../assets/isotipo.svg';

import foto1 from '../../assets/fullagent/foto1.png';
import foto2 from '../../assets/fullagent/foto2.png';
import foto3 from '../../assets/fullagent/foto3.png';
import foto4 from '../../assets/7.png';
import foto5 from '../../assets/fullagent/foto5.png';

const images = [foto1, foto2, foto3, foto4, foto5];

export default function FullAgent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const leftItems = [
    "Full port agent",
    "Protective agency",
    "Bunkering call",
    "Logistic call",
  ];

  const rightItems = [
    "Panama channel transit",
    "Magellan strait pilotage",
    "Drydocking call",
    "Lay Up",
  ];

  return (
    <>
      <Header />

      <main className="bg-gray-50 text-gray-900 min-h-screen flex flex-col items-center">
        {/* Hero Carrusel con animación fade */}
        <section className="relative w-screen h-[65vh] overflow-hidden bg-black">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Full Agent ${idx + 1}`}
              className={`
                absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out
                ${idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}
              `}
            />
          ))}

          {/* Texto superpuesto */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20 pointer-events-none">
            <h1 className="text-white text-4xl md:text-6xl font-extrabold drop-shadow-lg select-none">
              Full Agent
            </h1>
            <p className="mt-4 max-w-xl text-white text-lg md:text-xl font-light drop-shadow-md select-none">
              Comprehensive representation and full agency services from pre-arrival until vessel’s departure.
            </p>
          </div>

          {/* Indicadores */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  idx === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </section>

        {/* Contenido principal */}
        <section className="max-w-6xl px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Comprehensive Representation
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
            As Full Agents, WSA Ship Agencies acts on behalf of either owners or charterers offering a full scope of agency services from pre-arrival until vessel’s departure.
          </p>

          {/* Decoración + título */}
          <div className="flex justify-center items-center mb-4">
            <div className="w-20 h-[2px] bg-blue-800 rounded mr-3"></div>
            <img src={WSAIcon} alt="WSA Icon" className="w-16 h-16" />
            <div className="w-20 h-[2px] bg-blue-800 rounded ml-3"></div>
          </div>

          <h3 className="text-2xl font-semibold text-blue-900 mb-10 uppercase">
            OWNERS OR CHARTERERS NOMINATION
          </h3>

          {/* Lista dividida en dos columnas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto justify-center justify-items-center">
            {[leftItems, rightItems].map((list, colIdx) => (
              <ul key={colIdx} className="space-y-4 text-left max-w-xs mx-auto">
                {list.map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <img src={isotipo} alt="icono" className="w-6 h-6 flex-shrink-0" />
                    <span className="text-gray-800 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>


          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mt-16">
            Our experienced team ensures smooth port calls and transparent communication with all stakeholders involved.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
