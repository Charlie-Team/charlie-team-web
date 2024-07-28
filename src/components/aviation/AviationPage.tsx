import { Route, Routes } from 'react-router-dom';
import MissionPage from './MissionPage';
import IndustriesPage from './IndustriesPage';
import ServicesPage from './ServicesPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';

export default function AviationPage() {
  return (
    <Routes>
      <Route path="*/*" element={<MissionPage />} />
      <Route path="industries" element={<IndustriesPage />} />
      <Route path="services" element={<ServicesPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="contact" element={<ContactPage />} />
    </Routes>
  );
}
