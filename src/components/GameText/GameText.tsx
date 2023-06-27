import React, {useEffect, useState} from "react";

interface Props {
  text: string
}

const GameText:React.FC<Props> = ({text}) => {
  const [textIndex, setTextIndex] = useState<number>(0)

  useEffect(() => {
    setTimeout(() => {
      setTextIndex(textIndex + 1)
    }, 100)
  }, [textIndex])

  return <p>{text.substring(0, textIndex)}</p>
}

export default GameText