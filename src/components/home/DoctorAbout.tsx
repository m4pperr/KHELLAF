import React from 'react';
import { Award, ShieldCheck, HeartPulse, Sparkles, CheckCircle2, UserCheck, Stethoscope } from 'lucide-react';
import { CLINIC_INFO } from '../../data/clinicData';

interface DoctorAboutProps {
  onOpenBooking: () => void;
}

export const DoctorAbout: React.FC<DoctorAboutProps> = ({ onOpenBooking }) => {
  const values = [
    {
      title: 'Asepsie & Stérilisation Stricte',
      desc: 'Protocoles hospitaliers stricts, traçabilité numérique de chaque instrument et désinfection continue.',
      icon: <ShieldCheck size={22} />,
    },
    {
      title: 'Approche Non-Invasive',
      desc: 'Préservation maximale des dents naturelles, refus des extractions systématiques, respect de l\'architecture faciale.',
      icon: <HeartPulse size={22} />,
    },
    {
      title: 'Technologie 3D & Précision',
      desc: 'Empreintes optiques sans silicone, radiographie numérique à dose réduite et planification informatique au dixième de millimètre.',
      icon: <Sparkles size={22} />,
    },
    {
      title: 'Écoute & Relation Humaine',
      desc: 'Un accueil chaleureux, des explications claires et sans jargon médical pour que chaque patient soit pleinement acteur de son traitement.',
      icon: <UserCheck size={22} />,
    },
  ];

  return (
    <section id="cabinet" className="section" style={{ background: 'white' }}>
      <div className="container">
        {/* Section Doctor Presentation */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 0.95fr) minmax(0, 1.25fr)',
          gap: '3.5rem',
          alignItems: 'center',
          marginBottom: '5rem'
        }} className="doctor-grid">
          {/* Doctor Portrait Visual Representation */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, var(--color-navy) 0%, var(--color-primary-dark) 100%)',
                padding: '2.5rem',
                color: 'white',
                boxShadow: 'var(--shadow-xl)',
                position: 'relative',
              }}
            >
              {/* Doctor Avatar / Badge */}
              <div style={{
                width: '90px',
                height: '90px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.12)',
                border: '2px solid rgba(255, 255, 255, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                color: '#5eead4'
              }}>
                <Stethoscope size={44} />
              </div>

              <span className="badge badge-gold" style={{ marginBottom: '1rem' }}>
                Praticien Spécialiste
              </span>

              <h3 style={{
                fontSize: '2rem',
                color: 'white',
                marginBottom: '0.4rem',
                fontFamily: 'var(--font-heading)'
              }}>
                {CLINIC_INFO.doctor}
              </h3>

              <div style={{
                fontSize: '0.92rem',
                color: '#5eead4',
                fontWeight: 600,
                marginBottom: '1.5rem',
                lineHeight: 1.4
              }}>
                {CLINIC_INFO.doctorTitle}
              </div>

              <div style={{
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.65rem',
                fontSize: '0.88rem',
                color: '#e2e8f0'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} style={{ color: '#34d399' }} />
                  <span>Certifié Protocole Pitts 21 International</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} style={{ color: '#34d399' }} />
                  <span>Praticien Aligneurs Invisibles Certifié</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} style={{ color: '#34d399' }} />
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
              fontSize: '2.5rem',
              color: 'var(--color-navy)',
              marginBottom: '1.25rem',
              lineHeight: 1.2
            }}>
              Une expertise de pointe dédiée à la <span className="text-gradient">beauté de votre sourire</span>
            </h2>

            <p style={{
              fontSize: '1.05rem',
              color: 'var(--text-muted)',
              lineHeight: 1.75,
              marginBottom: '1.25rem'
            }}>
              {CLINIC_INFO.doctorBio}
            </p>

            <p style={{
              fontSize: '1rem',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
              marginBottom: '2rem'
            }}>
              Chaque patient bénéficie d'une étude esthétique sur mesure tenant compte des proportions de son visage, de la tonicité de ses lèvres et de sa personnalité. Notre cabinet à Draria a été conçu pour vous offrir un espace apaisant, digne des plus hauts standards médicaux internationaux.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={onOpenBooking}
                className="btn btn-primary"
              >
                Prendre Rendez-vous avec le Dr. Khellaf
              </button>
              <a
                href="#contact"
                className="btn btn-secondary"
              >
                Localiser le Cabinet à Draria
              </a>
            </div>
          </div>
        </div>

        {/* 4 Core Clinic Values */}
        <div style={{
          paddingTop: '3.5rem',
          borderTop: '1px solid var(--border-light)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '1.85rem', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
              Nos Engagements de Prise en Charge
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
              Les 4 piliers d'excellence qui font la réputation de Khellaf Orthodontics auprès de nos patients.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.75rem'
          }}>
            {values.map((v, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '1.85rem',
                  border: '1px solid var(--border-light)',
                  background: 'var(--bg-body)'
                }}
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
                  marginBottom: '1rem'
                }}>
                  {v.icon}
                </div>
                <h4 style={{
                  fontSize: '1.1rem',
                  color: 'var(--color-navy)',
                  marginBottom: '0.5rem',
                  fontWeight: 700
                }}>
                  {v.title}
                </h4>
                <p style={{
                  fontSize: '0.88rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6
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
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};
