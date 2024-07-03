"use client"

import { useEffect, useState, useContext } from "react"
import Image from "next/image"
import { Draggable } from "@hello-pangea/dnd"
import { useFloating, hide, autoUpdate, flip, useInteractions, useDismiss } from '@floating-ui/react';

import { ModalsContext } from '@/contexts'
import { SelectedTaskItemIDContext, TempListContext, ItemEditActiveIDContext } from "../contexts";

import { ChangeLevelMiniMenu } from "./"

import { IconTrash, IconMoreVertical, IconEdit, IconCheck, IconX } from "@/assets"
import "@/css/modal/create-task-list-modal/components/list-task-item.css"

const ListTaskItem = ({
   children, level, index, id, containerRef
}) => {

   const { tempList, setTempList } = useContext(TempListContext)
   const { taskListModalActive } = useContext(ModalsContext)
   const { selectedTaskItemId, setSelectedTaskItemId } = useContext(SelectedTaskItemIDContext)
   const { itemEditActiveID, setItemEditActiveID } = useContext(ItemEditActiveIDContext)

   const [editValue, setEditValue] = useState(children)
   const [opened, setOpened] = useState(false)

   const { refs, floatingStyles, middlewareData, context } = useFloating({
      placement: 'left-start',
      strategy: 'fixed',
      middleware: [
         flip({
            boundary: containerRef.current,
         }),
         hide()
      ],
      whileElementsMounted: autoUpdate,
      open: opened,
      onOpenChange: (cond) => {
         setOpened(cond)
         setSelectedTaskItemId("")
      },
   });

   const dismiss = useDismiss(context, {
      ancestorScroll: true,
      outsidePress: (event) => {
         event.stopPropagation()

         const isMiniMenu = event.target.classList.contains('level-wrapper-mini-menu__btn') ? true
            : event.target.classList.contains('level-wrapper-mini-menu') ? true
               : event.target.parentNode.classList.contains('level-wrapper-mini-menu__btn') ? true
                  : event.target.parentNode.parentNode.classList.contains('level-wrapper-mini-menu__btn') && true

         return !isMiniMenu
      },
   })

   const { getReferenceProps, getFloatingProps } = useInteractions([
      dismiss,
   ])

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
      setItemEditActiveIDActive("")
   }

   function handleEditTaskTitleWithEnter(e) {
      if (e.key === "Enter") {
         handleEditTaskTitle()
      }
   }

   function handleSetselectedTaskItemId() {

      if (selectedTaskItemId !== "") {
         setSelectedTaskItemId("")
         return
      }

      setSelectedTaskItemId(id)
   }

   function changeLevel(level) {
      setTempList(prev => prev.map(
         task => task.id === id ? { ...task, level: level } : task
      ))
   }

   useEffect(() => {
      !taskListModalActive && setEditValue(children)
   }, [taskListModalActive])

   useEffect(() => {
      selectedTaskItemId === "" ? setOpened(false) : setOpened(true)
   }, [selectedTaskItemId])

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
                        itemEditActiveID === id ?
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
                           onClick={handleSetselectedTaskItemId}
                           {...getReferenceProps()}
                           className={
                              "list-task-item__level-color list-task-item__level-color" + (
                                 level === "trivial" ? "--trivial"
                                    : level === "importante" ? "--importante"
                                       : level === "essencial" && "--essencial")
                           }
                        />

                        {
                           selectedTaskItemId === id && opened && (

                              <ChangeLevelMiniMenu
                                 refs={refs}
                                 floatingStyles={floatingStyles}
                                 middlewareData={middlewareData}
                                 getFloatingProps={getFloatingProps}
                                 level={level}
                                 id={id}
                              />

                           )
                        }

                     </div>

                     <section className="list-task-item__actions-wrapper">

                        {
                           itemEditActiveID === id ? <>
                              <button onClick={handleEditTaskTitle}>
                                 <Image src={IconCheck} alt="check icon" className="list-task-icon__actions-area__icon" />
                              </button>

                              <button onClick={() => {
                                 setItemEditActiveIDActive("")
                                 setEditValue(children)
                              }}>
                                 <Image src={IconX} alt="cancel icon" className="list-task-icon__actions-area__icon" />
                              </button>
                           </>

                              : <>
                                 <button onClick={() => setItemEditActiveID(id)}>
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