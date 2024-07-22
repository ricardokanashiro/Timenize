import "@/css/screens/habitos/components/weekday-icon.css"

const WeekDayIcon = ({weekDay, active}) => {
   return (
      <div
         className={
            active ? "habit-card__weekday-icon" : "habit-card__weekday-icon habit-card__weekday-icon--inactive"
         }
      >
         {weekDay}
      </div>
   )
}

export default WeekDayIcon