import { useState, useEffect, useMemo } from 'react';
import { Popover } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';

// Flags
import ChileFlagImage from '../assets/Chile2.svg';
import ArgentinaFlagImage from '../assets/Argentina.svg';
import UruguayFlagImage from '../assets/Uruguay.svg';
import PeruFlagImage from '../assets/Peru.svg';
import EcuadorFlagImage from '../assets/Ecuador.svg';
import ColombiaFlagImage from '../assets/Colombia.svg';
import PanamaFlagImage from '../assets/Panama-1.png';
import AntarticaFlagImage from '../assets/antarctic.jpg';

// Panels
import ChilePanelImage from '../assets/Chile2.png';
import ArgentinaPanelImage from '../assets/Argentina2.png';
import UruguayPanelImage from '../assets/Uruguay2.png';
import PeruPanelImage from '../assets/Peru2.png';
import EcuadorPanelImage from '../assets/Ecuador2.png';
import ColombiaPanelImage from '../assets/Colombia2.png';
import PanamaPanelImage from '../assets/Panama2.png';
import AntarticaPanelImage from '../assets/Antartida2.png';

// Ports & Cities
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

// Map & Icons
import SouthAmericaMap from '../assets/nuevo-mapa-optimizado.png';
import WSAIcon from '../assets/isotipo.svg';
import MapIcon from '../assets/Mapa-Icono-de-25.png';

type Country = {
  key: string;
  name: string;
  contact: string;
  email: string;
  flagImage: string;
  panelImage: string;
  mapPosition: { top: string; left: string };
  color: string;
};

const countryData: Country[] = [
  { key: 'chile', name: 'WSA CHILE', contact: 'Gabriel Riveros', email: 'wsa.chile@wsa-agencies.com', flagImage: ChileFlagImage, panelImage: ChilePanelImage, mapPosition: { top: '58%', left: '29%' }, color: 'from-red-400 to-pink-400' },
  { key: 'argentina', name: 'WSA ARGENTINA', contact: 'Alejandro Cortés', email: 'wsa.argentina@wsa-agencies.com', flagImage: ArgentinaFlagImage, panelImage: ArgentinaPanelImage, mapPosition: { top: '65%', left: '42%' }, color: 'from-blue-400 to-indigo-400' },
  { key: 'uruguay', name: 'WSA URUGUAY', contact: 'Carlos Alvarado', email: 'wsa.uruguay@wsa-agencies.com', flagImage: UruguayFlagImage, panelImage: UruguayPanelImage, mapPosition: { top: '63%', left: '45%' }, color: 'from-green-400 to-teal-400' },
  { key: 'peru', name: 'WSA PERÚ', contact: 'Aaron Ortega', email: 'wsa.peru@wsa-agencies.com', flagImage: PeruFlagImage, panelImage: PeruPanelImage, mapPosition: { top: '33%', left: '23%' }, color: 'from-yellow-400 to-orange-400' },
  { key: 'ecuador', name: 'WSA ECUADOR', contact: 'Andrés Moreno', email: 'wsa.ecuador@wsa-agencies.com', flagImage: EcuadorFlagImage, panelImage: EcuadorPanelImage, mapPosition: { top: '19%', left: '20%' }, color: 'from-emerald-400 to-lime-400' },
  { key: 'colombia', name: 'WSA COLOMBIA', contact: 'Raymundo Barreto', email: 'wsa.colombia@wsa-agencies.com', flagImage: ColombiaFlagImage, panelImage: ColombiaPanelImage, mapPosition: { top: '12%', left: '23%' }, color: 'from-pink-400 to-purple-400' },
  { key: 'panama', name: 'WSA PANAMÁ', contact: 'Rodrigo Hernández', email: 'wsa.panama@wsa-agencies.com', flagImage: PanamaFlagImage, panelImage: PanamaPanelImage, mapPosition: { top: '5%', left: '21%' }, color: 'from-indigo-400 to-blue-400' },
  { key: 'antarctic', name: 'WSA ANTARCTIC', contact: '', email: 'info@wsa-agencies.com', flagImage: AntarticaFlagImage, panelImage: AntarticaPanelImage, mapPosition: { top: '59%', left: '62%' }, color: 'from-gray-400 to-slate-400' },
];

const slideImages: Record<string, string[]> = {
  chile: [ChilePanelImage, puertochile, ValparaisoImage],
  argentina: [ArgentinaPanelImage, PuertoBuenosAires, BuenosAiresImage],
  uruguay: [UruguayPanelImage, PuertoMontevideo, MontevideoImage],
  peru: [PeruPanelImage, purtoPeru, PeruImage],
  ecuador: [EcuadorPanelImage, guayaquilImage, puertoEcuador],
  colombia: [ColombiaPanelImage, puertoColombia, colombiaImage],
  panama: [PanamaPanelImage, panamaImage, puertoPanama],
  antarctic: [AntarticaPanelImage, AntarticaFlagImage, puertoAntartica],
};

// Preload images
const usePreload = (urls: string[]) => {
  useEffect(() => {
    if (!urls?.length) return;
    const images = urls.map((src) => { const img = new Image(); img.src = src; return img; });
    return () => images.forEach((img) => { /* @ts-ignore */ img.onload = null; });
  }, [urls]);
};

const WSASouthAmerica = () => {
  const [selectedCountryKey, setSelectedCountryKey] = useState<string | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const selectedCountry = useMemo(() => countryData.find(c => c.key === selectedCountryKey) || null, [selectedCountryKey]);
  const activeSlides = useMemo(() => selectedCountryKey ? slideImages[selectedCountryKey] || [] : [], [selectedCountryKey]);
  usePreload(activeSlides);
  useEffect(() => { if (!activeSlides.length || paused) return; const id = setInterval(() => setSlideIndex(p => (p + 1) % activeSlides.length), 3800); return () => clearInterval(id); }, [activeSlides, paused]);
  useEffect(() => setSlideIndex(0), [selectedCountryKey]);

  return (
    <section className="py-16 px-6 max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-10 min-h-[720px]">
      {/* Mapa */}
      <div className="relative flex-shrink-0 w-full lg:w-[860px] h-[620px] rounded-xl overflow-hidden shadow-xl bg-white mx-auto">
        <img src={SouthAmericaMap} alt="South America Map" className="w-full h-full object-contain" draggable={false} />
        {countryData.map((country) => (
          <Popover key={country.key} content={
            <div className="text-center p-4 rounded-md bg-white shadow-md select-none max-w-xs">
              <img src={country.flagImage} alt={`${country.name} flag`} className="w-full h-28 object-contain rounded-md mb-3 border border-gray-200" />
              <h3 className="uppercase font-semibold text-lg text-gray-900 mb-1">{country.name}</h3>
              {country.contact && <p className="text-gray-700 mb-1"><span className="font-semibold">Contacto: </span>{country.contact}</p>}
              <p className="text-blue-600 hover:underline"><a href={`mailto:${country.email}`} onClick={(e) => e.stopPropagation()}>{country.email}</a></p>
            </div>
          } trigger="hover" overlayStyle={{ padding: 0 }}>
            <button
              aria-label={`Mostrar info de ${country.name}`}
              onClick={() => setSelectedCountryKey(prev => prev === country.key ? null : country.key)}
              type="button"
              className={`absolute -translate-x-1/2 -translate-y-1/2 p-0 border-0 bg-transparent rounded-full transition-shadow duration-300
                ${selectedCountryKey === country.key ? 'shadow-[0_0_20px_6px_rgba(37,99,235,0.85)]' : 'hover:shadow-[0_0_18px_4px_rgba(37,99,235,0.6)]'}`}
              style={{ top: country.mapPosition.top, left: country.mapPosition.left }}
            >
              <img src={MapIcon} alt="" className="w-7 h-7 pointer-events-none" draggable={false} />
            </button>
          </Popover>
        ))}
      </div>

      {/* Panel lateral */}
      <aside className={`w-full max-w-sm rounded-2xl shadow-2xl p-6 flex flex-col border border-gray-200 overflow-hidden ${selectedCountry ? `bg-gradient-to-br ${selectedCountry.color} text-white` : 'bg-white/90 text-gray-800'}`}>
        <AnimatePresence mode="wait">
          {selectedCountry ? (
            <motion.div key={selectedCountry.key} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }} className="flex flex-col h-full">
              {/* Carrusel más grande y centrado */}
              {activeSlides.length > 0 && (
                <div className="relative mb-5 flex-1 rounded-lg overflow-hidden shadow-md" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={`${selectedCountry.key}-${slideIndex}`}
                      src={activeSlides[slideIndex]}
                      alt={`${selectedCountry.name} Slide`}
                      className="w-full h-full object-contain"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      draggable={false}
                    />
                  </AnimatePresence>

                  <button onClick={() => setSlideIndex(prev => (prev - 1 + activeSlides.length) % activeSlides.length)} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/30 text-white w-9 h-9 rounded-full grid place-items-center shadow hover:bg-white/50">‹</button>
                  <button onClick={() => setSlideIndex(prev => (prev + 1) % activeSlides.length)} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 text-white w-9 h-9 rounded-full grid place-items-center shadow hover:bg-white/50">›</button>
                </div>
              )}

              <h2 className="text-2xl font-bold mb-2">{selectedCountry.name}</h2>
              {selectedCountry.contact && <p className="mb-1"><span className="font-semibold">Contacto:</span> {selectedCountry.contact}</p>}
              <p className="mb-6"><a href={`mailto:${selectedCountry.email}`} className="underline">{selectedCountry.email}</a></p>

              <button onClick={() => setSelectedCountryKey(null)} className="mt-auto py-2 px-4 bg-red-200 text-red-700 font-bold rounded-md hover:bg-red-300 transition">Cerrar</button>
            </motion.div>
          ) : (
            <motion.div key="placeholder" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col justify-center items-center h-full text-center px-6 text-gray-500">
              <p className="mb-6">Selecciona un país en el mapa para ver la información.</p>
              <img src={WSAIcon} alt="WSA Icon" className="w-20 h-20 opacity-30" />
            </motion.div>
          )}
        </AnimatePresence>
      </aside>
    </section>
  );
};

export default WSASouthAmerica;
