import { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Clock, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../../data/clinicData';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
  activeSection: string;
}

export const Navbar = ({ onOpenBooking, activeSection }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'pitts21', label: 'Protocole Pitts 21', badge: 'Avancé' },
    { id: 'traitements', label: 'Traitements' },
    { id: 'parcours', label: 'Parcours Patient' },
    { id: 'resultats', label: 'Résultats' },
    { id: 'cabinet', label: 'Le Cabinet' },
    { id: 'contact', label: 'Contact & Accès' },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Top Notification Bar for Draria */}
      <div style={{
        background: 'var(--color-navy-dark)',
        color: 'var(--text-inverse-muted)',
        fontSize: '0.815rem',
        padding: '0.45rem 1rem',
        borderBottom: '1px solid rgba(255,255,255,0.06)'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#e2e8f0' }}>
              <MapPin size={14} style={{ color: 'var(--color-primary-light)' }} />
              {CLINIC_INFO.address.city}, {CLINIC_INFO.address.wilaya} (Boulevard Principal)
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#cbd5e1' }}>
              <Clock size={14} style={{ color: 'var(--color-accent-light)' }} />
              Samedi – Jeudi : 09h00 – 17h00
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span className="status-indicator" style={{ color: '#6ee7b7', fontSize: '0.8rem', fontWeight: 600 }}>
              <span className="status-dot"></span>
              Consultations ouvertes
            </span>
            <a
              href={`tel:${CLINIC_INFO.phones[0].replace(/\s+/g, '')}`}
              style={{
                color: '#ffffff',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}
            >
              <Phone size={13} style={{ color: 'var(--color-primary-light)' }} />
              {CLINIC_INFO.phonesFormatted[0]}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: isScrolled ? 'rgba(255, 255, 255, 0.96)' : 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: isScrolled ? '1px solid var(--border-light)' : '1px solid transparent',
          boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none',
          transition: 'all var(--transition-normal)',
          height: '76px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%'
        }}>
          {/* Brand Logo */}
          <div
            onClick={() => scrollTo('accueil')}
            style={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              userSelect: 'none'
            }}
          >
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, var(--color-navy) 0%, var(--color-primary) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                boxShadow: '0 4px 12px rgba(13, 107, 99, 0.25)',
                position: 'relative'
              }}
            >
              {/* Dental / Aesthetic Smile Icon Vector */}
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C7.5 2 4 5.5 4 10c0 3.5 2 7 4 11 1 2 2.5 2 4 0 1.5 2 3 2 4 0 2-4 4-7.5 4-11 0-4.5-3.5-8-8-8z"/>
                <path d="M9 10c1 1.5 5 1.5 6 0" stroke="var(--color-accent-light)" strokeWidth="2.5" />
              </svg>
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: '1.25rem',
                lineHeight: 1.1,
                color: 'var(--color-navy)',
                letterSpacing: '-0.02em',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}>
                KHELLAF
                <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>ORTHO</span>
              </div>
              <div style={{
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
                fontWeight: 600,
                letterSpacing: '0.04em',
                textTransform: 'uppercase'
              }}>
                Orthodontie & Aligneurs • Draria
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav style={{ display: 'none', gap: '1.75rem', alignItems: 'center' }} className="desktop-nav">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontFamily: 'inherit',
                    fontSize: '0.925rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? 'var(--color-primary)' : 'var(--text-main)',
                    cursor: 'pointer',
                    position: 'relative',
                    padding: '0.5rem 0',
                    transition: 'color var(--transition-fast)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--color-primary)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--text-main)';
                  }}
                >
                  {link.label}
                  {link.badge && (
                    <span style={{
                      fontSize: '0.65rem',
                      background: 'var(--color-accent-subtle)',
                      color: 'var(--color-accent)',
                      padding: '0.1rem 0.4rem',
                      borderRadius: '999px',
                      fontWeight: 700
                    }}>
                      {link.badge}
                    </span>
                  )}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: 'var(--color-primary)',
                        borderRadius: '2px',
                      }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={() => onOpenBooking()}
              className="btn btn-primary btn-sm"
              style={{
                display: 'inline-flex',
                boxShadow: '0 4px 14px rgba(13, 107, 99, 0.3)'
              }}
            >
              <Calendar size={16} />
              <span>Prendre RDV</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-toggle"
              aria-label="Menu"
              style={{
                display: 'none',
                background: 'var(--bg-subtle)',
                border: '1px solid var(--border-light)',
                borderRadius: '10px',
                padding: '0.5rem',
                cursor: 'pointer',
                color: 'var(--color-navy)'
              }}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            style={{
              position: 'fixed',
              top: '76px',
              left: 0,
              right: 0,
              background: 'white',
              borderBottom: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-xl)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              zIndex: 99,
              animation: 'fadeIn 0.25s ease-out'
            }}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: 'var(--color-navy)',
                  padding: '0.65rem 0',
                  borderBottom: '1px solid var(--border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="badge badge-gold">{link.badge}</span>
                )}
              </button>
            ))}

            <div style={{ paddingTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                <Calendar size={18} />
                <span>Prendre Rendez-vous en Ligne</span>
              </button>
              <a
                href={`tel:${CLINIC_INFO.phones[0].replace(/\s+/g, '')}`}
                className="btn btn-secondary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Phone size={18} style={{ color: 'var(--color-primary)' }} />
                <span>Appeler : {CLINIC_INFO.phonesFormatted[0]}</span>
              </a>
            </div>
          </div>
        )}
      </header>

      <style>{`
        @media (min-width: 960px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-toggle {
            display: none !important;
          }
        }
        @media (max-width: 959px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
};
