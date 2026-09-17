import { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../../data/clinicData';

export const FaqSection = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1]);

  const toggleIndex = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <section className="section" style={{ background: 'white' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <HelpCircle size={14} />
            <span>Foire Aux Questions</span>
          </div>
          <h2 className="section-title">
            Questions fréquentes sur <span className="text-gradient">l'orthodontie</span>
          </h2>
          <p className="section-subtitle">
            Retrouvez les réponses aux questions que se posent le plus fréquemment nos futurs patients et les parents.
          </p>
        </div>

        {/* Accordion List */}
        <div style={{
          maxWidth: '820px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <div
                key={index}
                style={{
                  borderRadius: 'var(--radius-md)',
                  border: isOpen ? '1px solid rgba(20, 148, 136, 0.4)' : '1px solid var(--border-light)',
                  background: isOpen ? '#f0fdfa' : 'white',
                  overflow: 'hidden',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <button
                  onClick={() => toggleIndex(index)}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    gap: '1rem',
                  }}
                >
                  <span style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: isOpen ? 'var(--color-primary-dark)' : 'var(--color-navy)',
                    lineHeight: 1.4
                  }}>
                    {item.question}
                  </span>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: isOpen ? 'var(--color-primary)' : 'var(--bg-subtle)',
                      color: isOpen ? 'white' : 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform var(--transition-normal)',
                      flexShrink: 0
                    }}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 1.5rem 1.35rem 1.5rem',
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                    color: 'var(--text-muted)',
                    borderTop: '1px solid rgba(20, 148, 136, 0.15)',
                    paddingTop: '1rem',
                    animation: 'fadeIn 0.2s ease-out'
                  }}>
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
