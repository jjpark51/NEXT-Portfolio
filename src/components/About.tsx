import React , {useState} from 'react'
import about from '../styles/About.module.scss'
import Person2Icon from '@mui/icons-material/Person2';
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Fade } from "react-awesome-reveal";


function About() {


  return (
    <div className={about.about}>

        <Fade  duration={3500}>
      <div className={about.container}>
            <div className={about.title}>About Me</div>    
            <div className={about.profile}></div>
            <div className={about.Name}><div className={about.box1}>< Person2Icon /> </div > <div className={about.box2}><span>이름</span></div><div className={about.box3}>박진석</div></div>
            <div className={about.School}> <div className={about.box1}><SchoolIcon /></div> <div className={about.box2}><span>학교</span></div><div className={about.box3}>성균관대학교 (휴학) <br/> 소프트웨어학과</div></div>
            <div className={about.Email}> <div className={about.box1}><EmailIcon /></div><div className={about.box2}>이메일</div><div className={about.box3}>jjpark57@hotmail.com</div> </div>
            <div className={about.Github}><div className={about.box1}><GitHubIcon /></div><div className={about.box2}>Github</div> <div className={about.box3}><a href="https://github.com/jjpark51" style={{color: 'whitesmoke'}}>jjpark51</a></div> </div>
       </div>   

       </Fade> 
    </div>
  )
}

export default About
