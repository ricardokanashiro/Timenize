import { useContext, useEffect, useState } from 'react'

import { v4 as uuidV4 } from 'uuid'

import '@/css/modal/create-task-list-modal.css'

import { DragDropContext, Droppable } from '@hello-pangea/dnd'

import { ListLevelButton, ListTaskItem } from '@/components'
import { DataContext } from "@/components/DataContext"
import { ModalsContext } from '@/components/ModalsContext'

import { IconPlusWhite } from '@/assets'
import Image from 'next/image'

const CreateTaskListModal = () => {

   const { sharedTasks, setSharedTasks } = useContext(DataContext)

   const {
      taskListModalActive, setTaskListModalActive,
      setModalBlurActive, setModalWrapperActive
   } = useContext(ModalsContext)

   const [levelSelected, setLevelSelected] = useState("")
   const [taskTitle, setTaskTitle] = useState("")
   const [tempList, setTempList] = useState([])
   const [animateClass, setAnimateClass] = useState("")

   useEffect(() => {
      setTempList([...sharedTasks])
   }, [sharedTasks])

   useEffect(() => {
      handleLoadAnimation()
   }, [taskListModalActive])

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

   function handleLoadAnimation() {
      taskListModalActive && setTimeout(() => setAnimateClass("fade-up-left"), 100)
   }

   function handleSetModalDisabled() {
      setTaskListModalActive(false)
      setModalWrapperActive(false)
      setModalBlurActive(false)
      setAnimateClass("")
   }

   function handleApplyChanges() {
      setSharedTasks(tempList)
   }

   return (
      <div className={taskListModalActive ? "create-task-list-modal " + animateClass : "create-task-list-modal create-task-list-modal--disabled"}>

         <h1>Gerenciar Lista</h1>

         <section className="create-task-list-modal__configurations">

            <section className="configurations__tasks-configs-area">

               <h2>Configurações de Task</h2>

               <section className="tasks-configs__tasks-configs">

                  <div className="tasks-configs__create-title-area">

                     <input type="text" placeholder="Nome da nova task..." onChange={(e) => handleSetTaskTitle(e.target.value)} value={taskTitle} />

                     <button onClick={handleCreateTempTask} className="create-task-list-modal__add-button">
                        <p className="modal-button__text">Criar</p>
                        <Image src={IconPlusWhite} alt="" className="modal-button__icon" />
                     </button>

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

            <button onClick={handleSetModalDisabled} className="create-task-list-modal__back-button">Cancelar</button>

            <button 
               className="create-task-list-modal__apply-button" 
               onClick={() => {
                  handleApplyChanges()
                  handleSetModalDisabled()
            }}>
               Aplicar
            </button>

         </section>

      </div>
   )
}

export default CreateTaskListModal