import { useContext } from "react"

import { WeekDayBtn } from "./index"

import { AddModalContext } from "../context/addModalContext"

import "@/css/modal/create-habit-modal/components/week-day-area.css"

const WeekDayArea = () => {

   const { tempWeekDays } = useContext(AddModalContext)

   return (
      <section className="week-day-area">
         {
            tempWeekDays.map((weekDay, index) =>

                  <WeekDayBtn
                     key={index}
                     weekDay={weekDay.day}
                     active={weekDay.active}
                  />
            )
         }
      </section>
   )
}

export default WeekDayArea