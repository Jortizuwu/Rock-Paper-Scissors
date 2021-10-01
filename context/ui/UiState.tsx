import React, { useReducer } from "react";
import { UiContext } from "./UiContext";
import { uiReducer, uiState } from "./uiReducer";

const UiState = ({ children }: any) => {
  const initialState: uiState = {
    modalOpen: false,
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

  return (
    <UiContext.Provider
      value={{ handleCloseModal, handleOpenModal, modalOpen: state.modalOpen }}
    >
      {children}
    </UiContext.Provider>
  );
};

export default UiState;
