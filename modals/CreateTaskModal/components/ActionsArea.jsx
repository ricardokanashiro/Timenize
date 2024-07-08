import "@/css/modal/create-task-modal/components/actions-area.css"

const ActionsArea = ({ disableModal, createTask }) => {
   return (
      <section className="actions-area">
         <button className="actions-area__cancel-btn" onClick={disableModal}>Cancelar</button>
         <button className="actions-area__add-btn" onClick={createTask}>Criar</button>
      </section>
   )
}

export default ActionsArea