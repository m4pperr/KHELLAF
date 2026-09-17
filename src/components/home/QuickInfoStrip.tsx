import { Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import { CLINIC_INFO } from '../../data/clinicData';

interface QuickInfoStripProps {
  onOpenBooking: () => void;
}

export const QuickInfoStrip = ({ onOpenBooking }: QuickInfoStripProps) => {
  return (
    <div className="quick-strip-wrapper" style={{
      position: 'relative',
      zIndex: 10,
      width: '100%',
      marginBottom: '2rem'
    }}>
      <div className="container">
        <div
          className="glass-card quick-strip-card"
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
            gap: '1.25rem',
            alignItems: 'center'
          }} className="quick-strip-grid">

            {/* Direct Call Strip */}
            <a
              href={`tel:${CLINIC_INFO.phones[0].replace(/\s+/g, '')}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                textDecoration: 'none',
                padding: '0.4rem',
                borderRadius: 'var(--radius-md)',
              }}
            >
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: 'var(--color-primary-subtle)',
                color: 'var(--color-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Phone size={20} />
              </div>
              <div style={{ overflow: 'hidden' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Secrétariat & RDV
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--color-navy)', whiteSpace: 'nowrap' }}>
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
                gap: '0.85rem',
                textDecoration: 'none',
                padding: '0.4rem',
                borderRadius: 'var(--radius-md)',
              }}
            >
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: '#e0f2fe',
                color: '#0284c7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <MapPin size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Centre de Draria
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-navy)' }}>
                  Boulevard Principal, Alger
                </div>
              </div>
            </a>

            {/* Horaires Strip */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              padding: '0.4rem',
            }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: 'var(--color-accent-subtle)',
                color: 'var(--color-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Clock size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Horaires d'ouverture
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-navy)' }}>
                  Sam – Jeu : 09h – 17h
                </div>
              </div>
            </div>

            {/* Emergency & Quick booking */}
            <div style={{
              display: 'flex',
              gap: '0.5rem',
              alignItems: 'center'
            }} className="quick-strip-actions">
              <a
                href={`https://wa.me/213555123456?text=${encodeURIComponent('Bonjour, je souhaite un renseignement ou prendre un rendez-vous au cabinet Khellaf Orthodontics.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                style={{
                  borderColor: '#25d366',
                  color: '#128c7e',
                  fontWeight: 700,
                  flex: 1,
                  justifyContent: 'center',
                  padding: '0.6rem 0.75rem'
                }}
              >
                <MessageSquare size={16} />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="btn btn-primary btn-sm"
                style={{ flex: 1, padding: '0.6rem 0.75rem' }}
              >
                <span>Réserver</span>
              </button>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        .quick-strip-wrapper {
          margin-top: -2.5rem;
        }
        @media (max-width: 1024px) {
          .quick-strip-wrapper {
            margin-top: -1.5rem;
          }
          .quick-strip-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.25rem !important;
          }
        }
        @media (max-width: 640px) {
          .quick-strip-wrapper {
            margin-top: 0.5rem !important;
            margin-bottom: 1.5rem !important;
          }
          .quick-strip-card {
            padding: 1rem !important;
            border-radius: var(--radius-lg) !important;
          }
          .quick-strip-grid {
            grid-template-columns: 1fr !important;
            gap: 0.85rem !important;
          }
          .quick-strip-actions {
            flex-direction: row !important;
            width: 100% !important;
            padding-top: 0.5rem;
            border-top: 1px dashed var(--border-light);
          }
        }
      `}</style>
    </div>
  );
};
