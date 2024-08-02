import { WeekDayBtn } from "./index"

import "@/css/modal/create-habit-modal/components/week-day-area.css"

const WeekDayArea = ({ weekDays, setWeekDays }) => {
   return (
      <section className="week-day-area">
         {
            weekDays.map((weekDay, index) =>

                  <WeekDayBtn
                     key={index}
                     weekDay={weekDay.day}
                     active={weekDay.active} 
                     setWeekDays={setWeekDays}
                  />
            )
         }
      </section>
   )
}

export default WeekDayArea