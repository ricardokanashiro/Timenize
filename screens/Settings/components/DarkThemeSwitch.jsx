import { useContext } from "react"

import { ThemeContext } from "@/contexts"

import "@/css/screens/settings/components/dark-theme-switch.css"

const DarkThemeSwitch = () => {

   const { darkThemeActive, activeDarkTheme } = useContext(ThemeContext)

   return (
      <div className="dark-theme-switch">

         <span>Dark Theme</span>

         <button 
            className={
               darkThemeActive ? 
               "dark-theme-switch__switch dark-theme-switch__switch--active" 
               : "dark-theme-switch__switch"
            }
            onClick={activeDarkTheme}
         >
            <div className="dark-theme-switch__circle" />
         </button>

      </div>
   )
}

export default DarkThemeSwitch