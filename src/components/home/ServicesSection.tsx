import { useState } from 'react';
import { Sparkles, Glasses, Baby, UserCheck, ShieldCheck, CheckCircle2, Clock, Users, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../../data/clinicData';
import type { ServiceItem } from '../../types';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection = ({ onSelectService }: ServicesSectionProps) => {
  const [activeCategory, setActiveCategory] = useState<string>('Tous');
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<ServiceItem | null>(null);

  const categories = ['Tous', 'Spécialité', 'Aligneurs', 'Interception', 'Esthétique'];

  const filteredServices = activeCategory === 'Tous'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeCategory);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Glasses': return <Glasses size={22} />;
      case 'Baby': return <Baby size={22} />;
      case 'UserCheck': return <UserCheck size={22} />;
      case 'ShieldCheck': return <ShieldCheck size={22} />;
      default: return <Sparkles size={22} />;
    }
  };

  return (
    <section id="traitements" className="section" style={{ background: '#f8fafc', width: '100%' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Nos Traitements & Soins Spécialisés</span>
          </div>
          <h2 className="section-title">
            Des solutions sur mesure pour <span className="text-gradient">chaque sourire</span>
          </h2>
          <p className="section-subtitle">
            Du dépistage de l'enfant à l'orthodontie invisible de l'adulte, découvrez les technologies orthodontiques les plus fiables et les plus discrètes.
          </p>
        </div>

        {/* Category Filters */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.5rem',
          flexWrap: 'wrap',
          marginBottom: '2.5rem'
        }} className="category-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.5rem 1.15rem',
                borderRadius: 'var(--radius-full)',
                border: activeCategory === cat ? '1px solid var(--color-primary)' : '1px solid var(--border-light)',
                background: activeCategory === cat ? 'var(--color-primary)' : 'white',
                color: activeCategory === cat ? 'white' : 'var(--text-main)',
                fontWeight: 600,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
                boxShadow: activeCategory === cat ? '0 4px 14px rgba(13, 107, 99, 0.25)' : 'var(--shadow-xs)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem',
          width: '100%'
        }} className="services-grid">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="glass-card glass-card-hover service-card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                width: '100%'
              }}
            >
              {/* Top Card Content */}
              <div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '1rem',
                  gap: '0.5rem'
                }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'var(--color-primary-subtle)',
                    color: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {renderIcon(service.iconName)}
                  </div>

                  {service.badge && (
                    <span className="badge badge-gold" style={{ fontSize: '0.72rem' }}>
                      {service.badge}
                    </span>
                  )}
                </div>

                <h3 style={{
                  fontSize: '1.25rem',
                  color: 'var(--color-navy)',
                  marginBottom: '0.65rem',
                  lineHeight: 1.3
                }}>
                  {service.title}
                </h3>

                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  marginBottom: '1.25rem'
                }}>
                  {service.shortDesc}
                </p>

                {/* Key Benefits List */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: 'var(--text-light)',
                    letterSpacing: '0.05em',
                    marginBottom: '0.65rem'
                  }}>
                    Bénéfices majeurs
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {service.benefits.slice(0, 3).map((benefit, bIdx) => (
                      <li key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                        <CheckCircle2 size={15} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Duration & Target Badges */}
                <div style={{
                  padding: '0.85rem',
                  background: 'var(--bg-subtle)',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.45rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    <Clock size={14} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                    <span><strong>Durée :</strong> {service.durationApprox}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    <Users size={14} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                    <span><strong>Indications :</strong> {service.recommendedFor}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                <button
                  onClick={() => onSelectService(service.id)}
                  className="btn btn-primary"
                  style={{ flex: 1, padding: '0.75rem 1rem' }}
                >
                  <span>Prendre RDV</span>
                  <ArrowRight size={15} />
                </button>

                <button
                  onClick={() => setSelectedServiceDetail(service)}
                  className="btn btn-secondary btn-sm"
                  style={{ padding: '0.75rem 0.9rem' }}
                  title="En savoir plus"
                >
                  Détails
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedServiceDetail && (
        <div className="modal-backdrop" onClick={() => setSelectedServiceDetail(null)}>
          <div
            className="modal-container"
            onClick={(e) => e.stopPropagation()}
            style={{ padding: '1.75rem' }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '1.25rem',
              borderBottom: '1px solid var(--border-light)',
              paddingBottom: '0.85rem',
              gap: '1rem'
            }}>
              <div>
                <span className="badge badge-teal" style={{ marginBottom: '0.4rem' }}>
                  {selectedServiceDetail.category}
                </span>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--color-navy)' }}>
                  {selectedServiceDetail.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedServiceDetail(null)}
                style={{
                  background: 'var(--bg-subtle)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'var(--text-muted)',
                  flexShrink: 0
                }}
              >
                ✕
              </button>
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <h4 style={{ fontSize: '0.95rem', color: 'var(--color-navy)', marginBottom: '0.4rem' }}>Description Médicale</h4>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.65, fontSize: '0.9rem' }}>
                {selectedServiceDetail.fullDesc}
              </p>
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <h4 style={{ fontSize: '0.95rem', color: 'var(--color-navy)', marginBottom: '0.65rem' }}>Tous les Avantages</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                {selectedServiceDetail.benefits.map((b, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem' }}>
                    <CheckCircle2 size={15} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{
              background: 'var(--bg-subtle)',
              padding: '1rem',
              borderRadius: 'var(--radius-md)',
              marginBottom: '1.5rem'
            }}>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                <strong>Recommandé pour :</strong> {selectedServiceDetail.recommendedFor}
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <strong>Durée prévisionnelle :</strong> {selectedServiceDetail.durationApprox}
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexDirection: 'column' }}>
              <button
                onClick={() => {
                  const id = selectedServiceDetail.id;
                  setSelectedServiceDetail(null);
                  onSelectService(id);
                }}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                Prendre RDV pour ce soin
              </button>
              <button
                onClick={() => setSelectedServiceDetail(null)}
                className="btn btn-secondary"
                style={{ width: '100%' }}
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .category-filters {
            justify-content: flex-start !important;
            overflow-x: auto;
            padding-bottom: 0.5rem;
            flex-wrap: nowrap !important;
            -webkit-overflow-scrolling: touch;
          }
          .category-filters button {
            white-space: nowrap;
            flex-shrink: 0;
          }
          .services-grid {
            grid-template-columns: 1fr !important;
          }
          .service-card {
            padding: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
};
