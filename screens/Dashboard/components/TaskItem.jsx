"use client"

import { useContext, useState } from "react"
import Image from "next/image"

import "@/css/screens/dashboard/components/task-item.css"

import { IconTrash, IconClock, IconEdit, UncheckedIcon, CheckedIcon, IconX, IconCheck } from "@/assets"

import { DataContext } from "@/contexts"

const TaskItem = ({ task, id }) => {

   const {sharedTasks, setSharedTasks} = useContext(DataContext)
   const [editActive, setEditActive] = useState(false)
   const [editValue, setEditValue] = useState('')

   function handleCheckTask() {
      setSharedTasks(prev => prev.map(task => task.id === id ? { ...task, checked: !task.checked } : task))
   }

   function handleEditingValue(e) {
      setEditValue(e.target.value)
   }

   function handleEditValue() {
      setEditActive(true)
      setEditValue(task.title)
   }

   function handleSetEditValue() {
      setEditActive(false)
      setSharedTasks(prev => prev.map(task => task.id === id ? { ...task, title: editValue } : task))
   }

   function handleEditWithEnter(e) {
      if (e.key === 'Enter') {
         handleSetEditValue()
      }
   }

   function handleDelete() {
      let filteredTasks = sharedTasks.filter(task => task.id !== id)
      setSharedTasks(filteredTasks)
   }

   return (
      <div className="task-item">

         <div className="task-item__content-area">

            <button onClick={handleCheckTask}>
               {
                  task.checked ? (
                     <Image src={CheckedIcon} alt="checked icon" className="content-area__check-icon" />
                  ) : (
                     <Image src={UncheckedIcon} alt="unchecked icon" className="content-area__check-icon" />
                  )
               }
            </button>

            {
               editActive ? <input type="text" onChange={(e) => handleEditingValue(e)} value={editValue} className="content-area__edit-input" autoFocus onKeyDown={(e) => handleEditWithEnter(e)} />

                  :

                  task.checked ? (
                     <p><s>{task.title}</s></p>
                  ) : (
                     <p>{task.title}</p>
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
                     {!task.checked && (
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