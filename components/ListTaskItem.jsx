"use client"

import Image from "next/image"

import { Draggable } from "@hello-pangea/dnd"

import "@/css/components/list-task-item.css"

import { IconTrash, IconMoreVertical } from "@/assets"

const ListTaskItem = ({ children, level, index, id, handleDeleteTempTask }) => {

   function handleReturnLevelColor() {
      if (level === "básico") {
         return "list-task-item__level-color list-task-item__level-color--basic"
      }

      if (level === "médio") {
         return "list-task-item__level-color list-task-item__level-color--middle"
      }

      return "list-task-item__level-color list-task-item__level-color--complete"
   }

   return (
      <Draggable key={id} draggableId={id} index={index}>
         {(provided) => (
            <div className="list-task-item" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>

               <div className="list-task-item__content-area">

                  <button className="list-task-item__drag-button">
                     <Image src={IconMoreVertical} alt="drag icon" className="drag-button__icon" />
                  </button>

                  <p className="list-task-item__text">{children}</p>

               </div>


               <div className="list-task-item__actions-area">

                  <div className="list-task-item__level-color"></div>

                  <div className={handleReturnLevelColor()}></div>

                  <button onClick={() => handleDeleteTempTask(id)}>
                     <Image src={IconTrash} alt="trash icon" className="list-task-icon__actions-area__trash-icon" />
                  </button>

               </div>
            </div>
         )}
      </Draggable>
   )
}

export default ListTaskItem