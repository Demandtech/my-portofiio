import React from 'react'
import { ReactComponent as LinkIcon } from '../../assets/svgs/link-icon.svg'
import { ReactComponent as CodeIcon } from '../../assets/svgs/code-solid.svg'
import projects from './portfolioData'
import './portfolio.css'

function Portfolio() {
  return (
    <div className='portfolio'>
      <div className='projects-wrapper'>
        {projects.map((project) => {
          const { id, name, about, img, url, git } = project
          return (
            <article className='project' key={id}>
              <img src={img} alt={name} loading='lazy' />
              <div className='layer'>
                <div className='layer-wrapper'>
                  <h4>{name}</h4>
                  <p>{about}</p>
                  <div className='links-wrapper'>
                    <div>
                      <a
                        href={url}
                        target='_blank'
                        className='live-link'
                        rel='noreferrer'
                      >
                        <LinkIcon />
                      </a>
                    </div>
                    <div>
                      <a
                        href={git}
                        target='_blank'
                        className='git-link'
                        rel='noreferrer'
                      >
                        <CodeIcon />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default Portfolio
