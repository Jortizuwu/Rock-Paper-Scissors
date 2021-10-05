import React, { useReducer } from "react";
import Swal from "sweetalert2";

import scoreApi from "../../config/ScoreApi";
import ApiContext from "./ApiContext";
import { apiReducer, apiState } from "./apiReducer";
import { GetUserByIP, TopUser } from "../../config/apiInterfaces";

const ApiState = ({ children }: any) => {
  const initialState: apiState = {
    top: null,
    user: null,
  };

  const [state, dispatch] = useReducer(apiReducer, initialState);

  const getTop = async (): Promise<void> => {
    try {
      const { data } = await scoreApi.get<TopUser>("/usuarios");
      dispatch({
        type: "getTop",
        payload: data,
      });
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  const getUserByIP = async (ip: string): Promise<void> => {
    try {
      const { data } = await scoreApi.get<GetUserByIP>(`/usuarios/${ip}`);
      dispatch({
        type: "addUser",
        payload: data.usuario,
      });
      Swal.fire("Welcome", data.usuario.nombre.toUpperCase(), "success");
    } catch (error) {
      Swal.fire("Welcome", "play and earn points", "info");
      // console.log(error.response.data.msg);
    }
  };

  const updateScoreUser = async (
    ip: string,
    puntaje: string
  ): Promise<void> => {
    try {
      await scoreApi.put(`/usuarios/${ip}`, {
        puntaje,
      });
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  const createUser = async (nombre: string, puntaje: string): Promise<void> => {
    try {
      const { data } = await scoreApi.post("/usuarios", {
        nombre,
        puntaje,
      });
      dispatch({
        type: "addUser",
        payload: data.usuario,
      });
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  return (
    <ApiContext.Provider
      value={{
        getTop,
        createUser,
        getUserByIP,
        updateScoreUser,
        top: state.top,
        user: state.user,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiState;
