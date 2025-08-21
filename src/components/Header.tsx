import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';
import { FaXTwitter, FaBars, FaX } from 'react-icons/fa6';
import logoNaval from '../assets/logo-naval.png';

export default function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) =>
    location.pathname.toLowerCase() === path.toLowerCase();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-gray-200 to-blue-900 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src={logoNaval}
            alt="Logo Naval"
            className="h-12 w-auto object-contain select-none"
          />
        </div>

        {/* Menú escritorio */}
        <nav className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-wide">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`transition-colors duration-200 ${
              isActive('/')
                ? 'text-white underline underline-offset-4 font-semibold'
                : 'text-gray-100 hover:text-white'
            }`}
          >
            HOME
          </Link>
          <Link
            to="/about"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`transition-colors duration-200 ${
              isActive('/about')
                ? 'text-white underline underline-offset-4 font-semibold'
                : 'text-gray-100 hover:text-white'
            }`}
          >
            ABOUT US
          </Link>
          <Link
            to="/contactus"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`transition-colors duration-200 ${
              isActive('/contactus')
                ? 'text-white underline underline-offset-4 font-semibold'
                : 'text-gray-100 hover:text-white'
            }`}
          >
            CONTACT US
          </Link>
          <a
            href="https://wsa-app-test.netlify.app/login"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 hover:text-white transition-colors duration-200 underline-offset-4 hover:underline"
          >
            INTRANET
          </a>
        </nav>

        {/* Iconos redes sociales escritorio */}
        <div className="hidden md:flex items-center space-x-6 text-gray-100 text-xl">
          <a
            href="https://www.facebook.com/people/WSA-Ships-Agency/100063644464259"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-white transition-colors duration-200"
          >
            <FacebookOutlined />
          </a>
          <a
            href="https://x.com/WSA_AGENCIES"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="hover:text-white transition-colors duration-200"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.instagram.com/wsa_ships_agency"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-white transition-colors duration-200"
          >
            <InstagramOutlined />
          </a>
          <a
            href="https://www.linkedin.com/company/wsa-ships-agency"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white transition-colors duration-200"
          >
            <LinkedinOutlined />
          </a>
        </div>

        {/* Botón hamburguesa móvil */}
        <button
          className="md:hidden text-gray-100 text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FaX /> : <FaBars />}
        </button>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-gray-200 to-blue-900 shadow-md">
          <nav className="flex flex-col items-center space-y-4 py-6 text-gray-100">
            <Link
              to="/"
              onClick={() => { toggleMenu(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className={`transition-colors duration-200 ${
                isActive('/') ? 'text-white font-semibold underline underline-offset-4' : 'hover:text-white'
              }`}
            >
              HOME
            </Link>
            <Link
              to="/about"
              onClick={() => { toggleMenu(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className={`transition-colors duration-200 ${
                isActive('/about') ? 'text-white font-semibold underline underline-offset-4' : 'hover:text-white'
              }`}
            >
              ABOUT US
            </Link>
            <Link
              to="/contactus"
              onClick={() => { toggleMenu(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className={`transition-colors duration-200 ${
                isActive('/contactus') ? 'text-white font-semibold underline underline-offset-4' : 'hover:text-white'
              }`}
            >
              CONTACT US
            </Link>
            <a
              href="https://wsa-app-test.netlify.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200 underline-offset-4 hover:underline"
            >
              INTRANET
            </a>
            {/* Redes sociales móviles */}
            <div className="flex items-center space-x-6 text-xl mt-4">
              <a
                href="https://www.facebook.com/people/WSA-Ships-Agency/100063644464259"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
              >
                <FacebookOutlined />
              </a>
              <a
                href="https://x.com/WSA_AGENCIES"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.instagram.com/wsa_ships_agency"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
              >
                <InstagramOutlined />
              </a>
              <a
                href="https://www.linkedin.com/company/wsa-ships-agency"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
              >
                <LinkedinOutlined />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
