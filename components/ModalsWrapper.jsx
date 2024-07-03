import { useContext } from "react"

import { ModalsContext } from "@/contexts"
import { SelectedTaskItemIDProvider, TempListProvider, ItemEditActiveIDProvider } from "@/modals/ManageTaskListModal/contexts"

import { ManageTaskListModal } from "@/modals"

const ModalsWrapper = ({ selectedScreen }) => {

   const { modalWrapperActive } = useContext(ModalsContext)

   return (
      <div className={modalWrapperActive ? "home__modals-wrapper" : "home__modals-wrapper home__modals-wrapper--disabled"}>
            {
               selectedScreen === "dashboard" &&
               <SelectedTaskItemIDProvider>
               <TempListProvider>
               <ItemEditActiveIDProvider>
                  <ManageTaskListModal />
               </ItemEditActiveIDProvider>
               </TempListProvider>
               </SelectedTaskItemIDProvider>
            }
         </div>
   )
}

export default ModalsWrapper