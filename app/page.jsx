'use client'

import { useContext, useState } from "react"
import { Fira_Code } from "next/font/google"

import { ToastContainer } from "react-toastify"

import { Sidebar } from "@/components"
import { Dashboard, Settings, Habits, Plans, Pomodoro } from "@/screens"
import { ManageTaskListModal } from "@/modals"

import { ModalsContext } from "@/contexts"
import { SelectedTaskItemIDProvider, TempListProvider, ItemEditActiveIDProvider } from "@/modals/ManageTaskListModal/contexts"

const firaCode = Fira_Code({
   subsets: ['latin'],
   weight: ['300', '400', '500', '600', '700'],
   display: "swap"
})

const Home = () => {

   const { modalWrapperActive } = useContext(ModalsContext)

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

         <div className={modalWrapperActive ? "home__modals-wrapper" : "home__modals-wrapper home__modals-wrapper--disabled"}>
            {
               selectedScreen === "dashboard" &&
               <SelectedTaskItemIDProvider>
               <TempListProvider>
               <ItemEditActiveIDProvider>
                  <ManageTaskListModal />
               </ItemEditActiveIDProvider>
               </TempListProvider>
               </SelectedTaskItemIDProvider>
            }
         </div>
         
      </section>
   )
}

export default Home