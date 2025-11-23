import React from 'react';
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
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [hasClosedModal, setHasClosedModal] = React.useState(false);
  const hasClosedModalRef = React.useRef(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setHasClosedModal(true);
    hasClosedModalRef.current = true;
  };

  const handleAction = (e) => {
    if (!hasClosedModal) {
      if (e) e.preventDefault();
      setIsModalOpen(true);
    }
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasClosedModalRef.current) {
        setIsModalOpen(true);
      }
    }, 20000); // Open after 20 seconds

    return () => clearTimeout(timer);
  }, []);

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
