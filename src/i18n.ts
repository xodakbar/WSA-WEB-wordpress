import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Founding Year": "Founding Year",
      "Countries": "Countries",
      "Owner's Matters Services": "Owner's Matters Services",
      "Per Year": "Per Year",
      "Staff": "Staff",
      "We Work every day building confidence.": "We Work every day building confidence.",
      "Growing together!": "Growing together!"
    }
  },
  es: {
    translation: {
      "Founding Year": "Año de fundación",
      "Countries": "Países",
      "Owner's Matters Services": "Servicios para asuntos del propietario",
      "Per Year": "Por año",
      "Staff": "Personal",
      "We Work every day building confidence.": "Trabajamos cada día generando confianza.",
      "Growing together!": "Creciendo juntos!"
    }
  }
};

i18n
  .use(initReactI18next) // pasa i18n a react-i18next
  .init({
    resources,
    lng: 'en', // idioma por defecto
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
