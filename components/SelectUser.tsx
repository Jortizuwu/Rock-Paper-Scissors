import React, { useContext, useEffect } from "react";
import Image from "next/image";

import imgPaper from "../public/icon-paper.svg";
import rock from "../public/icon-rock.svg";
import scissors from "../public/icon-scissors.svg";
import ScoreContext from "../context/score/ScoreContext";
// import triangle from "../public/bg-triangle.svg";


const SelectUser = () => {
  const { getValUser } = useContext(ScoreContext);

  return (
    <div className="h-auto mt-14 w-3/4 mx-auto p-2 relative">
      {/* <div className="absolute bottom-7 w-64 right-48 z-0">
          <Image src={triangle} alt="paper" />
        </div> */}
      <div className="z-40 flex flex-row justify-between w-4/6 mx-auto">
        <button
          onClick={() => getValUser("paper")}
          className="button-game border-blue-600 shadow-inner"
        >
          <Image src={imgPaper} alt="paper" />
        </button>
        <button
          onClick={() => getValUser("scissors")}
          className="button-game border-yellow-400"
        >
          <Image src={scissors} alt="scissors" />
        </button>
      </div>
      <div className="z-40 flex justify-center mt-3">
        <button
          onClick={() => getValUser("rock")}
          className="button-game border-red-600"
        >
          <Image className="z-0" src={rock} alt="rock" />
        </button>
      </div>
    </div>
  );
};

export default SelectUser;
