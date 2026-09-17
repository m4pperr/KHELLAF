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
      const offset = 70;
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
        fontSize: '0.8rem',
        padding: '0.45rem 1rem',
        borderBottom: '1px solid rgba(255,255,255,0.06)'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.4rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#e2e8f0', fontSize: '0.78rem' }}>
              <MapPin size={13} style={{ color: 'var(--color-primary-light)', flexShrink: 0 }} />
              {CLINIC_INFO.address.city}, {CLINIC_INFO.address.wilaya}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#cbd5e1', fontSize: '0.78rem' }} className="hide-on-very-small">
              <Clock size={13} style={{ color: 'var(--color-accent-light)', flexShrink: 0 }} />
              Samedi – Jeudi : 09h – 17h
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span className="status-indicator hide-on-mobile" style={{ color: '#6ee7b7', fontSize: '0.78rem', fontWeight: 600 }}>
              <span className="status-dot"></span>
              Ouvert
            </span>
            <a
              href={`tel:${CLINIC_INFO.phones[0].replace(/\s+/g, '')}`}
              style={{
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.8rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem'
              }}
            >
              <Phone size={12} style={{ color: 'var(--color-primary-light)' }} />
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
          background: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: isScrolled ? '1px solid var(--border-light)' : '1px solid transparent',
          boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none',
          transition: 'all var(--transition-normal)',
          height: '70px',
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
              gap: '0.65rem',
              userSelect: 'none',
              maxWidth: 'calc(100% - 130px)'
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, var(--color-navy) 0%, var(--color-primary) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                boxShadow: '0 4px 12px rgba(13, 107, 99, 0.25)',
                flexShrink: 0
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C7.5 2 4 5.5 4 10c0 3.5 2 7 4 11 1 2 2.5 2 4 0 1.5 2 3 2 4 0 2-4 4-7.5 4-11 0-4.5-3.5-8-8-8z"/>
                <path d="M9 10c1 1.5 5 1.5 6 0" stroke="var(--color-accent-light)" strokeWidth="2.5" />
              </svg>
            </div>
            <div style={{ overflow: 'hidden' }}>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: '1.15rem',
                lineHeight: 1.1,
                color: 'var(--color-navy)',
                letterSpacing: '-0.02em',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}>
                KHELLAF
                <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>ORTHO</span>
              </div>
              <div style={{
                fontSize: '0.68rem',
                color: 'var(--text-muted)',
                fontWeight: 600,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}>
                Draria, Alger
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav style={{ display: 'none', gap: '1.5rem', alignItems: 'center' }} className="desktop-nav">
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
            <button
              onClick={() => onOpenBooking()}
              className="btn btn-primary btn-sm"
              style={{
                display: 'inline-flex',
                padding: '0.5rem 0.9rem',
                fontSize: '0.85rem'
              }}
            >
              <Calendar size={15} />
              <span className="hide-on-very-small">Prendre RDV</span>
              <span className="show-on-very-small">RDV</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-toggle"
              aria-label="Menu de navigation"
              style={{
                display: 'none',
                background: 'var(--bg-subtle)',
                border: '1px solid var(--border-light)',
                borderRadius: '8px',
                padding: '0.45rem',
                cursor: 'pointer',
                color: 'var(--color-navy)',
                flexShrink: 0
              }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            style={{
              position: 'fixed',
              top: '70px',
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              zIndex: 99,
              overflowY: 'auto',
              borderTop: '1px solid var(--border-light)'
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
                  padding: '0.75rem 0',
                  borderBottom: '1px solid var(--border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer'
                }}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="badge badge-gold">{link.badge}</span>
                )}
              </button>
            ))}

            <div style={{ paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
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
        .show-on-very-small {
          display: none;
        }
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
        @media (max-width: 640px) {
          .hide-on-mobile {
            display: none !important;
          }
        }
        @media (max-width: 380px) {
          .hide-on-very-small {
            display: none !important;
          }
          .show-on-very-small {
            display: inline !important;
          }
        }
      `}</style>
    </>
  );
};
