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

    <form className="mt-5 grid gap-5" onSubmit={onSubmit}>
      <ContactFormFields
        formState={formState}
        messagePlaceholder={topic.messagePlaceholder}
        onFieldChange={onFieldChange}
      />

      <div className="flex flex-col gap-4 rounded-[1.4rem] border border-[#efe0d7] bg-[#fffaf7] p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
        <p className="max-w-xl text-xs leading-relaxed text-stone-500">
          Completa tus datos y dirigimos la solicitud al equipo correcto.
        </p>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0f3daa] px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white transition-transform hover:-translate-y-0.5 sm:w-auto"
        >
          {topic.submitLabel} <ArrowRight size={16} />
        </button>
      </div>
    </form>
  </>
);
