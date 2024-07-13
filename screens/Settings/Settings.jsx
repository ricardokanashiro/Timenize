import DarkThemeSwitch from "./components/DarkThemeSwitch"

import "@/css/screens/settings/settings.css"

const Settings = () => {
   return (
      <section className="settings">
         <h2>APP</h2>

         <DarkThemeSwitch />

      </section>
   )
}

export default Settings