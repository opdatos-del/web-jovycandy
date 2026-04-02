import type { ContactFieldConfig, ContactFormState, ContactTopicId } from '../types/contact-modal.types';

export const DEFAULT_CONTACT_TOPIC_ID: ContactTopicId = 'national-sales';

export const EMPTY_CONTACT_FORM_STATE: ContactFormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  country: '',
  city: '',
  postalCode: '',
  message: '',
};

export const CONTACT_INPUT_CLASSNAME =
  'w-full rounded-[1.15rem] border border-[#ebd8ce] bg-white px-4 py-3.5 text-sm text-stone-900 outline-none transition-colors placeholder:text-stone-400 focus:border-[#ff7a86]';

export const CONTACT_FORM_FIELD_ROWS: ContactFieldConfig[][] = [
  [
    { name: 'firstName', label: 'First name *', placeholder: 'First', required: true },
    { name: 'lastName', label: 'Last name *', placeholder: 'Last', required: true },
  ],
  [
    { name: 'email', label: 'Email *', placeholder: 'name@company.com', required: true, type: 'email' },
    { name: 'phone', label: 'Cell phone *', placeholder: '+52', required: true, type: 'tel' },
  ],
  [
    { name: 'country', label: 'Country', placeholder: 'Country' },
    { name: 'city', label: 'City', placeholder: 'City' },
    { name: 'postalCode', label: 'C.P.', placeholder: 'Zip code' },
  ],
];

export const CONTACT_MESSAGE_FIELD: ContactFieldConfig = {
  name: 'message',
  label: 'Comment or message *',
  placeholder: '',
  required: true,
  kind: 'textarea',
  rows: 5,
};
