import React, {Dispatch, SetStateAction, useEffect} from "react";

interface Props {
  time: number,
  win: boolean,
  lose: boolean,
  updateGameLose: Dispatch<SetStateAction<boolean>>
}

const GameTimer:React.FC<Props> = ({time, win, lose, updateGameLose}) => {
  const timer = setTimeout(() => {
    updateGameLose(true) // update game state to a loss
  }, time)

  useEffect(() => {
    clearTimeout(timer)
  }, [win, lose])
  
  return <h1>Timer</h1>
}

export default GameTimer