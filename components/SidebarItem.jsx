import { useContext } from "react"
import Image from "next/image"

import { ThemeContext } from "@/contexts"

import '@/css/components/sidebar-item.css'

const SidebarItem = ({ image, text, alt, actived, setSelectedScreen }) => {

   const { darkThemeActive } = useContext(ThemeContext)

   return (
      <>
         <button
            className={
               actived ?
               "sidebar-item sidebar-item-active"
               : "sidebar-item"
            }
            onClick={() => setSelectedScreen(String(text).toLowerCase())}
         >
            <Image
               src={image}
               width={18}
               height={18}
               alt={alt}
               className="icon"
            />

            <p>{text}</p>
         </button>
      </>
   )
}

export default SidebarItem