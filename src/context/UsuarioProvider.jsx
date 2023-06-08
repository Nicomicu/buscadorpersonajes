import { createContext, useState, useEffect } from "react"
import axios from "axios"
import generarId from "../helpers/generarId"

const UsuarioContext = createContext()

const UsuarioProvider = ({ children }) => {
  const [usuarios, setUsuarios] = useState([])
  const [cargando, setCargando] = useState(false)

  const consultandoApi = async () => {
    try {
      setCargando(true)
      const { data } = await axios("https://jsonplaceholder.typicode.com/users")
      setTimeout(() => {
        setUsuarios(data)
        setCargando(false)
      }, 2000)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    consultandoApi()
  }, [])

  const guardarUsuario = (nuevoUsuario) => {
    nuevoUsuario.id = generarId()
    setUsuarios([...usuarios, nuevoUsuario])
  }

  return (
    <UsuarioContext.Provider
      value={{
        usuarios,
        setUsuarios,
        cargando,
        guardarUsuario,
      }}>
      {children}
    </UsuarioContext.Provider>
  )
}

export { UsuarioProvider }
export default UsuarioContext
