"use client"

import { createContext, useEffect, useState } from "react"

export const DataContext = createContext()

import { tasks, plans } from "@/data"

const DataProvider = ({ children }) => {

   const [sharedTasks, setSharedTasks] = useState([])
   const [sharedPlans, setSharedPlans] = useState([])

   useEffect(() => {
      setSharedTasks(tasks)
      setSharedPlans(plans)
   }, [])

   return (
      <DataContext.Provider value={{sharedTasks, setSharedTasks, sharedPlans, setSharedPlans}}>
         {children}
      </DataContext.Provider>
   )
}

export default DataProvider