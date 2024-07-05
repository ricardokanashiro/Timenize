import { DraggableList } from "."

const TaskListWrapper = () => {
   return (
      <section className="configurations__task-list-wrapper">

         <h2>Lista de Tasks</h2>

         <section className="create-task-list-modal__draggable-list-wrapper">

            <DraggableList />

         </section>

      </section>
   )
}

export default TaskListWrapper