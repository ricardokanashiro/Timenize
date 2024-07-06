import { useContext, useEffect, useRef } from "react"

import "@/css/modal/manage-task-list-modal/components/list-level-button.css"
import { EditAreasContext } from "../contexts"

const ListLevelButton = ({ children, level }) => {

   const { setAddTaskLevelSelected, addTaskLevelSelected } = useContext(EditAreasContext)
   const buttonRef = useRef()

   function returnClasses() {

      return "list-level-button list-level-button" + (
         level === "trivial" ? "--trivial" 
         : level === "importante" ? "--importante"
         : level === "essencial" && "--essencial"
      ) + (
         addTaskLevelSelected === level && "-active"
      )
      
   }

   useEffect(() => {
      addTaskLevelSelected === "" && buttonRef.current.blur()
   }, [addTaskLevelSelected])

   return (
      <button 
         className={returnClasses()}
         onClick={() => {setAddTaskLevelSelected(level)}}
         ref={buttonRef}
      >
         {children}
      </button>
   )
}

export default ListLevelButton