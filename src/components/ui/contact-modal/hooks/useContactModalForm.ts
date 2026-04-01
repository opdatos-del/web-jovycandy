import { useEffect, useState } from 'react';

import { DEFAULT_CONTACT_TOPIC_ID, EMPTY_CONTACT_FORM_STATE } from '../constants/contact-modal.constants';
import { CONTACT_TOPICS } from '../data/contact-modal.data';
import type {
  ContactFormFieldChangeHandler,
  ContactFormState,
  ContactFormSubmitHandler,
  ContactTopicId,
  ContactTopicSelectHandler,
} from '../types/contact-modal.types';

const createEmptyContactFormState = (): ContactFormState => ({
  ...EMPTY_CONTACT_FORM_STATE,
});

const getActiveTopicById = (topicId: ContactTopicId) =>
  CONTACT_TOPICS.find((topic) => topic.id === topicId) ?? CONTACT_TOPICS[0];

export const useContactModalForm = (open: boolean) => {
  const [activeTopicId, setActiveTopicId] = useState<ContactTopicId>(DEFAULT_CONTACT_TOPIC_ID);
  const [formState, setFormState] = useState<ContactFormState>(createEmptyContactFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const resetModalState = () => {
    setActiveTopicId(DEFAULT_CONTACT_TOPIC_ID);
    setFormState(createEmptyContactFormState());
    setIsSubmitted(false);
  };

  useEffect(() => {
    if (!open) {
      resetModalState();
    }
  }, [open]);

  const handleTopicSelect: ContactTopicSelectHandler = (topicId) => {
    setActiveTopicId(topicId);
    setIsSubmitted(false);
  };

  const handleFieldChange: ContactFormFieldChangeHandler = (field, value) => {
    setFormState((currentState) => ({
      ...currentState,
      [field]: value,
    }));
  };

  const handleSubmit: ContactFormSubmitHandler = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  const handleResetForm = () => {
    setFormState(createEmptyContactFormState());
    setIsSubmitted(false);
  };

  return {
    activeTopic: getActiveTopicById(activeTopicId),
    activeTopicId,
    formState,
    isSubmitted,
    topics: CONTACT_TOPICS,
    handleFieldChange,
    handleResetForm,
    handleSubmit,
    handleTopicSelect,
  };
};
