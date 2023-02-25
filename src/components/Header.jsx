import React from 'react'
import avatar from '../assets/images/avatar.png'
import {FaTelegram, FaTwitter, FaLinkedin, FaGithub} from 'react-icons/fa'

const socials = [
  { icon: <FaTelegram/>, url: 'https:t.me/Btcdemand' },
  { icon: <FaGithub />, url: 'https://github.com/Demandtech' },
  {
    icon: <FaLinkedin />,
    url: 'https://www.linkedin.com/in/rasheed-adekunle-18540a22/',
  },
  { icon: <FaTwitter />, url: 'https://twitter.com/demandtv' },
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
            Ashraf bin Shukri<span></span>
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
                <a
                  target={'_blank'}
                  href={url}
                  className='icon'
                  rel='noreferrer'
                  style={{fontSize: '20px'}}
                >
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
