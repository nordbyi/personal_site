import React from "react";
import './CharacterImage.css'

interface Props {
  source: string
}

const CharacterImage:React.FC<Props> = ({source}) => {
  return <img className="character-img" src={source}/>
}

export default CharacterImage