const Modal = ({ setModal }) => {
  const ocultarModal = () => {
    setModal(false)
  }

  return (
    <div className="fixed inset-0 flex items-start justify-end bg-black bg-opacity-80">
      <div className="">
        <button
          onClick={ocultarModal}
          className="shadow-md m-10 bg-gradient-to-r from-purple-500 to bg-indigo-800 rounded-full px-6 h-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="white"
            className="w-5 h-5">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      </div>
    </div>
  )
}
export default Modal
