import { UsuarioProvider } from "./context/UsuarioProvider"
import Search from "./components/Search"
import Modal from "./components/Modal"

function App() {
  return (
    <>
      <UsuarioProvider>
        <Search />
        <Modal />
      </UsuarioProvider>
    </>
  )
}

export default App
