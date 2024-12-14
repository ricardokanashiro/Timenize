import { useContext, useState } from "react"

import { ModalsContext } from "@/contexts"

import "@/css/modal/edit-habit-modal.css"

const EditHabitModal = () => {

   const [weekDaysActive, setWeekDaysActive] = useState([
      { nome: "domingo", active: true },
      { nome: "segunda", active: false },
      { nome: "terca", active: false },
      { nome: "quarta", active: true },
      { nome: "quinta", active: false },
      { nome: "sexta", active: true },
      { nome: "sabado", active: false },
   ])

   const [activeHabit, setActiveHabit] = useState(false)
   const [favorite, setFavorite] = useState(false)

   const { handleToggleEditHabitModal } = useContext(ModalsContext)

   const toggleWeekDay = (dayName) => {

      setWeekDaysActive(prev => prev.map(day =>
         day.nome === dayName
            ? { ...day, active: !day.active }
            : day
      ))
   }

   return (
      <div className="edit-habit-modal">

         <h1>Configurações dos Hábitos</h1>

         <section>

            <h2>Área das configurações</h2>

            <div className="edit-habit-modal__input-wrapper">
               <input type="text" placeholder="Nome do hábito..." />
            </div>

            <div className="edit-habit-modal__week-days-area">

               {
                  weekDaysActive.map((day, index) =>
                     <button
                        key={index}
                        className={day.active ? 'edit-habit-modal__weekday-btn--inactive' : ''}
                        onClick={() => toggleWeekDay(day.nome)}
                     >
                        {day.nome[0].toUpperCase()}
                     </button>
                  )
               }

            </div>

            <div className="edit-habit-modal__set-active-habit-area">

               <p>Hábito Ativo</p>

               <button
                  className={
                     favorite ?
                        "edit-habit-modal__config-switch__switch edit-habit-modal__config-switch--active"
                        : "edit-habit-modal__config-switch__switch"
                  }
                  onClick={() => setFavorite(prev => !prev)}
               >
                  <div className="edit-habit-modal__config-switch__circle" />
               </button>

            </div>

            <div className="edit-habit-modal__set-active-habit-area">

               <p>Favorito</p>

               <button
                  className={
                     activeHabit ?
                        "edit-habit-modal__config-switch__switch edit-habit-modal__config-switch--active"
                        : "edit-habit-modal__config-switch__switch"
                  }
                  onClick={() => setActiveHabit(prev => !prev)}
               >
                  <div className="edit-habit-modal__config-switch__circle" />
               </button>

            </div>

         </section>

         <section className="edit-habit-modal__danger-zone">

            <h2>Danger Zone</h2>
            <button>Deletar</button>

         </section>

         <section className="edit-habit-modal__actions-area">

            <button 
               className="edit-habit-modal__cancel-btn" 
               onClick={handleToggleEditHabitModal}
            >
               Cancelar
            </button>

            <button className="edit-habit-modal__save-btn">Salvar</button>

         </section>

      </div>
   )
}

export default EditHabitModal