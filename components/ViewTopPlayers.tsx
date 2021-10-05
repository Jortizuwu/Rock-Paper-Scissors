import React, { useContext } from "react";
import { UiContext } from "../context/ui/UiContext";

const ViewTopPlayers = () => {
  const { handleOpenModalTop } = useContext(UiContext);
  return (
    <div className="mt-14 ">
      <button
        onClick={handleOpenModalTop}
        className="button-base absolute mt-0 left-5 bottom-5 bg-transparent text-white border border-white"
      >
        view top players
      </button>
    </div>
  );
};

export default ViewTopPlayers;
