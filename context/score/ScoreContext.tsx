import { createContext } from "react";
import { ValuesTypes } from "../../components/Results";

type ScoreContextProps = {
  getValUser: (val: ValuesTypes) => void;
  getValHouse: (val: ValuesTypes) => void;
  playAgain: () => void;
  winUser: (val: number) => void;
  loseUser: () => void;
  valUser: ValuesTypes;
  valHouse: ValuesTypes;
  scoreUser: number;
};

const ScoreContext = createContext({} as ScoreContextProps);

export default ScoreContext;
