import { useState, Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import useUsuario from "../hook/useUsuario"
import Error from "./Error"

const expresion = /^[a-zA-Z0-9._%+-]+@gmail\.com$/

const Formulario = ({ modalFormulario, handleModal }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [error, setError] = useState({})

  const { guardarUsuario } = useUsuario()

  const handleNuevoUsuario = (e) => {
    e.preventDefault()

    if ([name, email, address].includes("")) {
      setError({ msg: "Campos obligatorios", error: true })
      setTimeout(() => {
        setError({})
      }, 1000)
      return
    }

    if (!expresion.test(email)) {
      setError({ msg: "Email incorrecto", error: true })
      setTimeout(() => {
        setError({})
      }, 1000)
      return
    }

    const nuevoUsuario = { name, email, address }
    guardarUsuario(nuevoUsuario)

    setName("")
    setEmail("")
    setAddress("")
  }

  const { msg } = error

  return (
    <>
      <Transition.Root show={modalFormulario} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          onClose={handleModal}>
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true">
              &#8203;
            </span>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                  <button
                    type="button"
                    className="bg-white rounded-md text-gray-500 hover:text-gray-800"
                    onClick={handleModal}>
                    <span className="sr-only">Cerrar</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <Dialog.Title
                      as="h3"
                      className="leading-6 font-bold text-gray-900 text-center uppercase text-2xl">
                      CREA UN USUARIO
                    </Dialog.Title>

                    {msg && <Error error={error} />}

                    <form onSubmit={handleNuevoUsuario} className="my-10">
                      <div className="mb-5">
                        <label
                          className="text-gray-700 uppercase font-bold text-sm"
                          htmlFor="name">
                          Nombre de Usuario:
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="p-2 w-full rounded-md text-gray-400 bg-slate-100 shadow-md mt-2 outline-none"
                          placeholder="Nombre de Usuario"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>

                      <div className="mb-5">
                        <label
                          className="text-gray-700 uppercase font-bold text-sm"
                          htmlFor="email">
                          Email:
                        </label>
                        <input
                          type="text"
                          id="email"
                          className="p-2 w-full rounded-md text-gray-400 bg-slate-100 shadow-md mt-2 outline-none"
                          placeholder="Escriba su Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="mb-5">
                        <label
                          className="text-gray-700 uppercase font-bold text-sm"
                          htmlFor="company">
                          Ciudad:
                        </label>
                        <input
                          type="text"
                          id="company"
                          className="p-2 w-full rounded-md text-gray-400 bg-slate-100 shadow-md mt-2 outline-none"
                          placeholder="Coloque su Empresa"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>

                      <input
                        type="submit"
                        value="Crear Usuario"
                        className="bg-purple-600
                    hover:bg-purple-700  items-center text-sm p-3 rounded-md text-white w-full uppercase font-bold cursor-pointer transition-colors"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default Formulario
