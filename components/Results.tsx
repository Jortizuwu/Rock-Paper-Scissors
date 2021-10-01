import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";

import imgPaper from "../public/icon-paper.svg";
import rock from "../public/icon-rock.svg";
import scissors from "../public/icon-scissors.svg";
import ScoreContext from "../context/score/ScoreContext";

export type ValuesTypes = "paper" | "rock" | "scissors" | null;

const houseVal: ValuesTypes[] = ["paper", "rock", "scissors"];

const Results = () => {
  const [imgUser, setImgUser] = useState(null);
  const [imgHouse, setImgHouse] = useState(null);
  const [winner, setWinner] = useState("");

  const {
    valUser,
    valHouse,
    getValHouse,
    playAgain,
    winUser,
    scoreUser,
    loseUser,
  } = useContext(ScoreContext);

  const showValueUser = (val: ValuesTypes): void => {
    switch (val) {
      case "paper":
        setImgUser(imgPaper);
        break;
      case "rock":
        setImgUser(rock);
        break;
      case "scissors":
        setImgUser(scissors);
        break;
    }
  };
  const showValueHouse = (val: ValuesTypes): void => {
    switch (val) {
      case "paper":
        setImgHouse(imgPaper);
        break;
      case "rock":
        setImgHouse(rock);
        break;
      case "scissors":
        setImgHouse(scissors);
        break;
    }
  };

  useEffect(() => {
    if (valUser) {
      let randonValue = Math.floor(Math.random() * 3);
      getValHouse(houseVal[randonValue]);
    }
  }, []);

  useEffect(() => {
    showValueHouse(valHouse);
  }, [valHouse]);

  useEffect(() => {
    showValueUser(valUser);
  }, [valUser]);

  useEffect(() => {
    if (
      (valHouse === "paper" && valUser === "paper") ||
      (valHouse === "rock" && valUser === "rock") ||
      (valHouse === "scissors" && valUser === "scissors")
    ) {
      setWinner("draw");
    } else if (
      (valHouse === "paper" && valUser === "rock") ||
      (valHouse === "scissors" && valUser === "paper") ||
      (valHouse === "rock" && valUser === "scissors")
    ) {
      setWinner("the house winner");
      setTimeout(() => {
        loseUser();
        playAgain();
      }, 3000);
    } else if (
      (valUser === "paper" && valHouse === "rock") ||
      (valUser === "scissors" && valHouse === "paper") ||
      (valUser === "rock" && valHouse === "scissors")
    ) {
      winUser(scoreUser);
      setWinner("you win");
    }
  }, [valHouse, valUser]);

  return (
    <div className="h-auto mt-14 w-full mx-auto p-2 flex flex-row justify-between">
      <div className="">
        <h3 className="font-bold text-white">you picked</h3>
        {imgUser && valUser && (
          <div className="button-game border-red-500 flex justify-center items-center">
            <Image src={imgUser} alt={valUser} />
          </div>
        )}
      </div>
      <div>
        <p className="uppercase font-bold text-2xl text-white">{winner}</p>
        <button className="button-base uppercase bg-white" onClick={playAgain}>
          Play again
        </button>
      </div>
      <div className="">
        <h3 className="font-bold text-white">the house picked</h3>
        {imgHouse && valHouse && (
          <div className="button-game border-red-500 flex justify-center items-center">
            <Image src={imgHouse} alt={valHouse} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Results;
