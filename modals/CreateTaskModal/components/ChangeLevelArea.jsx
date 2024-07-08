import "@/css/modal/create-task-modal/components/change-level-area.css"

const ChangeLevelArea = ({ levelSelected, setLevelSelected }) => {

   return (
      <section className="create-task-modal__change-level-area">

         <span>Dificuldade</span>

         <div className="create-task-modal__levels-wrapper">

            <button 
               className={levelSelected === "trivial" ? "level-button--trivial-active" : "level-button--trivial"}
               onClick={() => setLevelSelected("trivial")}
            >
               Trivial
            </button>

            <button 
               className={levelSelected === "importante" ? "level-button--importante-active" : "level-button--importante"}
               onClick={() => setLevelSelected("importante")}
            >
                  Importante
            </button>

            <button 
               className={levelSelected === "essencial" ? "level-button--essencial-active" : "level-button--essencial"} 
               onClick={() => setLevelSelected("essencial")}
            >
               Essencial
            </button>
         </div>

      </section>
   )
}

export default ChangeLevelArea