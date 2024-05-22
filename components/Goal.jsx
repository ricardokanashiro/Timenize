import { useState } from "react"
import Image from "next/image"

import "@/css/components/goal.css"

import { SquareUncheckedIcon, SquareCheckedIcon, IconTrash, IconEdit } from "@/assets"

import { plans } from "@/data"

const Goal = ({ goal, onDashboard, setCounter, index, planIndex }) => {

   const [checked, setChecked] = useState(goal.checked)

   return (
      <div className={onDashboard ? "goal goal--dashboard" : "goal"}>

         <div className="goal__content-area">

            <button onClick={() => {
               setChecked((prev) => !prev)
               checked ? setCounter((prev) => prev - 1) : setCounter((prev) => prev + 1)
               plans[planIndex].goals[index].checked = !plans[planIndex].goals[index].checked
            }}>
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
                  <p><s>{goal.title}</s></p>
               ) : (
                  <p>{goal.title}</p>
               )
            }

         </div>

         <div className="goal__actions-area">

            {
               !checked && (
                  <button>
                     <Image src={IconEdit} alt="edit icon" className="actions-area__icon" />
                  </button>
               )
            }

            <button>
               <Image src={IconTrash} alt="trash icon" className="actions-area__icon" />
            </button>

         </div>

      </div>
   )
}

export default Goal