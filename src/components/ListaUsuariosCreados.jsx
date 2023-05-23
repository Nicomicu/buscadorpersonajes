import useUsuario from "../hook/useUsuario"
import UsuariosNuevos from "./UsuariosNuevos"

const ListaUsuariosCreados = () => {
  const { nuevoUsuarios } = useUsuario()

  return (
    <div className="text-center font-bold text-white text-4xl mb-20">
      <h2>
        {nuevoUsuarios.length ? "Nuevos Usuarios" : "No hay Usuarios creados"}
      </h2>
      {nuevoUsuarios.map((nuevoUsuario) => (
        <UsuariosNuevos
          nombre={nuevoUsuario.nombre}
          email={nuevoUsuario.email}
          empresa={nuevoUsuario.empresa}
          key={nuevoUsuario.id}
        />
      ))}
    </div>
  )
}

export default ListaUsuariosCreados
