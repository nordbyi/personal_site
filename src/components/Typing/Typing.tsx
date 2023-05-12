import React, { FormEvent, useState } from "react";
import "./Typing.css";

const Typing: React.FC = () => {
  const [textInput, setTextInput] = useState("");

  const example =
    "You must be a pretty tough fighter to have made it past my cow!";

  const validateInputs = (inputValue: string) => {
    const exampleArr = example.split("");
    console.log(inputValue);
    if (inputValue.split("").every((el, index) => exampleArr[index] === el)) {
      setTextInput(inputValue);
    }
  };

  return (
    <div>
      <p>{example}</p>
      <div>
        <span className="correct">{textInput}</span>
        <span className="missing">{example.substring(textInput.length)}</span>
      </div>
      <input
        value={textInput}
        onChange={(e) => validateInputs(e.target.value)}
      />
    </div>
  );
};

export default Typing;
