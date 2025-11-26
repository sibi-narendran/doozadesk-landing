import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AuthGateway from './pages/AuthGateway';
import Admin from './pages/Admin';
import FeaturesPage from './pages/FeaturesPage';
import PricingPage from './pages/PricingPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/get-started" element={<AuthGateway />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/features" element={<FeaturesPage />} />
      <Route path="/pricing" element={<PricingPage />} />
    </Routes>
  );
}

export default App;
