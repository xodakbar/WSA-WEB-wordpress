import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import isotipo from '../../assets/isotipo.svg';
import WSAIcon from '../../assets/isotipo.svg';
import Carrusel from '../../components/Carrusel';

// Imágenes de Full Agent
import foto1 from '../../assets/fullagent/foto1.png';
import foto2 from '../../assets/fullagent/foto2.png';
import foto3 from '../../assets/fullagent/foto3.png';
import foto4 from '../../assets/7.png';
import foto5 from '../../assets/fullagent/foto5.png';

// Imágenes de otros servicios
import maritimeSupportImg from '../../assets/maritime-support.jpg';
import maritimeSolutionsImg from '../../assets/maritime-solutions1.jpg';
import antarticImg from '../../assets/antarctic.jpg';
import maritimeLogistic from '../../assets/maritime-logistic.jpg';
import husbandryImg from '../../assets/husbandry.jpg';

const images = [foto1, foto2, foto3, foto4, foto5];

// Otros servicios para el carrusel
const otherServices = [
  { id: 'husbandry-agent', title: 'HUSBANDRY AGENT', subtitle: 'SPECIALIZED IN OWNERS MATTERS', image: husbandryImg },
  { id: 'maritime-support', title: 'MARITIME SUPPORT', subtitle: 'OWNERS ASSISTANCE', image: maritimeSupportImg },
  { id: 'maritime-solutions', title: 'MARITIME SOLUTIONS', subtitle: 'SHIPS SUPPLY', image: maritimeSolutionsImg },
  { id: 'maritime-logistic', title: 'MARITIME LOGISTIC', subtitle: 'LAST MILE SERVICE', image: maritimeLogistic },
  { id: 'antarctic-services', title: 'ANTARCTIC SERVICES', subtitle: 'AGENCY', image: antarticImg },
];

export default function FullAgent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Hero automático
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const subServices = [
    { title: "Full Port Agent", desc: "Complete representation of vessels from arrival to departure with utmost precision." },
    { title: "Protective Agency", desc: "Dedicated personnel ensuring your vessel and interests are fully safeguarded." },
    { title: "Bunkering Call", desc: "Efficient coordination and support for fuel supply operations." },
    { title: "Logistic Call", desc: "Optimized planning and execution of all logistical needs." },
    { title: "Panama Channel Transit", desc: "Expert guidance for seamless navigation through the Panama Canal." },
    { title: "Magellan Strait Pilotage", desc: "Professional assistance for safe passage through the Magellan Strait." },
    { title: "Drydocking Call", desc: "Support for vessel maintenance and drydock operations with care." },
    { title: "Lay Up", desc: "Safe and organized arrangements for vessel lay-up periods." },
  ];

  return (
    <>
      <Header />

      <main className="bg-gray-50 text-gray-900 flex flex-col items-center">

        {/* Hero Carrusel */}
        <section className="relative w-full h-[65vh] overflow-hidden bg-black">
          {images.map((src, idx) => (
            <motion.img
              key={idx}
              src={src}
              alt={`Full Agent ${idx + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: idx === currentIndex ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          ))}

          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-white text-4xl md:text-5xl font-extrabold drop-shadow-lg select-none mb-2">
              Full Agent Services
            </h1>
            <p className="max-w-2xl text-white text-lg md:text-xl font-light drop-shadow-md select-none leading-relaxed">
              Complete vessel representation from pre-arrival to departure, ensuring smooth operations, safe port calls, and transparent communication with all stakeholders.
            </p>
          </motion.div>

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

        {/* Sección descriptiva */}
        <section className="max-w-5xl px-6 py-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Comprehensive Representation
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Acting on behalf of owners or charterers, we offer a full spectrum of agency services with punctual, efficient, and safe port operations. Our team guarantees seamless coordination and transparent communication for every stakeholder.
            </p>

            <div className="flex justify-center items-center my-6">
              <div className="w-16 h-[2px] bg-blue-800 rounded mr-3"></div>
              <img src={WSAIcon} alt="WSA Icon" className="w-14 h-14" />
              <div className="w-16 h-[2px] bg-blue-800 rounded ml-3"></div>
            </div>

            <h3 className="text-2xl font-semibold text-blue-900 mb-2 uppercase tracking-wide">
              Owners or Charterers Nomination
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our experienced team ensures every port call is smooth, secure, and fully coordinated for all parties involved.
            </p>
          </motion.div>
        </section>

        {/* Sub-servicios */}
        <section className="max-w-6xl px-6 py-16">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8 text-center uppercase tracking-wide">
            Our Sub Services
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {subServices.map((service, idx) => (
              <motion.div
                key={idx}
                className="flex items-start bg-white border border-gray-200 rounded-xl p-3 shadow-sm hover:shadow-md transition cursor-pointer"
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

        {/* Otros servicios con Carrusel */}
        <section className="w-full bg-white py-16 px-6">
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
