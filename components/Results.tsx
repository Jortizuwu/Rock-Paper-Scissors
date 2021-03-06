import React, {
  useContext,
  useEffect,
  useState,
  useRef,
  useCallback,
} from "react";
import Image from "next/image";

import imgPaper from "../public/icon-paper.svg";
import rock from "../public/icon-rock.svg";
import scissors from "../public/icon-scissors.svg";
import ScoreContext from "../context/score/ScoreContext";
import ApiContext from "../context/api/ApiContext";
import CreateUser from "./CreateUser";
import { UiContext } from "../context/ui/UiContext";

export type ValuesTypes = "paper" | "rock" | "scissors" | null;

const houseVal: ValuesTypes[] = ["paper", "rock", "scissors"];

const Results = () => {
  const [colorBorder, setColorBorder] = useState({
    user: "",
    house: "",
    imgUser: null || "",
    imgHouse: null || "",
  });

  const { house, imgHouse, imgUser, user } = colorBorder;

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

  const { user: userApi } = useContext(ApiContext);
  const { handleOpenModalRegister, viewRegisterPlayer } = useContext(UiContext);

  const showValueUser = useCallback(
    (val: ValuesTypes): void => {
      switch (val) {
        case "paper":
          // setImgUser(imgPaper);
          setColorBorder({
            ...colorBorder,
            user: "btn-blue border-blue-600",
            imgUser: imgPaper,
          });
          break;
        case "rock":
          // setImgUser(rock);
          setColorBorder({
            ...colorBorder,
            user: "btn-red border-red-600",
            imgUser: rock,
          });
          break;
        case "scissors":
          // setImgUser(scissors);
          setColorBorder({
            ...colorBorder,
            user: "btn-yellow border-yellow-400",
            imgUser: scissors,
          });
          break;
      }
    },
    [colorBorder]
  );

  const showValueHouse = useCallback(
    (val: ValuesTypes): void => {
      switch (val) {
        case "paper":
          // setImgHouse(imgPaper);
          setColorBorder({
            ...colorBorder,
            house: "btn-blue border-blue-600",
            imgHouse: imgPaper,
          });
          break;
        case "rock":
          // setImgHouse(rock);
          setColorBorder({
            ...colorBorder,
            house: "btn-red border-red-600",
            imgHouse: rock,
          });
          break;
        case "scissors":
          // setImgHouse(scissors);
          setColorBorder({
            ...colorBorder,
            house: "btn-yellow border-yellow-400",
            imgHouse: scissors,
          });
          break;
      }
    },
    [colorBorder]
  );

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
      if (scoreUser > 0 && userApi === null) {
        handleOpenModalRegister();
        return;
      }
      loseUser();
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
    <div className="h-auto mt-8 w-full mx-auto p-2 flex flex-col justify-between relative animate__animated animate__fadeIn">
      <div className="flex flex-row justify-between w-full">
        <div className="flex justify-between items-center sm:flex-col space-y-4 flex-col-reverse">
          <h3 className="font-semibold text-white mt-8 sm:mt-0 text-xs sm:text-xl text-center uppercase">
            you picked
          </h3>
          {imgUser && valUser && (
            <div
              className={`button-game mt-0 flex justify-center items-center ${user}`}
            >
              <Image src={imgUser} alt={valUser} />
            </div>
          )}
        </div>
        <div className="hidden text-center lg:flex flex-col justify-center">
          <p className="uppercase font-bold text-3xl text-white mb-4">
            {winner}
          </p>
          <div className="h-11">
            <button
              className="button-base uppercase bg-white text-red-500 h-full"
              onClick={playAgain}
            >
              Play again
            </button>
          </div>
        </div>
        <div className="relative flex justify-between items-center sm:flex-col space-y-4 flex-col-reverse">
          <h3 className="font-semibold text-white text-xs sm:text-xl text-center uppercase">
            the house picked
          </h3>
          {/* <div className="bg-black opacity-30 rounded-full h-full w-full bottom-10 lg:-bottom-2 z-0 lg:h-48 lg:w-48 absolute"></div> */}
          {imgHouse && valHouse && (
            <div
              className={`z-40 button-game flex justify-center items-center ${house}`}
            >
              <Image src={imgHouse} alt={valHouse} />
            </div>
          )}
        </div>
      </div>
      <div className="text-center mt-10 lg:hidden animate__animated animate__fadeInUp">
        <p className="uppercase font-bold text-3xl text-white mb-4 ">
          {winner}
        </p>
        <div className="h-11 w-full">
          <button
            className="button-base uppercase bg-white text-red-500 h-full w-9/12 text-center"
            onClick={playAgain}
          >
            Play again
            <svg
              className="w-6 h-6 ml-1 inline-block"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {viewRegisterPlayer && <CreateUser />}
    </div>
  );
};

export default Results;
