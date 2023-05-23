import { useState } from "react"
import useUsuario from "../hook/useUsuario"
import Error from "./Error"

const Formulario = () => {
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [empresa, setEmpresa] = useState("")
  const [error, setError] = useState("")

  const { guardarUsuario } = useUsuario()

  const handleSubmit = (e) => {
    e.preventDefault()
    if ([nombre, email, empresa].includes("")) {
      setError("error")

      setTimeout(() => {
        setError("")
      }, 1000)
      return
    }
    guardarUsuario({ nombre, email, empresa })
    setNombre("")
    setEmail("")
    setEmpresa("")
  }

  return (
    <>
      <div className="items-center flex justify-center ">
        <div className="top-10 md:w-2/3 lg:w-3/6 mx-auto rounded-lg p-10 fixed ">
          <form
            onSubmit={handleSubmit}
            className=" mb-5 mt-16 bg-white rounded-lg p-10">
            <div className="my-5">
              {error && <Error />}
              <label
                className="uppercase text-gray-600 block text-xl font-bold"
                htmlFor="nombre">
                Nombre de Usuario:
              </label>
              <input
                id="nombre"
                type="nombre"
                placeholder="Coloque su nombre"
                className="w-full rounded-xl mt-3  shadow-sm p-3 border outline-none bg-gray-50"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>

            <div className="my-5">
              <label
                className="uppercase text-gray-600 block text-xl font-bold"
                htmlFor="email">
                Email:
              </label>
              <input
                id="email"
                type="email"
                placeholder="Coloque su Email"
                className="w-full rounded-xl mt-3  shadow-sm  p-3 border outline-none bg-gray-50"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="my-5">
              <label
                className="uppercase text-gray-600 block text-xl font-bold"
                htmlFor="password">
                Password:
              </label>
              <input
                id="empresa"
                type="empresa"
                placeholder="Escriba su empresa"
                className="w-full rounded-xl mt-3  shadow-sm  p-3 border  outline-none bg-gray-50"
                value={empresa}
                onChange={(e) => setEmpresa(e.target.value)}
              />
            </div>
            <input
              type="submit"
              value="Crear Usuario"
              className="bg-purple-600  w-full text-xl mb-5 py-3 rounded-lg text-white font-bold text-1xl hover:bg-purple-700 transition-colors cursor-pointer"
            />
          </form>
        </div>
      </div>
    </>
  )
}

export default Formulario
