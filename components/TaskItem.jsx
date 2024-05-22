"use client"

import { useState } from "react"
import Image from "next/image"

import "@/css/components/task-item.css"

import { IconTrash, IconClock, IconEdit, UncheckedIcon, CheckedIcon, IconX, IconCheck } from "@/assets"

const TaskItem = ({ task, id, handleChangeTaskCounter, setDashboardTasks, dashboardTasks }) => {

   const [checked, setChecked] = useState(task.checked)
   const [editActive, setEditActive] = useState(false)
   const [taskTitle, setTaskTitle] = useState(task.title)
   const [editValue, setEditValue] = useState('')

   function handleCheckTask() {
      setChecked((prev) => !prev)
      handleChangeTaskCounter(checked)
      setDashboardTasks(prev => prev.map(task => task.id === id ? { ...task, checked: true } : task))
   }

   function handleEditingValue(e) {
      setEditValue(e.target.value)
   }

   function handleEditValue() {
      setEditActive(true)
      setEditValue(taskTitle)
   }

   function handleSetEditValue() {
      setEditActive(false)
      setTaskTitle(editValue)
   }

   function handleEditWithEnter(e) {
      if (e.key === 'Enter') {
         handleSetEditValue()
      }
   }

   function handleDelete() {
      let filteredTasks = dashboardTasks.filter(task => task.id !== id)
      setDashboardTasks(filteredTasks)
   }

   return (
      <div className="task-item">

         <div className="task-item__content-area">

            <button onClick={handleCheckTask}>
               {
                  checked ? (
                     <Image src={CheckedIcon} alt="checked icon" className="content-area__check-icon" />
                  ) : (
                     <Image src={UncheckedIcon} alt="unchecked icon" className="content-area__check-icon" />
                  )
               }
            </button>

            {
               editActive ? <input type="text" onChange={(e) => handleEditingValue(e)} value={editValue} className="content-area__edit-input" autoFocus onKeyDown={(e) => handleEditWithEnter(e)} />

                  :

                  checked ? (
                     <p><s>{taskTitle}</s></p>
                  ) : (
                     <p>{taskTitle}</p>
                  )
            }


         </div>

         <div className="task-item__actions-area">

            {
               editActive ?

                  <>
                     <button>
                        <Image src={IconX} alt="X icon" className="actions-area__icon" onClick={() => {
                           setEditActive(false)
                        }} />
                     </button>

                     <button>
                        <Image src={IconCheck} alt="Check icon" className="actions-area__icon" onClick={handleSetEditValue} />
                     </button>
                  </>


                  :

                  <>
                     {!checked && (
                        <>
                           <button>
                              <Image src={IconClock} alt="clock icon" className="actions-area__icon" />
                           </button>

                           <button>
                              <Image src={IconEdit} alt="edit icon" className="actions-area__icon" onClick={handleEditValue} />
                           </button>
                        </>
                     )}

                     <button>
                        <Image src={IconTrash} alt="trash icon" className="actions-area__icon" onClick={handleDelete} />
                     </button>
                  </>
            }

         </div>

      </div>
   )
}

export default TaskItem