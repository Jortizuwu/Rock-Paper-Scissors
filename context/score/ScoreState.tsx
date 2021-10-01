import React, { useReducer } from "react";
import { ValuesTypes } from "../../components/Results";

import ScoreContext from "./ScoreContext";
import { InitialValues, ScoreReducer } from "./ScoreReducer";

const ScoreState = ({ children }: any): JSX.Element => {
  const initailState: InitialValues = {
    valHouse: null,
    valUser: null,
    scoreUser: 0,
  };

  const [state, dispatch] = useReducer(ScoreReducer, initailState);

  const getValUser = (value: ValuesTypes): void => {
    dispatch({
      type: "user",
      payload: value,
    });
  };

  const getValHouse = (value: ValuesTypes): void => {
    dispatch({
      type: "house",
      payload: value,
    });
  };

  const playAgain = (): void => {
    dispatch({
      type: "again",
    });
  };

  const winUser = (actualScore: number): void => {
    dispatch({
      type: "win",
      payalod: actualScore + 1,
    });
  };

  const loseUser = (): void => {
    dispatch({
      type: "lose",
    });
  };

  return (
    <ScoreContext.Provider
      value={{
        getValUser,
        getValHouse,
        playAgain,
        winUser,
        loseUser,
        valUser: state.valUser,
        valHouse: state.valHouse,
        scoreUser: state.scoreUser,
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
};

export default ScoreState;
