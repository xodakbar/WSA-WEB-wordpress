import { Link,  } from 'react-router-dom';

const isActive = (path: string) => location.pathname.toLowerCase() === path.toLowerCase();

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">
        {/* Contacto */}
        <div className="flex flex-col space-y-1 text-sm md:text-base">
          <span className="font-semibold text-white">Hub contact:</span>
          <a href="mailto:info@wsa-agencies.com" className="hover:text-white transition-colors">
            info@wsa-agencies.com
          </a>
          <span>Blanco 625, off 95, Valparaíso, Chile.</span>
          <span>Postal code: 2361791</span>
        </div>

        {/* Menú */}
        <nav className="flex flex-col md:flex-row gap-4 md:gap-10 text-sm md:text-base">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`transition-colors duration-200 ${
              isActive('/') ? 'text-white underline underline-offset-4 font-semibold' : 'text-gray-300 hover:text-white'
            }`}
          >
            HOME
          </Link>
          <Link
            to="/#services"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`transition-colors duration-200 ${
              isActive('/#services') ? 'text-white underline underline-offset-4 font-semibold' : 'text-gray-400 hover:text-white'
            }`}
          >
            SERVICE
          </Link>
          <Link
            to="/about"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`transition-colors duration-200 ${
              isActive('/about') ? 'text-white underline underline-offset-4 font-semibold' : 'text-gray-400 hover:text-white'
            }`}
          >
            ABOUT US
          </Link>
          <Link
            to="/contactus"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`transition-colors duration-200 ${
              isActive('/contactuspage') ? 'text-white underline underline-offset-4 font-semibold' : 'text-gray-400 hover:text-white'
            }`}
          >
            CONTACT US
          </Link>
        </nav>

        {/* Derechos */}
        <div className="text-sm md:text-base opacity-70 self-center md:self-auto">
          Wsa Agencies Maritime services – Copyright 2014
        </div>
      </div>
    </footer>
  );
}
