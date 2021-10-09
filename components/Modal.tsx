import React from "react";

interface ModalProps {
  children: JSX.Element;
  handleCloseModal: any;
  title: string;
}

const Modal = ({
  children,
  handleCloseModal,
  title,
}: ModalProps): JSX.Element => {
  return (
    <div>
      <div className=" overflow-x-hidden overflow-y-auto fixed top-0 ms:top-12 inset-0 z-50 outline-none focus:outline-none justify-center items-center">
        <div className="relative w-auto sm:my-6 mx-auto max-w-sm">
          <div className="h-screen sm:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-200 rounded-t">
              <h3 className="text-3xl font-semibold uppercase text-blue-400">
                {title}
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-gray-300 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={handleCloseModal}
              >
                <span className="bg-transparent h-6 w-6 text-2xl block outline-none focus:outline-none">
                  <svg
                    className="w-6 h-6 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
            {children}
            <div className="justify-center w-full flex items-center sm:hidden p-6 border-t border-solid border-gray-200 rounded-b">
              <button
                onClick={handleCloseModal}
                className="text-purple-500 background-transparent font-bold uppercase text-2xl px-6 py-2 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                <svg
                  className="w-6 h-6 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
};

export default Modal;
