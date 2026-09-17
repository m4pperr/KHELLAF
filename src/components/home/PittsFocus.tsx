import { Sparkles, Smile, SunMedium, Feather, Clock, ArrowRight } from 'lucide-react';
import { PITTS_HIGHLIGHTS } from '../../data/clinicData';

interface PittsFocusProps {
  onOpenBooking: () => void;
}

export const PittsFocus = ({ onOpenBooking }: PittsFocusProps) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smile': return <Smile size={22} />;
      case 'SunMedium': return <SunMedium size={22} />;
      case 'Feather': return <Feather size={22} />;
      case 'Clock': return <Clock size={22} />;
      default: return <Sparkles size={22} />;
    }
  };

  return (
    <section
      id="pitts21"
      className="section"
      style={{
        background: 'linear-gradient(180deg, #071520 0%, #0c2333 50%, #071520 100%)',
        color: 'white',
        overflow: 'hidden',
        position: 'relative',
        width: '100%'
      }}
    >
      {/* Decorative ambient lighting elements */}
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '-10%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'rgba(20, 148, 136, 0.15)',
        filter: 'blur(80px)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag section-tag-gold" style={{ background: 'rgba(217, 119, 6, 0.2)', color: '#fbbf24' }}>
            <Sparkles size={14} />
            <span>Spécialité Mondiale d'Avant-Garde</span>
          </div>
          <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1rem' }} className="pitts-title">
            Le Protocole <span className="text-gradient-gold">Pitts 21</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '680px', margin: '0 auto' }}>
            Bien plus qu'un simple alignement de dents : une approche globale conçue pour sculpter un sourire harmonieux, épanoui et rayonnant avec un confort physiologique inégalé.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem'
        }} className="pitts-cards-grid">
          {PITTS_HIGHLIGHTS.map((item, idx) => (
            <div
              key={idx}
              className="dark-glass-card pitts-card"
              style={{
                padding: '1.75rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'transform var(--transition-smooth), border-color var(--transition-smooth)'
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(20, 148, 136, 0.3) 0%, rgba(217, 119, 6, 0.2) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#5eead4',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                {getIcon(item.icon)}
              </div>

              <h3 style={{
                color: 'white',
                fontSize: '1.15rem',
                marginBottom: '0.65rem',
                fontWeight: 700
              }}>
                {item.title}
              </h3>

              <p style={{
                color: '#cbd5e1',
                fontSize: '0.9rem',
                lineHeight: 1.6
              }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Table: Traditional vs Pitts 21 */}
        <div
          className="dark-glass-card comparison-box"
          style={{
            padding: '2rem',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: 'var(--radius-xl)',
            marginBottom: '3rem',
            width: '100%',
            overflow: 'hidden'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
            <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '0.4rem' }}>
              Pourquoi choisir le système Pitts 21 ?
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
              Glissez horizontalement pour comparer les critères cliniques.
            </p>
          </div>

          <div style={{
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
            width: '100%',
            paddingBottom: '0.5rem'
          }}>
            <table style={{
              width: '100%',
              minWidth: '540px',
              borderCollapse: 'separate',
              borderSpacing: '0 0.5rem',
              fontSize: '0.9rem'
            }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '0.85rem', color: '#94a3b8', fontWeight: 600 }}>Critère clinique</th>
                  <th style={{ textAlign: 'left', padding: '0.85rem', color: '#94a3b8', fontWeight: 600 }}>Bagues Classiques</th>
                  <th style={{
                    textAlign: 'left',
                    padding: '0.85rem',
                    color: '#38bdf8',
                    fontWeight: 700,
                    background: 'rgba(20, 148, 136, 0.15)',
                    borderRadius: '8px 8px 0 0'
                  }}>
                    Protocole Pitts 21
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <td style={{ padding: '0.85rem', fontWeight: 600, color: 'white', borderRadius: '8px 0 0 8px' }}>
                    Arc du sourire
                  </td>
                  <td style={{ padding: '0.85rem', color: '#cbd5e1' }}>
                    Tendance à aplatir la ligne
                  </td>
                  <td style={{ padding: '0.85rem', color: '#5eead4', fontWeight: 700, background: 'rgba(20, 148, 136, 0.15)', borderRadius: '0 8px 8px 0' }}>
                    Smile Arc Protection jeune
                  </td>
                </tr>

                <tr style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <td style={{ padding: '0.85rem', fontWeight: 600, color: 'white', borderRadius: '8px 0 0 8px' }}>
                    Confort & Douleur
                  </td>
                  <td style={{ padding: '0.85rem', color: '#cbd5e1' }}>
                    Friction élevée, forces dures
                  </td>
                  <td style={{ padding: '0.85rem', color: '#5eead4', fontWeight: 700, background: 'rgba(20, 148, 136, 0.15)', borderRadius: '0 8px 8px 0' }}>
                    Forces ultra-douces passives
                  </td>
                </tr>

                <tr style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <td style={{ padding: '0.85rem', fontWeight: 600, color: 'white', borderRadius: '8px 0 0 8px' }}>
                    Largeur du sourire
                  </td>
                  <td style={{ padding: '0.85rem', color: '#cbd5e1' }}>
                    Étroit, couloirs sombres
                  </td>
                  <td style={{ padding: '0.85rem', color: '#5eead4', fontWeight: 700, background: 'rgba(20, 148, 136, 0.15)', borderRadius: '0 8px 8px 0' }}>
                    Sourire 12 dents épanoui
                  </td>
                </tr>

                <tr style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <td style={{ padding: '0.85rem', fontWeight: 600, color: 'white', borderRadius: '8px 0 0 8px' }}>
                    Espacement des RDV
                  </td>
                  <td style={{ padding: '0.85rem', color: '#cbd5e1' }}>
                    Toutes les 4 semaines
                  </td>
                  <td style={{ padding: '0.85rem', color: '#5eead4', fontWeight: 700, background: 'rgba(20, 148, 136, 0.15)', borderRadius: '0 8px 8px 0' }}>
                    Toutes les 8 à 10 semaines
                  </td>
                </tr>

                <tr style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <td style={{ padding: '0.85rem', fontWeight: 600, color: 'white', borderRadius: '8px 0 0 8px' }}>
                    Extractions
                  </td>
                  <td style={{ padding: '0.85rem', color: '#cbd5e1' }}>
                    Fréquentes
                  </td>
                  <td style={{ padding: '0.85rem', color: '#5eead4', fontWeight: 700, background: 'rgba(20, 148, 136, 0.15)', borderRadius: '0 8px 8px 0' }}>
                    Évitées dans la majorité des cas
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Action Banner */}
        <div
          className="pitts-banner"
          style={{
            background: 'linear-gradient(135deg, rgba(20, 148, 136, 0.25) 0%, rgba(217, 119, 6, 0.2) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.75rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.25rem'
          }}
        >
          <div>
            <h4 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '0.25rem' }}>
              Envie d'un bilan pour votre sourire ?
            </h4>
            <p style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>
              Examen esthétique 3D complet avec le Dr. Khellaf à Draria.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="btn btn-gold"
          >
            <span>Prendre RDV Pitts 21</span>
            <ArrowRight size={17} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .pitts-title {
            font-size: 1.85rem !important;
          }
          .pitts-cards-grid {
            grid-template-columns: 1fr !important;
          }
          .pitts-card {
            padding: 1.25rem !important;
          }
          .comparison-box {
            padding: 1.25rem !important;
          }
          .pitts-banner {
            padding: 1.25rem !important;
            flex-direction: column;
            text-align: left;
            align-items: flex-start;
          }
          .pitts-banner button {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};
