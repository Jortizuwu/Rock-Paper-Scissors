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
      // console.log(error.response.data.msg);
    }
  };

  const getUserByIP = async (nombre: string): Promise<void> => {
    try {
      const { data } = await scoreApi.get<GetUserByIP>(`/usuarios/${nombre}`);
      dispatch({
        type: "addUser",
        payload: data.usuario,
      });
      Swal.fire("Welcome", data.usuario.nombre.toUpperCase(), "success");
    } catch (error) {
      Swal.fire(
        "Error",
        "User not found, please check your name is correct",
        "error"
      );
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
      Swal.fire("Welcome", "User created successfully", "success");
    } catch (error) {
      console.log(error.response.data.msg);
      Swal.fire("Error", error.response.data.msg, "error");
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
