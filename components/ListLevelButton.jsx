import "@/css/components/list-level-button.css"

const ListLevelButton = ({ children, level, setLevelSelected, actived }) => {

   function returnClasses() {
      if(level === "básico") {
         if(actived === true) {
            return "list-level-button list-level-button--basic-active"
         }

         return "list-level-button list-level-button--basic"
      }

      if(level === "médio") {
         if(actived === true) {
            return "list-level-button list-level-button--middle-active"
         }

         return "list-level-button list-level-button--middle"
      }

      if(level === "completo") {
         if(actived === true) {
            return "list-level-button list-level-button--complete-active"
         }

         return "list-level-button list-level-button--complete"
      }
   }

   return (
      <button 
         className={returnClasses()}
         onClick={() => setLevelSelected(level)}
      >
         {children}
      </button>
   )
}

export default ListLevelButton