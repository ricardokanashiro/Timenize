"use client"

import { useContext } from "react"
import { ActionsArea, HabitCard, TitleArea } from "./components"

import { IconHeart, IconList, IconEyeOff } from "@/assets"
import { DataContext } from "@/contexts"

import "@/css/screens/habitos/habitos.css"

const Habits = () => {

   const { sharedHabits, setSharedHabits } = useContext(DataContext)

   return (

      <section className="habitos">
         <ActionsArea />

         <section className="habitos__habits-section">

            <TitleArea title="Favoritos" icon={IconHeart} alt="ícone de coração" />

            <section className="habits-section__habit-list">

               {
                  sharedHabits.map(habit => habit.favorite && (
                     <HabitCard key={habit.id} habit={habit} />
                  ))
               }
            </section>


         </section>

         <section className="habitos__habits-section">

            <TitleArea title="Todos" icon={IconList} alt="ícone de coração" />

            <section className="habits-section__habit-list">

               {
                  sharedHabits.map(habit => (!habit.favorite && !habit.inactive) && (
                     <HabitCard key={habit.id} habit={habit} />
                  ))
               }

            </section>

         </section>

         <section className="habitos__habits-section">

            <TitleArea title="Inativos" icon={IconEyeOff} alt="ícone de coração" />

            <section className="habits-section__habit-list">

               {
                  sharedHabits.map(habit => habit.inactive && (
                     <HabitCard key={habit.id} habit={habit} />
                  ))
               }

            </section>

         </section>

      </section>


   )
}

export default Habits