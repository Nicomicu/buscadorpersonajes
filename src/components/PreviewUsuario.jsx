const PreviewUsuario = ({ name, email, company }) => {
  return (
    <>
      <div className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow-lg rounded-md p-10 mb-10 mt-10 flex justify-between">
        <div>
          <h1>
            <span className="font-black">Nombre: </span> {name}
          </h1>
          <p>
            <span className="font-black">Email: </span> {email}
          </p>
          <p>
            <span className="font-black">Empresa: </span>
            {company}
          </p>
        </div>
        <div className="flex items-center">
          <button
            type="button"
            className="
            bg-red-500 content-center right-2 text-white rounded-lg py-1 px-5 shadow-lg uppercase hover:bg-red-600 transition-colors">
            <div className="justify-between float-left m-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </>
  )
}

export default PreviewUsuario