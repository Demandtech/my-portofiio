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
  const [theme, setTheme] = useState(getStorageTheme);
  const [isModalOpen, setIsModalOpen] = useState(false)


  const toggleTheme = ()=> {
   console.log('clicked')
   if(theme === 'light-theme'){
    setTheme('dark-theme')
   }else {
    setTheme('light-theme')
   }
  }

  const openModal = ()=> {
    document.body.style.position = 'fixed'
    setIsModalOpen(true)
  }

  const closeModal = ()=> {
    document.body.style.position = 'static'
    setIsModalOpen(false)
  }

  useEffect(()=> {
    document.documentElement.classList = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const hours = new Date().getHours()

  useEffect(()=>{
   if(hours < 12){
    setTheme('dark-theme')
   }else{
    setTheme('light-theme')
   }
  }, [hours])

  return <ThemeContext.Provider value={{toggleTheme, isModalOpen, openModal, closeModal}}>
   {children}
  </ThemeContext.Provider>
}

export const useGlobalContext = ()=> {
 return useContext(ThemeContext);
}

export {ThemeProvider, ThemeContext}