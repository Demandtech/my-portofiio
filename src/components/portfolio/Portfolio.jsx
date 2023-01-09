import React from 'react'
import { ReactComponent as LinkIcon } from '../../assets/svgs/link-icon.svg'
import projects from './portfolioData'
import './portfolio.css'

function Portfolio() {
  return (
    <div className='portfolio'>
      <div className='projects-wrapper'>
        {projects.map((project) => {
          const { id, name, about, img, url } = project
          return (
            <article className='project' key={id}>
              <img src={img} alt='' />
              <div className='layer'>
                <div className='layer-wrapper'>
                  <h4>{name}</h4>
                  <p>{about}</p>
                  <a href={url} target='_blank' className='project-link'>
                    <LinkIcon />
                  </a>
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