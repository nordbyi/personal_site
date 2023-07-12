import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import './GameText.css'

interface Props {
  text: string;
  updateTextDisplayed: Dispatch<SetStateAction<boolean>>,
}

const GameText: React.FC<Props> = ({ text, updateTextDisplayed }) => {
  const [textIndex, setTextIndex] = useState<number>(0);

  let timer: ReturnType<typeof setTimeout>

  useEffect(() => {
    if (textIndex >= text.length) {
      updateTextDisplayed(true)
      return
    }
    timer = setTimeout(() => {
      setTextIndex(textIndex + 1);
    }, 35);

  }, [textIndex]);

  useEffect(() => {
    setTextIndex(0)
  }, [text])

  const displayAllText = () => {
    if(textIndex < text.length) {
      clearTimeout(timer)
      setTextIndex(text.length)
    }
  }

  return (
    <div onClick={displayAllText}>
      <p className="game-text">{text.substring(0, textIndex)}</p>
    </div>
  );
};

export default GameText;
