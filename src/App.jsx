import { useState } from 'react'
import viteLogo from '/vite.svg'
import Modal from './components/modal'
import './App.css'

function App() {
  const [OpenModal,SetOpenmodal]= useState(false)

  return (
    <>
    <h1>Modal exemple</h1>
    <button onClick={()=>{
     SetOpenmodal(true)
     console.log(OpenModal)
    }}>Test the modal</button>
    <Modal isOpen={OpenModal}  SetIsOpen={()=> SetOpenmodal(!OpenModal)}/>
    </>
  )
}

export default App
