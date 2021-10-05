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
        // playAgain();
        loseUser();
        createUser(nombre, puntaje);
      },
    });

  const restAndClose = () => {
    loseUser();
    // playAgain();
    handleCloseModalRegister();
  };

  return (
    <>
      <Modal>
        <button
          className="p-1 ml-auto bg-transparent border-0 text-gray-300 float-right text-3xl leading-none font-semibold outline-none focus:outline-none px-2"
          onClick={restAndClose}
        >
          <span className="bg-transparent h-6 w-6 text-2xl text-red-500 block outline-none focus:outline-none">
            X
          </span>
        </button>
        <form onSubmit={handleSubmit} className="p-4">
          <div>
            <label
              htmlFor="nombre"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Nombre
            </label>
            <input
              className="input focus:outline-none focus:ring focus:border-blue-100"
              type="text"
              placeholder="Ingrese su nombre"
              id="nombre"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.nombre}
            />
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
            className="bg-blue-700 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-blue-800 cursor-pointer"
            type="submit"
          >
            Guardar
          </button>
        </form>
      </Modal>
    </>
  );
};

export default CreateUser;
