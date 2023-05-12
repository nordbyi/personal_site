import React, { useEffect, useState } from "react";
import "./Typing.css";

const Typing: React.FC = () => {
  const [textInput, setTextInput] = useState<string>("");
  const [win, setWin] = useState<boolean>(false);

  const example =
    "You must be a pretty tough fighter to have made it past my cow!";

  const validateInputs = (inputValue: string) => {
    if(win) return
    const exampleArr = example.split("");
    console.log(inputValue);
    if (inputValue.split("").every((el, index) => exampleArr[index] === el)) {
      setTextInput(inputValue);
    }
  };

  useEffect(() => {
    if (textInput === example) {
      setWin(true);
      // disable input?
      // disable game area
    }
  }, [textInput]);

  return (
    <div>
      <div>
        <span className="correct">{textInput}</span>
        <span className="missing">{example.substring(textInput.length)}</span>
      </div>
      <input
        value={textInput}
        onChange={(e) => validateInputs(e.target.value)}
      />
      {win && <p>Yay, you win!</p>}
    </div>
  );
};

export default Typing;
