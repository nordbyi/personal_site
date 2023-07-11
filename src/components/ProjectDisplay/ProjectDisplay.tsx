import React, {useState, useEffect} from 'react'
import './ProjectDisplay.css'

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
      <p>Hello</p>
    </div>
  )
}

export default ProjectDisplay