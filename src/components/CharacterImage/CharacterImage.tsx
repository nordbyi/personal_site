import React, {useEffect, useState} from "react";
import './CharacterImage.css'

interface Props {
  source: string,
  fade: boolean
}

const CharacterImage:React.FC<Props> = ({source, fade}) => {
  const [fadeValue, setFadeValue] = useState<boolean>(false)

  useEffect(() => {
    setFadeValue(fade)
  }, [fade])

  return <img className={`character-img ${fadeValue ? 'fade-in' : 'fade-out'}`} src={source}/>
}

export default CharacterImage