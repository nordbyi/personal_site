import React, {useState, Dispatch, SetStateAction, useEffect} from "react";
import GameTimer from "../GameTimer/GameTimer";
import './TimerDisplay.css'

interface Props {
  time: number,
  win: boolean,
  loss: boolean,
  updateGameLoss: Dispatch<SetStateAction<boolean>>
}

const TimerDisplay: React.FC<Props> = ({time, win, loss, updateGameLoss}) => {
 
  const [width, setWidth] = useState<string>('100%')

  useEffect(() => {
    setWidth('0%')
  }, [])

  return (
    <div className='timer-container'>
      <div style={{width: width, height: '100px', background: 'green', transition: `all ${time}s linear`}}></div>
      {!win && !loss && <GameTimer time={time} win={win} loss={loss} updateGameLoss={updateGameLoss} />}
      <span></span>
    </div>
  );
};

export default TimerDisplay;
