import { Sparkles, Calendar, CheckCircle } from 'lucide-react';
import { PATIENT_STEPS } from '../../data/clinicData';

interface PatientExperienceProps {
  onOpenBooking: () => void;
}

export const PatientExperience = ({ onOpenBooking }: PatientExperienceProps) => {
  return (
    <section id="parcours" className="section" style={{ background: 'white', width: '100%' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Votre Traitement Étape par Étape</span>
          </div>
          <h2 className="section-title">
            Un parcours serein, <span className="text-gradient">sans surprise</span>
          </h2>
          <p className="section-subtitle">
            Dès votre première visite au cabinet de Draria jusqu'au retrait de vos appareils, nous vous guidons avec bienveillance, clarté et écoute.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem',
          position: 'relative',
          marginBottom: '3rem',
          width: '100%'
        }} className="steps-grid">
          {PATIENT_STEPS.map((step) => (
            <div
              key={step.number}
              className="glass-card step-card"
              style={{
                padding: '1.75rem',
                border: '1px solid var(--border-light)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {/* Number Watermark & Badge */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary-light) 100%)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '1.1rem',
                    fontFamily: 'var(--font-heading)',
                    boxShadow: '0 4px 12px rgba(13, 107, 99, 0.25)'
                  }}>
                    {step.number}
                  </div>

                  {step.badge && (
                    <span className="badge badge-teal" style={{ fontSize: '0.7rem' }}>
                      {step.badge}
                    </span>
                  )}
                </div>

                <h3 style={{
                  fontSize: '1.15rem',
                  color: 'var(--color-navy)',
                  marginBottom: '0.65rem',
                  lineHeight: 1.3
                }}>
                  {step.title}
                </h3>

                <p style={{
                  fontSize: '0.88rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6
                }}>
                  {step.description}
                </p>
              </div>

              <div style={{
                marginTop: '1.25rem',
                paddingTop: '0.85rem',
                borderTop: '1px dashed var(--border-light)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.78rem',
                color: 'var(--color-primary)',
                fontWeight: 600
              }}>
                <CheckCircle size={14} />
                <span>Accompagnement continu</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div
          className="experience-cta-card"
          style={{
            background: 'linear-gradient(135deg, var(--color-navy) 0%, #102e42 100%)',
            borderRadius: 'var(--radius-xl)',
            padding: '2.25rem 2.5rem',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            boxShadow: 'var(--shadow-lg)'
          }}
        >
          <div style={{ maxWidth: '650px' }}>
            <span className="badge badge-gold" style={{ marginBottom: '0.65rem' }}>
              Première Étape
            </span>
            <h3 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '0.4rem' }}>
              Planifiez votre bilan orthodontique initial
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.6 }}>
              Prenez rendez-vous en quelques clics ou contactez notre secrétariat médical à Draria.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="btn btn-gold btn-lg"
          >
            <Calendar size={18} />
            <span>Réserver une consultation</span>
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .steps-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          .step-card {
            padding: 1.25rem !important;
          }
          .experience-cta-card {
            padding: 1.5rem !important;
            flex-direction: column;
            text-align: left;
            align-items: flex-start;
          }
          .experience-cta-card button {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};
