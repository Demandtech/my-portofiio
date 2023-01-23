import React from 'react'
import { ReactComponent as ThemeIcon } from '../assets/svgs/themeToggle-icon.svg'
import { useGlobalContext } from '../context'

const ThemeProvider = () => {
  const { toggleTheme } = useGlobalContext()
  return (
    <header className='header'>
      <div className='header-container'>
        <button className='toggle-btn' onClick={toggleTheme}>
          <ThemeIcon className='toggle-icon' />
        </button>
      </div>
    </header>
  )
}

export default ThemeProvider
