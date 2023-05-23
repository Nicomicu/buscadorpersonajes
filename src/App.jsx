import { UsuarioProvider } from "./context/UsuarioProvider"
import Search from "./components/Search"
import PreviewUsuario from "./components/PreviewUsuario"
import AgregarUsuario from "./components/AgregarUsuario"
import ListaUsuariosCreados from "./components/ListaUsuariosCreados"

function App() {
  return (
    <>
      <UsuarioProvider>
        <Search />
        <PreviewUsuario />
        <AgregarUsuario />
        <ListaUsuariosCreados />
      </UsuarioProvider>
    </>
  )
}

export default App
