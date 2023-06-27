import React, { useEffect, useState } from "react";
import './GameText'

interface Props {
  text: string;
}

const GameText: React.FC<Props> = ({ text }) => {
  const [textIndex, setTextIndex] = useState<number>(0);

  useEffect(() => {
    if (textIndex >= text.length) return;
    setTimeout(() => {
      setTextIndex(textIndex + 1);
    }, 15);
  }, [textIndex]);

  return (
    <div>
      <p className="game-text">{text.substring(0, textIndex)}</p>
      <p>{textIndex}</p>
    </div>
  );
};

export default GameText;
