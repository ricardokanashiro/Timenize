import { useContext } from "react"

import "@/css/modal/create-task-list-modal/components/list-level-button.css"
import { EditAreasContext } from "../contexts"

const ListLevelButton = ({ children, level }) => {

   const { setAddTaskLevelSelected, addTaskLevelSelected } = useContext(EditAreasContext)

   function returnClasses() {

      return "list-level-button list-level-button" + (
         level === "trivial" ? "--trivial" 
         : level === "importante" ? "--importante"
         : level === "essencial" && "--essencial"
      ) + (
         addTaskLevelSelected === level && "-active"
      )
      
   }

   return (
      <button 
         className={returnClasses()}
         onClick={() => setAddTaskLevelSelected(level)}
      >
         {children}
      </button>
   )
}

export default ListLevelButton