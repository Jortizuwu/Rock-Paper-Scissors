import React from "react";

const Modal = ({ children }: any, hola: Function): JSX.Element => {
  return (
    <div>
      <div className=" overflow-x-hidden overflow-y-auto fixed top-0 ms:top-12 inset-0 z-50 outline-none focus:outline-none justify-center items-center">
        <div className="relative w-auto sm:my-6 mx-auto max-w-sm">
          <div className="h-screen border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {children}
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
};

export default Modal;
