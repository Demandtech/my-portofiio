import React from 'react'
import { ReactComponent as Facebook } from '../assets/svgs/facebook-icon.svg'
import { ReactComponent as Github } from '../assets/svgs/github-icon.svg'
import { ReactComponent as Linkedin } from '../assets/svgs/linkedin-icon.svg'
import { ReactComponent as Twitter } from '../assets/svgs/twitter-icon.svg'
import avatar from '../assets/images/avatar.png'

const socials = [
  { icon: <Facebook />, url: '' },
  { icon: <Github />, url: 'https://github.com/Demandtech' },
  {
    icon: <Linkedin />,
    url: 'https://www.linkedin.com/in/rasheed-adekunle-18540a22b/',
  },
  { icon: <Twitter />, url: 'https://twitter.com/demandtvs' },
]

function Header() {
  return (
    <article className='profile'>
      <div className='avatar-wrapper'>
        <img src={avatar} alt={'avatar'} />
      </div>
      <div className='profile-info'>
        <div className='title'>
          <span className='block'></span>
          <h1>
            Adekunle Rasheed <span></span>
          </h1>
        </div>
        <div className='role'>
          <div className='block'></div>
          <p>Frontend Developer</p>
        </div>

        <div className='social-icons'>
          {socials.map((social, index) => {
            const { icon, url } = social
            return (
              <div key={index}>
                <a target={'_blank'} href={url} className='icon'>
                  {icon}
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </article>
  )
}

export default Header
