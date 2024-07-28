import Image from "next/image"
import { WeekDayIcon, StatsCard } from "."

import { IconEditWhite, IconXBlue, IconCheckBlue, FireIcon, IconEditDark } from "@/assets"

import "@/css/screens/habitos/components/habit-card.css"
import { useContext } from "react"
import { ThemeContext } from "@/contexts"

const HabitCard = ({ title }) => {

   const { darkThemeActive } = useContext(ThemeContext)

   return (
      <div className="habitos__habit-card">

         <div className="habit-card__title-area">
            <h4>{title}</h4>
         </div>
         
         <section className="habit-card__stats-area">
            <StatsCard icon={FireIcon} amount={32} />
            <StatsCard icon={IconCheckBlue} amount={32} />
            <StatsCard icon={IconXBlue} amount={32} />
         </section>

         <section className="habit-card__week-days-area">
            <WeekDayIcon weekDay="D" active={true} />
            <WeekDayIcon weekDay="S" active={false} />
            <WeekDayIcon weekDay="T" active={false} />
            <WeekDayIcon weekDay="Q" active={false} />
            <WeekDayIcon weekDay="Q" active={false} />
            <WeekDayIcon weekDay="S" active={false} />
            <WeekDayIcon weekDay="S" active={false} />
         </section>

         <section className="habit-card__actions-area">

            <button>
               <span>Editar</span>
               <Image src={darkThemeActive ? IconEditDark : IconEditWhite} alt="edit icon" />
            </button>

         </section>
      </div>
   )
}

export default HabitCard