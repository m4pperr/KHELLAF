import React, { useState } from 'react';
import { CheckCircle2, MessageSquare, ArrowRight, ArrowLeft, X } from 'lucide-react';
import { SERVICES_DATA } from '../../data/clinicData';
import type { AppointmentFormData } from '../../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
}) => {
  const [step, setStep] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    patientType: 'nouveau',
    serviceId: initialServiceId || SERVICES_DATA[0].id,
    preferredDate: '',
    preferredTimeSlot: 'matin',
    notes: '',
  });

  if (!isOpen) return null;

  const handleServiceSelect = (id: string) => {
    setFormData({ ...formData, serviceId: id });
  };

  const handleNext = () => {
    if (step === 2 && !formData.preferredDate) {
      alert('Veuillez sélectionner une date souhaitée.');
      return;
    }
    setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert('Veuillez renseigner votre nom complet et votre numéro de téléphone.');
      return;
    }
    setIsSubmitted(true);
  };

  const selectedService = SERVICES_DATA.find((s) => s.id === formData.serviceId) || SERVICES_DATA[0];

  const getWhatsAppBookingUrl = () => {
    const text = `*Demande de Rendez-vous - Khellaf Orthodontics*\n\n` +
      `👤 *Patient:* ${formData.fullName}\n` +
      `📞 *Téléphone:* ${formData.phone}\n` +
      `📧 *Email:* ${formData.email || 'Non renseigné'}\n` +
      `🏷️ *Statut:* ${formData.patientType === 'nouveau' ? 'Nouveau patient' : 'Déjà patient'}\n` +
      `✨ *Motif de consultation:* ${selectedService.title}\n` +
      `📅 *Date souhaitée:* ${formData.preferredDate || 'Dès que possible'}\n` +
      `⏰ *Créneau:* ${formData.preferredTimeSlot === 'matin' ? 'Matin (09h - 13h)' : 'Après-midi (13h - 17h)'}\n` +
      (formData.notes ? `📝 *Remarque:* ${formData.notes}` : '');

    return `https://wa.me/213555123456?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-container appointment-modal-box"
        onClick={(e) => e.stopPropagation()}
        style={{ padding: '2rem' }}
      >
        {/* Modal Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '1.5rem',
          paddingBottom: '0.85rem',
          borderBottom: '1px solid var(--border-light)',
          gap: '0.5rem'
        }}>
          <div>
            <div style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: 'var(--color-primary)',
              letterSpacing: '0.04em'
            }}>
              Cabinet Khellaf Orthodontics • Draria
            </div>
            <h3 style={{ fontSize: '1.35rem', color: 'var(--color-navy)', marginTop: '0.2rem' }}>
              Prise de Rendez-vous en Ligne
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Fermer"
            style={{
              background: 'var(--bg-subtle)',
              border: 'none',
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text-muted)',
              flexShrink: 0
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Success Confirmation Screen */}
        {isSubmitted ? (
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: '#dcfce7',
              color: '#15803d',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem auto'
            }}>
              <CheckCircle2 size={36} />
            </div>

            <h4 style={{ fontSize: '1.4rem', color: 'var(--color-navy)', marginBottom: '0.65rem' }}>
              Demande enregistrée avec succès !
            </h4>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '480px', margin: '0 auto 1.5rem auto', lineHeight: 1.6 }}>
              Merci <strong>{formData.fullName}</strong>. Notre secrétariat vous contactera par téléphone au <strong>{formData.phone}</strong> pour confirmer l'heure exacte.
            </p>

            <div style={{
              background: 'var(--bg-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
              textAlign: 'left',
              maxWidth: '480px',
              margin: '0 auto 1.75rem auto',
              border: '1px solid var(--border-light)'
            }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-light)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Récapitulatif
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.88rem' }}>
                <div><strong>Soin :</strong> {selectedService.title}</div>
                <div><strong>Date souhaitée :</strong> {formData.preferredDate}</div>
                <div><strong>Créneau :</strong> {formData.preferredTimeSlot === 'matin' ? 'Matin (09h – 13h)' : 'Après-midi (13h – 17h)'}</div>
                <div><strong>Lieu :</strong> Draria Centre, Alger</div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', maxWidth: '420px', margin: '0 auto' }}>
              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ borderColor: '#25d366', color: '#128c7e', fontWeight: 700, justifyContent: 'center' }}
              >
                <MessageSquare size={18} />
                <span>Envoyer sur WhatsApp</span>
              </a>

              <button
                onClick={onClose}
                className="btn btn-primary"
              >
                Terminer et fermer
              </button>
            </div>
          </div>
        ) : (
          /* Multi-Step Form */
          <div>
            {/* Step indicator */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1.5rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  background: step >= 1 ? 'var(--color-primary)' : 'var(--border-light)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  flexShrink: 0
                }}>
                  1
                </span>
                <span style={{ fontSize: '0.82rem', fontWeight: step === 1 ? 700 : 500, color: step === 1 ? 'var(--color-navy)' : 'var(--text-muted)' }} className="step-label">
                  Motif
                </span>
              </div>

              <div style={{ flex: 1, height: '2px', background: 'var(--border-light)', margin: '0 0.5rem' }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  background: step >= 2 ? 'var(--color-primary)' : 'var(--border-light)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  flexShrink: 0
                }}>
                  2
                </span>
                <span style={{ fontSize: '0.82rem', fontWeight: step === 2 ? 700 : 500, color: step === 2 ? 'var(--color-navy)' : 'var(--text-muted)' }} className="step-label">
                  Date
                </span>
              </div>

              <div style={{ flex: 1, height: '2px', background: 'var(--border-light)', margin: '0 0.5rem' }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  background: step >= 3 ? 'var(--color-primary)' : 'var(--border-light)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  flexShrink: 0
                }}>
                  3
                </span>
                <span style={{ fontSize: '0.82rem', fontWeight: step === 3 ? 700 : 500, color: step === 3 ? 'var(--color-navy)' : 'var(--text-muted)' }} className="step-label">
                  Infos
                </span>
              </div>
            </div>

            {/* Step 1: Select Service */}
            {step === 1 && (
              <div>
                <h4 style={{ fontSize: '1rem', color: 'var(--color-navy)', marginBottom: '0.85rem' }}>
                  Sélectionnez le motif de consultation :
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.75rem' }}>
                  {SERVICES_DATA.map((srv) => {
                    const isSelected = formData.serviceId === srv.id;
                    return (
                      <div
                        key={srv.id}
                        onClick={() => handleServiceSelect(srv.id)}
                        style={{
                          padding: '0.9rem 1rem',
                          borderRadius: 'var(--radius-md)',
                          border: isSelected ? '2px solid var(--color-primary)' : '1px solid var(--border-light)',
                          background: isSelected ? 'var(--color-primary-subtle)' : 'white',
                          cursor: 'pointer',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          transition: 'all var(--transition-fast)'
                        }}
                      >
                        <div style={{ overflow: 'hidden' }}>
                          <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--color-navy)', display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
                            <span>{srv.title}</span>
                            {srv.badge && (
                              <span className="badge badge-gold" style={{ fontSize: '0.68rem', padding: '0.1rem 0.35rem' }}>
                                {srv.badge}
                              </span>
                            )}
                          </div>
                          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.15rem', lineHeight: 1.4 }}>
                            {srv.shortDesc}
                          </div>
                        </div>

                        <div style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          border: isSelected ? '6px solid var(--color-primary)' : '2px solid var(--border-medium)',
                          background: 'white',
                          flexShrink: 0,
                          marginLeft: '0.75rem'
                        }} />
                      </div>
                    );
                  })}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button onClick={handleNext} className="btn btn-primary" style={{ width: '100%' }}>
                    <span>Continuer vers le choix de la date</span>
                    <ArrowRight size={17} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Date & Slot */}
            {step === 2 && (
              <div>
                <h4 style={{ fontSize: '1rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>
                  Quand souhaitez-vous venir au cabinet ?
                </h4>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.4rem' }}>
                    Date souhaitée (Samedi au Jeudi)
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 0.9rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-light)',
                      fontSize: '0.95rem',
                      color: 'var(--text-main)'
                    }}
                  />
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
                    * Le cabinet est fermé le vendredi. L'heure précise sera validée par téléphone.
                  </div>
                </div>

                <div style={{ marginBottom: '1.75rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.65rem' }}>
                    Période de la journée préférée
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, preferredTimeSlot: 'matin' })}
                      style={{
                        padding: '1rem 0.5rem',
                        borderRadius: 'var(--radius-md)',
                        border: formData.preferredTimeSlot === 'matin' ? '2px solid var(--color-primary)' : '1px solid var(--border-light)',
                        background: formData.preferredTimeSlot === 'matin' ? 'var(--color-primary-subtle)' : 'white',
                        cursor: 'pointer',
                        textAlign: 'center'
                      }}
                    >
                      <div style={{ fontWeight: 700, color: 'var(--color-navy)', fontSize: '0.95rem' }}>Matinée</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>09h – 13h</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, preferredTimeSlot: 'apres-midi' })}
                      style={{
                        padding: '1rem 0.5rem',
                        borderRadius: 'var(--radius-md)',
                        border: formData.preferredTimeSlot === 'apres-midi' ? '2px solid var(--color-primary)' : '1px solid var(--border-light)',
                        background: formData.preferredTimeSlot === 'apres-midi' ? 'var(--color-primary-subtle)' : 'white',
                        cursor: 'pointer',
                        textAlign: 'center'
                      }}
                    >
                      <div style={{ fontWeight: 700, color: 'var(--color-navy)', fontSize: '0.95rem' }}>Après-midi</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>13h – 17h</div>
                    </button>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }} className="modal-nav-buttons">
                  <button onClick={handlePrev} className="btn btn-secondary" style={{ flex: 1 }}>
                    <ArrowLeft size={16} />
                    <span>Retour</span>
                  </button>
                  <button onClick={handleNext} className="btn btn-primary" style={{ flex: 2 }}>
                    <span>Vos coordonnées</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Patient Info Form */}
            {step === 3 && (
              <form onSubmit={handleSubmit}>
                <h4 style={{ fontSize: '1rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>
                  Vos informations de contact :
                </h4>

                {/* Patient status */}
                <div style={{ display: 'flex', gap: '1.25rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', fontSize: '0.88rem' }}>
                    <input
                      type="radio"
                      name="patientType"
                      checked={formData.patientType === 'nouveau'}
                      onChange={() => setFormData({ ...formData, patientType: 'nouveau' })}
                    />
                    <span>Nouveau patient</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', fontSize: '0.88rem' }}>
                    <input
                      type="radio"
                      name="patientType"
                      checked={formData.patientType === 'deja-patient'}
                      onChange={() => setFormData({ ...formData, patientType: 'deja-patient' })}
                    />
                    <span>Déjà patient</span>
                  </label>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem', marginBottom: '0.85rem' }} className="modal-inputs-grid">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.3rem' }}>
                      Nom & Prénom *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Amina Benali"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.85rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-light)',
                        fontSize: '0.92rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.3rem' }}>
                      Numéro de Téléphone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ex: 0555 12 34 56"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.85rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-light)',
                        fontSize: '0.92rem'
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '0.85rem' }}>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.3rem' }}>
                    Adresse E-mail (optionnelle)
                  </label>
                  <input
                    type="email"
                    placeholder="exemple@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.85rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-light)',
                      fontSize: '0.92rem'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.3rem' }}>
                    Remarques ou questions (facultatif)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Précisez ici vos disponibilités ou toute question..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.85rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-light)',
                      fontSize: '0.92rem',
                      resize: 'none'
                    }}
                  />
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }} className="modal-nav-buttons">
                  <button type="button" onClick={handlePrev} className="btn btn-secondary" style={{ flex: 1 }}>
                    <ArrowLeft size={16} />
                    <span>Retour</span>
                  </button>

                  <button type="submit" className="btn btn-primary" style={{ flex: 2 }}>
                    <CheckCircle2 size={16} />
                    <span>Confirmer ma demande</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .appointment-modal-box {
            padding: 1.25rem !important;
          }
          .modal-inputs-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 400px) {
          .modal-nav-buttons {
            flex-direction: column !important;
          }
          .modal-nav-buttons button {
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
};
