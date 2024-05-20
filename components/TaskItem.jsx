"use client"

import { useState } from "react"
import Image from "next/image"

import "@/css/components/task-item.css"

import { IconTrash, IconClock, IconEdit, UncheckedIcon, CheckedIcon } from "@/assets"

import { tasks } from "./Dashboard"

const TaskItem = ({ task, index, setTaskCounter }) => {

   const [checked, setChecked] = useState(task.checked)

   return (
      <div className="task-item">

         <div className="task-item__content-area">

            <button onClick={() => {
               setChecked((prev) => !prev)
               checked ? setTaskCounter((prev) => prev - 1) : setTaskCounter((prev) => prev + 1)
               tasks[index].checked = !tasks[index].checked
            }}>
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
                  <p><s>{task.title}</s></p>
               ) : (
                  <p>{task.title}</p>
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