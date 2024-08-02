import { useState, useContext } from "react"

import { WeekDayArea } from "./components"
import { ModalsContext } from "@/contexts"

import "@/css/modal/create-habit-modal/create-habit-modal.css"

const CreateHabitModal = () => {

   const [weekDays, setWeekDays] = useState([
      { day: "domingo", active: true },
      { day: "segunda", active: false },
      { day: "terça", active: false },
      { day: "quarta", active: false },
      { day: "quinta", active: false },
      { day: "sexta", active: false },
      { day: "sábado", active: false },
   ])

   const { handleToggleCreateHabitModal } = useContext(ModalsContext)

   return (
      <div className="create-habit-modal">

         <h1>Adicionar Hábito</h1>

         <section className="create-habit-modal__config-area">

            <h2>Configurações do hábito</h2>

            <div className="create-habit-modal-configs">

               <div className="create-habit-modal__input-wrapper">
                  <input type="text" placeholder="Nome do hábito" />
               </div>

               <WeekDayArea weekDays={weekDays} setWeekDays={setWeekDays} />

            </div>

         </section>

         <section className="create-habit-modal__actions-area">

            <button 
               className="create-habit-modal__cancel-btn" 
               onClick={handleToggleCreateHabitModal}
            >
               Cancelar
            </button>

            <button className="create-habit-modal__add-btn">Criar</button>
         </section>

      </div>
   )
}

export default CreateHabitModal