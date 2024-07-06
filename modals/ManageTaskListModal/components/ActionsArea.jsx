import { useContext } from "react"

import { toast } from 'react-toastify'

import { DataContext } from "@/contexts"
import { TempListContext } from "../contexts"

import "@/css/modal/manage-task-list-modal/components/actions-area.css"

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
      <section className="manage-task-list-modal__action-area">

         <button onClick={handleSetModalDisabled} className="manage-task-list-modal__back-btn">Cancelar</button>

         <button
            className="manage-task-list-modal__apply-btn"
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