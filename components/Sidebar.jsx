import Image from "next/image"

import { SidebarItem } from "./"

import "@/css/components/sidebar.css"

import { 
   Logo, IconHome, IconHomeWhite, IconSettings, 
   IconSettingsWhite, IconTarget, IconTargetWhite, 
   IconCalendar, IconCalendarWhite, IconClock, 
   IconClockWhite, IconLogOut, UserImage 
} from "@/assets"

const Sidebar = ({ selectedScreen, setSelectedScreen }) => {
   return (
      <>
         <section className="mobile-menu">
            <SidebarItem
               image={selectedScreen === 'dashboard' ? IconHomeWhite : IconHome}
               text="Dashboard"
               alt="dashboard icon"
               actived={selectedScreen === 'dashboard' ? true : false}
               setSelectedScreen={setSelectedScreen}
            />

            <SidebarItem
               image={selectedScreen === 'settings' ? IconSettingsWhite : IconSettings}
               text="Settings"
               alt="settigns icon"
               actived={selectedScreen === 'settings' ? true : false}
               setSelectedScreen={setSelectedScreen}
            />

            <SidebarItem
               image={selectedScreen === 'hábitos' ? IconTargetWhite : IconTarget}
               text="Hábitos"
               alt="hábitos icon"
               actived={selectedScreen === 'hábitos' ? true : false}
               setSelectedScreen={setSelectedScreen}
            />

            <SidebarItem
               image={selectedScreen === 'planos' ? IconCalendarWhite : IconCalendar}
               text="Planos"
               alt="planos icon"
               actived={selectedScreen === 'planos' ? true : false}
               setSelectedScreen={setSelectedScreen}
            />

            <SidebarItem
               image={selectedScreen === 'pomodoro' ? IconClockWhite : IconClock}
               text="Pomodoro"
               alt="pomodoro icon"
               actived={selectedScreen === 'pomodoro' ? true : false}
               setSelectedScreen={setSelectedScreen}
            />

            <Image src={UserImage} className="mobile-menu__user-image" alt="user image" />

         </section>

         <nav className="sidebar">

            <Image
               src={Logo}
               alt="logo"
               className="sidebar__logo"
            />

            <div className="sidebar__items-wrapper">

               <div className="sidebar__items-wrapper__main-items">

                  <SidebarItem
                     image={selectedScreen === 'dashboard' ? IconHomeWhite : IconHome}
                     text="Dashboard"
                     alt="dashboard icon"
                     actived={selectedScreen === 'dashboard' ? true : false}
                     setSelectedScreen={setSelectedScreen}
                  />

                  <SidebarItem
                     image={selectedScreen === 'settings' ? IconSettingsWhite : IconSettings}
                     text="Settings"
                     alt="settigns icon"
                     actived={selectedScreen === 'settings' ? true : false}
                     setSelectedScreen={setSelectedScreen}
                  />

               </div>

               <div className="sidebar__items-wrapper__plans-items-wrapper">
                  <h4>PLANS</h4>

                  <div className="sidebar__items-wrapper__plans-items">
                     <SidebarItem
                        image={selectedScreen === 'hábitos' ? IconTargetWhite : IconTarget}
                        text="Hábitos"
                        alt="hábitos icon"
                        actived={selectedScreen === 'hábitos' ? true : false}
                        setSelectedScreen={setSelectedScreen}
                     />

                     <SidebarItem
                        image={selectedScreen === 'planos' ? IconCalendarWhite : IconCalendar}
                        text="Planos"
                        alt="planos icon"
                        actived={selectedScreen === 'planos' ? true : false}
                        setSelectedScreen={setSelectedScreen}
                     />
                  </div>
               </div>

               <div className="sidebar__items-wrapper__apps-items-wrapper">
                  <h4>APPS</h4>

                  <div className="sidebar__items-wrapper__apps-items">
                     <SidebarItem
                        image={selectedScreen === 'pomodoro' ? IconClockWhite : IconClock}
                        text="Pomodoro"
                        alt="pomodoro icon"
                        actived={selectedScreen === 'pomodoro' ? true : false}
                        setSelectedScreen={setSelectedScreen}
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
      </>
   )
}

export default Sidebar