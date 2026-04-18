import { useEffect, useState } from 'react';

import { defaultContactTopicId, initialContactFormState } from '../constants/contact-form.constants';
import { CONTACT_TOPICS, CONTACT_TOPICS_BY_ID } from '../data/contact-topics.data';
import type {
  ContactFormFieldChangeHandler,
  ContactFormState,
  ContactFormSubmitHandler,
  ContactModalStateResult,
  ContactTopicId,
  ContactTopicSelectHandler,
} from '../types/contact-modal.types';

const createInitialFormState = (): ContactFormState => ({
  ...initialContactFormState,
});

export const useContactModalState = (open: boolean): ContactModalStateResult => {
  const [activeTopicId, setActiveTopicId] = useState<ContactTopicId>(defaultContactTopicId);
  const [formState, setFormState] = useState<ContactFormState>(createInitialFormState);
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);

  const resetModalState = () => {
    setActiveTopicId(defaultContactTopicId);
    setFormState(createInitialFormState());
    setIsSubmittedSuccessfully(false);
  };

  useEffect(() => {
    if (!open) {
      resetModalState();
    }
  }, [open]);

  const handleTopicSelect: ContactTopicSelectHandler = (topicId) => {
    setActiveTopicId(topicId);
    setIsSubmittedSuccessfully(false);
  };

  const handleFieldChange: ContactFormFieldChangeHandler = (field, value) => {
    setFormState((currentState) => ({
      ...currentState,
      [field]: value,
    }));
  };

  const handleSubmit: ContactFormSubmitHandler = (event) => {
    event.preventDefault();
    setIsSubmittedSuccessfully(true);
  };

  const handleResetForm = () => {
    setFormState(createInitialFormState());
    setIsSubmittedSuccessfully(false);
  };

  return {
    activeTopic: CONTACT_TOPICS_BY_ID[activeTopicId],
    activeTopicId,
    formState,
    isSubmittedSuccessfully,
    topics: CONTACT_TOPICS,
    handleFieldChange,
    handleResetForm,
    handleSubmit,
    handleTopicSelect,
  };
};
