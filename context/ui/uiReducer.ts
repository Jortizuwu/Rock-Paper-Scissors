export interface uiState {
  modalOpen: boolean;
}

type ActionTpyesUI = { type: "open" } | { type: "close" };

export const uiReducer = (state: uiState, action: ActionTpyesUI): uiState => {
  switch (action.type) {
    case "close":
      return {
        ...state,
        modalOpen: false,
      };
    case "open":
      return {
        ...state,
        modalOpen: true,
      };
    default:
      return state;
  }
};
