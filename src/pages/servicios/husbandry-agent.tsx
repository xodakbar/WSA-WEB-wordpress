import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import isotipo from '../../assets/isotipo.svg';
import Carrusel from '../../components/Carrusel';

// Imágenes del hero
import foto1 from '../../assets/crew/foto1.png';
import foto2 from '../../assets/crew/foto2.png';
import foto3 from '../../assets/crew/foto3.png';
import foto4 from '../../assets/crew/foto4.png';
import foto5 from '../../assets/crew/foto5.png';
import foto6 from '../../assets/crew/foto6.png';
import foto7 from '../../assets/crew/foto7.png';
import foto8 from '../../assets/crew/foto8.png';
import foto9 from '../../assets/crew/foto9.png';

// Otros servicios
import antarcticImg from '../../assets/antartic/foto1.png';
import maritimeSupportImg from '../../assets/maritime-support.jpg';
import maritimeSolutionsImg from '../../assets/maritime-solutions1.jpg';
import maritimeLogistic from '../../assets/maritime-logistic.jpg';
import fullAgentImg from '../../assets/fullagent/foto1.png';

const images = [foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9];

const otherServices = [
  { id: 'antarctic-services', title: 'ANTARCTIC SERVICES', subtitle: 'SPECIALIZED MARITIME SUPPORT', image: antarcticImg },
  { id: 'maritime-support', title: 'MARITIME SUPPORT', subtitle: 'OWNERS ASSISTANCE', image: maritimeSupportImg },
  { id: 'maritime-solutions', title: 'MARITIME SOLUTIONS', subtitle: 'SHIPS SUPPLY', image: maritimeSolutionsImg },
  { id: 'maritime-logistic', title: 'MARITIME LOGISTIC', subtitle: 'LAST MILE SERVICE', image: maritimeLogistic },
  { id: 'full-agent', title: 'FULL AGENT SERVICES', subtitle: 'COMPLETE REPRESENTATION', image: fullAgentImg },
];

export default function HusbandryAgent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Hero automático
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const subServices = [
    { title: "Crew change", desc: "Efficient coordination for crew embarkation and disembarkation." },
    { title: "Medical assistance", desc: "Immediate access to medical care for crew welfare." },
    { title: "VISA authorization on arrival", desc: "Support with immigration and entry procedures." },
    { title: "Hotel service", desc: "Accommodation arrangements tailored to crew needs." },
    { title: "Transportation", desc: "Reliable port and city transport logistics." },
    { title: "Working permit", desc: "Documentation and permits for crew members." },
    { title: "Cash to master", desc: "Secure financial transactions for vessel operations." },
    { title: "Ok to board Issuance", desc: "Assistance with boarding clearances and approvals." },
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
              alt={`Husbandry Agent ${idx + 1}`}
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
              Husbandry Agent
            </h1>
            <p className="max-w-2xl text-white text-lg md:text-xl font-light drop-shadow-md select-none leading-relaxed">
              Reliable port assistance focused on crew, provisions, logistics, and more.
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

        {/* Sección descriptiva */}
        <section className="max-w-5xl px-6 py-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Specialized Port Services for Your Crew and Operations
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our husbandry services ensure seamless port calls, prioritizing the needs of your crew and ship. From medical assistance to efficient provisioning and cash-to-master delivery, WSA Ship Agencies takes care of all on-shore responsibilities with accuracy and discretion.
            </p>

            <div className="flex justify-center items-center my-6">
              <div className="w-16 h-[2px] bg-blue-800 rounded mr-3"></div>
              <img src={isotipo} alt="WSA Icon" className="w-14 h-14" />
              <div className="w-16 h-[2px] bg-blue-800 rounded ml-3"></div>
            </div>

            <h3 className="text-2xl font-semibold text-blue-900 mb-2 uppercase tracking-wide">
              Specialized in Owners Matters
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              With WSA as your husbandry agent, you gain a trusted local partner that ensures every detail is covered with speed and care.
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

        {/* Otros servicios */}
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
