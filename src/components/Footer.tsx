import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GithubIcon from '@mui/icons-material/GitHub'
import footer from '../styles/Footer.module.scss'

function Footer() {
  return (
    <div className={footer.footer}>
        <div className={footer.socialMedia}>
            <a href="https://github.com/jjpark51"><GithubIcon /></a>
        </div>
        <p>&copy; 2023 Jinsuk Park. All Rights Reserved </p>
    </div>
  )
}

export default Footer
