"use client"

import { useContext, useRef } from 'react'

import { DragDropContext, Droppable } from '@hello-pangea/dnd'

import { ListTaskItem } from '.'
import { TempListContext } from '../contexts/TempListContext'

const DraggableList = ({ modalRef }) => {

   const { tempList, setTempList } = useContext(TempListContext)

   const containerRef = useRef()

   function reorderList(list, startIndex, endIndex) {
      const result = Array.from(list)
      const [removed] = result.splice(startIndex, 1)
      result.splice(endIndex, 0, removed)

      return result
   }

   function handleOnDragEnd(result) {

      if (!result.destination) {
         return
      }

      setTempList(reorderList(tempList, result.source.index, result.destination.index))
   }

   return (
      <DragDropContext onDragEnd={handleOnDragEnd}>
         <Droppable droppableId="tasks" type="list" direction="vertical" className="droppable-container">

            {(provided) => (
               <section ref={containerRef}>
                  <section className="task-list-wrapper__task-list" ref={provided.innerRef} {...provided.droppableProps}>

                     {
                        tempList.map((task, index) => (
                           <ListTaskItem
                              key={task.id}
                              level={task.level}
                              index={index}
                              id={task.id.toString()}
                              containerRef={containerRef}
                              modalRef={modalRef}
                           >
                              {task.title}
                           </ListTaskItem>
                        ))
                     }

                     {provided.placeholder}

                  </section>
               </section>
            )}

         </Droppable>
      </DragDropContext>
   )
}

export default DraggableList