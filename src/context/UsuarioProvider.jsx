import { createContext, useState, useEffect } from "react"
import axios from "axios"

const UsuarioContext = createContext()

const UsuarioProvider = ({ children }) => {
  const [usuarios, setUsuarios] = useState([])
  const [cargando, setCargando] = useState(false)

  const consultandoApi = async () => {
    setTimeout(() => {
      setCargando(true)
    }, 2000)
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

  return (
    <UsuarioContext.Provider value={{ usuarios, setUsuarios }}>
      {children}
    </UsuarioContext.Provider>
  )
}

export { UsuarioProvider }

export default UsuarioContext
