import { MapPin, Clock, Phone, Mail, Navigation, ExternalLink, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../../data/clinicData';

interface LocationSectionProps {
  onOpenBooking: () => void;
}

export const LocationSection = ({ onOpenBooking }: LocationSectionProps) => {
  // Check day of week in Algerian timezone
  const daysOfWeek = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  const todayName = daysOfWeek[new Date().getDay()];

  return (
    <section id="contact" className="section" style={{ background: '#f8fafc' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <MapPin size={14} />
            <span>Accès & Coordonnées</span>
          </div>
          <h2 className="section-title">
            Nous trouver au <span className="text-gradient">cœur de Draria</span>
          </h2>
          <p className="section-subtitle">
            Le cabinet Khellaf Orthodontics est idéalement situé à Draria, facilement accessible depuis Alger, Baba Hassen, Cheraga et les communes environnantes.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 0.85fr)',
          gap: '2.5rem',
          alignItems: 'stretch'
        }} className="location-grid">

          {/* Left Column: Interactive Map & Practical Directions */}
          <div
            className="glass-card"
            style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: 'white'
            }}
          >
            <div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1.25rem'
              }}>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--color-navy)' }}>
                  Localisation & Accès
                </h3>
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  <span>Itinéraire Google Maps</span>
                  <ExternalLink size={14} />
                </a>
              </div>

              {/* Map Container View */}
              <div style={{
                width: '100%',
                height: '280px',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                background: '#e2e8f0',
                marginBottom: '1.5rem',
                position: 'relative'
              }}>
                <iframe
                  title="Plan d'accès Khellaf Orthodontics Draria"
                  src="https://maps.google.com/maps?q=Draria,Alger,Algerie&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>

              {/* Practical transport & parking info */}
              <div style={{
                background: 'var(--bg-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem',
                marginBottom: '1.25rem'
              }}>
                <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--color-navy)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Navigation size={16} style={{ color: 'var(--color-primary)' }} />
                  Repères & Stationnement
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  {CLINIC_INFO.address.landmark}
                </p>
              </div>

              {/* Contact direct pills */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem'
              }}>
                <a
                  href={`tel:${CLINIC_INFO.phones[0].replace(/\s+/g, '')}`}
                  style={{
                    padding: '1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    textDecoration: 'none'
                  }}
                >
                  <Phone size={20} style={{ color: 'var(--color-primary)' }} />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>Téléphone mobile</div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--color-navy)' }}>{CLINIC_INFO.phonesFormatted[0]}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${CLINIC_INFO.email}`}
                  style={{
                    padding: '1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    textDecoration: 'none'
                  }}
                >
                  <Mail size={20} style={{ color: 'var(--color-accent)' }} />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>E-mail du cabinet</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-navy)' }}>{CLINIC_INFO.email}</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Weekly Schedule & Live Status */}
          <div
            className="glass-card"
            style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: 'white'
            }}
          >
            <div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1.25rem'
              }}>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--color-navy)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Clock size={20} style={{ color: 'var(--color-primary)' }} />
                  Horaires d'Ouverture
                </h3>
                <span className="status-indicator">
                  <span className="status-dot" />
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-success)' }}>
                    Ouvert
                  </span>
                </span>
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Consultations sur rendez-vous pour vous garantir un temps d'écoute dédié sans attente prolongée.
              </p>

              {/* Schedule List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '2rem' }}>
                {CLINIC_INFO.schedule.map((item) => {
                  const isToday = item.day.toLowerCase() === todayName.toLowerCase();
                  return (
                    <div
                      key={item.day}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '0.75rem 1rem',
                        borderRadius: '8px',
                        background: isToday ? 'var(--color-primary-subtle)' : 'var(--bg-subtle)',
                        border: isToday ? '1px solid rgba(20, 148, 136, 0.3)' : '1px solid transparent'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{
                          fontWeight: isToday ? 800 : 600,
                          fontSize: '0.92rem',
                          color: isToday ? 'var(--color-primary-dark)' : 'var(--color-navy)'
                        }}>
                          {item.day}
                        </span>
                        {isToday && (
                          <span className="badge badge-teal" style={{ fontSize: '0.68rem', padding: '0.1rem 0.4rem' }}>
                            Aujourd'hui
                          </span>
                        )}
                      </div>

                      <span style={{
                        fontSize: '0.9rem',
                        fontWeight: isToday ? 700 : 500,
                        color: item.isOpen ? (isToday ? 'var(--color-primary-dark)' : 'var(--text-main)') : '#94a3b8'
                      }}>
                        {item.hours}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick appointment action */}
            <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
              <button
                onClick={onOpenBooking}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                <Calendar size={18} />
                <span>Prendre Rendez-vous au Cabinet</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .location-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
