import React, {useState, useEffect} from 'react'
import './ProjectDisplay.css'
import GameArea from '../GameArea/GameArea'

interface Props {
  project: string,
  fade: boolean
}

const projects = {
  doomscroll: {
    title: 'DoomScroll',
    src: '',
    repo: ''
  },
  outgrown: {
    title: 'OutGrown',
    src:'',
    deployed: '',
    repo: ''
  }
}

const ProjectDisplay:React.FC<Props> = ({project, fade}) => {
  const [fadeValue, setFadeValue] = useState<boolean>(false)

  const projectToDisplay = projects[project as keyof typeof projects] ? projects[project as keyof typeof projects] : {title: 'erro'}

  useEffect(() => {
    setFadeValue(fade)
  }, [fade])

  return (
    <div className={`project-container ${fadeValue ? 'fade-in' : 'fade-out'}`}>
      {project !== 'personal' && (
        <div>
          <h2>{projectToDisplay.title}</h2>
        </div>
      )}
      {project === 'personal' && < GameArea />}
    </div>
  )
}

export default ProjectDisplay