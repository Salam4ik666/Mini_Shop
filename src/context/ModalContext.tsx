import { createContext, type PropsWithChildren, useState } from 'react';

interface IModalContext {
  showModal: boolean;
  open: () => void;
  close: () => void;
}

export const ModalContext = createContext<IModalContext>({
  showModal: false,
  open: () => {},
  close: () => {},
});

export const ModalState = ({ children }: PropsWithChildren) => {
  const [showModal, setShowModal] = useState(false);

  const open = () => setShowModal(true);
  const close = () => setShowModal(false);

  return <ModalContext.Provider value={{ showModal, open, close }}>{children}</ModalContext.Provider>;
};
