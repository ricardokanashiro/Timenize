import { useContext, useEffect, useState } from 'react'

import Image from 'next/image'
import { v4 as uuidV4 } from 'uuid'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { ListLevelButton, DraggableList } from '@/components'
import { DataContext } from "@/components/DataContext"
import { ModalsContext } from '@/components/ModalsContext'

import '@/css/modal/create-task-list-modal.css'

import { IconPlusWhite } from '@/assets'

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

   const [taskItemEditActive, setTaskItemEditActive] = useState("")

   useEffect(() => {
      setTempList([...sharedTasks])
   }, [sharedTasks])

   useEffect(() => {
      handleLoadAnimation()
   }, [taskListModalActive])

   function handleSetTaskTitle(e) {
      if (taskTitle.length === 50 && e.target.value > taskTitle) {
         return
      }

      setTaskTitle(e.target.value)
   }

   function handleCreateTempTask() {

      if (!taskTitle) {
         alert("Insira um valor válido")
         return
      }

      if (!levelSelected) {
         alert("Insira um nível válido")
         return
      }

      const newTask = {
         id: uuidV4(),
         title: taskTitle,
         checked: false,
         level: levelSelected
      }

      setTempList(prev => [newTask, ...prev])
      setTaskTitle("")
      setLevelSelected("")
   }

   function handleCreateTempTaskWithEnter(e) {
      if (e.key === "Enter") {
         handleCreateTempTask()
      }
   }

   function handleLoadAnimation() {
      taskListModalActive && setTimeout(() => setAnimateClass("fade-up-left"), 100)
   }

   function handleSetModalDisabled() {
      setTaskListModalActive(false)
      setModalWrapperActive(false)
      setModalBlurActive(false)
      setAnimateClass("")

      setTempList(sharedTasks)

      setTaskTitle("")
      setLevelSelected("")
      setTaskItemEditActive("")
   }

   function notify(message) {
      toast.success(message, {
         position: "top-right",
         autoClose: 3000,
      })
   }

   function handleApplyChanges() {
      setSharedTasks(tempList)
      handleSetModalDisabled()
      notify("Alterações concluídas com sucesso!")
   }

   return (
      <div className={taskListModalActive ? "create-task-list-modal " + animateClass : "create-task-list-modal create-task-list-modal--disabled"} tabIndex={1} onKeyDown={(e) => handleCreateTempTaskWithEnter(e)}>

         <h1>Gerenciar Lista</h1>

         <section className="create-task-list-modal__configurations">

            <section className="configurations__tasks-configs-area">

               <h2>Configurações de Task</h2>

               <section className="tasks-configs__tasks-configs">

                  <div className="tasks-configs__create-title-area">

                     <div className="create-title-area__input-wrapper">
                        <input
                           type="text"
                           placeholder="Nome da nova task..."
                           onChange={(e) => handleSetTaskTitle(e)}
                           value={taskTitle}
                        />

                        {
                           taskTitle && <span>{taskTitle.length}/50</span>
                        }
                     </div>


                     <button onClick={handleCreateTempTask} className="create-task-list-modal__add-button">
                        <p className="modal-button__text">Criar</p>
                        <Image src={IconPlusWhite} alt="" className="modal-button__icon" />
                     </button>

                  </div>

                  <div className="tasks-configs__level-area">

                     <p>Importância</p>

                     <div className="level-area__levels-wrapper">

                        <ListLevelButton
                           level="trivial"
                           setLevelSelected={setLevelSelected}
                           actived={levelSelected === "trivial"}
                        >
                           Trivial
                        </ListLevelButton>

                        <ListLevelButton
                           level="importante"
                           setLevelSelected={setLevelSelected}
                           actived={levelSelected === "importante"}
                        >
                           Importante
                        </ListLevelButton>

                        <ListLevelButton
                           level="essencial"
                           setLevelSelected={setLevelSelected}
                           actived={levelSelected === "essencial"}
                        >
                           Essencial
                        </ListLevelButton>

                     </div>

                  </div>

               </section>

            </section>

            <section className="configurations__task-list-wrapper">

               <h2>Lista de Tasks</h2>

               <section className="create-task-list-modal__draggable-list-wrapper">

                  <DraggableList
                     tempList={tempList}
                     setTempList={setTempList}
                     taskItemEditActive={taskItemEditActive}
                     setTaskItemEditActive={setTaskItemEditActive}
                  />

               </section>


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