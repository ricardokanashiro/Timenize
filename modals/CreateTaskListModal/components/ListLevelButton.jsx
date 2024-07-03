import "@/css/modal/create-task-list-modal/components/list-level-button.css"

const ListLevelButton = ({ children, level, setLevelSelected, actived }) => {

   function returnClasses() {

      return "list-level-button list-level-button" + (
         level === "trivial" ? "--trivial" 
         : level === "importante" ? "--importante"
         : level === "essencial" && "--essencial"
      ) + (
         actived && "-active"
      )
      
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