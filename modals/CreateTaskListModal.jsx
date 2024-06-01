import { useContext, useEffect, useState } from 'react'

import { v4 as uuidV4 } from 'uuid'

import '@/css/modal/create-task-list-modal.css'

import { DragDropContext, Droppable } from '@hello-pangea/dnd'

import { ModalButton, ListLevelButton, ListTaskItem } from '@/components'
import { DataContext } from "@/components/DataContext"

const CreateTaskListModal = () => {

   const {sharedTasks, setSharedTasks} = useContext(DataContext)
   const [levelSelected, setLevelSelected] = useState("")
   const [taskTitle, setTaskTitle] = useState("")
   const [tempList, setTempList] = useState([])

   useEffect(() => {
      setTempList([...sharedTasks])
   }, [sharedTasks])

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

   function handleSetTaskTitle(value) {
      setTaskTitle(value)
   }

   function handleDeleteTempTask(id) {
      const filteredList = tempList.filter(task => task.id != id)
      setTempList(filteredList)
   }

   function handleCreateTempTask() {
      
      const newTask = {
         id: uuidV4(),
         title: taskTitle,
         checked: false,
         level: levelSelected
      }

      setTempList(prev => [newTask, ...prev])
      setTaskTitle("")
   }

   return (
      <div className="create-task-list-modal">

         <h1>Gerenciar Lista</h1>

         <section className="create-task-list-modal__configurations">

            <section className="configurations__tasks-configs-area">

               <h2>Configurações de Task</h2>

               <section className="tasks-configs__tasks-configs">

                  <div className="tasks-configs__create-title-area">

                     <input type="text" placeholder="Nome da nova task..." onChange={(e) => handleSetTaskTitle(e.target.value)} value={taskTitle} />
                     <ModalButton backButton={false} action={handleCreateTempTask}>Criar</ModalButton>

                  </div>

                  <div className="tasks-configs__level-area">

                     <p>Dificuldade</p>

                     <div className="level-area__levels-wrapper">

                        <ListLevelButton
                           level="básico"
                           setLevelSelected={setLevelSelected}
                           actived={levelSelected === "básico"}
                        >
                           Básico
                        </ListLevelButton>

                        <ListLevelButton
                           level="médio"
                           setLevelSelected={setLevelSelected}
                           actived={levelSelected === "médio"}
                        >
                           Médio
                        </ListLevelButton>

                        <ListLevelButton
                           level="completo"
                           setLevelSelected={setLevelSelected}
                           actived={levelSelected === "completo"}
                        >
                           Completo
                        </ListLevelButton>

                     </div>

                  </div>

               </section>

            </section>

            <section className="configurations__task-list-wrapper">

               <h2>Lista de Tasks</h2>

               <DragDropContext onDragEnd={handleOnDragEnd}>
                  <Droppable droppableId="tasks" type="list" direction="vertical">

                     {(provided) => (
                        <section className="task-list-wrapper__task-list" ref={provided.innerRef} {...provided.droppableProps}>

                           {
                              tempList.map((task, index) => (
                                 <ListTaskItem key={task.id} level={task.level} index={index} id={task.id.toString()} handleDeleteTempTask={handleDeleteTempTask}>
                                    {task.title}
                                 </ListTaskItem>
                              ))
                           }

                           {provided.placeholder}

                        </section>
                     )}

                  </Droppable>
               </DragDropContext>

            </section>

         </section>

         <section className="create-task-list-modal__action-area">

            <ModalButton backButton={true}>Cancelar</ModalButton>
            <ModalButton backButton={false}>Aplicar</ModalButton>

         </section>

      </div>
   )
}

export default CreateTaskListModal