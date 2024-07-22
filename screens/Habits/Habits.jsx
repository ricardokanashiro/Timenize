import { ActionsArea, HabitCard, TitleArea } from "./components"

import { IconHeart, IconList, IconEyeOff } from "@/assets"

import "@/css/screens/habitos/habitos.css"

const Habits = () => {
   return (

      <section className="habitos">

         <ActionsArea />

         <section className="habitos__habits-section">

            <TitleArea title="Favoritos" icon={IconHeart} alt="ícone de coração" />

            <section className="habits-section__habit-list">
               <HabitCard title="Habito" />
               <HabitCard title="Habito" />
            </section>


         </section>

         <section className="habitos__habits-section">

            <TitleArea title="Todos" icon={IconList} alt="ícone de coração" />
            <HabitCard title="Habito" />

         </section>

         <section className="habitos__habits-section">

            <TitleArea title="Inativos" icon={IconEyeOff} alt="ícone de coração" />
            <HabitCard title="Habito" />

         </section>

      </section>


   )
}

export default Habits