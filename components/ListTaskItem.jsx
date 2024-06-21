"use client"

import { useEffect, useState, useContext } from "react"

import Image from "next/image"
import { Draggable } from "@hello-pangea/dnd"
import { useFloating, hide, autoUpdate, flip } from '@floating-ui/react';

import { ModalsContext } from '@/components/ModalsContext'

import "@/css/components/list-task-item.css"

import { IconTrash, IconMoreVertical, IconEdit, IconCheck, IconX } from "@/assets"

const ListTaskItem = ({
   children, level, index, id, tempList, setTempList, taskItemEditActive, setTaskItemEditActive, changeColorMenuSelected, setChangeColorMenuSelected, containerRef
}) => {

   const { taskListModalActive } = useContext(ModalsContext)

   const [editValue, setEditValue] = useState(children)

   const { refs, floatingStyles, middlewareData } = useFloating({
      placement: 'left-start',
      middleware: [
         flip({
            boundary: containerRef.current,
         }),
         hide()
      ],
      whileElementsMounted: autoUpdate
   });

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
   }

   function changeLevel(level) {
      setTempList(prev => prev.map(
         task => task.id === id ? { ...task, level: level } : task
      ))
   }

   useEffect(() => {
      !taskListModalActive && setEditValue(children)
   }, [taskListModalActive])

   return (
      <Draggable key={id} draggableId={id} index={index}>
         {(provided, snapshot) => {

            return (
               <div
                  className="list-task-item"
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  style={snapshot.isDragging ? { ...provided.draggableProps.style, top: provided.draggableProps.style.top - 82 } : { ...provided.draggableProps.style }}
               >

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

                        <button
                           ref={refs.setReference}
                           onClick={handleSetChangeColorMenuSelected}
                           className={
                              "list-task-item__level-color list-task-item__level-color" + (
                                 level === "trivial" ? "--trivial"
                                    : level === "importante" ? "--importante"
                                       : level === "essencial" && "--essencial")
                           }
                        ></button>

                        {
                           changeColorMenuSelected === id && (
                              <div className="level-wrapper-mini-menu" ref={refs.setFloating} style={{ ...floatingStyles, visibility: middlewareData.hide?.referenceHidden ? 'hidden' : 'visible' }}>

                                 <button className="level-wrapper-mini-menu__btn--green" onClick={() => changeLevel("trivial")}>
                                    <p>Trivial</p>
                                    <Image
                                       src={IconCheck}
                                       alt="icon check"
                                       className={
                                          level === "trivial" ? "level-wrapper-mini-menu__check-icon"
                                             : "level-wrapper-mini-menu__check-icon level-wrapper-mini-menu__check-icon--disabled"
                                       }
                                    />
                                 </button>

                                 <button className="level-wrapper-mini-menu__btn--yellow" onClick={() => changeLevel("importante")}>
                                    <p>Importante</p>
                                    <Image
                                       src={IconCheck}
                                       alt="icon check"
                                       className={
                                          level === "importante" ? "level-wrapper-mini-menu__check-icon"
                                             : "level-wrapper-mini-menu__check-icon level-wrapper-mini-menu__check-icon--disabled"
                                       }
                                    />
                                 </button>

                                 <button className="level-wrapper-mini-menu__btn--red" onClick={() => changeLevel("essencial")}>
                                    <p>Essencial</p>
                                    <Image
                                       src={IconCheck}
                                       alt="icon check"
                                       className={
                                          level === "essencial" ? "level-wrapper-mini-menu__check-icon"
                                             : "level-wrapper-mini-menu__check-icon level-wrapper-mini-menu__check-icon--disabled"
                                       }
                                    />
                                 </button>
                              </div>
                           )
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
               </div>)
         }}
      </Draggable>
   )
}

export default ListTaskItem