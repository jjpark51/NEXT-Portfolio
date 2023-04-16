import React from 'react'
import projects from '../styles/Project.module.scss'
import { Fade } from "react-awesome-reveal";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


type ProjProps = {
    name: string
    date: string
    img: string
    demo: string
    description: Array<string>
    github: string
    tech: Array<string>
    type:string
}



function ProjCard({name, date, img, demo, description, github, tech, type}: ProjProps) {
  

  let show: boolean = true

  if(demo.length === 0) {
    show = false
  }

const techArray = tech

const DescArray = description;
  
  return (
    <>
        <div className={projects.projTitle}>
            <center><span>{name}</span><br/><a style={{color: '#214832'}}> _____________________________________________ </a></center>
        </div>
        <div className={projects.projDate}> {date}</div>
      <div className={projects.projImage} style={{backgroundImage: `url(${img})`}}>
      </div>
      <div className={projects.projDesc}>
        {
          DescArray.map((e, index) => (
            <div key={index}>{e}<br /><br/> </div>
          ))
        }
      </div>
      <div className={projects.projTech}><CheckCircleIcon style={{color: '#f96815'}}/><b> 기술 스텍: </b>{techArray.map((e ,key)=> {
        <>
        </>
                return(
                  <div key={key}>
                  {e}</div>)
      })} </div>
      <div className={projects.projType}><CheckCircleIcon style={{color: '#f96815'}}/><b> 유형: </b> {type}</div>

      <div className={projects.buttons}>
      <button className={projects.projGithub}><a href={github} style={{color: 'whitesmoke'}} target="_blank">Source Code</a></button>
      
      {  show ? 
      
      <button className={projects.projDemo}><a href={demo} style={{color: 'whitesmoke', fontWeight: 'bolder'}} target="_blank">Demo</a></button>
      : <></>
      }
      </div>
</>   
  )
}

export default ProjCard
