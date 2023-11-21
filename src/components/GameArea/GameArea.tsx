import React, { useEffect, useState } from "react";
import Typing from "../Typing/Typing";
import GameText from "../GameText/GameText";
import CharacterImage from "../CharacterImage/CharacterImage";
import ProjectDisplay from "../ProjectDisplay/ProjectDisplay";
import testData from "../../data-model";
import "./GameArea.css";

const GameArea: React.FC = () => {
  const [progressIndex, setProgressIndex] = useState<number>(0);
  const [textIndex, setTextIndex] = useState<number>(0);
  const [canProgress, setCanProgress] = useState<boolean>(true);
  const [typewritterDone, setTypewritterDone] = useState<boolean>(false);
  const [win, setWin] = useState<boolean>(false);
  const [loss, setLoss] = useState<boolean>(false);
  const [fadeInOut, setFadeInOut] = useState<boolean>(true);

  const progressGame = () => {
    if (!canProgress || !typewritterDone) return;
    // need to make a function that looks to see if the current text arr has [textIndex + 1]
    // either normal text arr or conditional text arr based on state of game
    // This line below is a placeholder that only looks at .text arr
    if (testData[progressIndex].text[textIndex + 1]) {
      setTextIndex(textIndex + 1);
      return;
    }
    setTextIndex(0);
    if (!testData[progressIndex + 1]) {
      setFadeInOut(false);
      // may need to setCanProgress(false) here to stop user from clicking a bunch and setting a bunch of timeouts
      setTimeout(() => {
        setProgressIndex(0);
        setWin(false);
        setLoss(false);
        setFadeInOut(true);
        // take out above state updates and route to next url when built
      }, 500);
      return;
    }
    if (testData[progressIndex].unmountDelay) {
      setFadeInOut(false);
      setTimeout(() => {
        setProgressIndex(progressIndex + 1);
        setFadeInOut(true);
      }, testData[progressIndex].unmountDelay);
    } else {
      setProgressIndex(progressIndex + 1);
    }
  };

  const calculateTime = (text: string, difficulty: string) => {
    // add difficulty and modify return time sometime
    return 3 + text.split(" ").length;
  };

  const textToDisplay = (): string => {
    if (
      (win || loss) &&
      testData[progressIndex].conditionalText?.win &&
      testData[progressIndex].conditionalText?.loss![textIndex]
    ) {
      return win
        ? testData[progressIndex].conditionalText!.win![textIndex]
        : testData[progressIndex].conditionalText!.loss![textIndex]!;
    } else {
      return testData[progressIndex].text[textIndex]!;
    }
  };

  useEffect(() => {
    console.log("loss updated");
  }, [loss]);

  useEffect(() => {
    // setTypewritterDone(false)
    if (testData[progressIndex].lockProgress) {
      setCanProgress(false);
    }
  }, [progressIndex]);

  useEffect(() => {
    if (win || loss) {
      setTimeout(() => {
        setCanProgress(true);
      }, 2000);
    }
  }, [win, loss]);

  useEffect(() => {
    if (canProgress && (win || loss)) {
      progressGame();
    }
  }, [canProgress]);

  return (
    <div className="game-area">
      <div className="top-section">
        {testData[progressIndex].game && (
          <Typing
            text={testData[progressIndex].gameText!}
            win={win}
            loss={loss}
            setWin={setWin}
            time={calculateTime(testData[progressIndex].gameText!, "")}
            updateGameLoss={setLoss}
            fade={fadeInOut}
          />
        )}
        {testData[progressIndex].project && (
          <ProjectDisplay
            project={testData[progressIndex].project}
            fade={fadeInOut}
          />
        )}
        <CharacterImage
          source={testData[progressIndex].emote[0]}
          fade={true}
          slideLeft={testData[progressIndex].mountAnimation}
        />
      </div>
      <div onClick={progressGame}>
        <GameText
          text={textToDisplay()}
          updateTextDisplayed={setTypewritterDone}
        />
      </div>
    </div>
  );
};

export default GameArea;
