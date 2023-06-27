import React, {useEffect, useState} from "react";
import Typing from "../Typing/Typing";
import TimerDisplay from "../TimerDisplay/TimerDisplay";
import GameText from "../GameText/GameText";

const GameArea: React.FC = () => {
  const [win, setWin] = useState<boolean>(false);
  const [loss, setLoss] = useState<boolean>(false);

  useEffect(() => {
    console.log('loss updated')
  }, [loss])

  return (<div>
    <Typing win={win} loss={loss} setWin={setWin}/>
    <TimerDisplay time={20} win={win} loss={loss} updateGameLoss={setLoss}/>
    <GameText text={'Hi! I\'m Ian! I\'m glad you\'re here! I hope you have a good time and enjoy what I have created! If you see something that needs improvement, let me know!'}/>
  </div>)
}

export default GameArea