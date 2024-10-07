import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DarkModeProvider } from './pages/LandingPage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Documentation from './pages/Documentation';

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/docs" element={<Documentation />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
