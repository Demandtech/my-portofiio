import React, {useState, useContext} from "react";

const ThemeContext = React.createContext();

const ThemeProvider = ({children})=> {
  const [dark, setDark] = useState(false)


  const toggleTheme = ()=> {
   console.log('clicked')
   return setDark(!dark)
  }

  return <ThemeContext.Provider value={{dark,toggleTheme}}>
   {children}
  </ThemeContext.Provider>
}

export const useGlobalContext = ()=> {
 return useContext(ThemeContext);
}

export {ThemeProvider, ThemeContext}