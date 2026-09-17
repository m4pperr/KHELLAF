import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../data/clinicData';

export const TestimonialsSection = () => {
  return (
    <section className="section" style={{ background: '#f8fafc' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag section-tag-gold">
            <Star size={14} fill="currentColor" />
            <span>Témoignages & Avis Vérifiés</span>
          </div>
          <h2 className="section-title">
            Ce que nos patients disent de <span className="text-gradient">leur expérience</span>
          </h2>
          <p className="section-subtitle">
            La plus belle récompense de notre métier est de voir nos patients sourire avec assurance et fierté.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover"
              style={{
                padding: '2.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'white',
                border: '1px solid var(--border-light)'
              }}
            >
              <div>
                {/* Rating & Quote Icon */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1.25rem'
                }}>
                  <div style={{ display: 'flex', gap: '3px', color: '#f59e0b' }}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={17} fill="currentColor" />
                    ))}
                  </div>
                  <Quote size={24} style={{ color: 'var(--color-primary-light)', opacity: 0.4 }} />
                </div>

                <p style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                  color: 'var(--text-main)',
                  fontStyle: 'italic',
                  marginBottom: '1.5rem'
                }}>
                  « {t.comment} »
                </p>
              </div>

              <div style={{
                borderTop: '1px solid var(--border-light)',
                paddingTop: '1.25rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <div style={{
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: 'var(--color-navy)'
                  }}>
                    {t.name}
                  </div>
                  <div style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)'
                  }}>
                    {t.role}
                  </div>
                </div>

                <span className="badge badge-teal" style={{ fontSize: '0.72rem' }}>
                  {t.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
