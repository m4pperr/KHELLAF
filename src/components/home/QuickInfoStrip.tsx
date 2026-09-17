import { Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import { CLINIC_INFO } from '../../data/clinicData';

interface QuickInfoStripProps {
  onOpenBooking: () => void;
}

export const QuickInfoStrip = ({ onOpenBooking }: QuickInfoStripProps) => {
  return (
    <div style={{
      position: 'relative',
      zIndex: 10,
      marginTop: '-2.5rem',
      marginBottom: '2rem'
    }}>
      <div className="container">
        <div
          className="glass-card"
          style={{
            background: 'white',
            padding: '1.25rem 2rem',
            borderRadius: 'var(--radius-xl)',
            boxShadow: '0 15px 35px -5px rgba(11, 31, 46, 0.1)',
            border: '1px solid rgba(20, 148, 136, 0.15)',
          }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
            alignItems: 'center'
          }} className="quick-strip-grid">

            {/* Direct Call Strip */}
            <a
              href={`tel:${CLINIC_INFO.phones[0].replace(/\s+/g, '')}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                textDecoration: 'none',
                padding: '0.5rem',
                borderRadius: 'var(--radius-md)',
                transition: 'background var(--transition-fast)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-subtle)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'var(--color-primary-subtle)',
                color: 'var(--color-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Phone size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Secrétariat & RDV
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--color-navy)' }}>
                  {CLINIC_INFO.phonesFormatted[0]}
                </div>
              </div>
            </a>

            {/* Address Strip */}
            <a
              href={CLINIC_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                textDecoration: 'none',
                padding: '0.5rem',
                borderRadius: 'var(--radius-md)',
                transition: 'background var(--transition-fast)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-subtle)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: '#e0f2fe',
                color: '#0284c7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <MapPin size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Centre de Draria
                </div>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--color-navy)' }}>
                  Boulevard Principal, Alger
                </div>
              </div>
            </a>

            {/* Horaires Strip */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '0.5rem',
            }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'var(--color-accent-subtle)',
                color: 'var(--color-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Clock size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Horaires d'ouverture
                </div>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--color-navy)' }}>
                  Samedi – Jeudi : 09h – 17h
                </div>
              </div>
            </div>

            {/* Emergency & Quick booking */}
            <div style={{
              display: 'flex',
              gap: '0.6rem',
              justifyContent: 'flex-end',
              alignItems: 'center'
            }}>
              <a
                href={`https://wa.me/213555123456?text=${encodeURIComponent('Bonjour, je souhaite un renseignement ou prendre un rendez-vous au cabinet Khellaf Orthodontics.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                style={{
                  borderColor: '#25d366',
                  color: '#128c7e',
                  fontWeight: 700
                }}
              >
                <MessageSquare size={16} />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="btn btn-primary btn-sm"
              >
                <span>Réserver en ligne</span>
              </button>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .quick-strip-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.25rem !important;
          }
        }
        @media (max-width: 640px) {
          .quick-strip-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
};
