import React, { useContext } from "react";
import { UiContext } from "../context/ui/UiContext";

const Rules = () => {
  const { handleOpenModal } = useContext(UiContext);
  return (
    <div className="mt-14 ">
      <button
        onClick={handleOpenModal}
        className="button-base absolute mt-0 bottom-5 right-5 bg-transparent text-white border border-white flex flex-row items-center"
      >
        rules
        <svg
          className="w-6 h-6 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Rules;
