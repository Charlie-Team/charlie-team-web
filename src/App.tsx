import './App.css';
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HealthCarePage from './components/health-care/HealthCarePage';
import AviationPage from './components/aviation/AviationPage';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <Router basename="/charlie-team-web/">
      <div style={{ height: '100%', display: 'flex' }}>
        <Navbar />
        <main style={{ flex: 1, minHeight: 0 }}>
          <Routes>
            <Route path="*" element={<LandingPage />} />
            <Route path="health-care/*" element={<HealthCarePage />} />
            <Route path="aviation/*" element={<AviationPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
