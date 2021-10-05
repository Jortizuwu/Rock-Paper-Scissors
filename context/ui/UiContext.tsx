import { createContext } from "react";

type ContextProps = {
  handleCloseModal: () => void;
  handleOpenModal: () => void;
  handleCloseModalTop: () => void;
  handleOpenModalTop: () => void;
  handleCloseModalRegister: () => void;
  handleOpenModalRegister: () => void;
  modalOpen: boolean;
  viewTopPlayer: boolean;
  viewRegisterPlayer: boolean;
};

export const UiContext = createContext({} as ContextProps);
