import React, {useEffect, useState} from "react";
import Typing from "../Typing/Typing";
import TimerDisplay from "../TimerDisplay/TimerDisplay";
import GameText from "../GameText/GameText";
import CharacterImage from "../CharacterImage/CharacterImage";
import './GameArea.css'

const GameArea: React.FC = () => {
  const [win, setWin] = useState<boolean>(false);
  const [loss, setLoss] = useState<boolean>(false);

  useEffect(() => {
    console.log('loss updated')
  }, [loss])

  const showTyping = true

  return (
  <div>
    <div className="picture-typing-area">
      {showTyping &&
      (<div>
        <Typing win={win} loss={loss} setWin={setWin}/>
        <TimerDisplay time={20} win={win} loss={loss} updateGameLoss={setLoss}/>
      </div>)}
      <CharacterImage source={'https://user-images.githubusercontent.com/108428451/227247013-357061a7-8b34-4cb3-a2e6-f2eaed388a52.gif'} fade={true}/>
    </div>
    <GameText text={'Hi! I\'m Ian! I\'m glad you\'re here! I hope you have a good time and enjoy what I have created! If you see something that needs improvement, let me know!'}/>
  </div>)
}

export default GameArea