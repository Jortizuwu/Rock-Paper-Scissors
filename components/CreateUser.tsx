import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Modal from "./Modal";
import ApiContext from "../context/api/ApiContext";
import ScoreContext from "../context/score/ScoreContext";
import { UiContext } from "../context/ui/UiContext";

const CreateUser = () => {
  const { createUser } = useContext(ApiContext);
  const { scoreUser, playAgain, loseUser } = useContext(ScoreContext);
  const { handleCloseModalRegister } = useContext(UiContext);

  const { handleBlur, handleChange, values, errors, touched, handleSubmit } =
    useFormik({
      initialValues: {
        puntaje: scoreUser.toString(),
        nombre: "",
      },
      validationSchema: Yup.object({
        nombre: Yup.string().required("El nombre es obligatorio"),
      }),
      onSubmit: (valores) => {
        const { nombre, puntaje } = valores;
        handleCloseModalRegister();
        loseUser();
        localStorage.setItem("name", nombre.trim().toLowerCase());
        createUser(nombre.trim().toLowerCase(), puntaje);
      },
    });

  const restAndClose = () => {
    loseUser();
    handleCloseModalRegister();
  };

  return (
    <>
      <Modal handleCloseModal={restAndClose} title="register user">
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
          <div className="mt-4">
            <label
              htmlFor="puntaje"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Puntaje
            </label>
            <input
              className="input focus:outline-none focus:ring focus:border-blue-100"
              type="text"
              placeholder="Ingrese su nombre"
              disabled
              id="puntaje"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.puntaje}
            />
          </div>
          <button
            className="button-base bg-blue-700 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-blue-800 cursor-pointer flex items-center justify-center"
            type="submit"
          >
            Guardar
            <svg
              className="w-5 h-5 ml-2 inline-block"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
              ></path>
            </svg>
          </button>
        </form>
      </Modal>
    </>
  );
};

export default CreateUser;
