import React, { useState } from 'react'
import {ReactComponent as ThemeIcon} from '../../assets/svgs/themeToggle-icon.svg'
import './theme.css'

function Themetoggle() {
    const [dark, setDark] = useState(false)
  return (
     <header className='header'>
        <div className="header-container">
             <button className="toggle-btn" onClick={()=>{
               setDark(!dark)
             }}>
                 <ThemeIcon  className='toggle-icon'/>
             </button>
        </div>
     </header>
  )
}

export default Themetoggle