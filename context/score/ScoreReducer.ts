import { ValuesTypes } from "../../components/Results";

export interface InitialValues {
  valUser: ValuesTypes;
  valHouse: ValuesTypes;
  scoreUser: number;
}

export type actionTypes =
  | { type: "user"; payload: ValuesTypes }
  | { type: "house"; payload: ValuesTypes }
  | { type: "again" }
  | { type: "win"; payalod: number }
  | { type: "lose" };

export const ScoreReducer = (
  state: InitialValues,
  action: actionTypes
): InitialValues => {
  switch (action.type) {
    case "house":
      return {
        ...state,
        valHouse: action.payload,
      };
    case "user":
      return {
        ...state,
        valUser: action.payload,
      };
    case "again":
      return {
        ...state,
        valUser: null,
        valHouse: null,
      };
    case "win":
      return {
        ...state,
        scoreUser: action.payalod,
      };
    case "lose":
      return {
        ...state,
        scoreUser: 0,
      };
    default:
      return state;
  }
};
