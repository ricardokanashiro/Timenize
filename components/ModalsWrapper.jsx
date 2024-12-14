import { useContext } from "react"

import { ModalsContext } from "@/contexts"
import { TempListProvider, EditAreasProvider } from "@/modals/ManageTaskListModal/contexts"
import AddModalProvider from "@/modals/CreateHabitModal/context/addModalContext"

import {
   ManageTaskListModal, CreateTaskModal,
   CreateHabitModal, EditHabitModal
} from "@/modals"

const ModalsWrapper = ({ selectedScreen }) => {

   const { modalWrapperActive, editHabitModalActive, createHabitModalActive } = useContext(ModalsContext)

   return (
      <div className={modalWrapperActive ? "home__modals-wrapper" : "home__modals-wrapper home__modals-wrapper--disabled"}>
         {
            selectedScreen === "dashboard" &&
            <>
               <TempListProvider>
                  <EditAreasProvider>
                     <ManageTaskListModal />
                  </EditAreasProvider>
               </TempListProvider>

               <CreateTaskModal />
            </>
         }

         {
            selectedScreen === "hábitos" &&
            <>

               {
                  createHabitModalActive && (
                     <AddModalProvider>
                        <CreateHabitModal />
                     </AddModalProvider>
                  )
               }

               {editHabitModalActive && <EditHabitModal />}
            </>
         }
      </div>
   )
}

export default ModalsWrapper