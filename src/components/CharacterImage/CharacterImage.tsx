import React, {useEffect} from "react";
import './CharacterImage.css'

interface Props {
  source: string,
  fade: string
}

const CharacterImage:React.FC<Props> = ({source, fade}) => {
  useEffect(() => {

  }, [source])

  return <img className={`character-img fade-${fade}`} src={source}/>
}

export default CharacterImage