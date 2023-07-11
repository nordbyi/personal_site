import React, { useEffect, useState } from "react";
import './GameText.css'

interface Props {
  text: string;
}

const GameText: React.FC<Props> = ({ text }) => {
  const [textIndex, setTextIndex] = useState<number>(0);

  let timer: ReturnType<typeof setTimeout>

  useEffect(() => {
    if (textIndex >= text.length) return;
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
  // send a set update to allow progression in game when text finishes displaying

  return (
    <div onClick={displayAllText}>
      <p className="game-text">{text.substring(0, textIndex)}</p>
      <p>{textIndex}</p>
    </div>
  );
};

export default GameText;
