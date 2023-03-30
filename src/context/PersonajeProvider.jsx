import axios from "axios"
import { createContext } from "react"

const PersonajeContext = createContext()

const PersonajeProvider = ({ children }) => {
  const obtenerPersonaje = async () => {
    try {
    } catch (error) {}
  }

  return (
    <PersonajeContext.Provider value={{}}>{children}</PersonajeContext.Provider>
  )
}

export { PersonajeProvider }

export default PersonajeContext
