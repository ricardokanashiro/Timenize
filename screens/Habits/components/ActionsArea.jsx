import Image from "next/image"

import { IconX, IconSearchWhite, IconPlusWhite } from "@/assets"

import "@/css/screens/habitos/components/actions-area.css"
import { useState } from "react"

const ActionsArea = () => {

   const [searchValue, setSearchValue] = useState("")

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
                     <button>
                        <Image src={IconX} alt="ícone de apagar" />
                     </button>
                  )
               }


            </div>

            <button className="actions-area__search-button">
               <Image src={IconSearchWhite} alt="ícone de busca" />
            </button>

         </div>

         <button className="habitos__add-habito">
            <span>Adicionar Hábito</span>
            <Image src={IconPlusWhite} alt="ícone de adicionar" />
         </button>

      </section>
   )
}

export default ActionsArea