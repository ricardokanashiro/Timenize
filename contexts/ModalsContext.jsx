"use client"

import { createContext, useState } from "react"

export const ModalsContext = createContext()

const ModalsProvider = ({ children }) => {

   const [modalWrapperActive, setModalWrapperActive] = useState(false)
   const [manageTaskListModalActive, setManageTaskListModalActive] = useState(false)
   const [createTaskModalActive, setCreateTaskModalActive] = useState(false)

   function handleToggleManageTaskListModal() {
      setModalWrapperActive(prev => !prev)
      setManageTaskListModalActive(prev => !prev)
   }

   function handleToggleCreateTaskModal() {
      setModalWrapperActive(prev => !prev)
      setCreateTaskModalActive(prev => !prev)
   }

   return (
      <ModalsContext.Provider value={
         {
            modalWrapperActive,
            manageTaskListModalActive, handleToggleManageTaskListModal,
            createTaskModalActive, handleToggleCreateTaskModal
         }
      }>
         {children}
      </ModalsContext.Provider>
   )
}

export default ModalsProvider