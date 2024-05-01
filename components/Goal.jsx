import Image from "next/image"

import "@/css/components/goal.css"

import { SquareUncheckedIcon, SquareCheckedIcon, IconTrash, IconEdit } from "@/assets"
import { useState } from "react"

const Goal = ({ text }) => {
   const [checked, setChecked] = useState(false)

   return (
      <div className="goal">

         <div className="goal__content-area">

            <button onClick={() => setChecked((prev) => !prev)}>
               {
                  checked ? (
                     <Image src={SquareCheckedIcon} alt="checked icon" />
                  ) : (
                     <Image src={SquareUncheckedIcon} alt="unchecked icon" />
                  )
               }
            </button>

            {
               checked ? (
                  <p><s>{text}</s></p>
               ) : (
                  <p>{text}</p>
               )
            }

         </div>

         <div className="goal__actions-area">

            <button>
               <Image src={IconEdit} alt="edit icon" className="actions-area__icon" />
            </button>

            <button>
               <Image src={IconTrash} alt="trash icon" className="actions-area__icon" />
            </button>

         </div>

      </div>
   )
}

export default Goal