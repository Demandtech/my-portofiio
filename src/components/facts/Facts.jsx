import React from 'react'
import './fact.css'
import { ReactComponent as ArrowDown } from '../../assets/svgs/arrow-down.svg'

const factData = [
  {
    num: 1,
    exp: 'Years of work experience',
  },
  {
    num: 20,
    exp: 'Completed projects',
  },
  {
    num: 3,
    exp: 'Satisfied customers',
  },
]

function Facts() {
  return (
    <section>
      <div className='container'>
        <div className='fact'>
          {factData.map((data, index) => {
            return (
              <div key={index} className='fact-card'>
                <h6>{data.num}+</h6>
                <p>{data.exp}</p>
              </div>
            )
          })}
        </div>
        <div className='btn-container'>
          <a className='download' href='/'>Download CV <ArrowDown className='download-icon'/></a>
          <a className='contact' href='/'>Contact me</a>
        </div>
      </div>
    </section>
  )
}

export default Facts
