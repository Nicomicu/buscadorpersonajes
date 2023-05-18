const Cargando = () => {
  return (
    <div className="bg-white  md:w-2/3 lg:w-2/4 mx-auto shadow-lg rounded-md p-10 mb-10 mt-10">
      <div className="animate-pulse flex space-x-10">
        <div className="rounded-full bg-gray-200 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-gray-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-gray-200 before:rounded col-span-2"></div>
              <div className="h-2 bg-gray-200 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cargando
