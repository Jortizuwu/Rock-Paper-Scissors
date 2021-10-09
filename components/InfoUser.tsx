import React, { useContext, useState } from "react";
import ApiContext from "../context/api/ApiContext";
import * as Yup from "yup";

import { useFormik } from "formik";

const InfoUser = () => {
  const [showfrom, setShowfrom] = useState(false);
  const { user, getUserByIP, handleLogout } = useContext(ApiContext);
  const { handleBlur, handleChange, values, errors, touched, handleSubmit } =
    useFormik({
      initialValues: {
        nombre: "",
      },
      validationSchema: Yup.object({
        nombre: Yup.string().required("El nombre es obligatorio"),
      }),
      onSubmit: (valores) => {
        const { nombre } = valores;
        localStorage.setItem("name", nombre.trim().toLowerCase());
        getUserByIP(nombre.trim().toLowerCase());
      },
    });

  const showFormD = () => {
    setShowfrom(!showfrom);
  };

  const formD = () => {
    return (
      <div className="bg-white mb-2 rounded-md">
        <div className="flex items-end justify-end w-full pt-2 px-4">
          <button
            className="text-red-500 uppercase font-bold cursor-pointer text-lg"
            onClick={showFormD}
          >
            X
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-4">
          <div>
            <label
              htmlFor="nombre"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Nombre
            </label>
            <div className="input w-full flex flex-row items-center focus:ring focus:border-blue-100 ">
              <input
                className="focus:outline-none w-full h-full"
                type="text"
                placeholder="Ingrese su nombre"
                id="nombre"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.nombre}
              />
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
            </div>
          </div>
          {touched.nombre && errors.nombre && (
            <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
              <p className="font-bold">Error</p>
              <p>{errors.nombre}</p>
            </div>
          )}
          <button
            className="button-base flex flex-row items-center justify-center bg-blue-700 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-blue-800 cursor-pointer"
            type="submit"
          >
            login
            <svg
              className="w-6 h-6 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              ></path>
            </svg>
          </button>
        </form>
      </div>
    );
  };

  return (
    <>
      {user ? (
        <div className="flex flex-row space-x-4 justify-center mb-4">
          <div className="w-full lg:w-9/12 mx-auto bg-white rounded-md px-2 py-1">
            <div className="flex justify-between items-center">
              <div className="w-1/2 uppercase font-bold">{user?.nombre}</div>
              <div className="w-1/2 uppercase text-right font-semibold text-xs sm:text-base">
                You best score:
                <span className="text-blue-500 font-bold ml-0.5">
                  {user?.puntaje}
                </span>
              </div>
            </div>
          </div>
          <button
            className="button-base bg-red-500 text-white flex flex-row items-center"
            onClick={handleLogout}
          >
            Logout
            <svg
              className="w-6 h-6 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              ></path>
            </svg>
          </button>
        </div>
      ) : !showfrom ? (
        <button
          className="button-base bg-blue-700 w-full lg:w-9/12 mx-auto flex justify-center mt-1 p-2 text-white uppercase font-bold hover:bg-blue-800 cursor-pointer mb-2"
          onClick={showFormD}
        >
          you already have a user click here
        </button>
      ) : (
        formD()
      )}
    </>
  );
};

export default InfoUser;
