import { useContext } from "react"

import { v4 as uuidv4 } from "uuid"

import { WeekDayArea } from "./components"
import { DataContext, ModalsContext } from "@/contexts"
import { AddModalContext } from "./context/addModalContext"

import "@/css/modal/create-habit-modal/create-habit-modal.css"

const CreateHabitModal = () => {

   const { handleToggleCreateHabitModal } = useContext(ModalsContext)
   const { setSharedHabits } = useContext(DataContext)

   const {
      habitTitle, setHabitTitle,
      weekDays, tempWeekDays, setTempWeekDays
   } = useContext(AddModalContext)

   function resetModalStates() {
      setHabitTitle("")
      setTempWeekDays(weekDays)
   }

   function addHabit() {

      setSharedHabits(prev => [
         {
            id: uuidv4(),
            title: habitTitle,
            streak: 0,
            done: 0,
            undone: 0,
            inactive: false,
            favorite: false,
            weekDaysActive: tempWeekDays
         },

         ...prev
      ])

      resetModalStates()
      handleToggleCreateHabitModal()
   }

   return (
      <div className="create-habit-modal">

         <h1>Adicionar Hábito</h1>

         <section className="create-habit-modal__config-area">

            <h2>Configurações do hábito</h2>

            <div className="create-habit-modal-configs">

               <div className="create-habit-modal__input-wrapper">
                  <input
                     type="text"
                     placeholder="Nome do hábito"
                     value={habitTitle}
                     onChange={(e) => setHabitTitle(e.target.value)}
                  />
               </div>

               <WeekDayArea
                  weekDays={weekDays}
               />

            </div>

         </section>

         <section className="create-habit-modal__actions-area">

            <button
               className="create-habit-modal__cancel-btn"
               onClick={() => {
                  handleToggleCreateHabitModal()
                  resetModalStates()
               }}
            >
               Cancelar
            </button>

            <button className="create-habit-modal__add-btn" onClick={addHabit}>Criar</button>
         </section>

      </div>
   )
}

export default CreateHabitModal