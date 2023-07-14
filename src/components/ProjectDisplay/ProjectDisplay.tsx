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
    src: 'https://user-images.githubusercontent.com/108428451/227252664-e3826440-001c-4081-89f1-8920b05adb53.gif',
    deployed: '',
    repo: 'https://github.com/nordbyi/doomScroll'
  },
  outgrown: {
    title: 'OutGrown',
    src:'https://user-images.githubusercontent.com/113647295/230459724-29bee323-b7be-482c-b931-162e4763f035.gif',
    deployed: 'https://outgrown.vercel.app/',
    repo: 'https://github.com/Outgrown/outgrown_fe'
  }
}

const ProjectDisplay:React.FC<Props> = ({project, fade}) => {
  const [fadeValue, setFadeValue] = useState<boolean>(false)

  const projectToDisplay = projects[project as keyof typeof projects] ? projects[project as keyof typeof projects] : {title: 'error', src: '', repo: '', deployed: ''}

  useEffect(() => {
    setFadeValue(fade)
  }, [fade])

  return (
    <div className={`project-container ${fadeValue ? 'fade-in' : 'fade-out'}`}>
      {project !== 'personal' && (
        <div className='project'>
          <h2>{projectToDisplay.title}</h2>
          <img src={projectToDisplay.src}/>
          <div className='links'>
            <a href={projectToDisplay.repo} target='_blank'>Repo Link</a>
            {projectToDisplay.deployed && <a href={projectToDisplay.deployed} target='_blank'>Deployed Link</a>}
          </div>
        </div>
      )}
      {project === 'personal' && < GameArea />}
    </div>
  )
}

export default ProjectDisplay