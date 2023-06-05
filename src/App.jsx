import { UsuarioProvider } from "./context/UsuarioProvider"
import Search from "./components/Search"
import PreviewUsuario from "./components/PreviewUsuario"
import Modal from "./components/Modal"

function App() {
  return (
    <>
      <UsuarioProvider>
        <Search />
        <PreviewUsuario />
        <Modal />
      </UsuarioProvider>
    </>
  )
}

export default App
