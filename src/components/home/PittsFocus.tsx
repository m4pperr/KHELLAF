import { Sparkles, Smile, SunMedium, Feather, Clock, ArrowRight } from 'lucide-react';
import { PITTS_HIGHLIGHTS } from '../../data/clinicData';

interface PittsFocusProps {
  onOpenBooking: () => void;
}

export const PittsFocus = ({ onOpenBooking }: PittsFocusProps) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smile': return <Smile size={24} />;
      case 'SunMedium': return <SunMedium size={24} />;
      case 'Feather': return <Feather size={24} />;
      case 'Clock': return <Clock size={24} />;
      default: return <Sparkles size={24} />;
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
        position: 'relative'
      }}
    >
      {/* Decorative ambient lighting elements */}
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '-10%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'rgba(20, 148, 136, 0.15)',
        filter: 'blur(80px)',
        pointerEvents: 'none'
      }} />

      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '-5%',
        width: '450px',
        height: '450px',
        borderRadius: '50%',
        background: 'rgba(217, 119, 6, 0.12)',
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
          <h2 style={{ color: 'white', fontSize: '2.75rem', marginBottom: '1.25rem' }}>
            Le Protocole <span className="text-gradient-gold">Pitts 21</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.15rem', maxWidth: '680px', margin: '0 auto' }}>
            Bien plus qu'un simple alignement de dents : une approche globale conçue pour sculpter un sourire harmonieux, épanoui et rayonnant avec un confort physiologique inégalé.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: '1.75rem',
          marginBottom: '3.5rem'
        }}>
          {PITTS_HIGHLIGHTS.map((item, idx) => (
            <div
              key={idx}
              className="dark-glass-card"
              style={{
                padding: '2rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'transform var(--transition-smooth), border-color var(--transition-smooth), box-shadow var(--transition-smooth)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = 'rgba(20, 148, 136, 0.5)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.35)';
              }}
            >
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, rgba(20, 148, 136, 0.3) 0%, rgba(217, 119, 6, 0.2) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#5eead4',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                {getIcon(item.icon)}
              </div>

              <h3 style={{
                color: 'white',
                fontSize: '1.25rem',
                marginBottom: '0.75rem',
                fontWeight: 700
              }}>
                {item.title}
              </h3>

              <p style={{
                color: '#cbd5e1',
                fontSize: '0.95rem',
                lineHeight: 1.6
              }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Deep Comparison Table: Traditional vs Pitts 21 */}
        <div
          className="dark-glass-card"
          style={{
            padding: '2.5rem',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: 'var(--radius-xl)',
            marginBottom: '3.5rem'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h3 style={{ color: 'white', fontSize: '1.65rem', marginBottom: '0.5rem' }}>
              Pourquoi choisir le système Pitts 21 chez Khellaf Orthodontics ?
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
              Comparatif direct entre l'orthodontie métallique conventionnelle et le protocole moderne Pitts 21.
            </p>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'separate',
              borderSpacing: '0 0.5rem',
              fontSize: '0.95rem'
            }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '1rem', color: '#94a3b8', fontWeight: 600 }}>Critère clinique</th>
                  <th style={{ textAlign: 'left', padding: '1rem', color: '#94a3b8', fontWeight: 600 }}>Bagues Classiques Antérieures</th>
                  <th style={{
                    textAlign: 'left',
                    padding: '1rem',
                    color: '#38bdf8',
                    fontWeight: 700,
                    background: 'rgba(20, 148, 136, 0.15)',
                    borderRadius: '8px 8px 0 0'
                  }}>
                    Protocole Pitts 21 (Dr. Khellaf)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <td style={{ padding: '1rem', fontWeight: 600, color: 'white', borderRadius: '8px 0 0 8px' }}>
                    Esthétique de l'arc du sourire
                  </td>
                  <td style={{ padding: '1rem', color: '#cbd5e1' }}>
                    Tendance à aplatir la ligne incisive
                  </td>
                  <td style={{ padding: '1rem', color: '#5eead4', fontWeight: 700, background: 'rgba(20, 148, 136, 0.15)', borderRadius: '0 8px 8px 0' }}>
                    Smile Arc Protection : courbure dynamique et jeune
                  </td>
                </tr>

                <tr style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <td style={{ padding: '1rem', fontWeight: 600, color: 'white', borderRadius: '8px 0 0 8px' }}>
                    Confort & Douleur
                  </td>
                  <td style={{ padding: '1rem', color: '#cbd5e1' }}>
                    Friction élevée, forces dures, élastiques ligaturés
                  </td>
                  <td style={{ padding: '1rem', color: '#5eead4', fontWeight: 700, background: 'rgba(20, 148, 136, 0.15)', borderRadius: '0 8px 8px 0' }}>
                    Auto-ligeant passif, forces ultra-douces et continues
                  </td>
                </tr>

                <tr style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <td style={{ padding: '1rem', fontWeight: 600, color: 'white', borderRadius: '8px 0 0 8px' }}>
                    Largeur du sourire
                  </td>
                  <td style={{ padding: '1rem', color: '#cbd5e1' }}>
                    Souvent étroit, laissant des coins d'ombre sombres
                  </td>
                  <td style={{ padding: '1rem', color: '#5eead4', fontWeight: 700, background: 'rgba(20, 148, 136, 0.15)', borderRadius: '0 8px 8px 0' }}>
                    Sourire 12 dents épanoui comblant les espaces latéraux
                  </td>
                </tr>

                <tr style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <td style={{ padding: '1rem', fontWeight: 600, color: 'white', borderRadius: '8px 0 0 8px' }}>
                    Espacement des rendez-vous
                  </td>
                  <td style={{ padding: '1rem', color: '#cbd5e1' }}>
                    Toutes les 4 semaines obligatoirement
                  </td>
                  <td style={{ padding: '1rem', color: '#5eead4', fontWeight: 700, background: 'rgba(20, 148, 136, 0.15)', borderRadius: '0 8px 8px 0' }}>
                    Toutes les 8 à 10 semaines (idéal patients actifs)
                  </td>
                </tr>

                <tr style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <td style={{ padding: '1rem', fontWeight: 600, color: 'white', borderRadius: '8px 0 0 8px' }}>
                    Extractions dentaires
                  </td>
                  <td style={{ padding: '1rem', color: '#cbd5e1' }}>
                    Fréquentes pour créer artificiellement de l'espace
                  </td>
                  <td style={{ padding: '1rem', color: '#5eead4', fontWeight: 700, background: 'rgba(20, 148, 136, 0.15)', borderRadius: '0 8px 8px 0' }}>
                    Évitées dans la très grande majorité des cas
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Action Banner */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(20, 148, 136, 0.25) 0%, rgba(217, 119, 6, 0.2) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: 'var(--radius-lg)',
          padding: '2rem 2.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <div>
            <h4 style={{ color: 'white', fontSize: '1.35rem', marginBottom: '0.35rem' }}>
              Prêt à découvrir si le protocole Pitts 21 est fait pour vous ?
            </h4>
            <p style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>
              Prenez rendez-vous pour un examen esthétique 3D complet avec le Dr. Khellaf à Draria.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="btn btn-gold btn-lg"
          >
            <span>Prendre RDV Bilan Pitts 21</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
