export interface uiState {
  modalOpen: boolean;
  viewTopPlayer: boolean;
  viewRegisterPlayer: boolean;
}

type ActionTpyesUI =
  | { type: "open" }
  | { type: "close" }
  | { type: "closeTopPlayer" }
  | { type: "openTopPlayer" }
  | { type: "openRegisterPlayer" }
  | { type: "CloseRegisterPlayer" };

export const uiReducer = (state: uiState, action: ActionTpyesUI): uiState => {
  switch (action.type) {
    case "open":
      return {
        ...state,
        modalOpen: true,
      };
    case "close":
      return {
        ...state,
        modalOpen: false,
      };
    case "openTopPlayer":
      return {
        ...state,
        viewTopPlayer: true,
      };
    case "closeTopPlayer":
      return {
        ...state,
        viewTopPlayer: false,
      };
    case "openRegisterPlayer":
      return {
        ...state,
        viewRegisterPlayer: true,
      };
    case "CloseRegisterPlayer":
      return {
        ...state,
        viewRegisterPlayer: false,
      };
    default:
      return state;
  }
};
