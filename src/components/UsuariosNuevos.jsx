import PreviewUsuario from "./PreviewUsuario"
import useUsuario from "../hook/useUsuario"

const UsuariosNuevos = () => {
  const { nuevoUsuario } = useUsuario()

  return (
    <div>
      <header className="text-white font-bold text-4xl text-center">
        <h1>Usuarios Creados:</h1>
      </header>
      <PreviewUsuario />
    </div>
  )
}

export default UsuariosNuevos
