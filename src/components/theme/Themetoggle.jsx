import React from 'react'
import {ReactComponent as ThemeIcon} from '../../assets/svgs/themeToggle-icon.svg'
import './theme.css'
import {useGlobalContext} from '../../context'



const ThemeProvider =()=> {
  const {toggleTheme, dark} = useGlobalContext()

  if(dark){
    document.querySelector('body').classList.add('dark')
  }else{
    document.querySelector('body').classList.remove('dark')
  }
  return (
     <header className='header'>
        <div className="header-container">
             <button className="toggle-btn" onClick={toggleTheme}>
                 <ThemeIcon  className='toggle-icon'/>
             </button>
        </div>
     </header>
  )
}

export default ThemeProvider