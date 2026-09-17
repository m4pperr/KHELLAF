import { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/home/Hero';
import { QuickInfoStrip } from './components/home/QuickInfoStrip';
import { PittsFocus } from './components/home/PittsFocus';
import { ServicesSection } from './components/home/ServicesSection';
import { PatientExperience } from './components/home/PatientExperience';
import { ResultsShowcase } from './components/home/ResultsShowcase';
import { DoctorAbout } from './components/home/DoctorAbout';
import { TestimonialsSection } from './components/home/TestimonialsSection';
import { FaqSection } from './components/home/FaqSection';
import { LocationSection } from './components/home/LocationSection';
import { Footer } from './components/layout/Footer';
import { AppointmentModal } from './components/home/AppointmentModal';
import { MessageSquare } from 'lucide-react';

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [activeSection, setActiveSection] = useState<string>('accueil');

  // Track active section for navbar highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['accueil', 'pitts21', 'traitements', 'parcours', 'resultats', 'cabinet', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const handleScrollToPitts = () => {
    const el = document.getElementById('pitts21');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-layout">
      {/* Top Navbar */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        activeSection={activeSection}
      />

      {/* Main Hero Section */}
      <Hero
        onOpenBooking={() => handleOpenBooking()}
        onExplorePitts={handleScrollToPitts}
      />

      {/* Quick Contact & Info Strip */}
      <QuickInfoStrip
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Special Pitts 21 Deep Dive Section */}
      <PittsFocus
        onOpenBooking={() => handleOpenBooking('protocole-pitts21')}
      />

      {/* Treatments & Services Grid */}
      <ServicesSection
        onSelectService={(serviceId) => handleOpenBooking(serviceId)}
      />

      {/* 4-Step Patient Journey */}
      <PatientExperience
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Clinical Before/After Case Studies */}
      <ResultsShowcase
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Dr. Khellaf & Clinic Values */}
      <DoctorAbout
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Patient Testimonials */}
      <TestimonialsSection />

      {/* Interactive FAQ */}
      <FaqSection />

      {/* Location in Draria, Map & Opening Hours */}
      <LocationSection
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Global Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Interactive Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialServiceId={selectedServiceId}
      />

      {/* Floating Instant WhatsApp & Call Widget */}
      <div className="floating-contact-bar">
        <a
          href={`https://wa.me/213555123456?text=${encodeURIComponent('Bonjour Dr. Khellaf, je souhaite me renseigner pour un rendez-vous d\'orthodontie.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn-whatsapp"
          title="Discuter sur WhatsApp"
          aria-label="WhatsApp"
        >
          <MessageSquare size={26} />
        </a>
      </div>
    </div>
  );
}

export default App;
