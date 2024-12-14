import { createContext, useState } from "react"

export const AddModalContext = createContext()

const AddModalProvider = ({ children }) => {

   const [habitTitle, setHabitTitle] = useState("")

   const [weekDays, setWeekDays] = useState([
      { day: "domingo", active: true },
      { day: "segunda", active: false },
      { day: "terça", active: false },
      { day: "quarta", active: false },
      { day: "quinta", active: false },
      { day: "sexta", active: false },
      { day: "sábado", active: false }
   ])

   const [tempWeekDays, setTempWeekDays] = useState(weekDays)

   return (
      <AddModalContext.Provider 
         value={{ 
            habitTitle, setHabitTitle, 
            weekDays, setWeekDays,
            tempWeekDays, setTempWeekDays
         }}
      >
         { children }
      </AddModalContext.Provider>
   )
}

export default AddModalProvider