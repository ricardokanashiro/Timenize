import { useContext, useEffect, useState } from "react"

import { v4 as UUIDV4 } from "uuid"

import { DataContext, ModalsContext } from "@/contexts"
import { TaskConfigs, ChangeLevelArea, ActionsArea } from "./components"

import "@/css/modal/create-task-modal/create-task-modal.css"

const CreateTaskModal = () => {

   const [inAnimationClass, setInAnimationClass] = useState("")
   const [levelSelected, setLevelSelected] = useState("")
   const [taskTitle, setTaskTitle] = useState("")
   
   const { createTaskModalActive, handleToggleCreateTaskModal } = useContext(ModalsContext)
   const { setSharedTasks } = useContext(DataContext)

   useEffect(() => {
      handleLoadInAnimation()
   }, [createTaskModalActive])

   function handleLoadInAnimation() {
      createTaskModalActive && setInAnimationClass("fade-up-left")
   }

   function disableModal() {
      handleToggleCreateTaskModal()
      setInAnimationClass("")
      setLevelSelected("")
      setTaskTitle("")
   }

   function createTask() {

      const newTask = {
         id: UUIDV4(),
         title: taskTitle,
         checked: false,
         level: levelSelected
      }

      setSharedTasks(prev => [newTask, ...prev])

      disableModal()
   }

   function createTaskWithEnter(e) {
      if(e.key === "Enter") {
         e.preventDefault()
         createTask()
      } 
   }

   return (
      <div 
         class={createTaskModalActive ? "create-task-modal " + inAnimationClass : "create-task-modal create-task-modal--disabled"}
         onKeyDown={(e) => createTaskWithEnter(e)}
      >
         <h1>Criar Task</h1>

         <section className="create-task-modal__create-task-area">
            <TaskConfigs taskTitle={taskTitle} setTaskTitle={setTaskTitle} />
            <ChangeLevelArea levelSelected={levelSelected} setLevelSelected={setLevelSelected} />
         </section>

         <ActionsArea 
            disableModal={disableModal}
            createTask={createTask}
         />
      </div>
   )
}

export default CreateTaskModal