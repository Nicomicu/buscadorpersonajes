import { createContext, useState, useEffect } from "react"
import axios from "axios"
import generarId from "../helpers/generarId"
const UsuarioContext = createContext()

const UsuarioProvider = ({ children }) => {
  const [usuarios, setUsuarios] = useState([])
  const [cargando, setCargando] = useState(false)
  const [nuevoUsuarios, setNuevoUsuarios] = useState([])

  const consultandoApi = async () => {
    setTimeout(() => {
      setCargando(true)
    }, 3000)
    try {
      const { data } = await axios("https://jsonplaceholder.typicode.com/users")
      setUsuarios(data)
      setCargando(false)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    consultandoApi()
  }, [])

  const guardarUsuario = (nuevoUsuario) => {
    nuevoUsuario.id = generarId()
    setNuevoUsuarios([...nuevoUsuarios, nuevoUsuario])
  }

  return (
    <UsuarioContext.Provider
      value={{ usuarios, setUsuarios, guardarUsuario, nuevoUsuarios }}>
      {children}
    </UsuarioContext.Provider>
  )
}

export { UsuarioProvider }

export default UsuarioContext
