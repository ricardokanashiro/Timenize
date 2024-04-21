import Image from "next/image"

import Dashboard from "@/sections/Dashboard"

import SidebarItem from "@/components/SidebarItem"

import Logo from '@/assets/logo.svg'

import DashboardIcon from "@/assets/icon-home.svg"

const Home = () => {
   return (
      <>
         <nav className="home__sidebar">

            <Image
               src={Logo}
               alt="logo"
               width={40}
               height={40}
               className="sidebar__logo"
            />

            <div className="sidebar__items-wrapper">

               <div className="sidebar__items-wrapper__main-items">

                  <SidebarItem 
                     image={DashboardIcon}
                     text="Dashboard"
                     alt="dashboard icon"
                  />

               </div>

            </div>

         </nav>

         <Dashboard />
      </>
   )
}

export default Home