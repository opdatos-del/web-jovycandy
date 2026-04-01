import {
  CONTACT_FORM_FIELD_ROWS,
  CONTACT_INPUT_CLASSNAME,
  CONTACT_MESSAGE_FIELD,
} from '../constants/contact-modal.constants';
import type {
  ContactFieldConfig,
  ContactFormFieldChangeHandler,
  ContactFormState,
} from '../types/contact-modal.types';

type ContactFormFieldsProps = {
  formState: ContactFormState;
  messagePlaceholder: string;
  onFieldChange: ContactFormFieldChangeHandler;
};

const getGridClassName = (fields: ContactFieldConfig[]) =>
  `grid gap-4 ${fields.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`;

const renderInputField = (
  field: ContactFieldConfig,
  formState: ContactFormState,
  onFieldChange: ContactFormFieldChangeHandler
) => (
  <label key={field.name} className="block">
    <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.28em] text-stone-500">
      {field.label}
    </span>
    <input
      type={field.type ?? 'text'}
      required={field.required}
      value={formState[field.name]}
      onChange={(event) => onFieldChange(field.name, event.target.value)}
      className={CONTACT_INPUT_CLASSNAME}
      placeholder={field.placeholder}
    />
  </label>
);

export const ContactFormFields = ({
  formState,
  messagePlaceholder,
  onFieldChange,
}: ContactFormFieldsProps) => (
  <>
    {CONTACT_FORM_FIELD_ROWS.map((fields) => (
      <div key={fields.map((field) => field.name).join('-')} className={getGridClassName(fields)}>
        {fields.map((field) => renderInputField(field, formState, onFieldChange))}
      </div>
    ))}

    <label className="block">
      <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.28em] text-stone-500">
        {CONTACT_MESSAGE_FIELD.label}
      </span>
      <textarea
        required={CONTACT_MESSAGE_FIELD.required}
        rows={CONTACT_MESSAGE_FIELD.rows}
        value={formState.message}
        onChange={(event) => onFieldChange('message', event.target.value)}
        className={`${CONTACT_INPUT_CLASSNAME} resize-none`}
        placeholder={messagePlaceholder}
      />
    </label>
  </>
);
