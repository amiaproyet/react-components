import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
    const [showModal, setShowModal] = useState(false)
    const handleClick = () => {
        setShowModal(true);
    };
    const handleClose = () => {
        setShowModal(false)
    }
    
    const actionButton = <div><Button primary onClick={handleClose}>I ACCEPT</Button></div>
    const modal = <Modal onClose={handleClose} actionBar={actionButton}>
        <p>
            If you want to use the site you'll have to accept the terms.
        </p>
    </Modal>
    
    return (
        <div>
            <Button primary onClick={handleClick}>Open Modal</Button>
            {showModal && modal}
        </div>
    )
}

export default ModalPage;