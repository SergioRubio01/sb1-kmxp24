import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
// import About from './pages/About';
// import Pricing from './pages/Pricing';
// import {Documentation,Contributors} from './pages/Documentation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/pricing" element={<Pricing />} /> */}
        {/* <Route path="/docs" element={<Documentation />} /> */}
        {/* <Route path="/docs/contributors" element={<Contributors />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
