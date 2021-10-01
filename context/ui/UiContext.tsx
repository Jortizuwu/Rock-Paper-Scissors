import { createContext } from "react";

type ContextProps = {
  handleCloseModal: () => void;
  handleOpenModal: () => void;
  modalOpen: boolean;
};

export const UiContext = createContext({} as ContextProps);
