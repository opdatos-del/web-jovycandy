import { useState } from 'react';

import type { AppActiveModal } from '../types/app.types';

type UseAppModalsOptions = {
  onBeforeOpenModal?: () => void;
};

export const useAppModals = ({ onBeforeOpenModal }: UseAppModalsOptions = {}) => {
  const [activeModal, setActiveModal] = useState<AppActiveModal>(null);

  const openModal = (modal: Exclude<AppActiveModal, null>) => {
    onBeforeOpenModal?.();
    setActiveModal(modal);
  };

  const openContactModal = () => openModal('contact');
  const openLocationModal = () => openModal('location');
  const closeActiveModal = () => setActiveModal(null);

  return {
    activeModal,
    openContactModal,
    openLocationModal,
    closeActiveModal,
  };
};
