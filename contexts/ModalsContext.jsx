"use client"

import { createContext, useState } from "react"

export const ModalsContext = createContext()

const ModalsProvider = ({ children }) => {

   const [modalWrapperActive, setModalWrapperActive] = useState(false)
   const [taskListModalActive, setTaskListModalActive] = useState(false)

   return (
      <ModalsContext.Provider value={
         {
            modalWrapperActive, setModalWrapperActive,
            taskListModalActive, setTaskListModalActive
         }
      }>
         {children}
      </ModalsContext.Provider>
   )
}

export default ModalsProvider