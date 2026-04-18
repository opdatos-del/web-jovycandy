import {
  CONTACT_FORM_FIELD_GROUPS,
  CONTACT_FORM_INPUT_CLASSNAME,
  CONTACT_FORM_MESSAGE_FIELD,
} from '../../constants/contact-form.constants';
import type {
  ContactFormFieldChangeHandler,
  ContactFormFieldConfig,
  ContactFormState,
} from '../../types/contact-modal.types';

type ContactFormFieldsProps = {
  formState: ContactFormState;
  messagePlaceholder: string;
  onFieldChange: ContactFormFieldChangeHandler;
};

type ContactInputFieldProps = {
  field: ContactFormFieldConfig;
  value: string;
  onFieldChange: ContactFormFieldChangeHandler;
};

const getGridClassName = (fields: ContactFormFieldConfig[]) =>
  `grid gap-4 ${fields.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`;

const ContactInputField = ({ field, value, onFieldChange }: ContactInputFieldProps) => (
  <label className="block">
    <span className="mb-2.5 block text-xs font-semibold uppercase tracking-wider text-stone-700">
      {field.label}
    </span>
    <input
      type={field.type ?? 'text'}
      required={field.required}
      value={value}
      onChange={(event) => onFieldChange(field.name, event.target.value)}
      className={CONTACT_FORM_INPUT_CLASSNAME}
      placeholder={field.placeholder}
    />
  </label>
);

export const ContactFormFields = ({
  formState,
  messagePlaceholder,
  onFieldChange,
}: ContactFormFieldsProps) => {
  const { identity, communication, location } = CONTACT_FORM_FIELD_GROUPS;

  return (
    <>
      <section className="rounded-lg border border-stone-100 bg-stone-50 p-5">
        <div className="mb-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-stone-700">Datos de contacto</p>
          <p className="mt-2 text-base leading-relaxed text-stone-600">
            Usaremos esta información para responderte y canalizar tu solicitud.
          </p>
        </div>

        <div className="grid gap-4">
          <div className={getGridClassName(identity)}>
            {identity.map((field) => (
              <ContactInputField key={field.name} field={field} value={formState[field.name]} onFieldChange={onFieldChange} />
            ))}
          </div>

          <div className={getGridClassName(communication)}>
            {communication.map((field) => (
              <ContactInputField key={field.name} field={field} value={formState[field.name]} onFieldChange={onFieldChange} />
            ))}
          </div>

          <div className="rounded-lg border border-stone-100 bg-white p-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-stone-700">Ubicación</p>
            <div className={getGridClassName(location)}>
              {location.map((field) => (
                <ContactInputField key={field.name} field={field} value={formState[field.name]} onFieldChange={onFieldChange} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-lg border border-stone-100 bg-stone-50 p-5">
        <div className="mb-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-stone-700">Detalle de solicitud</p>
          <p className="mt-2 text-base leading-relaxed text-stone-600">
            Comparte el contexto para dirigir tu solicitud con mayor claridad.
          </p>
        </div>

        <label className="block">
          <span className="mb-2.5 block text-xs font-semibold uppercase tracking-wider text-stone-700">
            {CONTACT_FORM_MESSAGE_FIELD.label}
          </span>
          <textarea
            required={CONTACT_FORM_MESSAGE_FIELD.required}
            rows={CONTACT_FORM_MESSAGE_FIELD.rows}
            value={formState.message}
            onChange={(event) => onFieldChange(CONTACT_FORM_MESSAGE_FIELD.name, event.target.value)}
            className={`${CONTACT_FORM_INPUT_CLASSNAME} resize-none`}
            placeholder={messagePlaceholder}
          />
        </label>
      </section>
    </>
  );
};
