import Image from "next/image"

import { IconPlusWhite } from "@/assets"

import "@/css/modal/manage-task-list-modal/components/add-task-button.css"

const AddTaskButton = ({ handleCreateTempTask }) => {
   return (
      <button onClick={handleCreateTempTask} className="manage-task-list-modal__add-btn">
         <p className="manage-task-list-modal__btn-text">Criar</p>
         <Image src={IconPlusWhite} alt="" className="manage-task-list-modal__btn-icon" />
      </button>
   )
}

export default AddTaskButton