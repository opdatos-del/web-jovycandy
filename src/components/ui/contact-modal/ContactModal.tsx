import { ModalShell } from '../ModalShell';

import { ContactForm } from './components/ContactForm';
import { ContactSuccessState } from './components/ContactSuccessState';
import { ContactTopicList } from './components/ContactTopicList';
import { useContactModalForm } from './hooks/useContactModalForm';
import type { ContactModalProps } from './types/contact-modal.types';

export const ContactModal = ({ open, onClose }: ContactModalProps) => {
  const {
    activeTopic,
    activeTopicId,
    formState,
    handleFieldChange,
    handleResetForm,
    handleSubmit,
    handleTopicSelect,
    isSubmitted,
    topics,
  } = useContactModalForm(open);

  return (
    <ModalShell open={open} onClose={onClose} title="Contacto" subtitle="Selecciona el area adecuada" size="xl">
      <div className="grid gap-6 lg:grid-cols-[18rem_minmax(0,1fr)]">
        <ContactTopicList
          topics={topics}
          activeTopicId={activeTopicId}
          onTopicSelect={handleTopicSelect}
        />

        <section className="rounded-[1.8rem] border border-[#edd8cf] bg-white/72 p-5 shadow-[0_26px_80px_rgba(42,33,28,0.08)] md:p-6">
          {isSubmitted ? (
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
