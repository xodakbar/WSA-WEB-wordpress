import { useState, useEffect } from 'react';
import { Popover } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';

import ChileFlagImage from '../assets/Chile2.svg';
import ArgentinaFlagImage from '../assets/Argentina.svg';
import UruguayFlagImage from '../assets/Uruguay.svg';
import PeruFlagImage from '../assets/Peru.svg';
import EcuadorFlagImage from '../assets/Ecuador.svg';
import ColombiaFlagImage from '../assets/Colombia.svg';
import PanamaFlagImage from '../assets/Panama-1.png';
import AntarticaFlagImage from '../assets/antarctic.jpg';

import ChilePanelImage from '../assets/chile2.png';
import ArgentinaPanelImage from '../assets/Argentina2.png';
import UruguayPanelImage from '../assets/Uruguay2.png';
import PeruPanelImage from '../assets/Peru2.png';
import EcuadorPanelImage from '../assets/Ecuador2.png';
import ColombiaPanelImage from '../assets/Colombia2.png';
import PanamaPanelImage from '../assets/Panama2.png';
import AntarticaPanelImage from '../assets/Antartida2.png';

import puertochile from '../assets/puertos/puerto valparaiso.jpg';
import ValparaisoImage from '../assets/paises/valparaiso.webp';
import PuertoBuenosAires from '../assets/puertos/puerto buenos aires.jpg';
import BuenosAiresImage from '../assets/paises/buenos aires.avif';
import PuertoMontevideo from '../assets/puertos/puerto montevideo.webp';
import MontevideoImage from '../assets/paises/montevideo.jpg';
import purtoPeru from '../assets/puertos/puerto peru.jpg';
import PeruImage from '../assets/paises/callao-peru.webp';
import guayaquilImage from '../assets/paises/guayaquil.jpg';
import puertoEcuador from '../assets/puertos/puerto ecuador.jpg';
import puertoColombia from '../assets/paises/cartagena-colombia.jpg';
import colombiaImage from '../assets/puertos/puerto colombia.jpg';
import panamaImage from '../assets/paises/panama-city.jpg';
import puertoPanama from '../assets/puertos/panama puerto.jpg';
import puertoAntartica from '../assets/puertos/antartica puerto.webp';

import SouthAmericaMap from '../assets/nuevo-mapa-optimizado.png';
import WSAIcon from '../assets/isotipo.svg';
import MapIcon from '../assets/Mapa-Icono-de-25.png';

const countryData = [
  {
    key: 'chile',
    name: 'WSA CHILE',
    contact: 'Gabriel Riveros',
    email: 'wsa.chile@wsa-agencies.com',
    flagImage: ChileFlagImage,
    panelImage: ChilePanelImage,
    mapPosition: { top: '58%', left: '29%' },
  },
  {
    key: 'argentina',
    name: 'WSA ARGENTINA',
    contact: 'Alejandro Cortés',
    email: 'wsa.argentina@wsa-agencies.com',
    flagImage: ArgentinaFlagImage,
    panelImage: ArgentinaPanelImage,
    mapPosition: { top: '65%', left: '42%' },
  },
  {
    key: 'uruguay',
    name: 'WSA URUGUAY',
    contact: 'Carlos Alvarado',
    email: 'wsa.uruguay@wsa-agencies.com',
    flagImage: UruguayFlagImage,
    panelImage: UruguayPanelImage,
    mapPosition: { top: '63%', left: '45%' },
  },
  {
    key: 'peru',
    name: 'WSA PERÚ',
    contact: 'Aaron Ortega',
    email: 'wsa.peru@wsa-agencies.com',
    flagImage: PeruFlagImage,
    panelImage: PeruPanelImage,
    mapPosition: { top: '33%', left: '23%' },
  },
  {
    key: 'ecuador',
    name: 'WSA ECUADOR',
    contact: 'Andrés Moreno',
    email: 'wsa.ecuador@wsa-agencies.com',
    flagImage: EcuadorFlagImage,
    panelImage: EcuadorPanelImage,
    mapPosition: { top: '19%', left: '20%' },
  },
  {
    key: 'colombia',
    name: 'WSA COLOMBIA',
    contact: 'Raymundo Barreto',
    email: 'wsa.colombia@wsa-agencies.com',
    flagImage: ColombiaFlagImage,
    panelImage: ColombiaPanelImage,
    mapPosition: { top: '12%', left: '23%' },
  },
  {
    key: 'panama',
    name: 'WSA PANAMÁ',
    contact: 'Rodrigo Hernández',
    email: 'wsa.panama@wsa-agencies.com',
    flagImage: PanamaFlagImage,
    panelImage: PanamaPanelImage,
    mapPosition: { top: '5%', left: '21%' },
  },
  {
    key: 'antarctic',
    name: 'WSA ANTARCTIC',
    contact: '',
    email: 'info@wsa-agencies.com',
    flagImage: AntarticaFlagImage,
    panelImage: AntarticaPanelImage,
    mapPosition: { top: '59%', left: '62%' },
  },
];

const WSASouthAmerica = () => {
  const [selectedCountryKey, setSelectedCountryKey] = useState<string | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const selectedCountry = countryData.find(c => c.key === selectedCountryKey)

  const slideImages: Record<string, string[]> = {
    chile: [ChilePanelImage, puertochile, ValparaisoImage],
    argentina: [ArgentinaPanelImage, PuertoBuenosAires, BuenosAiresImage],
    uruguay: [UruguayPanelImage, PuertoMontevideo, MontevideoImage],
    peru: [PeruPanelImage, purtoPeru, PeruImage],
    ecuador: [guayaquilImage, EcuadorPanelImage, puertoEcuador],
    colombia: [puertoColombia, colombiaImage, ColombiaPanelImage],
    panama: [panamaImage, PanamaPanelImage, puertoPanama],
    antarctic: [AntarticaFlagImage, AntarticaPanelImage, puertoAntartica]
    
  };

  const activeSlides = selectedCountryKey && slideImages[selectedCountryKey] ? slideImages[selectedCountryKey] : [];

  useEffect(() => {
    if (!activeSlides.length) return;

    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % activeSlides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [selectedCountryKey]);

  return (
    <section className="bg-white py-20 px-6 max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-10 min-h-[720px]">
      {/* Mapa */}
      <div className="relative flex-shrink-0 w-[860px] h-[620px] rounded-lg overflow-hidden shadow-lg mx-auto lg:mx-0">
        <img
          src={SouthAmericaMap}
          alt="South America Map"
          className="w-full h-full object-contain filter brightness-75"
          draggable={false}
        />

        {countryData.map(country => (
          <Popover
            key={country.key}
            content={
              <div className="text-center p-4 rounded-md bg-white shadow-md select-none max-w-xs">
                <img
                  src={country.flagImage}
                  alt={`${country.name} flag`}
                  className="w-full h-28 object-cover rounded-md mb-3 border border-gray-300"
                  loading="lazy"
                  draggable={false}
                />
                <h3 className="uppercase font-semibold text-lg text-gray-900 mb-1">{country.name}</h3>
                {country.contact && (
                  <p className="text-gray-700 mb-1">
                    <span className="font-semibold">Contact: </span>
                    {country.contact}
                  </p>
                )}
                <p className="text-blue-600 hover:underline">
                  <a href={`mailto:${country.email}`} onClick={e => e.stopPropagation()}>
                    {country.email}
                  </a>
                </p>
              </div>
            }
            trigger="hover"
            overlayStyle={{ padding: 0 }}
          >
            <button
              aria-label={`Show info for ${country.name}`}
              onClick={() => {
                setSelectedCountryKey(prev => (prev === country.key ? null : country.key));
                setSlideIndex(0);
              }}
              type="button"
              className={`
                absolute -translate-x-1/2 -translate-y-1/2 p-0 border-0 bg-transparent
                focus:outline-none focus:ring-0 active:bg-transparent
                transition-shadow duration-300
                ${selectedCountryKey === country.key ? 'shadow-[0_0_16px_4px_rgba(59,130,246,0.8)]' : ''}
                hover:shadow-[0_0_18px_4px_rgba(59,130,246,0.9)]
              `}
              style={{ top: country.mapPosition.top, left: country.mapPosition.left }}
            >
              <img src={MapIcon} alt="" className="w-6 h-6 pointer-events-none" draggable={false} />
            </button>
          </Popover>
        ))}
      </div>

      {/* Panel lateral */}
      <aside className="w-full max-w-sm bg-white rounded-lg shadow-lg p-6 flex flex-col">
        <AnimatePresence mode="wait">
          {selectedCountry ? (
            <motion.div
              key={selectedCountry.key}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col h-full"
            >
              {/* Carrusel dinámico por país */}
              {activeSlides.length > 0 ? (
                <div className="relative mb-6 rounded-md overflow-hidden w-full max-w-full h-80 mx-auto">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={`${selectedCountry.key}-${slideIndex}`}
                      src={activeSlides[slideIndex]}
                      alt={`${selectedCountry.name} Slide`}
                      className="w-full h-full object-contain"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      draggable={false}
                    />
                  </AnimatePresence>
                  <button
                    onClick={() => setSlideIndex((prev) => (prev - 1 + activeSlides.length) % activeSlides.length)}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow hover:bg-gray-100 select-none"
                    aria-label="Previous Slide"
                    type="button"
                  >
                    ‹
                  </button>
                  <button
                    onClick={() => setSlideIndex((prev) => (prev + 1) % activeSlides.length)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow hover:bg-gray-100 select-none"
                    aria-label="Next Slide"
                    type="button"
                  >
                    ›
                  </button>
                </div>
              ) : (
                <img
                  src={selectedCountry.panelImage}
                  alt={selectedCountry.name}
                  className="w-full max-h-64 object-contain rounded-md mb-6 mx-auto"
                  loading="lazy"
                />
              )}

              <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedCountry.name}</h2>
              {selectedCountry.contact && (
                <p className="text-gray-900 text-base mb-2">
                  <span className="font-semibold">Contact: </span>
                  {selectedCountry.contact}
                </p>
              )}
              <p className="text-blue-600 hover:underline text-base mb-6">
                <a href={`mailto:${selectedCountry.email}`}>{selectedCountry.email}</a>
              </p>
              <button
                onClick={() => setSelectedCountryKey(null)}
                className="mt-auto self-start px-5 py-2.5 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
                type="button"
              >
                ✕ Cerrar
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="placeholder"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col justify-center items-center h-full text-gray-400 text-center px-6"
            >
              <p className="mb-6 text-lg">Select a country on the map to see contact information here.</p>
              <img src={WSAIcon} alt="WSA Icon" className="w-20 h-20 opacity-20" />
            </motion.div>
          )}
        </AnimatePresence>
      </aside>
    </section>
  );
};

export default WSASouthAmerica;
