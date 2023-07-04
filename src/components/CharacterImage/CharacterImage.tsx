import React, {useEffect, useState} from "react";
import './CharacterImage.css'

interface Props {
  source: string,
  fade: boolean,
  slideLeft: boolean
}

const CharacterImage:React.FC<Props> = ({source, fade, slideLeft}) => {
  const [fadeValue, setFadeValue] = useState<boolean>(false)

  const testPictureFlicker = () => {
    setFadeValue(false)
    setTimeout(() => {
      setFadeValue(true)
    }, 500)
  }

  useEffect(() => {
    setFadeValue(fade)
  }, [fade])

  return (
    <div className={`char-img-container ${!slideLeft ? 'slide-left' : ''} ${fadeValue ? 'fade-in' : 'fade-out'}`}>
      <img onClick={testPictureFlicker} className={`character-img`} src={source}/>
    </div>
  )
}

export default CharacterImage