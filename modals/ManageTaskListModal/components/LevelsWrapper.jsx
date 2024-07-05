import { ListLevelButton } from "."

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