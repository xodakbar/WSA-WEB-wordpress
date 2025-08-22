import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import isotipo from '../../assets/isotipo.svg';
import WSAIcon from '../../assets/isotipo.svg';
import Carrusel from '../../components/Carrusel';

import foto1 from '../../assets/support/foto1.png';
import foto2 from '../../assets/support/foto2.png';
import foto3 from '../../assets/support/foto3.png';
import foto4 from '../../assets/support/foto4.png';

// Otros servicios
import antarcticImg from '../../assets/antartic/foto1.png';
import maritimeSolutionsImg from '../../assets/maritime-solutions1.jpg';
import maritimeLogistic from '../../assets/maritime-logistic.jpg';
import husbandryImg from '../../assets/husbandry.jpg';
import fullAgentImg from '../../assets/fullagent/foto1.png';

const images = [foto1, foto2, foto3, foto4];

const otherServices = [
  { id: 'antarctic-services', title: 'ANTARCTIC SERVICES', subtitle: 'SPECIALIZED MARITIME SUPPORT', image: antarcticImg },
  { id: 'husbandry-agent', title: 'HUSBANDRY AGENT', subtitle: 'CREW & OWNER SERVICES', image: husbandryImg },
  { id: 'maritime-solutions', title: 'MARITIME SOLUTIONS', subtitle: 'SHIPS SUPPLY', image: maritimeSolutionsImg },
  { id: 'maritime-logistic', title: 'MARITIME LOGISTIC', subtitle: 'LAST MILE SERVICE', image: maritimeLogistic },
  { id: 'full-agent', title: 'FULL AGENT SERVICES', subtitle: 'COMPLETE REPRESENTATION', image: fullAgentImg },
];

export default function MaritimeSupport() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const subServices = [
    { title: "Crew Assistance", desc: "Supporting crew with logistics, cash, and coordination at port." },
    { title: "Cash to Master", desc: "Secure and timely delivery of cash for vessel operations." },
    { title: "Spare Parts Handling", desc: "Efficient handling and delivery of spare parts onboard." },
    { title: "Stores Delivery", desc: "Timely delivery of stores to ensure vessel readiness." },
  ];

  return (
    <>
      <Header />

      <main className="bg-white text-gray-900 flex flex-col items-center">

        {/* Hero Carrusel */}
        <section className="relative w-full h-[65vh] md:h-[80vh] overflow-hidden bg-black">
          {images.map((src, idx) => (
            <motion.img
              key={idx}
              src={src}
              alt={`Maritime Support ${idx + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: idx === currentIndex ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="absolute top-0 left-0 w-full h-full object-cover object-center brightness-75"
            />
          ))}

          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.img
              src={WSAIcon}
              alt="WSA Icon"
              className="w-20 h-20 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            />
            <h1 className="text-white text-4xl md:text-6xl font-extrabold drop-shadow-lg select-none">
              Maritime Support
            </h1>
            <p className="mt-4 max-w-xl text-white text-lg md:text-xl font-light drop-shadow-md select-none">
              Providing operational support to vessels at port and at anchorage.
            </p>
          </motion.div>

          {/* Indicadores */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
            {images.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                whileHover={{ scale: 1.3 }}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${idx === currentIndex ? 'bg-white' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </section>

        {/* Sub-servicios en Cards */}
        <section className="max-w-6xl px-6 py-12">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 text-center uppercase tracking-wide">
            Our Sub Services
          </h3>

          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-8 text-center">
            WSA provides a range of maritime support services to ensure smooth and efficient port calls.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subServices.map((service, idx) => (
              <motion.div
                key={idx}
                className="flex items-start bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition cursor-pointer"
                whileHover={{ scale: 1.03, boxShadow: "0px 8px 16px rgba(0,0,0,0.12)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-3 bg-blue-100">
                  <img src={isotipo} alt="icon" className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-900">{service.title}</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Otros servicios con Carrusel al final */}
        <section className="w-full bg-gray-50 py-16 px-6">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8 text-center uppercase tracking-wide">
            Explore Our Other Services
          </h3>
          <Carrusel services={otherServices} />
        </section>

      </main>

      <Footer />
    </>
  );
}
