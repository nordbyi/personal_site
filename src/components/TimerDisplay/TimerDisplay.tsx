import React, {Dispatch, SetStateAction} from "react";
import GameTimer from "../GameTimer/GameTimer";

interface Props {
  time: number,
  win: boolean,
  loss: boolean,
  updateGameLoss: Dispatch<SetStateAction<boolean>>
}

const TimerDisplay: React.FC<Props> = ({time, win, loss, updateGameLoss}) => {
  return (
    <div>
      <span></span>
      <GameTimer time={time} win={win} loss={loss} updateGameLoss={updateGameLoss} />
      <span></span>
    </div>
  );
};

export default TimerDisplay;
