import React, {useState} from "react";
import Typing from "../Typing/Typing";
import GameTimer from "../GameTimer/GameTimer";

const GameArea: React.FC = () => {
  const [win, setWin] = useState<boolean>(false);

  return (<div>
    <Typing />
    {/* <GameTimer /> */}
  </div>)
}

export default GameArea