import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import isotipo from '../../assets/isotipo.svg';
import WSAIcon from '../../assets/isotipo.svg';
import Carrusel from '../../components/Carrusel';

// Imágenes del hero
import foto1 from '../../assets/antartic/foto1.png';
import foto2 from '../../assets/antartic/foto2.png';
import foto3 from '../../assets/antartic/foto3.png';
import foto5 from '../../assets/antartic/foto5.png';
import foto6 from '../../assets/antartic/foto6.jpg';

// Imágenes de otros servicios
import maritimeSupportImg from '../../assets/maritime-support.jpg';
import maritimeSolutionsImg from '../../assets/maritime-solutions1.jpg';
import maritimeLogistic from '../../assets/maritime-logistic.jpg';
import husbandryImg from '../../assets/husbandry.jpg';
import fullAgentImg from '../../assets/fullagent/foto1.png';

const images = [foto1, foto2, foto3, foto5, foto6];

// Otros servicios
const otherServices = [
  { id: 'husbandry-agent', title: 'HUSBANDRY AGENT', subtitle: 'SPECIALIZED IN OWNERS MATTERS', image: husbandryImg },
  { id: 'maritime-support', title: 'MARITIME SUPPORT', subtitle: 'OWNERS ASSISTANCE', image: maritimeSupportImg },
  { id: 'maritime-solutions', title: 'MARITIME SOLUTIONS', subtitle: 'SHIPS SUPPLY', image: maritimeSolutionsImg },
  { id: 'maritime-logistic', title: 'MARITIME LOGISTIC', subtitle: 'LAST MILE SERVICE', image: maritimeLogistic },
  { id: 'full-agent', title: 'FULL AGENT SERVICES', subtitle: 'COMPLETE REPRESENTATION', image: fullAgentImg },
];

export default function AntarcticServices() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Hero automático
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const subServices = [
    { title: "Port technical service and Specialized Supplies", desc: "Providing technical expertise and specialized supplies tailored for Antarctic expeditions." },
    { title: "Logistic at Ushuaia and Punta Arenas", desc: "Coordinated logistics support at key Antarctic gateways for efficient operations." },
    { title: "Customs process", desc: "Expert handling of customs clearance and compliance procedures." },
    { title: "Representations & Tax Recovery Process", desc: "Agency representation and assistance with tax recovery processes." },
  ];

  return (
  <>
    <Header />

    <main className="bg-gray-50 text-gray-900 flex flex-col items-center">

      {/* Hero Carrusel */}
      <section className="relative w-full h-[60vh] md:h-[80vh] lg:h-[90vh] overflow-hidden bg-black">
        {images.map((src, idx) => (
          <motion.img
            key={idx}
            src={src}
            alt={`Antarctic ${idx + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: idx === currentIndex ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        ))}

        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-12 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg select-none mb-2">
            Antarctic Services
          </h1>
          <p className="max-w-2xl text-white text-base sm:text-lg md:text-xl font-light drop-shadow-md select-none leading-relaxed">
            Specialized maritime support tailored for the extreme Antarctic environment.
          </p>
        </motion.div>

        {/* Indicadores */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 md:space-x-3 z-30">
          {images.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              whileHover={{ scale: 1.3 }}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-colors duration-300 ${idx === currentIndex ? 'bg-white' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </section>

      {/* Sección descriptiva */}
      <section className="max-w-5xl px-6 py-12 sm:py-16 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Expert Support for Antarctic Operations
          </h2>
          <p className="text-gray-700 text-base sm:text-lg md:text-lg leading-relaxed">
            WSA provides comprehensive services to vessels operating in the Antarctic region, ensuring safety, efficiency, and environmental compliance during challenging expeditions.
          </p>

          <div className="flex justify-center items-center my-6">
            <div className="w-12 sm:w-16 h-[2px] bg-blue-800 rounded mr-3"></div>
            <img src={WSAIcon} alt="WSA Icon" className="w-10 sm:w-14 h-10 sm:h-14" />
            <div className="w-12 sm:w-16 h-[2px] bg-blue-800 rounded ml-3"></div>
          </div>

          <h3 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-2 uppercase tracking-wide">
            Agency
          </h3>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Our experienced team ensures smooth logistics and operational support, helping vessels navigate the harsh Antarctic conditions safely and efficiently.
          </p>
        </motion.div>
      </section>

      {/* Sub-servicios */}
      <section className="max-w-6xl px-6 py-12 sm:py-16">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 mb-6 text-center uppercase tracking-wide">
          Our Sub Services
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
          {subServices.map((service, idx) => (
            <motion.div
              key={idx}
              className="flex items-start bg-white border border-gray-200 rounded-xl p-3 sm:p-4 shadow-sm hover:shadow-md transition cursor-pointer"
              whileHover={{ scale: 1.03, boxShadow: "0px 8px 16px rgba(0,0,0,0.12)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-3 bg-blue-100">
                <img src={isotipo} alt="icon" className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base md:text-lg font-semibold text-blue-900">{service.title}</h4>
                <p className="text-xs sm:text-sm md:text-sm text-gray-700 leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Otros servicios con Carrusel */}
      <section className="w-full bg-white py-12 sm:py-16 px-6">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 mb-8 text-center uppercase tracking-wide">
          Explore Our Other Services
        </h3>
        <Carrusel services={otherServices} />
      </section>

    </main>

    <Footer />
  </>
);

}
