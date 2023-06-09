import React, {useEffect, useState} from "react";
import Typing from "../Typing/Typing";
import TimerDisplay from "../TimerDisplay/TimerDisplay";

const GameArea: React.FC = () => {
  const [win, setWin] = useState<boolean>(false);
  const [loss, setLoss] = useState<boolean>(false);

  useEffect(() => {
    console.log('loss updated')
  }, [loss])

  return (<div>
    <Typing win={win} loss={loss} setWin={setWin}/>
    <TimerDisplay time={10} win={win} loss={loss} updateGameLoss={setLoss}/>
  </div>)
}

export default GameArea