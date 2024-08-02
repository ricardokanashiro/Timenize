import { useContext } from "react"

import { ModalsContext } from "@/contexts"
import { TempListProvider, EditAreasProvider } from "@/modals/ManageTaskListModal/contexts"

import { ManageTaskListModal, CreateTaskModal } from "@/modals"

const ModalsWrapper = ({ selectedScreen }) => {

   const { modalWrapperActive } = useContext(ModalsContext)

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
               selectedScreen === "habits" && 
               <>
                  
               </>
            }
         </div>
   )
}

export default ModalsWrapper