"use client"

import { createContext, useEffect, useState } from "react"

export const DataContext = createContext()

import { tasks, plans, habits } from "@/data"

const DataProvider = ({ children }) => {

   const [sharedTasks, setSharedTasks] = useState([])
   const [sharedPlans, setSharedPlans] = useState([])
   const [sharedHabits, setSharedHabits] = useState([])

   useEffect(() => {
      setSharedTasks(tasks)
      setSharedPlans(plans)
      setSharedHabits(habits)
   }, [])

   return (
      <DataContext.Provider value={{
         sharedTasks, setSharedTasks, 
         sharedPlans, setSharedPlans,
         sharedHabits, setSharedHabits
      }}>
         {children}
      </DataContext.Provider>
   )
}

export default DataProvider