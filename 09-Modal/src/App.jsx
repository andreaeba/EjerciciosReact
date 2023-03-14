import { useState } from 'react'
import './App.css'
import { Form } from './components/Form/Form'
import { Modal } from './components/Modal/Modal'
import { Nav } from './components/Nav/Nav'

function App() {

  const [ showModal, setShowModal ] = useState(false)


  return (
    <div className="App">
      {/* <Nav />
      <h2 onClick={() => {
        setShowModal(true)
      }} >
        Hacé click acá</h2>
      <Modal showModal = {showModal} setShowModal= {setShowModal} title = "Título nuevo">
            
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, perferendis.</p>
      </Modal> */}
      <Form />
    </div>
  )
}

export default App
