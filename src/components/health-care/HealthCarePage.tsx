import { Route, Routes } from 'react-router-dom';
import MissionPage from './MissionPage';
import ResearchPage from './ResearchPage';
import DcouseriesPage from './DocuseriresPage';
import ProgramsPage from './ProgramsPage';
import PartnersPage from './PartnersPage';
import ContactPage from './ContactPage';
import DonatePage from './DonatePage';

export default function HealthCarePage() {
  return (
    <Routes>
      <Route path="*" element={<MissionPage />} />
      <Route path="research" element={<ResearchPage />} />
      <Route path="docuseries" element={<DcouseriesPage />} />
      <Route path="programs" element={<ProgramsPage/>} />
      <Route path="partners" element={<PartnersPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="donate" element={<DonatePage />} />
    </Routes>
  );
}
