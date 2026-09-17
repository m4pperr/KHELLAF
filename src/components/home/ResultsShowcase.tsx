import { useState } from 'react';
import { Sparkles, CheckCircle, Clock, User, ArrowRight } from 'lucide-react';
import { BEFORE_AFTER_CASES } from '../../data/clinicData';

interface ResultsShowcaseProps {
  onOpenBooking: () => void;
}

export const ResultsShowcase = ({ onOpenBooking }: ResultsShowcaseProps) => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const activeCase = BEFORE_AFTER_CASES[activeCaseIndex];

  return (
    <section id="resultats" className="section" style={{ background: '#f1f5f9', width: '100%' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Cas Cliniques & Transformations</span>
          </div>
          <h2 className="section-title">
            Des résultats visibles, durables et <span className="text-gradient">naturels</span>
          </h2>
          <p className="section-subtitle">
            Chaque sourire est une signature unique. Découvrez des exemples de traitements réalisés au cabinet avec le protocole Pitts 21 et nos aligneurs transparents.
          </p>
        </div>

        {/* Case selector tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.5rem',
          flexWrap: 'wrap',
          marginBottom: '2rem'
        }} className="case-tabs">
          {BEFORE_AFTER_CASES.map((c, idx) => (
            <button
              key={c.id}
              onClick={() => setActiveCaseIndex(idx)}
              style={{
                padding: '0.55rem 1.15rem',
                borderRadius: 'var(--radius-md)',
                background: activeCaseIndex === idx ? 'var(--color-navy)' : 'white',
                color: activeCaseIndex === idx ? 'white' : 'var(--text-main)',
                border: '1px solid var(--border-light)',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.85rem',
                boxShadow: activeCaseIndex === idx ? 'var(--shadow-md)' : 'var(--shadow-xs)',
                transition: 'all var(--transition-fast)'
              }}
            >
              Cas #{idx + 1} : {c.badge}
            </button>
          ))}
        </div>

        {/* Main Transformation Feature Box */}
        <div
          className="glass-card results-box"
          style={{
            padding: '2rem',
            borderRadius: 'var(--radius-xl)',
            background: 'white',
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-lg)',
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 1.3fr)',
            gap: '2.5rem',
            alignItems: 'center',
            width: '100%'
          }}
        >
          {/* Visual Showcase Representation */}
          <div
            style={{
              background: 'linear-gradient(145deg, #071520 0%, #0d2b3e 100%)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.75rem',
              color: 'white',
              position: 'relative',
              overflow: 'hidden'
            }}
            className="results-visual-card"
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1.25rem'
            }}>
              <span className="badge badge-gold" style={{ fontSize: '0.75rem' }}>
                {activeCase.badge}
              </span>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                Cas clinique documenté
              </span>
            </div>

            {/* Visual Transformation Simulation Card */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '1.25rem',
              marginBottom: '1.25rem'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.75rem',
                textAlign: 'center'
              }}>
                <div style={{
                  padding: '1rem 0.5rem',
                  background: 'rgba(0,0,0,0.25)',
                  borderRadius: '8px',
                  border: '1px dashed rgba(255,255,255,0.2)'
                }}>
                  <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: '#f87171', fontWeight: 700, marginBottom: '0.25rem' }}>
                    Avant Traitement
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#cbd5e1' }}>
                    Malposition & décalage
                  </div>
                </div>

                <div style={{
                  padding: '1rem 0.5rem',
                  background: 'rgba(20, 148, 136, 0.25)',
                  borderRadius: '8px',
                  border: '1px solid rgba(45, 212, 191, 0.4)'
                }}>
                  <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: '#34d399', fontWeight: 700, marginBottom: '0.25rem' }}>
                    Après Traitement
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#e6f6f4', fontWeight: 600 }}>
                    Alignement & Arc élargi
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Metrics */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.82rem',
              color: '#94a3b8',
              paddingTop: '0.65rem',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              flexWrap: 'wrap',
              gap: '0.5rem'
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Clock size={14} style={{ color: '#38bdf8' }} />
                Durée : <strong>{activeCase.duration}</strong>
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <User size={14} style={{ color: '#fbbf24' }} />
                Profil : <strong>{activeCase.patientAge}</strong>
              </span>
            </div>
          </div>

          {/* Details & Clinical Findings */}
          <div>
            <div style={{
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: 'var(--color-primary)',
              letterSpacing: '0.04em',
              marginBottom: '0.4rem'
            }}>
              Diagnostic & Stratégie Thérapeutique
            </div>

            <h3 style={{
              fontSize: '1.45rem',
              color: 'var(--color-navy)',
              marginBottom: '0.75rem',
              lineHeight: 1.25
            }}>
              {activeCase.title}
            </h3>

            <p style={{
              fontSize: '0.92rem',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
              marginBottom: '1.25rem'
            }}>
              {activeCase.description}
            </p>

            <div style={{
              padding: '1rem',
              background: 'var(--bg-subtle)',
              borderRadius: 'var(--radius-md)',
              marginBottom: '1.5rem'
            }}>
              <div style={{
                fontSize: '0.82rem',
                fontWeight: 700,
                color: 'var(--color-navy)',
                marginBottom: '0.65rem'
              }}>
                Dispositif appliqué : <span style={{ color: 'var(--color-primary)' }}>{activeCase.treatment}</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                {activeCase.results.map((res, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                    <CheckCircle size={15} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="btn btn-primary"
            >
              <span>Demander un avis pour mon sourire</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .results-box {
            grid-template-columns: 1fr !important;
            padding: 1.25rem !important;
            gap: 1.5rem !important;
          }
          .results-visual-card {
            padding: 1.25rem !important;
          }
        }
        @media (max-width: 640px) {
          .case-tabs {
            justify-content: flex-start !important;
            overflow-x: auto;
            flex-wrap: nowrap !important;
            padding-bottom: 0.5rem;
            -webkit-overflow-scrolling: touch;
          }
          .case-tabs button {
            white-space: nowrap;
            flex-shrink: 0;
          }
        }
      `}</style>
    </section>
  );
};
