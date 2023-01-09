import './tabs.css'
import Portfolio from '../portfolio/Portfolio'
import Skills from '../skills/Skills'
import React, { useState } from 'react'



function Tabs() {
  const [portfolio, setPortfolio] = useState(true)

  return (
    <section className='tabs'>
      <div className='container'>
        <div className='tabs-container'>
          <button
            onClick={() => setPortfolio(true)}
            className={portfolio ? 'tab-active' : undefined}
          >
            Portfolio
          </button>
          <button
            onClick={() => setPortfolio(false)}
            className={!portfolio ? 'tab-active': undefined}
          >
            Skills
          </button>
        </div>
        {portfolio ? <Portfolio /> : <Skills />}
      </div>
    </section>
  )
}

export default Tabs
