import React from "react";

interface Props {
  text: string
}

const GameText:React.FC<Props> = ({text}) => {
  return <p>{text}</p>
}

export default GameText