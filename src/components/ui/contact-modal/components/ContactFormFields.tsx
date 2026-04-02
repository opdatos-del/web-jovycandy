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
}: ContactFormFieldsProps) => {
  const [identityFields, communicationFields, locationFields] = CONTACT_FORM_FIELD_ROWS;

  return (
    <>
      <section className="rounded-[1.4rem] border border-[#f0dfd5] bg-[#fffdfa] p-4 md:p-5">
        <div className="mb-4">
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#cf6f4f]">Datos de contacto</p>
          <p className="mt-2 text-sm leading-relaxed text-stone-600">
            Usaremos esta informacion para responderte y canalizar la solicitud.
          </p>
        </div>

        <div className="grid gap-4">
          {identityFields ? (
            <div className={getGridClassName(identityFields)}>
              {identityFields.map((field) => renderInputField(field, formState, onFieldChange))}
            </div>
          ) : null}

          {communicationFields ? (
            <div className={getGridClassName(communicationFields)}>
              {communicationFields.map((field) => renderInputField(field, formState, onFieldChange))}
            </div>
          ) : null}

          {locationFields ? (
            <div className="rounded-[1.25rem] border border-[#f2e4db] bg-white p-4">
              <p className="mb-3 text-[10px] uppercase tracking-[0.35em] text-[#00a39d]">Ubicacion</p>
              <div className={getGridClassName(locationFields)}>
                {locationFields.map((field) => renderInputField(field, formState, onFieldChange))}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section className="rounded-[1.4rem] border border-[#f0dfd5] bg-[#fff6f1] p-4 md:p-5">
        <div className="mb-4">
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#0f3daa]">Detalle de solicitud</p>
          <p className="mt-2 text-sm leading-relaxed text-stone-600">
            Comparte el contexto para dirigir el seguimiento con mayor claridad.
          </p>
        </div>

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
      </section>
    </>
  );
};
