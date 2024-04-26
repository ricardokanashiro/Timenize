'use client'

import { useState } from "react"
import Image from "next/image"

import "@/css/sidebar.css"

import { SidebarItem, Dashboard, Settings, Habits, Plans, Pomodoro } from "@/components"

import { Logo, IconHome, IconHomeWhite, IconSettings, IconSettingsWhite, IconTarget, IconTargetWhite, IconCalendar, IconCalendarWhite, IconClock, IconClockWhite, IconArrowDown, UserImage } from "@/assets"

const Home = () => {
   const [selectedBtn, setSelectedBtn] = useState('dashboard')

   return (
      <section className="home">
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
                  <Image src={IconArrowDown} className="user-wrapper__arrow-down" alt="arrow down image" />
               </div>
            </div>

         </nav>

         <section>
            {selectedBtn === 'dashboard' && (<Dashboard />) }
            {selectedBtn === 'settings' && (<Settings />) }
            {selectedBtn === 'hábitos' && (<Habits />) }
            {selectedBtn === 'planos' && (<Plans />) }
            {selectedBtn === 'pomodoro' && (<Pomodoro />) }
         </section>
      </section>
   )
}

export default Home