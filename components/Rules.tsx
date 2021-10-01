import React, { useContext } from "react";
import { UiContext } from "../context/ui/UiContext";

const Rules = () => {
  const { handleOpenModal } = useContext(UiContext);
  return (
    <button
      onClick={handleOpenModal}
      className="button-base absolute bottom-5 right-5 bg-transparent text-white border border-white"
    >
      rules
    </button>
  );
};

export default Rules;
