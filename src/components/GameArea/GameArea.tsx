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
  const [fadeInOut, setFadeInOut] = useState<boolean>(true)

  const progressGame = () => {
    if(!canProgress) return
    if(!testData[progressIndex + 1]) {
      setProgressIndex(0)
      setWin(false)
      setLoss(false)
      setFadeInOut(true)
      return
      // take out above state updates and route to next url when built
    }
    if(testData[progressIndex].unmountDelay){
      setFadeInOut(false)
      setTimeout(() => {
        setProgressIndex(progressIndex + 1)
      }, testData[progressIndex].unmountDelay)
    } else {
      setProgressIndex(progressIndex + 1)
    }
  }

  const calculateTime = (text: string, difficulty: string) => {
    // add difficulty and modify return time sometime
    return 3 + text.split(' ').length
  }

  const textToDisplay = (): string => {
    if (( win || loss) && testData[progressIndex].text.length > 1) {
      return win ? testData[progressIndex].text[1] : testData[progressIndex].text[2]!
    } else {
      return testData[progressIndex].text[0]!
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
      {testData[progressIndex].game && <Typing text={testData[progressIndex].gameText!} win={win} loss={loss} setWin={setWin} time={calculateTime(testData[progressIndex].gameText!, '')} updateGameLoss={setLoss} fade={fadeInOut} />}
      {/* conditionally render projects */}
      <CharacterImage source={testData[progressIndex].emote[0]} fade={true} slideLeft={testData[progressIndex].mountAnimation}/>
    </div>
    <div onClick={progressGame}>
      <GameText text={textToDisplay()}/>
    </div>
  </div>)
}

export default GameArea