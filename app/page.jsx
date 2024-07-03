'use client'

import { useState } from "react"
import { Fira_Code } from "next/font/google"

import { ToastContainer } from "react-toastify"

import { ModalsWrapper, Sidebar } from "@/components"
import { Dashboard, Settings, Habits, Plans, Pomodoro } from "@/screens"

const firaCode = Fira_Code({
   subsets: ['latin'],
   weight: ['300', '400', '500', '600', '700'],
   display: "swap"
})

const Home = () => {

   const [selectedScreen, setSelectedScreen] = useState('dashboard')

   return (

      <section className={firaCode.className + ' home'}>

         <ToastContainer />

         <Sidebar
            selectedScreen={selectedScreen}
            setSelectedScreen={setSelectedScreen}
         />

         <section className="home__sections-area">

            <header className="sections-area__header">

               <h1>{selectedScreen[0].toUpperCase() + selectedScreen.substring(1)}</h1>

            </header>

            <section className="sections-area__section-wrapper">

               {
                  selectedScreen === 'dashboard' ? (<Dashboard />)
                  : selectedScreen === 'settigns' ? (<Settings />)
                  : selectedScreen === 'hábitos' ? (<Habits />)
                  : selectedScreen === 'planos' ? (<Plans />)
                  : selectedScreen === 'pomodoro' && (<Pomodoro />)
               }

            </section>

         </section>

         <ModalsWrapper 
            selectedScreen={selectedScreen}
         />
         
      </section>
   )
}

export default Home