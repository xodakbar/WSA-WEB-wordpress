import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import cajaImg from '../assets/Caja-130x130.png';
import logisticaImg from '../assets/Logictica-130x130.png';
import mundoImg from '../assets/mundo-130x130.png';
import videoLogistic from '../assets/video-logistic.mp4';
import WSAIcon from '../assets/isotipo.svg';


const AboutUs: React.FC = () => {
  return (
    <div className="bg-white text-[#3C2022] min-h-screen flex flex-col font-sans">
      <Header />

      <main className="flex-grow max-w-6xl mx-auto px-6 py-20">
        {/* Icono con barras horizontales */}
        <div className="flex justify-center items-center mb-10">
          <div className="w-20 h-[2px] bg-blue-800 rounded mr-3"></div>
          <img src={WSAIcon} alt="WSA Icon" className="w-16 h-16" />
          <div className="w-20 h-[2px] bg-blue-800 rounded ml-3"></div>
        </div>

        {/* Título principal */}
        <h1
          className="text-5xl md:text-6xl font-extrabold mb-20 text-center tracking-tight text-gray-900 font-serif"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          About <span className="text-blue-800">WSA Agencies</span>
        </h1>

        {/* Contenedor flex con video y texto introductorio */}
        <section className="mb-24 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <video
            src={videoLogistic}
            className="w-full md:w-1/2 rounded-xl shadow-2xl border border-gray-200"
            controls
            preload="auto"
          />
          <div className="w-full md:w-1/2 text-lg leading-relaxed text-justify text-gray-800">
            <p className="mb-8">
              <strong className="font-semibold text-gray-900">WSA Agencies Maritime Services</strong> is an independent maritime agency founded in Chile in July 2014,
              with a strategic presence in <strong>7 countries</strong> in South America: Chile, Peru, Colombia, Argentina, Ecuador, Uruguay, and Panama,
              as well as a key presence in <strong>Antarctica</strong>.
            </p>
            <p>
              We stand out for our <strong className="font-semibold text-gray-900">flexibility, reliability, and commitment</strong>, providing personalized services 
              <strong className="font-semibold text-gray-900">24 hours a day, 7 days a week</strong>. Our deep knowledge of local port procedures allows us to operate
              efficiently and without delays, delivering fast and effective solutions to our clients.
            </p>
          </div>
        </section>

        {/* Sección de Servicios, Equipo y Misión */}
        <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14">
          {/* Our Services */}
          <div className="flex flex-col items-center text-center px-8 py-10 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
            <img
              src={cajaImg}
              alt="Box icon"
              className="w-32 h-32 mb-8 object-contain filter drop-shadow-md"
              loading="lazy"
            />
            <h2 className="text-3xl font-semibold mb-4 text-gray-900 tracking-wide">
              Our Services
            </h2>
            <p className="text-gray-700 text-base leading-relaxed max-w-xs">
              We have a wide network of <strong className="font-semibold">qualified suppliers and strategic partners</strong> that enable us to maintain
              high standards of quality, offer competitive rates, and ensure the best service in every operation.
            </p>
          </div>

          {/* Our Team */}
          <div className="flex flex-col items-center text-center px-8 py-10 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
            <img
              src={logisticaImg}
              alt="Logistics icon"
              className="w-32 h-32 mb-8 object-contain filter drop-shadow-md"
              loading="lazy"
            />
            <h2 className="text-3xl font-semibold mb-4 text-gray-900 tracking-wide">
              Our Team
            </h2>
            <p className="text-gray-700 text-base leading-relaxed max-w-xs">
              Our team consists of professionals with extensive experience in the maritime sector, focused on providing
              personalized and efficient solutions, always committed to excellence in customer service.
            </p>
          </div>

          {/* Our Mission */}
          <div className="flex flex-col items-center text-center px-8 py-10 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
            <img
              src={mundoImg}
              alt="World network icon"
              className="w-32 h-32 mb-8 object-contain filter drop-shadow-md"
              loading="lazy"
            />
            <h2 className="text-3xl font-semibold mb-4 text-gray-900 tracking-wide">
              Our Mission
            </h2>
            <p className="text-gray-700 text-base leading-relaxed max-w-xs">
              We build trust every day because we believe that the growth of our clients is also our growth.
              We work with commitment, transparency, and dedication to support you in every maritime operation.
            </p>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
