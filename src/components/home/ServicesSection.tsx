import React, { useState } from 'react';
import { Sparkles, Glasses, Baby, UserCheck, ShieldCheck, CheckCircle2, Clock, Users, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../../data/clinicData';
import type { ServiceItem } from '../../types';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
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
    <section id="traitements" className="section" style={{ background: '#f8fafc' }}>
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
            Du dépistage de l'enfant à l'orthodontie invisible de l'adulte, nous mettons en œuvre les technologies orthodontiques les plus fiables et les plus discrètes.
          </p>
        </div>

        {/* Category Filters */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.6rem',
          flexWrap: 'wrap',
          marginBottom: '3rem'
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.65rem 1.4rem',
                borderRadius: 'var(--radius-full)',
                border: activeCategory === cat ? '1px solid var(--color-primary)' : '1px solid var(--border-light)',
                background: activeCategory === cat ? 'var(--color-primary)' : 'white',
                color: activeCategory === cat ? 'white' : 'var(--text-main)',
                fontWeight: 600,
                fontSize: '0.925rem',
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
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '2rem'
        }} className="services-grid">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="glass-card glass-card-hover"
              style={{
                padding: '2.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Top Card Line */}
              <div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '1.25rem'
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '14px',
                    background: 'var(--color-primary-subtle)',
                    color: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {renderIcon(service.iconName)}
                  </div>

                  {service.badge && (
                    <span className="badge badge-gold">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h3 style={{
                  fontSize: '1.35rem',
                  color: 'var(--color-navy)',
                  marginBottom: '0.75rem',
                  lineHeight: 1.3
                }}>
                  {service.title}
                </h3>

                <p style={{
                  fontSize: '0.95rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  marginBottom: '1.5rem'
                }}>
                  {service.shortDesc}
                </p>

                {/* Key Benefits List */}
                <div style={{ marginBottom: '1.75rem' }}>
                  <div style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: 'var(--text-light)',
                    letterSpacing: '0.05em',
                    marginBottom: '0.75rem'
                  }}>
                    Bénéfices majeurs
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                    {service.benefits.slice(0, 3).map((benefit, bIdx) => (
                      <li key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                        <CheckCircle2 size={16} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Duration & Target Badges */}
                <div style={{
                  padding: '1rem',
                  background: 'var(--bg-subtle)',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.83rem', color: 'var(--text-muted)' }}>
                    <Clock size={15} style={{ color: 'var(--color-primary)' }} />
                    <span><strong>Durée :</strong> {service.durationApprox}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.83rem', color: 'var(--text-muted)' }}>
                    <Users size={15} style={{ color: 'var(--color-accent)' }} />
                    <span><strong>Indications :</strong> {service.recommendedFor}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <button
                  onClick={() => onSelectService(service.id)}
                  className="btn btn-primary"
                  style={{ flex: 1 }}
                >
                  <span>Prendre RDV</span>
                  <ArrowRight size={16} />
                </button>

                <button
                  onClick={() => setSelectedServiceDetail(service)}
                  className="btn btn-secondary btn-sm"
                  style={{ padding: '0.75rem 1rem' }}
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
            style={{ padding: '2.5rem' }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1.5rem',
              borderBottom: '1px solid var(--border-light)',
              paddingBottom: '1rem'
            }}>
              <div>
                <span className="badge badge-teal" style={{ marginBottom: '0.5rem' }}>
                  {selectedServiceDetail.category}
                </span>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--color-navy)' }}>
                  {selectedServiceDetail.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedServiceDetail(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  color: 'var(--text-muted)'
                }}
              >
                ✕
              </button>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '1rem', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>Description Médicale</h4>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                {selectedServiceDetail.fullDesc}
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '1rem', color: 'var(--color-navy)', marginBottom: '0.75rem' }}>Tous les Avantages</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {selectedServiceDetail.benefits.map((b, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--color-primary)' }} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{
              background: 'var(--bg-subtle)',
              padding: '1.25rem',
              borderRadius: 'var(--radius-md)',
              marginBottom: '2rem'
            }}>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                <strong>Recommandé pour :</strong> {selectedServiceDetail.recommendedFor}
              </p>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                <strong>Durée prévisionnelle :</strong> {selectedServiceDetail.durationApprox}
              </p>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                onClick={() => {
                  const id = selectedServiceDetail.id;
                  setSelectedServiceDetail(null);
                  onSelectService(id);
                }}
                className="btn btn-primary"
                style={{ flex: 1 }}
              >
                Prendre rendez-vous pour ce soin
              </button>
              <button
                onClick={() => setSelectedServiceDetail(null)}
                className="btn btn-secondary"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
