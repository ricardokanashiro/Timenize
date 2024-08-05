import { DraggableList } from "."

import "@/css/modal/manage-task-list-modal/components/task-list-wrapper.css"

const TaskListWrapper = ({ modalRef }) => {
   return (
      <section className="configurations__task-list-wrapper">

         <h2>Lista de Tasks</h2>

         <section className="manage-task-list-modal__draggable-list-wrapper">

            <DraggableList modalRef={modalRef} />

         </section>

      </section>
   )
}

export default TaskListWrapper