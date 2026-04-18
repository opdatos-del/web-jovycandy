import { ModalShell } from '@/shared/ui/ModalShell';

import { ContactForm, ContactSuccessState, ContactTopicList } from './components';
import { useContactModalState } from './hooks/useContactModalState';
import type { ContactModalProps } from './types/contact-modal.types';

export const ContactModal = ({ open, onClose }: ContactModalProps) => {
  const {
    activeTopic,
    activeTopicId,
    formState,
    isSubmittedSuccessfully,
    topics,
    handleFieldChange,
    handleResetForm,
    handleSubmit,
    handleTopicSelect,
  } = useContactModalState(open);

  return (
    <ModalShell open={open} onClose={onClose} title="Contacto" subtitle="Selecciona el area adecuada" size="xl">
      <div className="contact-modal-layout grid">
        <ContactTopicList
          topics={topics}
          activeTopicId={activeTopicId}
          onTopicSelect={handleTopicSelect}
        />

        <section className="contact-modal-panel rounded-[2rem] border border-[#edd8cf] bg-white shadow-[0_28px_80px_rgba(42,33,28,0.08)]">
          {isSubmittedSuccessfully ? (
            <ContactSuccessState topic={activeTopic} onReset={handleResetForm} onClose={onClose} />
          ) : (
            <ContactForm
              topic={activeTopic}
              formState={formState}
              onFieldChange={handleFieldChange}
              onSubmit={handleSubmit}
            />
          )}
        </section>
      </div>
    </ModalShell>
  );
};
