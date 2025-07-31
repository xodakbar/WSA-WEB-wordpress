import React, { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { easeInOut } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

import WSAIcon from '../assets/isotipo.svg';
import WSALogo from '../assets/logo-naval.png';
import QRAlejandro from '../assets/Alejandro-Cortes-QR-imagen-1.png';
import QRCarlos from '../assets/Carlos-Alvarado-QR-imagenes3.png';
import ContactUsImage from '../assets/Contact.png'; // <-- Imagen hero, ajusta extensión si es diferente

import { WhatsAppOutlined, MailOutlined } from '@ant-design/icons';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeInOut },
  },
};

const buttonPulse = {
  initial: { scale: 1 },
  sending: {
    scale: [1, 1.05, 1],
    transition: { repeat: Infinity, duration: 1.2, ease: easeInOut },
  },
};

const cardHover = {
  rest: { scale: 1, boxShadow: 'none', transition: { duration: 0.3 } },
  hover: {
    scale: 1.05,
    boxShadow: '0 15px 25px rgba(59, 130, 246, 0.4)',
    transition: { duration: 0.3 },
  },
};

const ContactUsPage: React.FC = () => {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setSuccess(null);

    setTimeout(() => {
      setSending(false);
      setSuccess(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans text-gray-900">
      <Header />

      {/* Hero Section con imagen */}
      <motion.section
        className="w-full h-64 md:h-96 bg-cover bg-center rounded-b-3xl shadow-lg mb-10"
        style={{ backgroundImage: `url(${ContactUsImage})` }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full h-full bg-black bg-opacity-40 flex items-center justify-center rounded-b-3xl">
          <h1
            className="text-white text-4xl md:text-6xl font-serif font-extrabold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Contact Us
          </h1>
        </div>
      </motion.section>

      <main className="flex-grow max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left: Form */}
        <motion.section
          className="bg-white rounded-3xl shadow-lg p-10 flex flex-col justify-center"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center mb-8">
            <motion.img
              src={WSAIcon}
              alt="WSA Icon"
              className="w-14 h-14 mr-4"
              initial={{ opacity: 0, rotate: -15 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.7 }}
            />
            <h1
              className="text-4xl font-serif font-extrabold tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Contact <span className="text-blue-700">Us</span>
            </h1>
          </div>

          <p className="mb-6 text-gray-700 italic font-serif">
            Have a question or want to discuss a project? Send us a message and we’ll get back to you shortly.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Let’s get in touch</h2>

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name *"
              required
              className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address *"
              required
              className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            />

            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject *"
              required
              className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message *"
              rows={5}
              required
              className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition resize-none"
            />

            <motion.button
              type="submit"
              disabled={sending}
              className={`w-full py-4 mt-4 text-white font-semibold rounded-2xl transition-all duration-300 ${
                sending
                  ? 'bg-blue-300 cursor-not-allowed shadow-none'
                  : 'bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg hover:from-blue-700 hover:to-blue-900'
              }`}
              variants={buttonPulse}
              initial="initial"
              animate={sending ? 'sending' : 'initial'}
            >
              {sending ? 'Sending...' : 'Send Message'}
            </motion.button>

            {success && (
              <motion.p
                className="mt-6 text-center text-green-700 font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Your message has been sent successfully!
              </motion.p>
            )}
          </form>
        </motion.section>

        {/* Right: Team */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          <h2
            className="text-4xl font-serif font-bold mb-12 text-center lg:text-left"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Meet Our <span className="text-blue-700">Team</span>
          </h2>

          <div className="space-y-12">
            {[{
              name: 'Alejandro Cortés E',
              phone: '+56 9 9635 6210',
              whatsapp: 'https://wa.me/56996356210',
              email: 'alejandro.cortes@wsa-agencies.com',
              qr: QRAlejandro,
              alt: 'QR Code Alejandro Cortés E',
            }, {
              name: 'Carlos Alvarado T',
              phone: '+56 9 9221 3900',
              whatsapp: 'https://wa.me/56992213900',
              email: 'carlos.alvarado@wsa-agencies.com',
              qr: QRCarlos,
              alt: 'QR Code Carlos Alvarado T',
            }].map(({ name, phone, whatsapp, email, qr, alt }) => (
              <motion.div
                key={email}
                className="flex items-center bg-white rounded-2xl shadow-md p-6 gap-8 cursor-default"
                whileHover="hover"
                variants={cardHover}
                initial="rest"
                animate="rest"
              >
                <motion.img
                  src={qr}
                  alt={alt}
                  className="w-24 h-24 rounded-xl shadow"
                  loading="lazy"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                />
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{name}</h3>
                  <p className="flex items-center gap-2 text-gray-700 text-lg font-medium mb-1">
                    <WhatsAppOutlined className="text-green-600" />
                    <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-700">
                      {phone}
                    </a>
                  </p>
                  <p className="flex items-center gap-2 text-gray-700 text-lg font-medium">
                    <MailOutlined className="text-red-600" />
                    <a href={`mailto:${email}`} className="hover:underline text-blue-700">
                      {email}
                    </a>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-20 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <img
              src={WSALogo}
              alt="WSA Agencies Maritime Services Logo"
              className="h-24"
              loading="lazy"
            />
          </motion.div>
        </motion.section>
      </main>

      {/* Footer con mapa */}
      <footer className="mt-20">
        <motion.div
          className="max-w-7xl mx-auto px-6 rounded-xl overflow-hidden shadow-lg border border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <iframe
            title="WSA Location Valparaíso"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3343.34444538822!2d-71.6288921848126!3d-33.04560798089762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689e2a1b7e0d37b%3A0x1c8b3e8e2b8f8e0!2sBlanco%20625%2C%20Valpara%C3%ADso%2C%20Chile!5e0!3m2!1sen!2sus!4v1678888888888!5m2!1sen!2sus"
            width="100%"
            height="280"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </footer>

      <Footer />
    </div>
  );
};

export default ContactUsPage;
