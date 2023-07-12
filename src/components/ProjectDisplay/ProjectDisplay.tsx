import React, {useState, useEffect} from 'react'
import './ProjectDisplay.css'
import GameArea from '../GameArea/GameArea'

interface Props {
  project: string,
  fade: boolean
}

const ProjectDisplay:React.FC<Props> = ({project, fade}) => {
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