import { UsuarioProvider } from "./context/UsuarioProvider"
import Search from "./components/Search"
import PreviewUsuario from "./components/PreviewUsuario"
import AgregarUsuario from "./components/AgregarUsuario"

function App() {
  return (
    <>
      <UsuarioProvider>
        <Search />
        <PreviewUsuario />
        <AgregarUsuario />
      </UsuarioProvider>
    </>
  )
}

export default App
