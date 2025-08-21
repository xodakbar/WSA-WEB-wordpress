import type { JSX } from 'react';

// Imágenes
import fullAgentImg from '../assets/fullagent5.jpg';
import maritimeSupportImg from '../assets/maritime-support.jpg';
import maritimeSolutionsImg from '../assets/maritime-solutions1.jpg';
import antarticImg from '../assets/antarctic.jpg';
import maritimeLogistic from '../assets/maritime-logistic.jpg';
import husbandryImg from '../assets/husbandry.jpg';

interface Service {
  id: string;
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const services: Service[] = [
  { id: 'full-agent', title: 'FULL AGENT', subtitle: 'OWNERS OR CHARTERERS NOMINATIONS', backgroundImage: fullAgentImg },
  { id: 'husbandry-agent', title: 'HUSBANDRY AGENT', subtitle: 'SPECIALIZED IN OWNERS MATTERS', backgroundImage: husbandryImg },
  { id: 'maritime-support', title: 'MARITIME SUPPORT', subtitle: 'OWNERS ASSISTANCE', backgroundImage: maritimeSupportImg },
  { id: 'maritime-solutions', title: 'MARITIME SOLUTIONS', subtitle: 'SHIPS SUPPLY', backgroundImage: maritimeSolutionsImg },
  { id: 'maritime-logistic', title: 'MARITIME LOGISTIC', subtitle: 'LAST MILE SERVICE', backgroundImage: maritimeLogistic },
  { id: 'antarctic-services', title: 'ANTARCTIC SERVICES', subtitle: 'AGENCY', backgroundImage: antarticImg },
];

function ServiceCard({ id, title, subtitle, image }: { id: string; title: string; subtitle: string; image: string; }): JSX.Element {
  return (
    <a
      href={`/servicios/${id}`}
      aria-label={`Ver más sobre ${title}`}
      className="block transition-transform duration-300 ease-in-out hover:scale-[1.02]"
    >
      <div className="relative flex w-full h-40 md:h-48 overflow-hidden rounded-md shadow-md border border-gray-200 bg-white">
        {/* Lado izquierdo blanco con contenido */}
        <div className="w-1/2 z-20 flex items-center px-4">
          <div>
            <h3 className="text-base md:text-lg font-extrabold text-blue-900">{title}</h3>
            <p className="text-xs md:text-sm font-semibold text-green-600">{subtitle}</p>
          </div>
        </div>

        {/* Lado derecho con imagen */}
        <div className="relative w-1/2 h-full overflow-hidden rounded-r-md">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
              loading="lazy"
              draggable={false}
            />
          </div>
          <div
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            style={{ clipPath: 'polygon(0 0, 20% 0, 0 100%)', backgroundColor: 'white' }}
          />
        </div>
      </div>
    </a>
  );
}

export default function ServicesSection(): JSX.Element {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">
            WSA Ship Agency Services
          </h2>
          <p className="text-md md:text-lg text-gray-600">
            Tailored solutions for every maritime need
          </p>
        </div>

        {/* Grid: 1 columna en móviles, 2 columnas en desktop fijas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-6 auto-rows-min">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              subtitle={service.subtitle}
              image={service.backgroundImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
