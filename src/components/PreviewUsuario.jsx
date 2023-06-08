import EliminarUsuario from "./EliminarUsuario"

const PreviewUsuario = ({ name, email, address, id }) => {
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
            <span className="font-black">Ciudad: </span>
            {address}
          </p>
        </div>

        <EliminarUsuario id={id} />
      </div>
    </>
  )
}

export default PreviewUsuario
