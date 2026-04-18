import type {
  ContactFormFieldConfig,
  ContactFormFieldGroups,
  ContactFormState,
  ContactTopicId,
} from '../types/contact-modal.types';

export const defaultContactTopicId: ContactTopicId = 'national-sales';

export const initialContactFormState: ContactFormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  country: '',
  city: '',
  postalCode: '',
  message: '',
};

export const CONTACT_FORM_INPUT_CLASSNAME =
  'w-full rounded-[0.75rem] border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition-all placeholder:text-stone-400 focus:border-stone-400 focus:ring-2 focus:ring-blue-100 focus:ring-opacity-50';

export const CONTACT_FORM_FIELD_GROUPS: ContactFormFieldGroups = {
  identity: [
    { name: 'firstName', label: 'First name *', placeholder: 'First', required: true },
    { name: 'lastName', label: 'Last name *', placeholder: 'Last', required: true },
  ],
  communication: [
    { name: 'email', label: 'Email *', placeholder: 'name@company.com', required: true, type: 'email' },
    { name: 'phone', label: 'Cell phone *', placeholder: '+52', required: true, type: 'tel' },
  ],
  location: [
    { name: 'country', label: 'Country', placeholder: 'Country' },
    { name: 'city', label: 'City', placeholder: 'City' },
    { name: 'postalCode', label: 'C.P.', placeholder: 'Zip code' },
  ],
};

export const CONTACT_FORM_MESSAGE_FIELD: ContactFormFieldConfig = {
  name: 'message',
  label: 'Comment or message *',
  placeholder: '',
  required: true,
  rows: 5,
};
