import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import isotipo from '../../assets/isotipo.svg';
import WSAIcon from '../../assets/isotipo.svg';

import foto1 from '../../assets/support/foto1.png';
import foto2 from '../../assets/support/foto2.png';
import foto3 from '../../assets/support/foto3.png';
import foto4 from '../../assets/support/foto4.png';

const images = [foto1, foto2, foto3, foto4];

export default function MaritimeSupport() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    "Crew Assistance",
    "Cash to Master",
    "Spare Parts Handling",
    "Stores Delivery",
  ];

  return (
    <>
      <Header />

      <main className="bg-white text-gray-900 min-h-screen flex flex-col items-center">
        {/* Hero Section con carrusel automático */}
        <section className="relative w-full h-[65vh] md:h-[80vh] overflow-hidden bg-black">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Maritime Support ${idx + 1}`}
              className={`
                absolute top-0 left-0 w-full h-full object-cover object-center brightness-75 transition-opacity duration-1000 ease-in-out
                ${idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}
              `}
            />
          ))}

          {/* Texto superpuesto */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20 pointer-events-none">
            <h1 className="text-white text-4xl md:text-6xl font-extrabold drop-shadow-lg select-none">
              Maritime Support
            </h1>
            <p className="mt-4 max-w-xl text-white text-lg md:text-xl font-light drop-shadow-md select-none">
              Providing operational support to vessels at port and at anchorage.
            </p>
          </div>

          {/* Indicadores de imagen */}
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
                aria-label={`Ir a la imagen ${idx + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Sección de contenido */}
        <section className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Operational Support for Vessels
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
            WSA provides a range of maritime support services to ensure smooth and efficient port calls. From logistics to crew-related matters, we ensure vessels receive the attention and resources needed at every stage of their stopover.
          </p>

          {/* Decorativo y título */}
          <div className="flex justify-center items-center mb-4">
            <div className="w-20 h-[2px] bg-blue-800 rounded mr-3"></div>
            <img src={WSAIcon} alt="WSA Icon" className="w-16 h-16" />
            <div className="w-20 h-[2px] bg-blue-800 rounded ml-3"></div>
          </div>

          <h3 className="text-2xl font-semibold text-blue-900 mb-6 uppercase">
            Owners Assistance
          </h3>

          {/* Lista de servicios */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto justify-items-start sm:px-8 md:px-16">
            {services.map((service, index) => (
              <div key={index} className="flex items-start space-x-3 max-w-xs">
                <img
                  src={isotipo}
                  alt="icon"
                  className="w-6 h-6 mt-1 flex-shrink-0"
                />
                <span className="text-lg text-gray-800">{service}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
