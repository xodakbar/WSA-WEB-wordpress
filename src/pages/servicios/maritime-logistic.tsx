import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import isotipo from '../../assets/isotipo.svg';
import WSAIcon from '../../assets/isotipo.svg';

import foto1 from '../../assets/logistic/foto1.png';
import foto2 from '../../assets/logistic/foto2.png';
import foto3 from '../../assets/logistic/foto3.png';
import foto4 from '../../assets/logistic/foto4.png';
import foto5 from '../../assets/logistic/foto5.png';
import videoLogistic from '../../assets/video-logistic.mp4';

const images = [foto1, foto2, foto3, foto4, foto5];

export default function MaritimeLogistic() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    "Last mile spare / stores on board delivery",
    "Sample shipping",
    "Cargo handling",
    "Landing and Return by Courier.",
    "Airfreight Coordination",
    "Seafreight Coordination",
    "Courier on board Clearance",
    "Landing and Return Spare Parts",
  ];

  return (
    <>
      <Header />

      <main className="bg-white text-gray-900 min-h-screen flex flex-col items-center">
        {/* Hero con carrusel */}
        <section className="relative w-full h-[65vh] md:h-[80vh] overflow-hidden bg-black">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Maritime Logistic ${idx + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover object-center brightness-75 transition-opacity duration-1000 ease-in-out ${
                idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            />
          ))}

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20 pointer-events-none">
            <h1 className="text-white text-4xl md:text-6xl font-extrabold drop-shadow-lg select-none">
              Maritime Logistic
            </h1>
            <p className="mt-4 max-w-xl text-white text-lg md:text-xl font-light drop-shadow-md select-none">
              Comprehensive logistics support tailored to the shipping industry’s demands.
            </p>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
            {images.map((_, idx) => (
              <button
                type="button"
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  idx === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Imagen ${idx + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Contenido principal */}
        <section className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            End-to-End Logistics Solutions for Vessels
          </h2>

          {/* Decoración e ícono */}
          <div className="flex justify-center items-center mb-4">
            <div className="w-20 h-[2px] bg-blue-800 rounded mr-3"></div>
            <img src={WSAIcon} alt="WSA Icon" className="w-16 h-16" />
            <div className="w-20 h-[2px] bg-blue-800 rounded ml-3"></div>
          </div>

          <h3 className="text-2xl font-semibold text-blue-900 mb-6 uppercase">
            LAST-MILE DELIVERY
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto text-left pl-12 sm:pl-0 mb-12">
            {services.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-3 max-w-xs">
                <img src={isotipo} alt="icon" className="w-6 h-6 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-800">{item}</span>
              </div>
            ))}
          </div>

          {/* Video y descripción final */}
          <div className="max-w-4xl mx-auto text-left">
            <video
              src={videoLogistic}
              controls
              className="w-full h-auto rounded-lg shadow-lg mb-6"
              preload="auto"
            />
            <p className="text-gray-700 text-lg leading-relaxed">
              WSA Agency, leader in “Last Mile” spare parts delivery service to vessels at port.
              By this specialized forwarding service, WSA picks up the spares at Airport/Port of
              destination and delivers in a fast, efficient and smooth way to main ports of vessel
              operation.
              <br /><br />
              WSA is regularly performing effective services for ship spare parts logistics at main
              ports of Panama, Uruguay, Perú, Ecuador, Argentina, Colombia, Chile and Antarctic
              region.
              <br /><br />
              Our experienced and specialized team is able to perform every requested logistic
              operation like cargo logistics, warehousing, last mile deliveries and offshore
              support.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
