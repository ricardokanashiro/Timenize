"use client"

import { createContext, useState } from "react"

export const TempListContext = createContext()

const TempListProvider = ({ children }) => {

   const [tempList, setTempList] = useState([])

   return (
      <TempListContext.Provider value={{ tempList, setTempList }}>
         { children }
      </TempListContext.Provider>
   )
}

export default TempListProvider