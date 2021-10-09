import { ApiUsuario, TopUser } from "../../config/apiInterfaces";

export interface apiState {
  top: TopUser | null;
  user: ApiUsuario | null;
}

export type apiTypes =
  | { type: "getTop"; payload: TopUser }
  | { type: "addUser"; payload: ApiUsuario }
  | { type: "updateUser" }
  | { type: "logout" }
  | { type: "getUser"; payload: ApiUsuario };

export const apiReducer = (state: apiState, action: apiTypes): apiState => {
  switch (action.type) {
    case "getTop":
      return {
        ...state,
        top: action.payload,
      };
    case "addUser":
      return {
        ...state,
        user: action.payload,
      };
    case "getUser":
      return {
        ...state,
        user: action.payload,
      };
    case "logout":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
