import React from 'react'
import tiger from '../styles/Tiger.module.scss'
import { Fade } from "react-awesome-reveal";


function Tiger() {
  return (
    <div className={tiger.tiger}>
          <Fade duration={5500}>

        <h1>Hi, I'm <span style={{color: '#f96815'}}>Jinsuk</span>. <br /> </h1>
        </Fade>

    </div>

  )
}

export default Tiger
