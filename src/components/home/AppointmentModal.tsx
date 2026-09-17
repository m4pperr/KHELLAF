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
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
        style={{ padding: '2.5rem' }}
      >
        {/* Modal Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1.75rem',
          paddingBottom: '1rem',
          borderBottom: '1px solid var(--border-light)'
        }}>
          <div>
            <div style={{
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: 'var(--color-primary)',
              letterSpacing: '0.04em'
            }}>
              Cabinet Khellaf Orthodontics • Draria
            </div>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-navy)', marginTop: '0.2rem' }}>
              Prise de Rendez-vous en Ligne
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'var(--bg-subtle)',
              border: 'none',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text-muted)'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Success Confirmation Screen */}
        {isSubmitted ? (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div style={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              background: '#dcfce7',
              color: '#15803d',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto'
            }}>
              <CheckCircle2 size={42} />
            </div>

            <h4 style={{ fontSize: '1.6rem', color: 'var(--color-navy)', marginBottom: '0.75rem' }}>
              Demande enregistrée avec succès !
            </h4>

            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '480px', margin: '0 auto 2rem auto', lineHeight: 1.6 }}>
              Merci <strong>{formData.fullName}</strong>. Notre secrétariat médical vous contactera par téléphone au <strong>{formData.phone}</strong> pour vous confirmer l'heure exacte de votre rendez-vous.
            </p>

            <div style={{
              background: 'var(--bg-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '1.5rem',
              textAlign: 'left',
              maxWidth: '480px',
              margin: '0 auto 2rem auto',
              border: '1px solid var(--border-light)'
            }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-light)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                Récapitulatif de votre demande
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.92rem' }}>
                <div><strong>Soin :</strong> {selectedService.title}</div>
                <div><strong>Date souhaitée :</strong> {formData.preferredDate}</div>
                <div><strong>Créneau :</strong> {formData.preferredTimeSlot === 'matin' ? 'Matin (09h – 13h)' : 'Après-midi (13h – 17h)'}</div>
                <div><strong>Lieu :</strong> Draria Centre, Alger</div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '420px', margin: '0 auto' }}>
              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ borderColor: '#25d366', color: '#128c7e', fontWeight: 700, justifyContent: 'center' }}
              >
                <MessageSquare size={18} />
                <span>Envoyer confirmation instantanée sur WhatsApp</span>
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
              marginBottom: '2rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: step >= 1 ? 'var(--color-primary)' : 'var(--border-light)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.85rem',
                  fontWeight: 700
                }}>
                  1
                </span>
                <span style={{ fontSize: '0.88rem', fontWeight: step === 1 ? 700 : 500, color: step === 1 ? 'var(--color-navy)' : 'var(--text-muted)' }}>
                  Motif de consultation
                </span>
              </div>

              <div style={{ flex: 1, height: '2px', background: 'var(--border-light)', margin: '0 0.75rem' }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: step >= 2 ? 'var(--color-primary)' : 'var(--border-light)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.85rem',
                  fontWeight: 700
                }}>
                  2
                </span>
                <span style={{ fontSize: '0.88rem', fontWeight: step === 2 ? 700 : 500, color: step === 2 ? 'var(--color-navy)' : 'var(--text-muted)' }}>
                  Date & Heure
                </span>
              </div>

              <div style={{ flex: 1, height: '2px', background: 'var(--border-light)', margin: '0 0.75rem' }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: step >= 3 ? 'var(--color-primary)' : 'var(--border-light)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.85rem',
                  fontWeight: 700
                }}>
                  3
                </span>
                <span style={{ fontSize: '0.88rem', fontWeight: step === 3 ? 700 : 500, color: step === 3 ? 'var(--color-navy)' : 'var(--text-muted)' }}>
                  Coordonnées
                </span>
              </div>
            </div>

            {/* Step 1: Select Service */}
            {step === 1 && (
              <div>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>
                  Sélectionnez le motif principal de votre visite :
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                  {SERVICES_DATA.map((srv) => {
                    const isSelected = formData.serviceId === srv.id;
                    return (
                      <div
                        key={srv.id}
                        onClick={() => handleServiceSelect(srv.id)}
                        style={{
                          padding: '1.15rem',
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
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--color-navy)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            {srv.title}
                            {srv.badge && (
                              <span className="badge badge-gold" style={{ fontSize: '0.7rem' }}>
                                {srv.badge}
                              </span>
                            )}
                          </div>
                          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                            {srv.shortDesc}
                          </div>
                        </div>

                        <div style={{
                          width: '22px',
                          height: '22px',
                          borderRadius: '50%',
                          border: isSelected ? '6px solid var(--color-primary)' : '2px solid var(--border-medium)',
                          background: 'white',
                          flexShrink: 0,
                          marginLeft: '1rem'
                        }} />
                      </div>
                    );
                  })}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button onClick={handleNext} className="btn btn-primary">
                    <span>Continuer vers le choix de la date</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Date & Slot */}
            {step === 2 && (
              <div>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--color-navy)', marginBottom: '1.25rem' }}>
                  Quand souhaitez-vous venir au cabinet ?
                </h4>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
                    Date souhaitée (Samedi au Jeudi)
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-light)',
                      fontSize: '1rem',
                      color: 'var(--text-main)'
                    }}
                  />
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                    * Le cabinet est fermé le vendredi. Les horaires exacts seront validés par téléphone.
                  </div>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.75rem' }}>
                    Période de la journée préférée
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, preferredTimeSlot: 'matin' })}
                      style={{
                        padding: '1.15rem',
                        borderRadius: 'var(--radius-md)',
                        border: formData.preferredTimeSlot === 'matin' ? '2px solid var(--color-primary)' : '1px solid var(--border-light)',
                        background: formData.preferredTimeSlot === 'matin' ? 'var(--color-primary-subtle)' : 'white',
                        cursor: 'pointer',
                        textAlign: 'center'
                      }}
                    >
                      <div style={{ fontWeight: 700, color: 'var(--color-navy)', fontSize: '1rem' }}>Matinée</div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>09h00 – 13h00</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, preferredTimeSlot: 'apres-midi' })}
                      style={{
                        padding: '1.15rem',
                        borderRadius: 'var(--radius-md)',
                        border: formData.preferredTimeSlot === 'apres-midi' ? '2px solid var(--color-primary)' : '1px solid var(--border-light)',
                        background: formData.preferredTimeSlot === 'apres-midi' ? 'var(--color-primary-subtle)' : 'white',
                        cursor: 'pointer',
                        textAlign: 'center'
                      }}
                    >
                      <div style={{ fontWeight: 700, color: 'var(--color-navy)', fontSize: '1rem' }}>Après-midi</div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>13h00 – 17h00</div>
                    </button>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                  <button onClick={handlePrev} className="btn btn-secondary">
                    <ArrowLeft size={18} />
                    <span>Retour</span>
                  </button>
                  <button onClick={handleNext} className="btn btn-primary">
                    <span>Continuer vers vos coordonnées</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Patient Info Form */}
            {step === 3 && (
              <form onSubmit={handleSubmit}>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--color-navy)', marginBottom: '1.25rem' }}>
                  Vos informations de contact :
                </h4>

                {/* Patient status */}
                <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.25rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.92rem' }}>
                    <input
                      type="radio"
                      name="patientType"
                      checked={formData.patientType === 'nouveau'}
                      onChange={() => setFormData({ ...formData, patientType: 'nouveau' })}
                    />
                    <span>Nouveau patient</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.92rem' }}>
                    <input
                      type="radio"
                      name="patientType"
                      checked={formData.patientType === 'deja-patient'}
                      onChange={() => setFormData({ ...formData, patientType: 'deja-patient' })}
                    />
                    <span>Déjà patient au cabinet</span>
                  </label>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.35rem' }}>
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
                        padding: '0.8rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-light)',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.35rem' }}>
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
                        padding: '0.8rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-light)',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.35rem' }}>
                    Adresse E-mail (optionnelle)
                  </label>
                  <input
                    type="email"
                    placeholder="exemple@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-light)',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1.75rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.35rem' }}>
                    Remarques ou questions (facultatif)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Précisez ici vos disponibilités ou toute question relative à vos dents..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-light)',
                      fontSize: '0.95rem',
                      resize: 'none'
                    }}
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                  <button type="button" onClick={handlePrev} className="btn btn-secondary">
                    <ArrowLeft size={18} />
                    <span>Retour</span>
                  </button>

                  <button type="submit" className="btn btn-primary btn-lg">
                    <CheckCircle2 size={18} />
                    <span>Confirmer ma demande de rendez-vous</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
