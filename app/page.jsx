'use client'

import { useContext, useState } from "react"
import Image from "next/image"
import { Fira_Code } from "next/font/google"

import { ToastContainer } from "react-toastify"

import "@/css/components/sidebar.css"

import { Logo, IconHome, IconHomeWhite, IconSettings, IconSettingsWhite, IconTarget, IconTargetWhite, IconCalendar, IconCalendarWhite, IconClock, IconClockWhite, IconLogOut, UserImage } from "@/assets"

import { SidebarItem } from "@/components"
import { Dashboard, Settings, Habits, Plans, Pomodoro } from "@/screens"
import { CreateTaskListModal } from "@/modals"

import { ModalsContext } from "@/components/ModalsContext"

const firaCode = Fira_Code({
   subsets: ['latin'],
   weight: ['300', '400', '500', '600', '700'],
   display: "swap"
})

const Home = () => {

   const { modalWrapperActive, modalBlurActive } = useContext(ModalsContext)

   const [selectedBtn, setSelectedBtn] = useState('dashboard')

   return (

      <section className={firaCode.className + ' home'}>

         <ToastContainer />

         <nav className="home__sidebar">

            <Image
               src={Logo}
               alt="logo"
               className="sidebar__logo"
            />

            <div className="sidebar__items-wrapper">

               <div className="sidebar__items-wrapper__main-items">

                  <SidebarItem
                     image={selectedBtn === 'dashboard' ? IconHomeWhite : IconHome}
                     text="Dashboard"
                     alt="dashboard icon"
                     actived={selectedBtn === 'dashboard' ? true : false}
                     setSelectedBtn={setSelectedBtn}
                  />

                  <SidebarItem
                     image={selectedBtn === 'settings' ? IconSettingsWhite : IconSettings}
                     text="Settings"
                     alt="settigns icon"
                     actived={selectedBtn === 'settings' ? true : false}
                     setSelectedBtn={setSelectedBtn}
                  />

               </div>

               <div className="sidebar__items-wrapper__plans-items-wrapper">
                  <h4>PLANS</h4>

                  <div className="sidebar__items-wrapper__plans-items">
                     <SidebarItem
                        image={selectedBtn === 'hábitos' ? IconTargetWhite : IconTarget}
                        text="Hábitos"
                        alt="hábitos icon"
                        actived={selectedBtn === 'hábitos' ? true : false}
                        setSelectedBtn={setSelectedBtn}
                     />

                     <SidebarItem
                        image={selectedBtn === 'planos' ? IconCalendarWhite : IconCalendar}
                        text="Planos"
                        alt="planos icon"
                        actived={selectedBtn === 'planos' ? true : false}
                        setSelectedBtn={setSelectedBtn}
                     />
                  </div>
               </div>

               <div className="sidebar__items-wrapper__apps-items-wrapper">
                  <h4>APPS</h4>

                  <div className="sidebar__items-wrapper__apps-items">
                     <SidebarItem
                        image={selectedBtn === 'pomodoro' ? IconClockWhite : IconClock}
                        text="Pomodoro"
                        alt="pomodoro icon"
                        actived={selectedBtn === 'pomodoro' ? true : false}
                        setSelectedBtn={setSelectedBtn}
                     />
                  </div>
               </div>

            </div>

            <div className="sidebar__user-area">
               <div className="user-area__user-wrapper">
                  <Image src={UserImage} className="user-wrapper__user-img" alt="user image" />
                  <p>Mano RiK</p>
               </div>

               <button className="user-area__logout-button">
                  <Image src={IconLogOut} alt="icon logout" className="logout-button__icon" />
                  <p>Logout</p>
               </button>
            </div>

         </nav>

         <section className="home__sections-area">

            <header className="sections-area__header">

               <h1>{selectedBtn[0].toUpperCase() + selectedBtn.substring(1)}</h1>

            </header>

            <section className="sections-area__section-wrapper">

               {selectedBtn === 'dashboard' && (<Dashboard />)}
               {selectedBtn === 'settings' && (<Settings />)}
               {selectedBtn === 'hábitos' && (<Habits />)}
               {selectedBtn === 'planos' && (<Plans />)}
               {selectedBtn === 'pomodoro' && (<Pomodoro />)}

            </section>

         </section>

         <section className="home__mobile-menu">
            <SidebarItem
               image={selectedBtn === 'dashboard' ? IconHomeWhite : IconHome}
               text="Dashboard"
               alt="dashboard icon"
               actived={selectedBtn === 'dashboard' ? true : false}
               setSelectedBtn={setSelectedBtn}
            />

            <SidebarItem
               image={selectedBtn === 'settings' ? IconSettingsWhite : IconSettings}
               text="Settings"
               alt="settigns icon"
               actived={selectedBtn === 'settings' ? true : false}
               setSelectedBtn={setSelectedBtn}
            />

            <SidebarItem
               image={selectedBtn === 'hábitos' ? IconTargetWhite : IconTarget}
               text="Hábitos"
               alt="hábitos icon"
               actived={selectedBtn === 'hábitos' ? true : false}
               setSelectedBtn={setSelectedBtn}
            />

            <SidebarItem
               image={selectedBtn === 'planos' ? IconCalendarWhite : IconCalendar}
               text="Planos"
               alt="planos icon"
               actived={selectedBtn === 'planos' ? true : false}
               setSelectedBtn={setSelectedBtn}
            />

            <SidebarItem
               image={selectedBtn === 'pomodoro' ? IconClockWhite : IconClock}
               text="Pomodoro"
               alt="pomodoro icon"
               actived={selectedBtn === 'pomodoro' ? true : false}
               setSelectedBtn={setSelectedBtn}
            />

            <Image src={UserImage} className="mobile-menu__user-image" alt="user image" />

         </section>

         <div className={modalBlurActive ? "home__modal-blur" : "home__modal-blur home__modal-blur--disabled"}></div>

         <div className={modalWrapperActive ? "home__modals-wrapper" : "home__modals-wrapper home__modals-wrapper--disabled"}>
            {
               selectedBtn === "dashboard" &&
               <>
                  <CreateTaskListModal />
               </>
            }
         </div>
         
      </section>
   )
}

export default Home