import { Sparkles, Calendar, CheckCircle } from 'lucide-react';
import { PATIENT_STEPS } from '../../data/clinicData';

interface PatientExperienceProps {
  onOpenBooking: () => void;
}

export const PatientExperience = ({ onOpenBooking }: PatientExperienceProps) => {
  return (
    <section id="parcours" className="section" style={{ background: 'white' }}>
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          position: 'relative',
          marginBottom: '3.5rem'
        }} className="steps-grid">
          {PATIENT_STEPS.map((step) => (
            <div
              key={step.number}
              className="glass-card"
              style={{
                padding: '2rem',
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
                  marginBottom: '1.25rem'
                }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary-light) 100%)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '1.15rem',
                    fontFamily: 'var(--font-heading)',
                    boxShadow: '0 4px 12px rgba(13, 107, 99, 0.25)'
                  }}>
                    {step.number}
                  </div>

                  {step.badge && (
                    <span className="badge badge-teal" style={{ fontSize: '0.72rem' }}>
                      {step.badge}
                    </span>
                  )}
                </div>

                <h3 style={{
                  fontSize: '1.25rem',
                  color: 'var(--color-navy)',
                  marginBottom: '0.85rem',
                  lineHeight: 1.3
                }}>
                  {step.title}
                </h3>

                <p style={{
                  fontSize: '0.92rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6
                }}>
                  {step.description}
                </p>
              </div>

              <div style={{
                marginTop: '1.5rem',
                paddingTop: '1rem',
                borderTop: '1px dashed var(--border-light)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.8rem',
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
          style={{
            background: 'linear-gradient(135deg, var(--color-navy) 0%, #102e42 100%)',
            borderRadius: 'var(--radius-xl)',
            padding: '2.5rem 3rem',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.75rem',
            boxShadow: 'var(--shadow-lg)'
          }}
        >
          <div style={{ maxWidth: '650px' }}>
            <span className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>
              Première Étape
            </span>
            <h3 style={{ fontSize: '1.75rem', color: 'white', marginBottom: '0.5rem' }}>
              Planifiez votre bilan orthodontique initial
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '0.98rem', lineHeight: 1.6 }}>
              Prenez rendez-vous en quelques clics ou contactez notre équipe pour poser vos questions. Nous vous accueillons au cabinet de Draria avec le plus grand soin.
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
    </section>
  );
};
