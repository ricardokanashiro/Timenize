import { createContext, useState } from "react"

export const EditAreasContext = createContext()

const EditAreasProvider = ({ children }) => {

   const [taskEditActiveID, setTaskEditActiveID] = useState("")
   const [changeLevelTaskSelectedID, setChangeLevelTaskSelectedID] = useState("")
   const [addTaskTaskTitle, setAddTaskTaskTitle] = useState("")
   const [addTaskLevelSelected, setAddTaskLevelSelected] = useState("")

   return (
      <EditAreasContext.Provider value={{
         taskEditActiveID, setTaskEditActiveID, 
         changeLevelTaskSelectedID, setChangeLevelTaskSelectedID,
         addTaskTaskTitle, setAddTaskTaskTitle,
         addTaskLevelSelected, setAddTaskLevelSelected
      }}>
         { children }
      </EditAreasContext.Provider>
   )
}

export default EditAreasProvider
