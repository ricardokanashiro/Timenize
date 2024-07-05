import { useContext } from "react"
import { EditAreasContext } from "../contexts"

const AddTaskTitleInput = ({ handleCreateTempTaskWithEnter }) => {

   const {
      addTaskTaskTitle, setAddTaskTaskTitle,
   } = useContext(EditAreasContext)

   function handleSetTaskTitle(e) {
      if (addTaskTaskTitle.length === 50 && e.target.value > addTaskTaskTitle) {
         return
      }

      setAddTaskTaskTitle(e.target.value)
   }

   return (
      <div className="create-title-area__input-wrapper">

         <input
            type="text"
            placeholder="Nome da nova task..."
            onChange={(e) => handleSetTaskTitle(e)}
            onKeyDown={(e) => handleCreateTempTaskWithEnter(e)}
            value={addTaskTaskTitle}
         />

         {
            addTaskTaskTitle && <span>{addTaskTaskTitle.length}/50</span>
         }

      </div>
   )
}

export default AddTaskTitleInput