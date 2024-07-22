import Image from "next/image"
import { WeekDayIcon, StatsCard } from "."

import { IconSettings } from "@/assets"

import "@/css/screens/habitos/components/habit-card.css"

const HabitCard = ({ title }) => {
   return (
      <div className="habitos__habit-card">

         <div className="habit-card__title-area">
            <h4>{title}</h4>

            <button>
               <Image src={IconSettings} alt="ícone de engrenagem" />
            </button>
         </div>
         

         <section className="habit-card__week-days-area">
            <WeekDayIcon weekDay="D" active={true} />
            <WeekDayIcon weekDay="S" active={false} />
            <WeekDayIcon weekDay="T" active={false} />
            <WeekDayIcon weekDay="Q" active={false} />
            <WeekDayIcon weekDay="Q" active={false} />
            <WeekDayIcon weekDay="S" active={false} />
            <WeekDayIcon weekDay="S" active={false} />
         </section>

         <section className="habit-card__stats-area">
            <StatsCard label="Done" amount={32} />
            <StatsCard label="Undone" amount={32} />
            <StatsCard label="Streak" amount={32} />
         </section>

      </div>
   )
}

export default HabitCard