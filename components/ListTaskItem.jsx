"use client"

import { useEffect, useState, useContext } from "react"

import Image from "next/image"
import { Draggable } from "@hello-pangea/dnd"
import { useFloating, hide, autoUpdate } from "@floating-ui/react"

import { ModalsContext } from '@/components/ModalsContext'

import "@/css/components/list-task-item.css"

import { IconTrash, IconMoreVertical, IconEdit, IconCheck, IconX } from "@/assets"

const ListTaskItem = ({
   children, level, index, id, tempList, setTempList, taskItemEditActive, setTaskItemEditActive, changeColorMenuSelected, setChangeColorMenuSelected
}) => {

   const { taskListModalActive } = useContext(ModalsContext)

   const [editValue, setEditValue] = useState(children)

   const {refs, floatingStyles, middlewareData} = useFloating({
      placement: "left-start",
      middleware: [hide()],
      whileElementsMounted: autoUpdate
   });

   function handleReturnLevelColor() {
      if (level === "básico") {
         return "list-task-item__level-color list-task-item__level-color--basic"
      }

      if (level === "médio") {
         return "list-task-item__level-color list-task-item__level-color--middle"
      }

      return "list-task-item__level-color list-task-item__level-color--complete"
   }

   function handleSetEditValue(value) {
      setEditValue(value)
   }

   function handleDeleteTempTask() {
      const filteredList = tempList.filter(task => task.id != id)
      setTempList(filteredList)
   }

   function handleEditTaskTitle() {
      const editedList = tempList.map(task => task.id === id ? { ...task, title: editValue } : task)

      setTempList(editedList)
      setTaskItemEditActive("")
   }

   function handleEditTaskTitleWithEnter(e) {
      if (e.key === "Enter") {
         handleEditTaskTitle()
      }
   }

   function handleSetChangeColorMenuSelected() {
      if (changeColorMenuSelected !== "") {
         setChangeColorMenuSelected("")
         return
      }

      setChangeColorMenuSelected(id)
      // elRef.current.offsetTop
   }

   useEffect(() => {
      !taskListModalActive && setEditValue(children)
   }, [taskListModalActive])

   return (
      <Draggable key={id} draggableId={id} index={index}>
         {(provided) => (
            <div className="list-task-item" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>

               <div className="list-task-item__content-area">

                  <button className="list-task-item__drag-button">
                     <Image src={IconMoreVertical} alt="drag icon" className="drag-button__icon" />
                  </button>

                  {
                     taskItemEditActive === id ?
                        <input
                           type="text"
                           className="list-task-item__edit-input"
                           onChange={(e) => handleSetEditValue(e.target.value)}
                           onKeyDown={(e) => handleEditTaskTitleWithEnter(e)}
                           value={editValue}
                           autoFocus
                        />

                        : <p className="list-task-item__text">{children}</p>
                  }

               </div>


               <div className="list-task-item__actions-area">

                  <div className="list-task-item__level-wrapper">

                     <button className={handleReturnLevelColor()} onClick={handleSetChangeColorMenuSelected} ref={refs.setReference}></button>

                     {
                        changeColorMenuSelected === id &&

                        <div className="level-wrapper-mini-menu" ref={refs.setFloating} style={{...floatingStyles, visibility: middlewareData.hide?.referenceHidden ? 'hidden' : 'visible'}}>
                           <button>Opção 1</button>
                           <button>Opção 2</button>
                           <button>Opção 3</button>
                        </div>
                     }

                  </div>

                  <section className="list-task-item__actions-wrapper">

                     {
                        taskItemEditActive === id ? <>
                           <button onClick={handleEditTaskTitle}>
                              <Image src={IconCheck} alt="check icon" className="list-task-icon__actions-area__icon" />
                           </button>

                           <button onClick={() => {
                              setTaskItemEditActive("")
                              setEditValue(children)
                           }}>
                              <Image src={IconX} alt="cancel icon" className="list-task-icon__actions-area__icon" />
                           </button>
                        </>

                           : <>
                              <button onClick={() => setTaskItemEditActive(id)}>
                                 <Image src={IconEdit} alt="edit icon" className="list-task-icon__actions-area__icon" />
                              </button>

                              <button onClick={handleDeleteTempTask}>
                                 <Image src={IconTrash} alt="trash icon" className="list-task-icon__actions-area__icon" />
                              </button>
                           </>
                     }

                  </section>


               </div>
            </div>
         )}
      </Draggable>
   )
}

export default ListTaskItem