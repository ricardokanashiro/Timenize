import Image from "next/image"

import '@/css/components/sidebar-item.css'

const SidebarItem = ({ image, text, alt, actived, setSelectedBtn }) => {
   return (
      <>
         {
            actived ? (
               <button className="sidebar-item sidebar-item-active">
                  <Image
                     src={image}
                     width={18}
                     height={18}
                     alt={alt}
                     className="icon"
                  />

                  <p>{text}</p>
               </button>
            ) : (
               <button className="sidebar-item" onClick={() => setSelectedBtn(String(text).toLowerCase())}>
                  <Image
                     src={image}
                     alt={alt}
                     className="icon"
                  />

                  <p>{text}</p>
               </button>
            )
         }
      </>
   )
}

export default SidebarItem