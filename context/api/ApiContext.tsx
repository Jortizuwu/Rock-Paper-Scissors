import { createContext } from "react";
import { ApiUsuario, TopUser } from "../../config/apiInterfaces";

type contextProps = {
  user: ApiUsuario | null;
  top: TopUser | null;
  getTop: () => void;
  handleLogout: () => void;
  getUserByIP: (ip: string) => Promise<void>;
  createUser: (nombre: string, puntaje: string) => Promise<void>;
  updateScoreUser: (ip: string, puntaje: string) => Promise<void>;
};

const ApiContext = createContext({} as contextProps);

export default ApiContext;
