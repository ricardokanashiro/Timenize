import { useContext } from "react"

import { AddModalContext } from "../context/addModalContext"

import "@/css/modal/create-habit-modal/components/week-day-btn.css"

const WeekDayBtn = ({ weekDay, active }) => {

   const { setTempWeekDays } = useContext(AddModalContext)

   return (
      <div 
         className={ active ? "week-day-btn week-day-btn--active" : "week-day-btn"}
         onClick={() => setTempWeekDays(prev => prev.map(day => day.day === weekDay ? { ...day, active: !day.active } : day))}
      >
         { weekDay.toUpperCase().substring(0,1) }
      </div>
   )
}

export default WeekDayBtn