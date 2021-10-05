import React, { useReducer } from "react";
import { UiContext } from "./UiContext";
import { uiReducer, uiState } from "./uiReducer";

const UiState = ({ children }: any) => {
  const initialState: uiState = {
    modalOpen: false,
    viewTopPlayer: false,
    viewRegisterPlayer: false,
  };

  const [state, dispatch] = useReducer(uiReducer, initialState);

  const handleOpenModal = (): void => {
    dispatch({
      type: "open",
    });
  };

  const handleCloseModal = (): void => {
    dispatch({
      type: "close",
    });
  };

  const handleOpenModalTop = (): void => {
    dispatch({
      type: "openTopPlayer",
    });
  };

  const handleCloseModalTop = (): void => {
    dispatch({
      type: "closeTopPlayer",
    });
  };

  const handleOpenModalRegister = (): void => {
    dispatch({
      type: "openRegisterPlayer",
    });
  };

  const handleCloseModalRegister = (): void => {
    dispatch({
      type: "CloseRegisterPlayer",
    });
  };

  return (
    <UiContext.Provider
      value={{
        handleCloseModal,
        handleOpenModal,
        handleOpenModalTop,
        handleCloseModalTop,
        handleOpenModalRegister,
        handleCloseModalRegister,
        modalOpen: state.modalOpen,
        viewTopPlayer: state.viewTopPlayer,
        viewRegisterPlayer: state.viewRegisterPlayer,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};

export default UiState;
