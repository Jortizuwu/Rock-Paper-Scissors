import React, { useContext } from "react";
import Image from "next/image";

import imgPaper from "../public/icon-paper.svg";
import rock from "../public/icon-rock.svg";
import scissors from "../public/icon-scissors.svg";
import ScoreContext from "../context/score/ScoreContext";
import triangle from "../public/bg-triangle.svg";

const SelectUser = () => {
  const { getValUser } = useContext(ScoreContext);

  return (
    <div className="h-auto flex flex-col mt-8 w-full sm:w-10/12 lg:w-3/4 xl:w-2/4 mx-auto p-2 relative animate__animated animate__fadeIn">
      <div className="mx-auto w-44 md:w-64 z-0 relative mt-8 md:mt-14 lg:mt-20">
        <Image src={triangle} alt="paper" className="" />
      </div>
      <div className="absolute inset-0">
        <div className="z-40 flex-grow-0 flex flex-row justify-between w-64 sm:w-2/3 md:w-full lg:w-9/12 xl:w-full mx-auto">
          <button
            onClick={() => getValUser("paper")}
            className="button-game z-40 border-blue-600 btn-blue"
          >
            <Image src={imgPaper} alt="paper" />
          </button>
          <button
            onClick={() => getValUser("scissors")}
            className="button-game z-40 border-yellow-400 btn-yellow"
          >
            <Image src={scissors} alt="scissors" />
          </button>
        </div>
        <div className="z-40 flex-grow flex justify-center mt-3">
          <button
            onClick={() => getValUser("rock")}
            className="button-game z-40 border-red-600 btn-red"
          >
            <Image className="z-0" src={rock} alt="rock" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectUser;
