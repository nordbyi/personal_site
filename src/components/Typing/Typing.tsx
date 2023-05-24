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

  // const validateInputs = (inputValue: string) => {
  //   if (win) return;
  //   const exampleArr = example.split("");
  //   // console.log(inputValue);

  //   if (inputValue.split("").every((el, index) => exampleArr[index] === el)) {
  //     setTextInput(inputValue);
  //   } else {
  //     // make wrong letter appear on screen where letter was attempted to be added.
  //     // create a component made with useMemo to preserve it's values through rerenders?
  //     // store them inside the as an array to survive state rerenders?
  //   }
  // };

  // const handleKeydown = (event: KeyboardEvent, input: string): void => {
  //   console.log(event.key)
  //   if (example[input.length] === event.key) {
  //     setTextInput(input + event.key)
  //   } else {
  //     document.addEventListener('keydown', (event) => {
  //       handleKeydown(event, textInput)}, {once: true})
  //     }
  // }

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
  console.log('text input length', textInput.length)
  
  useEffect(() => {
    if (textInput === example) {
      setWin(true);
      // disable game area
    }
  }, [textInput]);

  useEffect(() => {
    if(textInput === example) return
    document.addEventListener('keydown', (event) => {
      handleKeydown(event, textInput, win)}, {once: true})
    
    return () => {document.removeEventListener('keydown', (event) => {
      handleKeydown(event, textInput, win)})}
  }, [textInput])

  return (
    <div>
      <div>
        <DisplayText example={example} current={textInput} />
        {/* Make error letter component that pops out wrong letters (at random directions?) 
        when pressed with animations that fade after a second or so  */}
        {/* <span className="missing">{example.substring(textInput.length)}</span> */}
      </div>
      {win && <p>Yay, you win!</p>}
    </div>
  );
};

export default Typing;
