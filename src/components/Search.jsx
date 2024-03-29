import { useState } from "react"
import useUsuario from "../hook/useUsuario.jsx"
import Spinner from "./Spinner.jsx"
import PreviewUsuario from "./PreviewUsuario"

const Search = () => {
  const [search, setSearch] = useState("")
  const { usuarios, cargando } = useUsuario()

  const searcher = (e) => {
    setSearch(e.target.value)
  }

  const resultado = !search
    ? usuarios
    : usuarios.filter((usuario) =>
        usuario.name.toLowerCase().includes(search.toLowerCase())
      )

  return (
    <>
      <header className="my-10">
        <h1 className="text-white uppercase text-center text-5xl font-black">
          Buscador de Usuarios
        </h1>
      </header>
      <main className="bg-white md:w-2/3 lg:w-3/6 mx-auto shadow-md rounded-lg p-10  ">
        <form>
          <div className="mt-5 mb-3 font-bold text-black uppercase flex justify-center">
            <div>
              <input
                onChange={searcher}
                value={search}
                type="text"
                placeholder="Nombre del Usuario"
                className="w-80 px-50 m-2 py-5 border-none outline-none rounded-xl shadow-lg text-center"
              />
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="black"
                  className="w-6 h-6 absolute bottom-2 m-5 right-1 ">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </form>
      </main>
      {cargando ? (
        <Spinner />
      ) : (
        <>
          <h1 className="mt-20 text-white text-center text-4xl font-black">
            {resultado.length > 0 ? "Lista de Usuarios:" : "No hay resultados"}
          </h1>

          {usuarios.length &&
            resultado.map((usuario) => (
              <PreviewUsuario
                key={usuario.id}
                id={usuario.id}
                name={usuario.name}
                email={usuario.email}
                address={usuario.address?.city || usuario.address}
              />
            ))}
        </>
      )}
    </>
  )
}
//TODO:El problema era que el usuario creado  para acceder a addres es directamente mientras que en el usuario de la appi se accede address.city

export default Search
