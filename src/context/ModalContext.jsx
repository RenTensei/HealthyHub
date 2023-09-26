import { createContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(null);
  const [open, setOpen] = useState(false);

  const openModal = (name, mealType) => {
    setModal({ name, mealType });
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setModal(null);
  };

  return (
    <ModalContext.Provider value={{ modal, open, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
