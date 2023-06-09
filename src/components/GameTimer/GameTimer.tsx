import React, {Dispatch, SetStateAction, useEffect} from "react";

interface Props {
  time: number,
  win: boolean,
  loss: boolean,
  updateGameLoss: Dispatch<SetStateAction<boolean>>
}

const GameTimer:React.FC<Props> = ({time, win, loss, updateGameLoss}) => {
  const timer = setTimeout(() => {
    updateGameLoss(true) // update game state to a loss
  }, time)

  useEffect(() => {
    clearTimeout(timer)
  }, [win, loss])

  return <h1>Timer</h1>
}

export default GameTimer