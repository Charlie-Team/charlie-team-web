import './App.css';
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HealthCarePage from './components/health-care/HealthCarePage';
import AviationPage from './components/aviation/AviationPage';
import LandingPage from './components/LandingPage';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: 'var(--emerald-700)',
          '&:hover': {
            backgroundColor: 'var(--emerald-800)',
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
