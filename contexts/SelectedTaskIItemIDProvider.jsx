"use client"

import { createContext, useState } from "react"

export const SelectedTaskItemIDContext = createContext()

const SelectedTaskItemIDProvider = ({ children }) => {

   const [selectedTaskItemId, setSelectedTaskItemId] = useState("")

   return (
      <SelectedTaskItemIDContext.Provider value={{selectedTaskItemId, setSelectedTaskItemId}}>
         {children}
      </SelectedTaskItemIDContext.Provider>
   )
}

export default SelectedTaskItemIDProvider