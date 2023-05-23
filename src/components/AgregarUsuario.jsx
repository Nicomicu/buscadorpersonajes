import { useState } from "react"
import Modal from "./Modal"

const AgregarUsuario = () => {
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const handleNuevoUsuario = () => {
    setModal(true)

    setTimeout(() => {
      setAnimarModal(true)
    }, 3000)
  }

  return (
    <>
      <div className="relative mb-10">
        <button
          onClick={handleNuevoUsuario}
          className="animate-bounce mb-10 m-10 shadow-md bg-gradient-to-r from-purple-500 to bg-indigo-800 rounded-full px-6 h-16 hover:bg-purple-400 fixed bottom-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>

      {modal && <Modal setModal={setModal} animarModal={animarModal} />}
    </>
  )
}

export default AgregarUsuario
