import React, {useEffect, useState} from "react";
import Typing from "../Typing/Typing";
import TimerDisplay from "../TimerDisplay/TimerDisplay";
import GameText from "../GameText/GameText";
import CharacterImage from "../CharacterImage/CharacterImage";
import './GameArea.css'

const GameArea: React.FC = () => {
  const [win, setWin] = useState<boolean>(false);
  const [loss, setLoss] = useState<boolean>(false);
  const [showTyping, setShowTyping] = useState<boolean>(false)

  const toggleTypingView = () => {
    setShowTyping(!showTyping)
  }

  useEffect(() => {
    console.log('loss updated')
  }, [loss])

  return (
  <div  className="game-area">
    <CharacterImage source={'https://user-images.githubusercontent.com/108428451/227247013-357061a7-8b34-4cb3-a2e6-f2eaed388a52.gif'} fade={true} slideLeft={showTyping}/>
    <div onClick={toggleTypingView} className="top-section">
      {showTyping && <Typing win={win} loss={loss} setWin={setWin} time={20} updateGameLoss={setLoss}/>}
    </div>
    <GameText text={'Hi! I\'m Ian! I\'m glad you\'re here! I hope you have a good time and enjoy what I have created! If you see something that needs improvement, let me know!'}/>
  </div>)
}

export default GameArea