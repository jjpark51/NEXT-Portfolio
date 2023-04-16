import React from 'react'
import projects from '../styles/Project.module.scss'
import NotesIcon from '@mui/icons-material/Notes';
import ProjCard from './ProjCard'
import project from '../assets/project.json'
import { Fade } from "react-awesome-reveal";


function Projects() {
  return (
    <div className={projects.projects}>
      <Fade duration={3500}>
        <center><div className={projects.title}><NotesIcon style={{fontSize: '40pt', color: 'whitesmoke'}} /><span>Projects</span></div></center>
        <div className={projects.projectsContainer}>
        <div>{ project.map((e,key) => {
            return (
                <div className={projects.project} key={key}>
                    < ProjCard key={key}
                    name={e.name}
                    date={e.date}
                    img={e.img}
                    description={e.description}
                    demo={e.demo}
                    github={e.github}
                    tech={e.tech}
                    type={e.type}

                    />
                 </div>
    
        )})}</div>


    </div>
    </Fade>
    </div>
    
  )
}

export default Projects