import React from 'react'
import { Fade } from "react-awesome-reveal";



type SkillProps = {
    name: string
    link: string
}

function Cards({name, link}: SkillProps)  {


    return (
        <Fade>

    <div className='card-container'>
        <div className='card-image' style={{backgroundImage: `url(${link})`, width: '100%', height: '100px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
        </div>
      
    </div>
    </Fade>

  )
}

export default Cards
