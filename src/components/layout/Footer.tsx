import { Phone, MapPin, Mail, ArrowUp } from 'lucide-react';
import { CLINIC_INFO } from '../../data/clinicData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer = ({ onOpenBooking }: FooterProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={{
      background: 'var(--bg-dark-section)',
      color: 'white',
      paddingTop: '5rem',
      paddingBottom: '2.5rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Main Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.4fr) repeat(3, minmax(0, 1fr))',
          gap: '3rem',
          marginBottom: '4rem'
        }} className="footer-grid">

          {/* Col 1: Clinic Identity & Mission */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              marginBottom: '1.25rem'
            }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C7.5 2 4 5.5 4 10c0 3.5 2 7 4 11 1 2 2.5 2 4 0 1.5 2 3 2 4 0 2-4 4-7.5 4-11 0-4.5-3.5-8-8-8z"/>
                  <path d="M9 10c1 1.5 5 1.5 6 0" stroke="var(--color-accent-light)" strokeWidth="2.5" />
                </svg>
              </div>

              <div>
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: '1.3rem',
                  color: 'white',
                  lineHeight: 1.1
                }}>
                  KHELLAF <span style={{ color: 'var(--color-primary-light)', fontWeight: 600 }}>ORTHODONTICS</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Cabinet Spécialisé • Draria, Alger
                </div>
              </div>
            </div>

            <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              Dédié à l'excellence des traitements d'orthodontie moderne : Protocole Pitts 21, aligneurs invisibles thermoformés, interception pédiatrique et réhabilitation adulte.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href={CLINIC_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#e2e8f0',
                  transition: 'all var(--transition-fast)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--color-primary)';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.color = '#e2e8f0';
                }}
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              <a
                href={CLINIC_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#e2e8f0',
                  transition: 'all var(--transition-fast)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--color-primary)';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.color = '#e2e8f0';
                }}
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Rapide */}
          <div>
            <h4 style={{ color: 'white', fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem' }}>
              Navigation Rapide
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.92rem' }}>
              <li>
                <button
                  onClick={() => scrollTo('accueil')}
                  style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', padding: 0 }}
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('pitts21')}
                  style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', padding: 0 }}
                >
                  Protocole Pitts 21
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('traitements')}
                  style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', padding: 0 }}
                >
                  Nos Traitements & Soins
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('parcours')}
                  style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', padding: 0 }}
                >
                  Parcours du Patient
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('resultats')}
                  style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', padding: 0 }}
                >
                  Cas & Résultats Cliniques
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('cabinet')}
                  style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', padding: 0 }}
                >
                  À Propos du Dr. Khellaf
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Spécialités */}
          <div>
            <h4 style={{ color: 'white', fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem' }}>
              Spécialités Clés
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.92rem', color: '#cbd5e1' }}>
              <li>Système Pitts 21 Auto-Ligeant</li>
              <li>Aligneurs Invisibles (Gouttières)</li>
              <li>Orthodontie Interceptive Enfant</li>
              <li>Orthodontie Adulte Esthétique</li>
              <li>Smile Arc Protection (SAP)</li>
              <li>Contention Fixe & Amovible</li>
            </ul>
          </div>

          {/* Col 4: Contact & Pratique */}
          <div>
            <h4 style={{ color: 'white', fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem' }}>
              Cabinet à Draria
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem', color: '#cbd5e1' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <MapPin size={16} style={{ color: 'var(--color-primary-light)', flexShrink: 0, marginTop: '3px' }} />
                <span>{CLINIC_INFO.address.fullFormatted}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Phone size={16} style={{ color: 'var(--color-primary-light)', flexShrink: 0 }} />
                <a href={`tel:${CLINIC_INFO.phones[0].replace(/\s+/g, '')}`} style={{ color: '#ffffff', fontWeight: 700 }}>
                  {CLINIC_INFO.phonesFormatted[0]}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Mail size={16} style={{ color: 'var(--color-accent-light)', flexShrink: 0 }} />
                <span>{CLINIC_INFO.email}</span>
              </div>

              <div style={{ paddingTop: '0.5rem' }}>
                <button
                  onClick={onOpenBooking}
                  className="btn btn-primary btn-sm"
                  style={{ width: '100%' }}
                >
                  Prendre Rendez-vous
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.85rem',
          color: '#94a3b8'
        }}>
          <div>
            © {new Date().getFullYear()} Khellaf Orthodontics. Tous droits réservés. Cabinet médical spécialisé à Draria, Alger.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span>Dr. Khellaf • Orthodontie & Orthopédie Dento-Faciale</span>
            <button
              onClick={scrollToTop}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.08)',
                border: 'none',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background var(--transition-fast)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'var(--color-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'}
              aria-label="Haut de page"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
};
