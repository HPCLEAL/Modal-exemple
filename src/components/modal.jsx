import React from "react";
import './style.css';

const Modal = ({ isOpen ,SetIsOpen }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <>
            <div className="overlay"></div>
            <div className="modalDiv">
                <div className="descModal">
                        <h2>Your modal is open!!</h2>
                        <p>Thats is a simple exemple of an modal, you can also change the modal style and add content to it . you can create a form an message add an video to the modal.</p>
                <input type="text"placeholder="Send something" />
                </div>
                <button id="closebtn" onClick={(e)=>{
                       return SetIsOpen()
                }}>Close button</button>
                <button id="enterbtn">Send button</button>
            </div>
        </>
    );
}

export default Modal;
