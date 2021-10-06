import React, { useContext, useState } from "react";
import ApiContext from "../context/api/ApiContext";
import * as Yup from "yup";

import { useFormik } from "formik";

const InfoUser = () => {
  const [showfrom, setShowfrom] = useState(false);
  const { user, getUserByIP } = useContext(ApiContext);
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
        getUserByIP(nombre.trim());
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
          <button
            className="bg-blue-700 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-blue-800 cursor-pointer"
            type="submit"
          >
            Iniciar
          </button>
        </form>
      </div>
    );
  };

  return (
    <>
      {user ? (
        <div className="w-full lg:w-9/12 mx-auto bg-white rounded-md mb-4 px-2 py-1">
          <div className="flex justify-between items-center">
            <div className="w-1/2 uppercase font-bold">{user?.nombre}</div>
            <div className="w-1/2 uppercase font-semibold text-xs sm:text-base">
              You best score:
              <span className="text-blue-500 font-bold ml-0.5">
                {user?.puntaje}
              </span>
            </div>
          </div>
        </div>
      ) : !showfrom ? (
        <button
          className="bg-blue-700 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-blue-800 cursor-pointer mb-2"
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
