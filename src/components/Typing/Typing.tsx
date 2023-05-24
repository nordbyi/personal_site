import React, { useEffect, useState } from "react";
import DisplayText from "./DisplayText/DisplayText";
import "./Typing.css";

interface KeyboardEvent {
  key: string;
}

const Typing: React.FC = () => {
  const [textInput, setTextInput] = useState<string>("");
  const [win, setWin] = useState<boolean>(false);

  const example =
    "You must be a pretty tough fighter to have made it past my cow!";

  const handleKeydown = (event: KeyboardEvent, input: string, win: boolean): void => {
    if (win) return
    console.log(event.key)
    if (event.key.length <= 1) {
      setTextInput(input + event.key)
    } else if (event.key === 'Backspace') {
      setTextInput(input.substring(0, input.length -1))
    } else {
    document.addEventListener('keydown', (event) => {
      handleKeydown(event, input, win)}, {once: true})
    }
  }

  console.log('text input', textInput)

  useEffect(() => {
    if(textInput === example) {
      setWin(true);
      return
    }

    document.addEventListener('keydown', (event) => {
      handleKeydown(event, textInput, win)}, {once: true})
  }, [textInput])

  return (
    <div>
      <div>
        <DisplayText example={example} current={textInput} />
        {/* Make error letter component that pops out wrong letters (at random directions?) 
        when pressed with animations that fade after a second or so  */}
      </div>
      {win && <p>Yay, you win!</p>}
    </div>
  );
};

export default Typing;
