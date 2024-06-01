import "@/css/components/modal-button.css"

const ModalButton = ({ children, backButton, action }) => {
   return (
      <button className={backButton ? "modal-back-button" : "modal-button"} onClick={action}>
         {children}
      </button>
   )
}

export default ModalButton