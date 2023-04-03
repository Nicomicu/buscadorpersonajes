import { createContext, useState, useEffect } from "react"
import axios from "axios"

const PersonajeContext = createContext()

const PersonajeProvider = ({ children }) => {
  const [datos, setDatos] = useState([])
  const [busqueda, setBusqueda] = useState({})
  const [personaje, setPersonaje] = useState([])

  const datosBusqueda = (e) => {
    setBusqueda({ ...busqueda, [e.target.value]: e.target.value })
  }

  const obtenerPersonaje = async () => {
    try {
      const url = "https://swapi.dev/api/people"
      const { data } = await axios(url)

      const arrayPersonajes = data.results.map((datos) => {
        const objeto = {
          nombre: datos.name,
          peliculas: datos.films,
          altura: datos.height,
        }
        return objeto
      })
      console.log(arrayPersonajes)
      // setPersonaje(arrayPersonajes)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    obtenerPersonaje()
  }, [])

  return (
    <PersonajeContext.Provider
      value={{ personaje, setPersonaje, datosBusqueda }}>
      {children}
    </PersonajeContext.Provider>
  )
}

export { PersonajeProvider }

export default PersonajeContext
