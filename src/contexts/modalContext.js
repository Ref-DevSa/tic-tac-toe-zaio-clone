import React, { createContext } from "react";
import { useModal } from "../hooks/useModal";
import ModalTemplate from "../components/Modal/ModalTemplate";

export const ModalContext = createContext({});

export const ModalContextProvider = ({ children }) => {
  const { modal, modalContent, handleModal } = useModal();

  return (
    <ModalContext.Provider value={{ handleModal, modalContent, modal }}>
      <ModalTemplate />
      {children}
    </ModalContext.Provider>
  );
};
