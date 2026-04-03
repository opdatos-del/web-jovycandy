import { ArrowRight } from 'lucide-react';

import { ContactFormFields } from './ContactFormFields';
import { ContactTopicHeader } from './ContactTopicHeader';
import type {
  ContactFormFieldChangeHandler,
  ContactFormState,
  ContactFormSubmitHandler,
  ContactTopic,
} from '../../types/contact-modal.types';

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

      <div className="contact-form-footer flex flex-col gap-4 rounded-lg border border-stone-100 bg-stone-50 p-5">
        <p className="text-base leading-relaxed text-stone-600">
          Al enviar, nos comprometeremos a direccionar tu solicitud al equipo correcto.
        </p>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {topic.submitLabel} <ArrowRight size={16} />
        </button>
      </div>
    </form>
  </>
);
