import React, {useEffect, useState} from "react";
import Typing from "../Typing/Typing";
import GameText from "../GameText/GameText";
import CharacterImage from "../CharacterImage/CharacterImage";
import testData from "../../data-model";
import './GameArea.css'

const GameArea: React.FC = () => {
  const [progressIndex, setProgressIndex] = useState<number>(0)
  const [canProgress, setCanProgress] = useState<boolean>(true)
  const [win, setWin] = useState<boolean>(false);
  const [loss, setLoss] = useState<boolean>(false);
  const [showTyping, setShowTyping] = useState<boolean>(false) // replace with data model's value when made

  const toggleTypingView = () => {
    setShowTyping(!showTyping)
  }

  useEffect(() => {
    console.log('loss updated')
  }, [loss])

  return (
  <div  className="game-area">
    <div onClick={toggleTypingView} className="top-section">
      {testData[progressIndex].game && <Typing win={win} loss={loss} setWin={setWin} time={20} updateGameLoss={setLoss} fade={true}/>}
      {/* conditionally render projects */}
      <CharacterImage source={testData[progressIndex].emote} fade={true} slideLeft={showTyping}/>
    </div>
    <GameText text={testData[progressIndex].text}/>
  </div>)
}

export default GameArea