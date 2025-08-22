import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface Service {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

interface CarruselProps {
  services: Service[];
}

export default function Carrusel({ services }: CarruselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const total = services.length;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Flecha izquierda */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full shadow-lg"
      >
        <FaChevronLeft />
      </button>

      {/* Carrusel */}
      <div className="overflow-hidden">
        <div className="flex justify-center gap-6">
          <AnimatePresence initial={false} mode="popLayout">
            {[0, 1, 2].map((offset) => {
              const index = (currentIndex + offset) % total;
              const service = services[index];
              return (
                <motion.a
                  key={service.id}
                  href={`/servicios/${service.id}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex-shrink-0 w-64 md:w-72 h-48 md:h-56 relative rounded-2xl shadow-lg overflow-hidden group"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute inset-0 flex flex-col justify-center px-4 z-10">
                    <h3 className="text-lg md:text-xl font-extrabold text-white mb-1">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base font-semibold text-green-200">
                      {service.subtitle}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Flecha derecha */}
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full shadow-lg"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
