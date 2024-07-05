import { useContext, useEffect, useState } from 'react'

import 'react-toastify/dist/ReactToastify.css';

import { TaskListWrapper, ActionsArea, AddTaskArea } from './components'
import { ModalsContext, DataContext } from '@/contexts'
import { EditAreasContext, TempListContext } from './contexts'

import '@/css/modal/manage-task-list-modal/manage-task-list-modal.css'

const ManageTaskListModal = () => {

   const { sharedTasks } = useContext(DataContext)
   const { setTempList } = useContext(TempListContext)
   const {
      setTaskEditActiveID,
      setChangeLevelTaskSelectedID,
      setAddTaskTaskTitle,
      setAddTaskLevelSelected
   } = useContext(EditAreasContext)

   const {
      taskListModalActive, setTaskListModalActive, setModalWrapperActive
   } = useContext(ModalsContext)

   const [animateClass, setAnimateClass] = useState("")

   useEffect(() => {
      setTempList([...sharedTasks])
   }, [sharedTasks])

   useEffect(() => {
      handleLoadAnimation()
   }, [taskListModalActive])

   function handleLoadAnimation() {
      taskListModalActive && setTimeout(() => setAnimateClass("fade-up-left"), 100)
   }

   function handleSetModalDisabled() {
      setTaskListModalActive(false)
      setModalWrapperActive(false)
      setAnimateClass("")
      
      setTaskEditActiveID("")
      setChangeLevelTaskSelectedID("")
      setAddTaskTaskTitle("")
      setAddTaskLevelSelected("")

      setTempList(sharedTasks)
   }

   return (

      <div className={taskListModalActive ? "create-task-list-modal " + animateClass : "create-task-list-modal create-task-list-modal--disabled"} tabIndex={1}>

         <h1>Gerenciar Lista</h1>

         <section className="create-task-list-modal__configurations">

            <AddTaskArea />

            <TaskListWrapper />

         </section>

         <ActionsArea
            handleSetModalDisabled={handleSetModalDisabled}
         />

      </div>
   )
}

export default ManageTaskListModal