import { useContext } from "react"

import { toast } from 'react-toastify'

import { DataContext } from "@/contexts"
import { TempListContext } from "../contexts"

const ActionsArea = ({ handleSetModalDisabled }) => {

   const { setSharedTasks } = useContext(DataContext)
   const { tempList } = useContext(TempListContext)

   function handleApplyChanges() {
      setSharedTasks(tempList)
      handleSetModalDisabled()
      notify("Alterações concluídas com sucesso!")
   }

   function notify(message) {
      toast.success(message, {
         position: "top-right",
         autoClose: 3000,
      })
   }

   return (
      <section className="create-task-list-modal__action-area">

         <button onClick={handleSetModalDisabled} className="create-task-list-modal__back-button">Cancelar</button>

         <button
            className="create-task-list-modal__apply-button"
            onClick={() => {
               handleApplyChanges()
               handleSetModalDisabled()
            }}>
            Aplicar
         </button>

      </section>
   )
}

export default ActionsArea