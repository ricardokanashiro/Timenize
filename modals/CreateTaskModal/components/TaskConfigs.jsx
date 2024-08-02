import "@/css/modal/create-task-modal/components/task-configs.css"

const TaskConfigs = ({ taskTitle, setTaskTitle }) => {

   return (
      <section className="create-task-modal__tasks-configs">
         <h2>Configurações de Task</h2>

         <div className="create-task-modal__input-wrapper">

            <input 
               type="text" placeholder="Nome da Task..."
               onChange={(e) => setTaskTitle(e.target.value)}
               value={taskTitle}
            />

         </div>

      </section>
   )
}

export default TaskConfigs