import WSAIcon from '../assets/isotipo.svg';
import WSALogo from '../assets/logo-naval.png';
import QRAlejandro from '../assets/Alejandro-Cortes-QR-imagen-1.png';
import QRCarlos from '../assets/Carlos-Alvarado-QR-imagenes3.png';

import { WhatsAppOutlined, MailOutlined } from '@ant-design/icons';

const ContactUs = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 text-center lg:text-left">
      {/* Header & Introduction */}
      <div className="mb-12 text-center">
        <div className="flex justify-center items-center mb-4">
          <div className="w-20 h-[2px] bg-blue-800 rounded mr-3"></div>
          <img src={WSAIcon} alt="WSA Icon" className="w-16 h-16" />
          <div className="w-20 h-[2px] bg-blue-800 rounded ml-3"></div>
        </div>
        <h1
          className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Contact Us
        </h1>
        <p
          className="text-xl text-gray-800 max-w-3xl mx-auto leading-loose italic tracking-wide"
          style={{
            fontFamily: "'Merriweather', serif",
          }}
        >
          We're here to help. Whether you have a question, need support, or want to discuss a project, feel free to reach out to our team.
        </p>
      </div>

      {/* Mapa ocupa todo el ancho */}
      <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-transform hover:scale-[1.03] duration-300 mb-12">
        <iframe
          title="WSA Location Valparaíso"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3343.34444538822!2d-71.6288921848126!3d-33.04560798089762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689e2a1b7e0d37b%3A0x1c8b3e8e2b8f8e0!2sBlanco%20625%2C%20Valpara%C3%ADso%2C%20Chile!5e0!3m2!1sen!2sus!4v1678888888888!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <hr className="border-gray-200 mb-12" />

      {/* Team Section */}
      <div className="mb-12">
        <h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Meet Our{' '}
          <span className="text-blue-800 drop-shadow-md">Team</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center">
          {/* Alejandro Cortés E */}
          <div className="flex flex-col items-center bg-white p-10 rounded-2xl shadow-xl border border-gray-100 max-w-sm w-full transition-transform transform hover:scale-105 duration-300 ease-in-out">
            <img
              src={QRAlejandro}
              alt="QR Code Alejandro Cortés E"
              className="w-36 h-36 mb-8 rounded-xl shadow-lg"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 border-b-4 border-blue-700 pb-3 w-full text-center">
              Alejandro Cortés E
            </h3>
            {/* Ajustes para alineación: justify-start y un span para el texto */}
            <div className="w-full flex items-center justify-start text-gray-700 mb-4 text-lg font-medium">
              <WhatsAppOutlined className="text-green-500 mr-2 text-xl" />
              <span>
                Phone:{' '}
                <a
                  href="https://wa.me/56996356210"
                  className="text-blue-800 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +56 9 9635 6210
                </a>
              </span>
            </div>
            <div className="w-full flex items-center justify-start text-gray-700 text-lg font-medium">
              <MailOutlined className="text-red-600 mr-2 text-xl" />
              <span>
                Email:{' '}
                <a
                  href="mailto:alejandro.cortes@wsa-agencies.com"
                  className="text-blue-800 hover:underline"
                >
                  alejandro.cortes@wsa-agencies.com
                </a>
              </span>
            </div>
          </div>

          {/* Carlos Alvarado T */}
          <div className="flex flex-col items-center bg-white p-10 rounded-2xl shadow-xl border border-gray-100 max-w-sm w-full transition-transform transform hover:scale-105 duration-300 ease-in-out">
            <img
              src={QRCarlos}
              alt="QR Code Carlos Alvarado T"
              className="w-36 h-36 mb-8 rounded-xl shadow-lg"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 border-b-4 border-blue-700 pb-3 w-full text-center">
              Carlos Alvarado T
            </h3>
            {/* Ajustes para alineación */}
            <div className="w-full flex items-center justify-start text-gray-700 mb-4 text-lg font-medium">
              <WhatsAppOutlined className="text-green-500 mr-2 text-xl" />
              <span>
                Phone:{' '}
                <a
                  href="https://wa.me/56992213900"
                  className="text-blue-800 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +56 9 9221 3900
                </a>
              </span>
            </div>
            <div className="w-full flex items-center justify-start text-gray-700 text-lg font-medium">
              <MailOutlined className="text-red-600 mr-2 text-xl" />
              <span>
                Email:{' '}
                <a
                  href="mailto:carlos.alvarado@wsa-agencies.com"
                  className="text-blue-800 hover:underline"
                >
                  carlos.alvarado@wsa-agencies.com
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Logo al final */}
      {WSALogo && (
        <div className="mt-12 flex justify-center">
          <img
            src={WSALogo}
            alt="WSA Agencies Maritime Services Logo"
            className="h-28 md:h-32 opacity-90"
          />
        </div>
      )}
    </section>
  );
};

export default ContactUs;