import type { LucideIcon } from 'lucide-react';
import type { FormEvent } from 'react';

export type ContactModalProps = {
  open: boolean;
  onClose: () => void;
};

export type ContactTopicId = 'national-sales' | 'international-sales' | 'customer-service' | 'catalogue';

export type ContactTopic = {
  id: ContactTopicId;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  accentClassName: string;
  icon: LucideIcon;
  submitLabel: string;
  successMessage: string;
  messagePlaceholder: string;
};

export type ContactFormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  postalCode: string;
  message: string;
};

export type ContactFormFieldName = keyof ContactFormState;

export type ContactFormFieldConfig = {
  name: ContactFormFieldName;
  label: string;
  placeholder: string;
  required?: boolean;
  type?: 'text' | 'email' | 'tel';
  rows?: number;
};

export type ContactFormFieldGroups = {
  identity: ContactFormFieldConfig[];
  communication: ContactFormFieldConfig[];
  location: ContactFormFieldConfig[];
};

export type ContactFormFieldChangeHandler = (field: ContactFormFieldName, value: string) => void;

export type ContactTopicSelectHandler = (topicId: ContactTopicId) => void;

export type ContactFormSubmitHandler = (event: FormEvent<HTMLFormElement>) => void;

export type ContactModalStateResult = {
  activeTopic: ContactTopic;
  activeTopicId: ContactTopicId;
  formState: ContactFormState;
  isSubmittedSuccessfully: boolean;
  topics: ContactTopic[];
  handleFieldChange: ContactFormFieldChangeHandler;
  handleResetForm: () => void;
  handleSubmit: ContactFormSubmitHandler;
  handleTopicSelect: ContactTopicSelectHandler;
};
