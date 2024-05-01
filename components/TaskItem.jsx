"use client"

import { useState } from "react"
import Image from "next/image"

import "@/css/components/task-item.css"

import { IconTrash, IconClock, IconEdit, UncheckedIcon, CheckedIcon } from "@/assets"

const TaskItem = ({ text }) => {

   const [checked, setChecked] = useState(false)

   return (
      <div className="task-item">

         <div className="task-item__content-area">

            <button onClick={() => setChecked((prev) => !prev)}>
               {
                  checked ? (
                     <Image src={CheckedIcon} alt="checked icon" className="content-area__check-icon" />
                  ) : (
                     <Image src={UncheckedIcon} alt="unchecked icon" className="content-area__check-icon" />
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

         <div className="task-item__actions-area">

            {
               !checked && (
                  <>
                     <button>
                        <Image src={IconClock} alt="clock icon" className="actions-area__icon" />
                     </button>

                     <button>
                        <Image src={IconEdit} alt="edit icon" className="actions-area__icon" /> 
                     </button>
                  </>
               )
            }

            <button>
               <Image src={IconTrash} alt="trash icon" className="actions-area__icon" />
            </button>

         </div>

      </div>
   )
}

export default TaskItem