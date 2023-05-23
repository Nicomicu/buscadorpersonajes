import BotonEliminar from "./BotonEliminar"

const PreviewUsuario = ({ name, email, company }) => {
  return (
    <>
      <div className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow-lg rounded-md p-10 mb-10 mt-10 flex justify-between">
        <div>
          <p className="text-base">
            <span className="font-black">Nombre:</span> {name}
          </p>
          <p className="text-base">
            <span className="font-black">Email:</span> {email}
          </p>
          <p className="text-base">
            <span className="font-black">Empresa:</span> {company}
          </p>
        </div>

        <BotonEliminar />
      </div>
    </>
  )
}

export default PreviewUsuario
