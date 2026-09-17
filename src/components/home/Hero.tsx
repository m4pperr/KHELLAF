import { Sparkles, Calendar, ArrowRight, ShieldCheck, Star, Award } from 'lucide-react';
import { CLINIC_INFO, CLINIC_STATS } from '../../data/clinicData';

interface HeroProps {
  onOpenBooking: () => void;
  onExplorePitts: () => void;
}

export const Hero = ({ onOpenBooking, onExplorePitts }: HeroProps) => {
  return (
    <section
      id="accueil"
      className="hero-section"
      style={{
        position: 'relative',
        paddingTop: '3rem',
        paddingBottom: '4.5rem',
        background: 'radial-gradient(circle at 85% 15%, rgba(20, 148, 136, 0.12) 0%, transparent 50%), radial-gradient(circle at 10% 80%, rgba(13, 107, 99, 0.08) 0%, transparent 45%), #f8fafc',
        overflow: 'hidden',
        width: '100%'
      }}
    >
      {/* Subtle decorative background shapes */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(20, 148, 136, 0.08), rgba(217, 119, 6, 0.05))',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.95fr)',
          gap: '3rem',
          alignItems: 'center'
        }} className="hero-grid">
          {/* Left Hero Content */}
          <div>
            {/* Top Eyebrow Tag */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 0.9rem',
                background: 'white',
                border: '1px solid rgba(20, 148, 136, 0.25)',
                borderRadius: 'var(--radius-full)',
                boxShadow: 'var(--shadow-sm)',
                marginBottom: '1.25rem',
                flexWrap: 'wrap',
                maxWidth: '100%'
              }}
            >
              <span style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: 'var(--color-primary-subtle)',
                color: 'var(--color-primary)',
                flexShrink: 0
              }}>
                <Sparkles size={12} />
              </span>
              <span style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                color: 'var(--color-navy)',
                letterSpacing: '0.01em',
              }}>
                Cabinet Orthodontique à Draria, Alger
              </span>
              <span className="badge badge-gold" style={{ fontSize: '0.68rem', padding: '0.15rem 0.45rem' }}>
                Pitts 21 & Aligneurs
              </span>
            </div>

            {/* Main Headline */}
            <h1 style={{
              fontSize: '3.1rem',
              lineHeight: 1.18,
              color: 'var(--color-navy)',
              marginBottom: '1.25rem',
              letterSpacing: '-0.03em',
            }} className="hero-headline">
              L'art de réinventer <br />
              <span className="text-gradient">votre sourire</span> avec élégance & précision.
            </h1>

            {/* Description */}
            <p style={{
              fontSize: '1.05rem',
              lineHeight: 1.65,
              color: 'var(--text-muted)',
              marginBottom: '2rem',
              maxWidth: '560px',
            }} className="hero-desc">
              Bienvenue chez <strong>Khellaf Orthodontics</strong>. Spécialiste de l'orthodontie moderne : protocole novateur <strong>Pitts 21</strong>, aligneurs invisibles thermoformés et orthodontie douce pour enfants, adolescents et adultes.
            </p>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              gap: '0.85rem',
              alignItems: 'center',
              flexWrap: 'wrap',
              marginBottom: '2.5rem',
            }} className="hero-actions">
              <button
                onClick={onOpenBooking}
                className="btn btn-primary btn-lg"
                style={{
                  boxShadow: '0 8px 25px rgba(13, 107, 99, 0.35)',
                }}
              >
                <Calendar size={18} />
                <span>Prendre Rendez-vous</span>
              </button>

              <button
                onClick={onExplorePitts}
                className="btn btn-secondary btn-lg"
              >
                <span>Découvrir le Protocole Pitts 21</span>
                <ArrowRight size={17} style={{ color: 'var(--color-primary)' }} />
              </button>
            </div>

            {/* Trust Badges Bar */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1.25rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--border-light)',
            }} className="trust-badges-grid">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'var(--color-primary-subtle)',
                  color: 'var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--color-navy)' }}>
                    Scanner 3D Intra-oral
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    Précision & sans pâte
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'var(--color-accent-subtle)',
                  color: 'var(--color-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Award size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--color-navy)' }}>
                    Smile Arc Protection
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    Sourire large & rajeuni
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Card with Interactive Aesthetic Highlights */}
          <div style={{ position: 'relative', width: '100%' }}>
            <div
              className="glass-card hero-card"
              style={{
                background: 'linear-gradient(145deg, #ffffff 0%, #f0fdfa 100%)',
                border: '1px solid rgba(20, 148, 136, 0.2)',
                boxShadow: '0 25px 60px -15px rgba(11, 31, 46, 0.15)',
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden',
                width: '100%'
              }}
            >
              {/* Card Header */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1.25rem',
                paddingBottom: '0.85rem',
                borderBottom: '1px solid var(--border-light)'
              }}>
                <div>
                  <div style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--color-primary)'
                  }}>
                    Cabinet Spécialisé Draria
                  </div>
                  <div style={{
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    color: 'var(--color-navy)',
                    fontFamily: 'var(--font-heading)'
                  }}>
                    {CLINIC_INFO.doctor}
                  </div>
                </div>
                <div className="badge badge-teal">
                  <Star size={12} fill="currentColor" />
                  <span>5.0 • Avis</span>
                </div>
              </div>

              {/* Graphical Smile Arc Presentation */}
              <div
                style={{
                  background: 'linear-gradient(135deg, #071520 0%, #0d2b3e 100%)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.5rem',
                  color: 'white',
                  marginBottom: '1.25rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '0.75rem'
                }}>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: '#5eead4'
                  }}>
                    Innovation Esthétique
                  </span>
                  <span style={{
                    background: 'rgba(255,255,255,0.15)',
                    padding: '0.15rem 0.5rem',
                    borderRadius: '999px',
                    fontSize: '0.72rem',
                  }}>
                    Pitts 21
                  </span>
                </div>

                <div style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  marginBottom: '0.4rem',
                  fontFamily: 'var(--font-heading)'
                }}>
                  Le Sourire 12 Dents Élargi
                </div>

                <p style={{
                  fontSize: '0.85rem',
                  color: '#94a3b8',
                  lineHeight: 1.5,
                  marginBottom: '1rem'
                }}>
                  Alignement suivant la courbure naturelle des lèvres pour un éclat jeune et un visage soutenu.
                </p>

                {/* Smile Arc Curve Highlights */}
                <div style={{
                  padding: '0.65rem 0.75rem',
                  background: 'rgba(255, 255, 255, 0.06)',
                  borderRadius: '8px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-around'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.68rem', color: '#94a3b8' }}>Friction</div>
                    <div style={{ fontWeight: 700, color: '#34d399', fontSize: '0.85rem' }}>Basse</div>
                  </div>
                  <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.15)' }} />
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.68rem', color: '#94a3b8' }}>Visites</div>
                    <div style={{ fontWeight: 700, color: '#38bdf8', fontSize: '0.85rem' }}>Espacées</div>
                  </div>
                  <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.15)' }} />
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.68rem', color: '#94a3b8' }}>Extractions</div>
                    <div style={{ fontWeight: 700, color: '#fbbf24', fontSize: '0.85rem' }}>Évitées</div>
                  </div>
                </div>
              </div>

              {/* Grid of 4 Key Stats */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0.75rem'
              }}>
                {CLINIC_STATS.map((stat, i) => (
                  <div
                    key={i}
                    style={{
                      background: 'white',
                      padding: '0.85rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-light)',
                      boxShadow: 'var(--shadow-xs)'
                    }}
                  >
                    <div style={{
                      fontSize: '1.35rem',
                      fontWeight: 800,
                      color: 'var(--color-primary)',
                      fontFamily: 'var(--font-heading)',
                      lineHeight: 1.1
                    }}>
                      {stat.value}
                    </div>
                    <div style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                      fontWeight: 600,
                      marginTop: '0.15rem'
                    }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct Appointment Mini CTA */}
              <div style={{
                marginTop: '1rem',
                padding: '0.75rem 0.9rem',
                background: 'var(--color-primary-subtle)',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div className="status-dot" />
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-primary-dark)' }}>
                    Nouveaux patients bienvenus
                  </span>
                </div>
                <button
                  onClick={onOpenBooking}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--color-primary)',
                    fontWeight: 700,
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}
                >
                  Réserver <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .hero-headline {
            font-size: 2.2rem !important;
          }
        }
        @media (max-width: 640px) {
          .hero-section {
            padding-top: 2rem !important;
            padding-bottom: 3rem !important;
          }
          .hero-headline {
            font-size: 1.85rem !important;
          }
          .hero-desc {
            font-size: 0.95rem !important;
            margin-bottom: 1.5rem !important;
          }
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .hero-actions button {
            width: 100% !important;
          }
          .hero-card {
            padding: 1.25rem !important;
          }
          .trust-badges-grid {
            grid-template-columns: 1fr !important;
            gap: 0.85rem !important;
          }
        }
        @media (max-width: 380px) {
          .hero-headline {
            font-size: 1.6rem !important;
          }
        }
      `}</style>
    </section>
  );
};
