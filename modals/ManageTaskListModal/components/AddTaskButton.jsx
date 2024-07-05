import Image from "next/image"

import { IconPlusWhite } from '@/assets'

const AddTaskButton = ({ handleCreateTempTask }) => {
   return (
      <button onClick={handleCreateTempTask} className="create-task-list-modal__add-button">
         <p className="modal-button__text">Criar</p>
         <Image src={IconPlusWhite} alt="" className="modal-button__icon" />
      </button>
   )
}

export default AddTaskButton