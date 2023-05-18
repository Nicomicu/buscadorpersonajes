import { UsuarioProvider } from "./context/UsuarioProvider"
import Search from "./components/Search"

import PreviewUsuario from "./components/PreviewUsuario"

function App() {
  return (
    <>
      <UsuarioProvider>
        <Search />
        <PreviewUsuario />
      </UsuarioProvider>
    </>
  )
}

export default App
