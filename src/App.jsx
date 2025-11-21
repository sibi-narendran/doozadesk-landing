import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logos from './components/Logos';
import Features from './components/Features';
import Integrations from './components/Integrations';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import BottomCTA from './components/BottomCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Features />
        <Integrations />
        <Testimonials />
        <Pricing />
        <BottomCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
