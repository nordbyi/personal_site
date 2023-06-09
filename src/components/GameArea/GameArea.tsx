import React, {useEffect, useState} from "react";
import Typing from "../Typing/Typing";
import GameTimer from "../GameTimer/GameTimer";

const GameArea: React.FC = () => {
  const [win, setWin] = useState<boolean>(false);
  const [loss, setLoss] = useState<boolean>(false);

  useEffect(() => {
    console.log('loss updated')
  }, [loss])

  return (<div>
    <Typing />
    <GameTimer time={3} win={win} loss={loss} updateGameLoss={setLoss}/>
  </div>)
}

export default GameArea