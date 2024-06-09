"use client"

import { useState } from 'react'

import { DragDropContext, Droppable } from '@hello-pangea/dnd'

import { ListTaskItem } from '@/components'

const DraggableList = ({ tempList, setTempList, taskItemEditActive, setTaskItemEditActive }) => {

   const [changeColorMenuSelected, setChangeColorMenuSelected] = useState("")

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
         <Droppable droppableId="tasks" type="list" direction="vertical">

            {(provided) => (
               <section className="task-list-wrapper__task-list" ref={provided.innerRef} {...provided.droppableProps}>

                  {
                     tempList.map((task, index) => (
                        <ListTaskItem
                           key={task.id}
                           level={task.level}
                           index={index}
                           id={task.id.toString()}
                           tempList={tempList}
                           setTempList={setTempList}
                           taskItemEditActive={taskItemEditActive}
                           setTaskItemEditActive={setTaskItemEditActive}
                           changeColorMenuSelected={changeColorMenuSelected}
                           setChangeColorMenuSelected={setChangeColorMenuSelected}

                        >
                           {task.title}
                        </ListTaskItem>
                     ))
                  }

                  {provided.placeholder}

               </section>
            )}

         </Droppable>
      </DragDropContext>
   )
}

export default DraggableList