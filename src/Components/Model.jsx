

const Modal = ({children}) => {
    return (
        <div className="modal-box">
             <div className="modal">
              {children}
             </div>
        </div>
    )
}

export default Modal;