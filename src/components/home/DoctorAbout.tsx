import { Award, ShieldCheck, HeartPulse, Sparkles, CheckCircle2, UserCheck, Stethoscope } from 'lucide-react';
import { CLINIC_INFO } from '../../data/clinicData';

interface DoctorAboutProps {
  onOpenBooking: () => void;
}

export const DoctorAbout = ({ onOpenBooking }: DoctorAboutProps) => {
  const values = [
    {
      title: 'Asepsie & Stérilisation Stricte',
      desc: 'Protocoles hospitaliers stricts, traçabilité numérique de chaque instrument et désinfection continue.',
      icon: <ShieldCheck size={20} />,
    },
    {
      title: 'Approche Non-Invasive',
      desc: 'Préservation maximale des dents naturelles, refus des extractions systématiques, respect de l\'architecture faciale.',
      icon: <HeartPulse size={20} />,
    },
    {
      title: 'Technologie 3D & Précision',
      desc: 'Empreintes optiques sans silicone, radiographie numérique à dose réduite et planification informatique précise.',
      icon: <Sparkles size={20} />,
    },
    {
      title: 'Écoute & Relation Humaine',
      desc: 'Un accueil chaleureux et des explications claires pour que chaque patient soit pleinement acteur de son traitement.',
      icon: <UserCheck size={20} />,
    },
  ];

  return (
    <section id="cabinet" className="section" style={{ background: 'white', width: '100%' }}>
      <div className="container">
        {/* Section Doctor Presentation */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 0.95fr) minmax(0, 1.25fr)',
          gap: '3rem',
          alignItems: 'center',
          marginBottom: '4rem'
        }} className="doctor-grid">
          {/* Doctor Portrait Visual Representation */}
          <div style={{ position: 'relative', width: '100%' }}>
            <div
              className="doctor-card"
              style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, var(--color-navy) 0%, var(--color-primary-dark) 100%)',
                padding: '2.25rem',
                color: 'white',
                boxShadow: 'var(--shadow-xl)',
                position: 'relative',
              }}
            >
              {/* Doctor Avatar / Badge */}
              <div style={{
                width: '76px',
                height: '76px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.12)',
                border: '2px solid rgba(255, 255, 255, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
                color: '#5eead4'
              }}>
                <Stethoscope size={38} />
              </div>

              <span className="badge badge-gold" style={{ marginBottom: '0.85rem' }}>
                Praticien Spécialiste
              </span>

              <h3 style={{
                fontSize: '1.85rem',
                color: 'white',
                marginBottom: '0.35rem',
                fontFamily: 'var(--font-heading)'
              }}>
                {CLINIC_INFO.doctor}
              </h3>

              <div style={{
                fontSize: '0.88rem',
                color: '#5eead4',
                fontWeight: 600,
                marginBottom: '1.25rem',
                lineHeight: 1.4
              }}>
                {CLINIC_INFO.doctorTitle}
              </div>

              <div style={{
                paddingTop: '1.25rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.55rem',
                fontSize: '0.85rem',
                color: '#e2e8f0'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={15} style={{ color: '#34d399', flexShrink: 0 }} />
                  <span>Certifié Protocole Pitts 21 International</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={15} style={{ color: '#34d399', flexShrink: 0 }} />
                  <span>Praticien Aligneurs Invisibles Certifié</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={15} style={{ color: '#34d399', flexShrink: 0 }} />
                  <span>Cabinet Moderne au Centre de Draria</span>
                </div>
              </div>
            </div>
          </div>

          {/* Doctor Bio Details */}
          <div>
            <div className="section-tag">
              <Award size={14} />
              <span>À Propos du Praticien & du Cabinet</span>
            </div>

            <h2 style={{
              fontSize: '2.2rem',
              color: 'var(--color-navy)',
              marginBottom: '1rem',
              lineHeight: 1.2
            }} className="doctor-title">
              Une expertise de pointe dédiée à la <span className="text-gradient">beauté de votre sourire</span>
            </h2>

            <p style={{
              fontSize: '1rem',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
              marginBottom: '1rem'
            }}>
              {CLINIC_INFO.doctorBio}
            </p>

            <p style={{
              fontSize: '0.95rem',
              color: 'var(--text-muted)',
              lineHeight: 1.65,
              marginBottom: '1.75rem'
            }}>
              Chaque patient bénéficie d'une étude esthétique sur mesure tenant compte des proportions de son visage et de sa personnalité. Notre cabinet à Draria vous accueille dans un cadre moderne, chaleureux et serein.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }} className="doctor-actions">
              <button
                onClick={onOpenBooking}
                className="btn btn-primary"
              >
                Prendre Rendez-vous
              </button>
              <a
                href="#contact"
                className="btn btn-secondary"
              >
                Localiser à Draria
              </a>
            </div>
          </div>
        </div>

        {/* 4 Core Clinic Values */}
        <div style={{
          paddingTop: '2.5rem',
          borderTop: '1px solid var(--border-light)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }} className="values-header">
            <h3 style={{ fontSize: '1.6rem', color: 'var(--color-navy)', marginBottom: '0.4rem' }}>
              Nos Engagements de Prise en Charge
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Les 4 piliers d'excellence médicale de Khellaf Orthodontics.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem',
            width: '100%'
          }} className="values-grid">
            {values.map((v, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '1.5rem',
                  border: '1px solid var(--border-light)',
                  background: 'var(--bg-body)'
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
                  marginBottom: '0.85rem'
                }}>
                  {v.icon}
                </div>
                <h4 style={{
                  fontSize: '1.05rem',
                  color: 'var(--color-navy)',
                  marginBottom: '0.4rem',
                  fontWeight: 700
                }}>
                  {v.title}
                </h4>
                <p style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.55
                }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .doctor-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .doctor-title {
            font-size: 1.85rem !important;
          }
          .doctor-card {
            padding: 1.5rem !important;
          }
        }
        @media (max-width: 640px) {
          .doctor-actions {
            flex-direction: column;
            width: 100%;
          }
          .doctor-actions button, .doctor-actions a {
            width: 100% !important;
            text-align: center;
          }
          .values-header {
            text-align: left !important;
          }
          .values-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
