import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export function ModalProvider({ children }) {
  const [modalElement, setModalElement] = useState(null);

  // useCallback을 사용하면 100점
  const open = (modalElement) => setModalElement(modalElement);
  const close = () => setModalElement(null);

  // useMemo를 사용하면 100점
  const value = { open, close };

  return (
    <ModalContext.Provider value={value}>
      {children}
      {modalElement}
    </ModalContext.Provider>
  );
}
