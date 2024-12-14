"use client"

import { createContext, useState } from "react"

export const ModalsContext = createContext()

const ModalsProvider = ({ children }) => {

   const [modalWrapperActive, setModalWrapperActive] = useState(false)
   const [manageTaskListModalActive, setManageTaskListModalActive] = useState(false)
   const [createTaskModalActive, setCreateTaskModalActive] = useState(false)

   const [createHabitModalActive, setCreateHabitModalActive] = useState(false)
   const [editHabitModalActive, setEditHabitModalActive] = useState(false)

   function handleToggleManageTaskListModal() {
      setModalWrapperActive(prev => !prev)
      setManageTaskListModalActive(prev => !prev)
      document.body.classList.toggle('block-scroll')
   }

   function handleToggleCreateTaskModal() {
      setModalWrapperActive(prev => !prev)
      setCreateTaskModalActive(prev => !prev)
      document.body.classList.toggle('block-scroll')
   }

   function handleToggleCreateHabitModal() {
      setModalWrapperActive(prev => !prev)
      setCreateHabitModalActive(prev => !prev)
      document.body.classList.toggle('block-scroll')
   }

   function handleToggleEditHabitModal() {
      setModalWrapperActive(prev => !prev)
      setEditHabitModalActive(prev => !prev)
      document.body.classList.toggle('block-scroll')
   }

   return (
      <ModalsContext.Provider value={
         {
            modalWrapperActive,
            manageTaskListModalActive, handleToggleManageTaskListModal,
            createTaskModalActive, handleToggleCreateTaskModal,
            createHabitModalActive, handleToggleCreateHabitModal,
            editHabitModalActive, handleToggleEditHabitModal
         }
      }>
         {children}
      </ModalsContext.Provider>
   )
}

export default ModalsProvider