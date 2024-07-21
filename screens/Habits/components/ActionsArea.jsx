import { useContext, useState } from "react"
import Image from "next/image"

import { IconX, IconSearchWhite, IconPlusWhite, IconSearchDark, IconPlusDark } from "@/assets"
import { ThemeContext } from "@/contexts"

import "@/css/screens/habitos/components/actions-area.css"

const ActionsArea = () => {

   const [searchValue, setSearchValue] = useState("")
   const { darkThemeActive } = useContext(ThemeContext)

   return (
      <section className="habitos__actions-area">

         <div className="habitos__search-area">

            <div className="habitos__input-wrapper">

               <input
                  type="text"
                  placeholder="Nome do hábito"
                  onChange={(e) => setSearchValue(e.target.value)}
                  value={searchValue}
               />

               {
                  searchValue !== "" && (
                     <button onClick={() => setSearchValue("")}>
                        <Image src={IconX} alt="ícone de apagar" />
                     </button>
                  )
               }


            </div>

            <button className="actions-area__search-button">
               <Image src={darkThemeActive ? IconSearchDark : IconSearchWhite} alt="ícone de busca" />
            </button>

         </div>

         <button className="habitos__add-habito">
            <span>Adicionar Hábito</span>
            <Image src={darkThemeActive ? IconPlusDark : IconPlusWhite} alt="ícone de adicionar" />
         </button>

      </section>
   )
}

export default ActionsArea