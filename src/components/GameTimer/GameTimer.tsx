import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import "./GameTimer.css";

interface Props {
  time: number;
  win: boolean;
  loss: boolean;
  updateGameLoss: Dispatch<SetStateAction<boolean>>;
}

const GameTimer: React.FC<Props> = ({ time, win, loss, updateGameLoss }) => {
  const [timeLeft, setTimeLeft] = useState<number>(time);

  const timer = setTimeout(() => {
    setTimeLeft(timeLeft - 1);
  }, 1000);

  useEffect(() => {
    if (win || loss) {
      clearTimeout(timer);
    }
  }, [win, loss]);

  useEffect(() => {
    if (timeLeft <= 0) {
      updateGameLoss(true);
      clearTimeout(timer);
    }
  }, [timeLeft]);

  return (
    <div className="timer-div">
      <p>{timeLeft}</p>
    </div>
  );
};

export default GameTimer;
