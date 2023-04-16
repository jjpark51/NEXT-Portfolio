import React, {useState} from 'react'
import {Link, animateScroll as scroll } from 'react-scroll'
import navStyles from '../styles/Navbar.module.scss'
import tiger from '../styles/Tiger.module.scss'
import about from '../styles/About.module.scss'
import skills from '../styles/Skills.module.scss'
import projects from '../styles/Project.module.scss'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('black')
    const [textColor, setTextColor] = useState('white')

    const handleNav = ()=> {
        setNav(!nav)
    }
  return (
<div className={navStyles.container}>
      <div style={{backgroundColor: `${color}`}} className={navStyles.monitorContainer}>
        <ul style={{color: `${textColor}`}} className={navStyles.box}>
            <div>
                <Link to={tiger.tiger}  smooth={true} duration={500}>Home</Link>
            </div>
            <div>
                <Link to={about.about}  smooth={true} duration={500} offset={-50}>About</Link>
            </div>
            <div>
                <Link to={skills.skillSection}  smooth={true} duration={500} offset={-90}>Skills</Link>
            </div>
            <div>
                <Link to={projects.projects}  smooth={true} duration={500} offset={-90}>Projects</Link>
            </div>

             </ul>
        </div>
      </div>
  )
}

export default Navbar
