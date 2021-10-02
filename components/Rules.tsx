import React, { useContext } from "react";
import { UiContext } from "../context/ui/UiContext";

const Rules = () => {
  const { handleOpenModal } = useContext(UiContext);
  return (
    <div className="mt-14 ">
      <button
        onClick={handleOpenModal}
        className="button-base absolute mt-0 bottom-5 right-5 bg-transparent text-white border border-white"
      >
        rules
      </button>
    </div>
  );
};

export default Rules;
