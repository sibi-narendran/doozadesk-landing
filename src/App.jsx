import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logos from './components/Logos';
import Integrations from './components/Integrations';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import BottomCTA from './components/BottomCTA';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pendingUrl, setPendingUrl] = useState(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);

    if (pendingUrl) {
      window.location.href = pendingUrl;
      setPendingUrl(null);
    }
  };

  const handleAction = (e) => {
    if (e) {
      e.preventDefault();
      const url = e.currentTarget.href;
      if (url) {
        setPendingUrl(url);
      }
    }
    setIsModalOpen(true);
    sessionStorage.setItem('doozadesk_popup_shown', 'true');
  };

  // Timer: 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeElapsed(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  // Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Scrolled at least a bit
        setHasScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-open logic
  useEffect(() => {
    const hasShown = sessionStorage.getItem('doozadesk_popup_shown');
    if (timeElapsed && hasScrolled && !hasShown && !isModalOpen) {
      setIsModalOpen(true);
      sessionStorage.setItem('doozadesk_popup_shown', 'true');
    }
  }, [timeElapsed, hasScrolled, isModalOpen]); // Added isModalOpen to dependencies to prevent re-opening if already open

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar openModal={handleAction} />
      <main>
        <Hero openModal={handleAction} />
        <Logos />
        <Integrations />
        <Testimonials />
        <Pricing openModal={handleAction} />
        <BottomCTA openModal={handleAction} />
      </main>
      <Footer />
      <BookingModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
