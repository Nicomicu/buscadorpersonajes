import AppPersonaje from "./components/AppPersonaje"
import { PersonajeProvider } from "./context/PersonajeProvider"

function App() {
  return (
    <>
      <PersonajeProvider>
        <AppPersonaje />
      </PersonajeProvider>
    </>
  )
}

export default App
