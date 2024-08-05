import { useContext, useEffect, useRef, useState } from 'react'

import 'react-toastify/dist/ReactToastify.css';

import { TaskListWrapper, ActionsArea, AddTaskArea } from './components'
import { ModalsContext, DataContext } from '@/contexts'
import { EditAreasContext, TempListContext } from './contexts'

import '@/css/modal/manage-task-list-modal/manage-task-list-modal.css'

const ManageTaskListModal = () => {

   const { sharedTasks } = useContext(DataContext)
   const { setTempList } = useContext(TempListContext)

   const modalRef = useRef(null)

   const {
      setTaskEditActiveID,
      setChangeLevelTaskSelectedID,
      setAddTaskTaskTitle,
      setAddTaskLevelSelected
   } = useContext(EditAreasContext)

   const {
      manageTaskListModalActive, handleToggleManageTaskListModal
   } = useContext(ModalsContext)

   const [animateClass, setAnimateClass] = useState("")

   useEffect(() => {
      setTempList([...sharedTasks])
   }, [sharedTasks])

   useEffect(() => {
      handleLoadAnimation()
   }, [manageTaskListModalActive])

   function handleLoadAnimation() {
      manageTaskListModalActive && setAnimateClass("fade-up-left")
   }

   function handleSetModalDisabled() {
      handleToggleManageTaskListModal()
      setAnimateClass("")
      
      setTaskEditActiveID("")
      setChangeLevelTaskSelectedID("")
      setAddTaskTaskTitle("")
      setAddTaskLevelSelected("")

      setTempList(sharedTasks)
   }

   return (

      <div className={manageTaskListModalActive ? "manage-task-list-modal " + animateClass : "manage-task-list-modal manage-task-list-modal--disabled"} tabIndex={1} ref={modalRef}>

         <h1>Gerenciar Lista</h1>

         <section className="manage-task-list-modal__configurations">

            <AddTaskArea />

            <TaskListWrapper modalRef={modalRef} />

         </section>

         <ActionsArea
            handleSetModalDisabled={handleSetModalDisabled}
         />

      </div>
   )
}

export default ManageTaskListModal