'use client'

import { useState } from "react"
import Image from "next/image"

import "@/css/sidebar.css"

import Dashboard from "@/sections/Dashboard"

import SidebarItem from "@/components/SidebarItem"

import Logo from '@/assets/logo.svg'

import DashboardIcon from "@/assets/icon-home.svg"
import DashboardIconWhite from "@/assets/icon-home-white.svg"
import SettingsIcon from "@/assets/icon-settings.svg"
import SettingsIconWhite from "@/assets/icon-settings-white.svg"
import TargetIcon from "@/assets/icon-target.svg"
import TargetIconWhite from "@/assets/icon-target-white.svg"
import CalendarIcon from "@/assets/icon-calendar.svg"
import CalendarIconWhite from "@/assets/icon-calendar-white.svg"
import ClockIcon from "@/assets/icon-clock.svg"
import ClockIconWhite from "@/assets/icon-clock-white.svg"
import ArrowDown from "@/assets/icon-arrow-down.svg"

import UserImage from "@/assets/user-image.svg"

const Home = () => {
   const [selectedBtn, setSelectedBtn] = useState('dashboard')

   return (
      <>
         <nav className="home__sidebar">

            <Image
               src={Logo}
               alt="logo"
               className="sidebar__logo"
            />

            <div className="sidebar__items-wrapper">

               <div className="sidebar__items-wrapper__main-items">

                  <SidebarItem
                     image={selectedBtn === 'dashboard' ? DashboardIconWhite : DashboardIcon}
                     text="Dashboard"
                     alt="dashboard icon"
                     actived={selectedBtn === 'dashboard' ? true : false}
                     setSelectedBtn={setSelectedBtn}
                  />

                  <SidebarItem
                     image={selectedBtn === 'settings' ? SettingsIconWhite : SettingsIcon}
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
                        image={selectedBtn === 'hábitos' ? TargetIconWhite : TargetIcon}
                        text="Hábitos"
                        alt="hábitos icon"
                        actived={selectedBtn === 'hábitos' ? true : false}
                        setSelectedBtn={setSelectedBtn}
                     />

                     <SidebarItem
                        image={selectedBtn === 'planos' ? CalendarIconWhite : CalendarIcon}
                        text="Planos"
                        alt="planos icon"
                        actived={selectedBtn === 'planos' ? true : false}
                        setSelectedBtn={setSelectedBtn}
                     />
                  </div>
               </div>

               <div className="sidebar__items-wrapper__plans-items-wrapper">
                  <h4>APPS</h4>

                  <div className="sidebar__items-wrapper__apps-items">
                     <SidebarItem
                        image={selectedBtn === 'pomodoro' ? ClockIconWhite : ClockIcon}
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
                  <Image src={ArrowDown} className="user-wrapper__arrow-down" alt="arrow down image" />
               </div>
            </div>

         </nav>

         <Dashboard />
      </>
   )
}

export default Home