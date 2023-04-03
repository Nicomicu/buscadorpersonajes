import { useState } from "react"
import usePersonaje from "../hook/usePersonaje"

const Formulario = () => {
  const [busqueda, setBusqueda] = useState({})
  const { personaje, setPersonaje } = usePersonaje()

  const handleSubmit = (e) => {
    e.preventDefault()
    setBusqueda(personaje)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mt-5 mb-3 font-bold text-black uppercase flex justify-center">
          <div>
            <input
              type="text"
              required
              name="nombre"
              placeholder="Nombre del Personaje"
              className="w-80 px-50 m-2 py-5 border-none outline-none rounded-xl shadow-lg text-center"></input>
            <button
              onChange={(e) =>
                setBusqueda({ ...busqueda, [e.target.name]: target.value })
              }
              className=" shadow-md bg-gradient-to-r from-purple-500 to bg-indigo-800 rounded-full px-6 h-16 hover:bg-purple-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-5 h-5 ">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default Formulario
