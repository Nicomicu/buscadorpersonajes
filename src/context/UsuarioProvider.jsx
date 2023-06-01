import { createContext, useState, useEffect } from "react"
import axios from "axios"
import generarId from "../helpers/generarId"
const UsuarioContext = createContext()

const UsuarioProvider = ({ children }) => {
  const [usuarios, setUsuarios] = useState([])
  const [cargando, setCargando] = useState(false)
  const [nuevoUsuarios, setNuevoUsuarios] = useState([])
  const [modalFormulario, setModalFormulario] = useState(false)

  const consultandoApi = async () => {
    setTimeout(() => {
      setCargando(true)
    }, 5000)

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

  const handleModal = () => {
    setModalFormulario(!modalFormulario)
  }

  const guardarUsuario = (nuevoUsuario) => {
    nuevoUsuario.id = generarId()
    setUsuarios([...usuarios, nuevoUsuario])
    console.log(nuevoUsuario)
  }

  const eliminarUsuarios = (id) => {
    const usuariosActualizados = usuarios.filter((usuario) => usuario.id !== id)
    setUsuarios(usuariosActualizados)
  }

  return (
    <UsuarioContext.Provider
      value={{
        usuarios,
        setUsuarios,
        guardarUsuario,
        nuevoUsuarios,
        eliminarUsuarios,
        modalFormulario,
        handleModal,
      }}>
      {children}
    </UsuarioContext.Provider>
  )
}

export { UsuarioProvider }

export default UsuarioContext
