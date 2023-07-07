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
  const [fadeInOut, setFadeInOut] = useState<boolean>(true) // replace with data model's value when made

  // const toggleTypingView = () => {
  //   setShowTyping(!showTyping)
  // }

  const progressGame = () => {
    if(!canProgress) return
    if(testData[progressIndex].unmountDelay){
      setFadeInOut(false)
      setTimeout(() => {
        setProgressIndex(progressIndex + 1)
      }, testData[progressIndex].unmountDelay)
    } else {
      setProgressIndex(progressIndex + 1)
    }
  }

  useEffect(() => {
    console.log('loss updated')
  }, [loss])

  useEffect(() => {
    if(testData[progressIndex].lockProgress) {
      setCanProgress(false)
    }
  }, [progressIndex])

  useEffect(() => {
    if(win || loss) {
      setTimeout(() => {
        setCanProgress(true)
      }, 2000)
    }
  }, [win, loss])

  useEffect(() => {
    if(canProgress && (win || loss)) {
      progressGame()
    }
  }, [canProgress])

  return (
  <div  className="game-area">
    <div className="top-section">
      {testData[progressIndex].game && <Typing text={testData[progressIndex].gameText} win={win} loss={loss} setWin={setWin} time={20} updateGameLoss={setLoss} fade={fadeInOut} />}
      {/* conditionally render projects */}
      <CharacterImage source={testData[progressIndex].emote} fade={true} slideLeft={testData[progressIndex].mountAnimation}/>
    </div>
    <div onClick={progressGame}>
      <GameText text={testData[progressIndex].text}/>
    </div>
  </div>)
}

export default GameArea