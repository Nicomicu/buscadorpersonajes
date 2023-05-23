import BotonEliminar from "./BotonEliminar"

const UsuariosNuevos = ({ nombre, email, empresa }) => {
  return (
    <div className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow-lg rounded-md p-8 mb-10 mt-10 flex justify-between">
      <div>
        <span className="font-black block text-left text-black text-base">
          Nombre:
          <p className="inline-block font-normal m-1">{nombre}</p>
        </span>
        <span className="font-black block text-black text-left text-base ">
          Email:
          <p className="inline-block font-normal m-1">{email}</p>
        </span>
        <span className="font-black block text-black text-left text-base ">
          Empresa:
          <p className="inline-block font-normal m-1">{empresa}</p>
        </span>
      </div>

      <BotonEliminar />
    </div>
  )
}

export default UsuariosNuevos
