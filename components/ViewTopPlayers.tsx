import React, { useContext } from "react";
import { UiContext } from "../context/ui/UiContext";

const ViewTopPlayers = () => {
  const { handleOpenModalTop } = useContext(UiContext);
  return (
    <div className="mt-14">
      <button
        onClick={handleOpenModalTop}
        className="button-base absolute mt-0 left-5 bottom-5 bg-transparent text-white border border-white flex flex-row items-center"
      >
        view top players
        <svg
          className="w-6 h-6 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default ViewTopPlayers;
