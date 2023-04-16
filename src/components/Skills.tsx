import React, {useState, useEffect} from 'react'
import CodeIcon from '@mui/icons-material/Code';
import Cards from './Cards'
import frontend from '../assets/frontend.json'
import skills from '../styles/Skills.module.scss'
import { Fade } from "react-awesome-reveal";


function Skills() {


  return (
    <div className={skills.skillSection} >

<Fade duration={3500}>

        <center><div style={{color: 'whitesmoke', justifyContent: 'center', fontSize: '40pt'}}><CodeIcon style={{fontSize:'40pt'}} /> <span>Skills</span></div></center>
    
        </Fade>

        <Fade duration={3500}>


    <div className={skills.skillContainer}>



      <div><div className={skills.frontend}><center><span>Frontend</span><br/><a style={{color: '#214832'}}> ____________________________ </a></center>{ frontend[0].map((e, key) => ( 
              < Cards {...e} key={key} />
      ))}</div></div>
      <div><div className={skills.backend}><center><span>Backend</span><br/><a style={{color: '#214832'}}> ____________________________ </a></center>{ frontend[1].map((e,key) => ( 
              < Cards {...e} key={key}/>
      ))}</div></div>
      <div className='version-control'>        <div className={skills.backend}><center><span>Version Control</span><br/><a style={{color: '#214832'}}> ____________________________ </a></center>{ frontend[2].map((e,key) => ( 
              < Cards {...e} key={key}/>
      ))}</div></div>
      <div className='AI'>   <div className={skills.backend}><center><span>Artificial Intelligence</span><br/><a style={{color: '#214832'}}> ____________________________ </a></center>{ frontend[3].map((e,key) => ( 
              < Cards {...e} key={key}/>
      ))}</div></div>
      <div>
      <div className={skills.backend}><center><span>Others</span><br/><a style={{color: '#214832'}}> ____________________________ </a></center>{ frontend[4].map((e,key) => ( 
              < Cards {...e} key={key}/>
      ))}</div>
      </div>

    </div>

    </Fade>
  </div>
  )
}

export default Skills
