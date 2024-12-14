import { useContext } from "react"

import Image from "next/image"

import { WeekDayIcon, StatsCard } from "."
import { ModalsContext, ThemeContext } from "@/contexts"

import { IconEditWhite, IconXBlue, IconCheckBlue, FireIcon, IconEditDark } from "@/assets"

import "@/css/screens/habitos/components/habit-card.css"


const HabitCard = ({ habit }) => {

   const { darkThemeActive } = useContext(ThemeContext)
   const { handleToggleEditHabitModal } = useContext(ModalsContext)

   return (
      <div className={habit.inactive ? "habitos__habit-card habitos__habit-card--disabled" : "habitos__habit-card"}>

         <section className="habit-card__content">

            <div className="habit-card__title-area">
               <h4>{habit.title}</h4>
            </div>

            <section className="habit-card__stats-area">
               <StatsCard icon={FireIcon} amount={habit.streak} />
               <StatsCard icon={IconCheckBlue} amount={habit.done} />
               <StatsCard icon={IconXBlue} amount={habit.undone} />
            </section>

            <section className="habit-card__week-days-area">

               {
                  habit.weekDaysActive.map(weekDay => (
                     <WeekDayIcon 
                        key={weekDay.day} 
                        weekDay={weekDay.day.toUpperCase().substring(0,1)} 
                        active={weekDay.active} 
                     />
                  ))
               }

            </section>

            <section className="habit-card__actions-area">

               <button onClick={handleToggleEditHabitModal}>
                  <span>Editar</span>
                  <Image src={darkThemeActive ? IconEditDark : IconEditWhite} alt="edit icon" />
               </button>

            </section>

         </section>

         <div className="habit-card__content-mobile">

            <section className="habit-card__content-mobile__stats-area">
               <StatsCard icon={FireIcon} amount={32} />
               <StatsCard icon={IconCheckBlue} amount={32} />
               <StatsCard icon={IconXBlue} amount={32} />
            </section>

         </div>

      </div>
   )
}

export default HabitCard