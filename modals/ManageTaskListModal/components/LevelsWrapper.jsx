import { ListLevelButton } from "."

import "@/css/modal/manage-task-list-modal/components/levels-wrapper.css"

const LevelsWrapper = () => {
   return (
      <div className="level-area__levels-wrapper">

         <ListLevelButton
            level="trivial"
         >
            Trivial
         </ListLevelButton>

         <ListLevelButton
            level="importante"
         >
            Importante
         </ListLevelButton>

         <ListLevelButton
            level="essencial"
         >
            Essencial
         </ListLevelButton>

      </div>
   )
}

export default LevelsWrapper