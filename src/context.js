import React, {useState, useContext, useEffect} from "react";

const ThemeContext = React.createContext();

const getStorageTheme = ()=> {
  let theme = 'light-theme'
  if(localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme')
  }
  return theme
}

const ThemeProvider = ({children})=> {
  const [theme, setTheme] = useState(getStorageTheme)


  const toggleTheme = ()=> {
   console.log('clicked')
   if(theme === 'light-theme'){
    setTheme('dark-theme')
   }else {
    setTheme('light-theme')
   }
  }

  useEffect(()=> {
    document.documentElement.classList = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  return <ThemeContext.Provider value={{toggleTheme}}>
   {children}
  </ThemeContext.Provider>
}

export const useGlobalContext = ()=> {
 return useContext(ThemeContext);
}

export {ThemeProvider, ThemeContext}