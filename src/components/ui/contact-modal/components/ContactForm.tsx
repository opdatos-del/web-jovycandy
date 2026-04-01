import { ArrowRight } from 'lucide-react';

import { ContactFormFields } from './ContactFormFields';
import { ContactTopicHeader } from './ContactTopicHeader';
import type {
  ContactFormFieldChangeHandler,
  ContactFormState,
  ContactFormSubmitHandler,
  ContactTopic,
} from '../types/contact-modal.types';

type ContactFormProps = {
  topic: ContactTopic;
  formState: ContactFormState;
  onFieldChange: ContactFormFieldChangeHandler;
  onSubmit: ContactFormSubmitHandler;
};

export const ContactForm = ({ topic, formState, onFieldChange, onSubmit }: ContactFormProps) => (
  <>
    <ContactTopicHeader topic={topic} />

    <form className="mt-5 grid gap-4" onSubmit={onSubmit}>
      <ContactFormFields
        formState={formState}
        messagePlaceholder={topic.messagePlaceholder}
        onFieldChange={onFieldChange}
      />

      <div className="flex flex-col gap-4 border-t border-[#efe0d7] pt-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-stone-500">
          Completa tus datos y dirigimos la solicitud al equipo correcto.
        </p>

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white transition-transform hover:-translate-y-0.5"
        >
          {topic.submitLabel} <ArrowRight size={16} />
        </button>
      </div>
    </form>
  </>
);
