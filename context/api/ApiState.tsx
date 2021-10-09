import React, { useReducer } from "react";
import Swal from "sweetalert2";
import axios, { Axios, AxiosError } from "axios";

import scoreApi from "../../config/ScoreApi";
import ApiContext from "./ApiContext";
import { apiReducer, apiState } from "./apiReducer";
import { ApiUsuario, GetUserByIP, TopUser } from "../../config/apiInterfaces";

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
    } catch (error: any) {
      Swal.fire("Error", error.response.data.msg, "error");
    }
  };

  const getUserByIP = async (nombre: string | null): Promise<void> => {
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
    } catch (error: any) {
      console.log(error.response.data.msg!);
    }
  };

  const createUser = async (nombre: string, puntaje: string): Promise<void> => {
    try {
      const { data } = await scoreApi.post<any>("/usuarios", {
        nombre,
        puntaje,
      });
      dispatch({
        type: "addUser",
        payload: data.usuario!,
      });
      Swal.fire("Welcome", "User created successfully", "success");
    } catch (error: any) {
      // console.log(error.response.data.msg);
      Swal.fire("Error", error.response.data.msg, "error");
    }
  };

  const handleLogout = (): void => {
    localStorage.removeItem("name");
    dispatch({
      type: "logout",
    });
  };

  return (
    <ApiContext.Provider
      value={{
        getTop,
        createUser,
        getUserByIP,
        updateScoreUser,
        handleLogout,
        top: state.top,
        user: state.user,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiState;
