import React, {useState, useEffect} from 'react'
import './ProjectDisplay.css'
import GameArea from '../GameArea/GameArea'

interface Props {
  fade: boolean
}

const ProjectDisplay:React.FC<Props> = ({fade}) => {
  const [fadeValue, setFadeValue] = useState<boolean>(false)

  useEffect(() => {
    setFadeValue(fade)
  }, [fade])

  return (
    <div className={`project-container ${fadeValue ? 'fade-in' : 'fade-out'}`}>
      < GameArea />
    </div>
  )
}

export default ProjectDisplay