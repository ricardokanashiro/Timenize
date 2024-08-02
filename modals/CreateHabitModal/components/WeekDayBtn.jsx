import "@/css/modal/create-habit-modal/components/week-day-btn.css"

const WeekDayBtn = ({ weekDay, active, setWeekDays }) => {
   return (
      <div className={ active ? "week-day-btn week-day-btn--active" : "week-day-btn"}>
         { weekDay.toUpperCase().substring(0,1) }
      </div>
   )
}

export default WeekDayBtn