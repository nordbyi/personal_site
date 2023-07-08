import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import DisplayText from "./DisplayText/DisplayText";
import TimerDisplay from "../TimerDisplay/TimerDisplay";
import "./Typing.css";

interface Props {
  text: string
  win: boolean,
  loss: boolean,
  setWin: Dispatch<SetStateAction<boolean>>,
  time: number,
  updateGameLoss: Dispatch<SetStateAction<boolean>>,
  fade: boolean
}

interface KeyboardEvent {
  key: string;
}

const Typing: React.FC<Props> = ({text, win, loss, setWin, time, updateGameLoss, fade}) => {
  const [textInput, setTextInput] = useState<string>("");
  const [fadeValue, setFadeValue] = useState<boolean>(false)

  // const example: string =
  //   "You must be a pretty tough fighter to have made it past my cow!";

  const handleKeydown = (event: KeyboardEvent, input: string, win: boolean, text: string): void => {
    if (win || loss) return
    if (input.length >= text.length && event.key !== 'Backspace') {
      document.addEventListener('keydown', (event) => {
        handleKeydown(event, input, win, text)}, {once: true})
    } else if (event.key.length <= 1) {
      setTextInput(input + event.key)
    } else if (event.key === 'Backspace' && input.length > 0) {
      setTextInput(input.substring(0, input.length -1))
    } else {
    document.addEventListener('keydown', (event) => {
      handleKeydown(event, input, win, text)}, {once: true})
    }
  }

  useEffect(() => {
    if(textInput === text && !loss) {
      setWin(true);
      return
    }
    document.addEventListener('keydown', (event) => {
      handleKeydown(event, textInput, win, text)}, {once: true})
  }, [textInput])

  useEffect(() => {
    setFadeValue(fade)
  }, [fade])

  return (
      <div className={`typing-text-display ${fadeValue ? 'fade-in' : 'fade-out'}`}>
        <DisplayText example={text} current={textInput} />
        {/* Make error letter component that pops out wrong letters (at random directions?) 
        when pressed with animations that fade after a second or so  */}
        <TimerDisplay win={win} loss={loss} time={time} updateGameLoss={updateGameLoss}/>
      </div>
  );
};

export default Typing;
