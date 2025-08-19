import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FullAgent from './pages/servicios/full-agent'; 
import HusbandryAgent from './pages/servicios/husbandry-agent';
import MaritimeSupport from './pages/servicios/maritime-support';
import MaritimeSolutions from './pages/servicios/maritime-solutions';
import MaritimeLogistic from './pages/servicios/maritime-logistic';
import AntarcticServices from './pages/servicios/antarctic-services';
import WhatsAppButton from './components/WhatsAppButton';
import AboutUs from './pages/About';
import ContactUsPage from './pages/ContactUs';
import ScrollToHashElement from './components/ScrollToHashElement'; // <-- nuevo

function App() {
  return (
    <BrowserRouter>
      {/* Maneja scroll automático con hash (#services, etc.) */}
      <ScrollToHashElement />

      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios/full-agent" element={<FullAgent />} />
          <Route path="/servicios/husbandry-agent" element={<HusbandryAgent />} />
          <Route path="/servicios/maritime-support" element={<MaritimeSupport />} />
          <Route path="/servicios/maritime-solutions" element={<MaritimeSolutions />} />
          <Route path="/servicios/maritime-logistic" element={<MaritimeLogistic />} />
          <Route path="/servicios/antarctic-services" element={<AntarcticServices />} />
          <Route path="/about" element={<AboutUs />} />
          {/* corregida ruta en minúsculas */}
          <Route path="/contactus" element={<ContactUsPage />} />
        </Routes>

        {/* Botón flotante de WhatsApp */}
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
