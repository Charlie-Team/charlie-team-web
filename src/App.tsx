import './App.css';
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import PTSDImage from './assets/ptsd.jpg';
import HomePage from './components/HomePage';

function App() {
  return (
    <div style={{ height: '100%', display: 'flex'}}>
      <Navbar />
      <main style={{ flex: 1, minHeight: 0}}>
        <Router>
          <Routes>
            <Route path="/charlie-team-web" element={<HomePage />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
