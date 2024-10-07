// src/router.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './src/pages/LandingPage'; // Replace with your actual HomePage component path
import LoginPage from './src/pages/LoginPage'; // Replace with your actual LoginPage component path
// import NotFoundPage from './NotFoundPage'; // Replace with your actual NotFoundPage component path

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="*" element={<NotFoundPage />} /> Catch-all route for 404 */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
