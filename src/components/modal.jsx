import React, { useState } from "react";
import './style.css';

const Modal = ({ isOpen ,SetIsOpen }) => {
   
   const [message,setMessage]=useState('')
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
                <input type="text"   onChange={(e)=>{
                        const typed= e.target.value
                       setMessage(typed)
                    //    console.log(typed)
                      //  console.log(message)
                }}placeholder="Send something" />
                </div>
                <button id="closebtn" onClick={(e)=>{
                       return SetIsOpen()
                }}>Close button</button>
                <button id="enterbtn" onClick={()=>{
                window.alert(`your message is ${message}`)
                SetIsOpen()
                }}>Send button</button>
            </div>
        </>
    );
}

export default Modal;
