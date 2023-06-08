const Error = ({ error }) => {
  return (
    <div
      className={`${
        error.error && "from-red-400 to-red-600"
      } bg-gradient-to-br text-center p-3 rounded-xl text-white  uppercase font-bold m-10 text-sm`}>
      {error.msg}
    </div>
  )
}

export default Error
