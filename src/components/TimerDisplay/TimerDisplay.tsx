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
      {!win && !loss && (<div className='timer-slider' style={{width: width, transition: `all ${time}s linear`}}>
        <GameTimer time={time} win={win} loss={loss} updateGameLoss={updateGameLoss} />
      </div>)}
      {(win || loss) && <div className={`game-over ${win ? 'win' : 'loss'}`}>You {win ? 'win' : 'lose'}</div>}
    </div>
  );
};

export default TimerDisplay;
