import React, { useContext } from "react";
import Image from "next/image";

import logo from "../public/logo.svg";
import ScoreContext from "../context/score/ScoreContext";

const Score = () => {
  const { scoreUser } = useContext(ScoreContext);
  return (
    <div className="w-full flex justify-between border-2 border-gray-300 rounded-lg p-4 h-auto">
      <Image src={logo} alt="logo" />
      <div className="bg-white p-2 flex flex-col justify-center items-center rounded-lg w-24 h-auto">
        <h2 className="font-semibold text-gray-700 uppercase text-xs">Score</h2>
        <p className="font-bold text-gray-700 text-4xl">{scoreUser}</p>
      </div>
    </div>
  );
};

export default Score;
