"use client"

import { createContext, useState } from "react"

export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {

   const [darkThemeActive, setDarkThemeActive] = useState(false)

   function activeDarkTheme() {
      setDarkThemeActive(prev => !prev)

      !darkThemeActive ? 
      document.querySelector("body").setAttribute("data-theme", "dark")
      : document.querySelector("body").setAttribute("data-theme", "light")
   }

   return (
      <ThemeContext.Provider value={{ darkThemeActive, activeDarkTheme }}>
         {children}
      </ThemeContext.Provider>
   )
}

export default ThemeProvider