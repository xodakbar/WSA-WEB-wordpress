import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import isotipo from '../../assets/isotipo.svg';
import WSAIcon from '../../assets/isotipo.svg';

import foto1 from '../../assets/antartic/foto1.png';
import foto2 from '../../assets/antartic/foto2.png';
import foto3 from '../../assets/antartic/foto3.png';
import foto5 from '../../assets/antartic/foto5.png';
import foto6 from '../../assets/antartic/foto6.jpg';

const images = [foto1, foto2, foto3, foto5, foto6];

export default function AntarcticServices() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    "Port technical service and Specialized Supplies",
    "Logistic at Ushuaia and Punta Arenas",
    "Customs process",
    "Representations. Tax Recovery Process",
  ];

  return (
    <>
      <Header />

      <main className="bg-white text-gray-900">
        {/* Hero Carrusel con transición fade */}
        <section className="relative w-full h-[65vh] overflow-hidden bg-black">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Antarctic ${idx + 1}`}
              className={`
                absolute top-0 left-0 w-full h-full object-cover brightness-75 transition-opacity duration-1000 ease-in-out
                ${idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}
              `}
            />
          ))}

          {/* Texto superpuesto */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20">
            <h1 className="text-white text-4xl md:text-6xl font-extrabold drop-shadow-lg">
              Antarctic Services
            </h1>
            <p className="mt-4 max-w-xl text-white text-lg md:text-xl font-light drop-shadow-md">
              Specialized maritime support tailored for the extreme Antarctic environment.
            </p>
          </div>

          {/* Indicadores */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  idx === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Expert Support for Antarctic Operations
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
            WSA provides comprehensive services to vessels operating in the Antarctic region, ensuring safety, efficiency, and environmental compliance during challenging expeditions.
          </p>

          {/* Decorative Line & Icon */}
          <div className="flex justify-center items-center mb-4">
            <div className="w-20 h-[2px] bg-blue-800 rounded mr-3"></div>
            <img src={WSAIcon} alt="WSA Icon" className="w-16 h-16" />
            <div className="w-20 h-[2px] bg-blue-800 rounded ml-3"></div>
          </div>

          {/* Services Title */}
          <h3 className="text-2xl font-semibold text-blue-900 mb-6 uppercase">
            AGENCY
          </h3>

          {/* Services List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
            {services.map((service, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <img src={isotipo} alt="icon" className="w-6 h-6 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-800">{service}</span>
              </div>
            ))}
          </div>

          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mt-12">
            Our experienced team ensures smooth logistics and operational support, helping vessels navigate the harsh Antarctic conditions safely and efficiently.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
