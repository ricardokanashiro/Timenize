import { useContext } from "react"

import { v4 as uuidV4 } from 'uuid'

import { EditAreasContext, TempListContext } from "../contexts"
import { LevelsWrapper, AddTaskTitleInput, AddTaskButton } from "."

const AddTaskArea = () => {

   const { setTempList } = useContext(TempListContext)
   const {
      addTaskTaskTitle, setAddTaskTaskTitle,
      addTaskLevelSelected, setAddTaskLevelSelected
   } = useContext(EditAreasContext)

   function handleCreateTempTask() {

      if (!addTaskTaskTitle) {
         alert("Insira um valor válido")
         return
      }

      if (!addTaskLevelSelected) {
         alert("Insira um nível válido")
         return
      }

      const newTask = {
         id: uuidV4(),
         title: addTaskTaskTitle,
         checked: false,
         level: addTaskLevelSelected
      }

      setTempList(prev => [newTask, ...prev])
      setAddTaskTaskTitle("")
      setAddTaskLevelSelected("")
   }

   function handleCreateTempTaskWithEnter(e) {
      if (e.key === "Enter") {
         handleCreateTempTask()
      }
   }

   return (
         <section className="configurations__tasks-configs-area">

            <h2>Adicionar Task</h2>

            <section className="tasks-configs__tasks-configs">

               <div className="tasks-configs__create-title-area">

                  <AddTaskTitleInput
                     handleCreateTempTaskWithEnter={handleCreateTempTaskWithEnter}
                  />


                  <AddTaskButton
                     handleCreateTempTask={handleCreateTempTask}
                  />

               </div>

               <div className="tasks-configs__level-area">

                  <p>Importância</p>

                  <LevelsWrapper />

               </div>

            </section>

         </section>
   )
}

export default AddTaskArea