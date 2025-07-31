import { Link, useLocation } from 'react-router-dom';
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';
import { FaXTwitter } from 'react-icons/fa6';
import logoNaval from '../assets/logo-naval.png';

export default function Header() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname.toLowerCase() === path.toLowerCase();

  return (
    <header className="sticky top-0 z-50 bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src={logoNaval}
            alt="Logo Naval"
            className="h-12 w-auto object-contain select-none"
            style={{ filter: 'brightness(1.69)' }}
          />
        </div>

        {/* Navegación */}
        <nav className="flex items-center space-x-10 text-sm font-medium tracking-wide">
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
            to="/about"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`transition-colors duration-200 ${
              isActive('/about') ? 'text-white underline underline-offset-4 font-semibold' : 'text-gray-400 hover:text-white'
            }`}
          >
            ABOUT US
          </Link>
          <Link
            to="/contactuspage"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`transition-colors duration-200 ${
              isActive('/contactuspage') ? 'text-white underline underline-offset-4 font-semibold' : 'text-gray-400 hover:text-white'
            }`}
          >
            CONTACT US
          </Link>

          {/* Botón INTRANET */}
          <a
            href="http://localhost:5174/login"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors duration-200 underline-offset-4 hover:underline"
          >
            INTRANET
          </a>
        </nav>

        {/* Redes sociales */}
        <div className="flex items-center space-x-6 text-gray-400 text-xl">
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
      </div>
    </header>
  );
}
